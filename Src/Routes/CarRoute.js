const express = require('express');
const router = express.Router();
const CarModel = require('../Models/CarModel');


router.get('/car-model', async (_req, res) => {
    try {
        const content = await CarModel.find();
        res.json(content);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching hero banner content' });
    }
});
router.post('/car-model', async (req, res) => {
    try {
        const { name, cost, type, noOfSeats, noOfDoors,imgLink, remarks} = req.body;
        const content = new CarModel({ name, cost, type, noOfSeats, noOfDoors, imgLink, remarks });
        await content.save();
        res.status(201).json(content);
    } catch (error) {
        res.status(500).json({ message: 'Error creating hero banner content'+error });
    }
});
router.put('/car-model/:id', async (req, res) => {
    try {
        const { name, cost, type, noOfSeats, noOfDoors, imgLink, remarks } = req.body;
        const content = await CarModel.findByIdAndUpdate(req.params.id, { name, cost, type, noOfSeats, noOfDoors, imgLink, remarks });
        res.status(204).json(content);
    }
    catch(error) {
        res.status(500).json({ message: 'Error updating hero banner content' +error });
    }
});
router.delete('/car-model/:id', async (req, res) => {
    try {
        const content = await CarModel.findByIdAndDelete(req.params.id);
        res.status(204).json(content);
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting hero banner content' });
    }
});
module.exports = router;