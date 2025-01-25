import express from 'express';
import User from './userSchema.js';

export const userRoute = express.Router();

// Get all users
userRoute.get('/', async (request, response) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            return response.status(404).json({ message: 'No users found' });
        }
        response.send(users);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});

// Create a new user
userRoute.post('/create-user', async (request, response) => {
    const newUser = new User(request.body);
    try {
        const savedUser = await newUser.save();
        response.status(201).json(savedUser);
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
});

// Update a user by ID
userRoute.put('/update-user/:id', async (request, response) => {
    const { id } = request.params;
    const updatedUser = request.body;
    try {
        const user = await User.findByIdAndUpdate(id, updatedUser, { new: true });
        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }
        response.send(user);
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
});

// Delete a user by ID
userRoute.delete('/delete-user/:id', async (request, response) => {
    const { id } = request.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }
        response.send({ message: 'User deleted successfully', user });
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});

// Get a specific user by ID
userRoute.get('/:id', async (request, response) => {
    const { id } = request.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }
        response.send(user);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});
