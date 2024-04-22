import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Inventory = () => {
    const [inventory, setInventory] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', quantity: '', unit: '', costPerUnit: '', caloriesPerUnit: '' });
    const [editingItem, setEditingItem] = useState(null);

    useEffect(() => {
        fetchInventory();
    }, []);

    const fetchInventory = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/items');
            setInventory(response.data);
        } catch (error) {
            console.error('Error fetching inventory:', error);
        }
    };

    const addItem = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/items', newItem);
            setInventory([...inventory, response.data]);
            setNewItem({ name: '', quantity: '', unit: '', costPerUnit: '', caloriesPerUnit: '' }); // Reset form after submission
        } catch (error) {
            console.error('Failed to add item:', error);
        }
    };

    const deleteItem = (id) => {
        axios.delete(`http://localhost:3000/api/items/${id}`)
            .then(response => {
                setInventory(inventory.filter(item => item._id !== id));
            })
            .catch(error => {
                console.error('Failed to delete item:', error);
            });
    };
    
    const handleEdit = (item) => {
        setEditingItem(item);
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:3000/api/items/${editingItem._id}`, editingItem);
            setEditingItem(null);
            fetchInventory(); // Refetch inventory after update
        } catch (error) {
            console.error('Failed to update item:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditingItem({ ...editingItem, [name]: value });
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-8 ">Inventory</h2>
            <div>
                <input className="border p-1 m-1" value={newItem.name} onChange={handleChange} name="name" placeholder="Name" />
                <input className="border p-1 m-1" value={newItem.quantity} onChange={handleChange} name="quantity" type="number" placeholder="Quantity" />
                <input className="border p-1 m-1" value={newItem.unit} onChange={handleChange} name="unit" placeholder="Unit" />
                <input className="border p-1 m-1" value={newItem.costPerUnit} onChange={handleChange} name="costPerUnit" type="number" placeholder="Cost Per Unit" />
                <input className="border p-1 m-1" value={newItem.caloriesPerUnit} onChange={handleChange} name="caloriesPerUnit" type="number" placeholder="Calories Per Unit" />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addItem}>Add Item</button>
            </div>
            <table className="min-w-full table-auto border-collapse border border-gray-300 mt-4">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Quantity</th>
                        <th className="border border-gray-300 p-2">Unit</th>
                        <th className="border border-gray-300 p-2">Cost Per Unit (INR)</th>
                        <th className="border border-gray-300 p-2">Calories Per Unit</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {inventory.map(item => (
                        <tr key={item._id} className="text-center">
                            <td className="border border-gray-300 p-2">{editingItem && editingItem._id === item._id ? <input value={editingItem.name} onChange={handleChange} name="name" /> : item.name}</td>
                            <td className="border border-gray-300 p-2">{editingItem && editingItem._id === item._id ? <input value={editingItem.quantity} onChange={handleChange} name="quantity" type="number" /> : item.quantity}</td>
                            <td className="border border-gray-300 p-2">{editingItem && editingItem._id === item._id ? <input value={editingItem.unit} onChange={handleChange} name="unit" /> : item.unit}</td>
                            <td className="border border-gray-300 p-2">{editingItem && editingItem._id === item._id ? <input value={editingItem.costPerUnit} onChange={handleChange} name="costPerUnit" type="number" /> : item.costPerUnit}</td>
                            <td className="border border-gray-300 p-2">{editingItem && editingItem._id === item._id ? <input value={editingItem.caloriesPerUnit} onChange={handleChange} name="caloriesPerUnit" type="number" /> : item.caloriesPerUnit}</td>
                            <td className="border border-gray-300 p-2">
                                {editingItem && editingItem._id === item._id ?
                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded" onClick={handleUpdate}>Update</button>
                                    :
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded" onClick={() => handleEdit(item)}>Edit</button>
                                }
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded" onClick={() => deleteItem(item._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Inventory;
