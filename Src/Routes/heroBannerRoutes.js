// src/routes/heroBannerRoutes.js
const express = require('express');
const router = express.Router();
const HeroBanner = require('../Models/HeroBanner');

router.get('/hero-banner', async (_req, res) => {
  try {
    const content = await HeroBanner.find();
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching hero banner content' });
  }
});

router.post('/hero-banner', async (req, res) => {
  try {
    const { title, subtitle, imageUrl } = req.body;
    const content = new HeroBanner({ title, subtitle, imageUrl });
    await content.save();
    res.status(201).json(content);
  } catch (error) {
    res.status(500).json({ message: 'Error creating hero banner content'+error });
  }
});

// PUT hero banner content
// router.put('/hero-banner/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, subtitle, imageUrl } = req.body;

//     const content = await HeroBanner.findById(id);
//     if (!content) {
//       return res.status(404).json({ message: 'Hero banner content not found' });
//     }

//     content.title = title;
//     content.subtitle = subtitle;
//     content.imageUrl = imageUrl;

//     await content.save();

//     res.json(content);
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating hero banner content' });
//   }
// });

module.exports = router;
