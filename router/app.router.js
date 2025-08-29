const express = require('express');
const { processDataController } = require('../controller/app.controller');

const appRoute = express.Router();

appRoute.post('/', processDataController);

module.exports = { appRoute };
