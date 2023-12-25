var express=require("express")
const router=express.Router()
const textdesc=require("./TextDescription/TextDescriptionController")

router.post("/insertdata",textdesc.insertTextDesc)
router.get("/fetchData/:id",textdesc.fetchTextDesc)
router.get("/fetchData/",textdesc.fetchTextDesc)
router.delete('/deleteItem/:id',textdesc.deleteTextDesc)
router.put("/updateItem/:id",textdesc.updateTextDesc)
module.exports=router