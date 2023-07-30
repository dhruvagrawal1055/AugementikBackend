const express = require('express');
const router = express.Router();
const Contact = require('../Models/Contact');
router.get('/contact', async (_req, res) => {
    try {
        const content = await Contact.find();
        res.json(content);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching hero banner content' });
    }
}
);
router.post('/contact', async (req, res) => {
    try {
        const { address, email, mobile } = req.body;
        const content = new Contact({ address, email, mobile });
        await content.save();
        res.status(201).json(content);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating hero banner content' + error });
    }
});
router.put('/contact/:id', async (req, res) => {
    try {
        const { address, email, mobile } = req.body;
        const content = await Contact.findByIdAndUpdate(req.params.id, { address, email, mobile });
        res.status(204).json(content);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating hero banner content' + error });
    }
});
module.exports = router;