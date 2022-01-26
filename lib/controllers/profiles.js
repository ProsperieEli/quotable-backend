const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!
  try {
    const { quote } = req.params;
    const user = await ProfileService.create({
      name: req.body.name,
      quote,
    });

    res.send(user);
  } catch (error) {
    next(error);
  }
});
