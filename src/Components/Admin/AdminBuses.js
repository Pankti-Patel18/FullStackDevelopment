import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminBuses.css';

const AdminBuses = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    fetchBuses();
  }, []);

  const fetchBuses = async () => {
    try {
      const response = await axios.get('http://localhost:8060/admin/getAll');
      setBuses(response.data);
    } catch (error) {
      console.error('Error fetching buses:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8060/admin/delete/${id}`);
      // Remove the deleted bus from the state
      setBuses(buses.filter(bus => bus.id !== id));
    } catch (error) {
      console.error('Error deleting bus:', error);
    }
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Bus Name</th>
            <th>Capacity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {buses.map(bus => (
            <tr key={bus.id}>
              <td>{bus.id}</td>
              <td>{bus.busname}</td>
              <td>{bus.totalseats}</td>
              <td>
                <button onClick={() => handleDelete(bus.id)}>Delete</button>
                {/* Add update button with onClick handler */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBuses;