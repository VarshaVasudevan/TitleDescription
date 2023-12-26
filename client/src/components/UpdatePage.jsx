import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdatePage = () => {
  const { id } = useParams();
  console.log(id);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    // Fetch item details based on the ID
    axios.get(`http://localhost:5000/fetchData/${id}`)
      .then((response) => {
        const items = response.data.data;
        // Assuming the API response has a 'data' field
        if (items.length > 0) {
          setTitle(items[0].title);
          setDescription(items[0].description);
        }
      })
      .catch((error) => console.error('Error fetching item details:', error));
  }, [id]); // Include only id in the dependency array

  const handleUpdate = () => {
    // Send a request to update the item
    axios.put(`https://textdescription2.onrender.com/updateItem/${id}`, {
      title: title,
      description: description,
    })
      .then((response) => {
        console.log('Item updated successfully:', response.data);
       
      })
      .catch((error) => console.error('Error updating item:', error));
      alert("You had updated successfully")
  };

  // Your update logic goes here

  return (
    <div className="container mt-5">
      <h1 className="display-4 mb-4">Update Title</h1>
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Title:</label>
            <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Description:</label>
            <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleUpdate} >
          UPDATE
        </button>
      </form>
    </div>
  );
};

export default UpdatePage;
