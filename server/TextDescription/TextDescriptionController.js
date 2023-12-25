const TextDesc=require("./textdescriptionmodel")

const insertTextDesc=async(req,res,next)=>{
  const { title, description } = req.body;

  try {
    console.log('Received request to insert item:', { title, description });

    const textDesc = new TextDesc({ title, description });
    await textDesc.save();

    console.log('Item added to cart successfully');
    res.json({ success: true, message: 'Item added to cart successfully' });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ success: false, message: 'Error adding item to cart' });
  }
}
// const fetchTextDesc = async (req, res,next) => {
//   try {
//     const item = await TextDesc.find({}, 'title description');
//      // Fetch only title and description fields
//     res.json({ success: true, data:item});
//   } catch (error) {
//     console.error('Error fetching items:', error);
//     res.status(500).json({ success: false, message: 'Error fetching items' });
//   }
// };
const fetchTextDesc = async (req, res,next) => {
  try {
    if (req.params.id) {
      // If ID is provided, fetch specific item details
      const item = await TextDesc.findById(req.params.id, 'title description');
      if (!item) {
        return res.status(404).json({ success: false, message: 'Item not found' });
      }
      res.json({ success: true, data: [item] }); // Wrap the item in an array to maintain consistency
    } else {
      // If no ID is provided, fetch all items
      const items = await TextDesc.find({}, 'title description');
      res.json({ success: true, data: items });
    }
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ success: false, message: 'Error fetching items' });
  }
};
const deleteTextDesc = async (req, res) => {
  const itemId = req.params.id;

  try {
    // Find and delete the item by ID
    const deletedItem = await TextDesc.findByIdAndDelete(itemId);

    if (!deletedItem) {
      return res.status(404).json({ success: false, message: 'Item not found' });
    }

    // Send a success response
    res.json({ success: true, message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error deleting item' });
  }

}
const updateTextDesc = async (req, res,next) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    // Find the item by ID and update its fields
    const updatedItem = await TextDesc.findByIdAndUpdate(id, { title, description }, { new: true });

    if (!updatedItem) {
      return res.status(404).json({ success: false, message: 'Item not found' });
    }

    res.json({ success: true, data: updatedItem });
  } catch (error) {
    console.error('Error updating item:', error);
    res.status(500).json({ success: false, message: 'Error updating item' });
  }
}

  module.exports={insertTextDesc,fetchTextDesc,deleteTextDesc,updateTextDesc}