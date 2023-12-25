import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from 'react-router-dom';

function TitleDescription() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const apiUrl = 'https://textdescription2.onrender.com/';

  useEffect(() => {
    axios.get('http://localhost:5000/fetchData')
      .then((response) => {
        setItems(response.data.data);
      })
      .catch((error) => console.error('Error fetching items:', error));
  }, [items]);

  const addItem = () => {
    axios.post('http://localhost:5000/insertdata', { title: title, description: description })
      .then((response) => {
        setItems([...items, response.data]);
        setTitle('');
        setDescription('');
      })
      .catch((error) => console.error('Error adding item:', error));
  };

  const deleteItem = (itemId) => {
    axios.delete(`http://localhost:5000/deleteItem/${itemId}`)
      .then(() => {
        setItems(items.filter(item => item._id !== itemId));
      })
      .catch((error) => console.error('Error deleting item:', error));
  };

  return (
    <div className="container mt-5">
      <h1 className="display-4 mb-4">Add Title</h1>
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
        <button type="button" className="btn btn-primary" onClick={addItem}>
          Add
        </button>
      </form>
      {items.length === 0 ? (
    <p className="text-center" style={{'marginRight':'4rem','color':'red'}}>PLEASE ENTER A TITLE.</p>
  ) : (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item._id}>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>
            <Link to={`/update/${item._id}`}>
                    <BsPencilSquare style={{ cursor: 'pointer', color: 'blue' }} />
                  </Link>
              <BsTrash style={{ cursor: 'pointer', color: 'red', marginLeft: '2rem' }} onClick={() => deleteItem(item._id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
    </div>
  );
}

export default TitleDescription;
