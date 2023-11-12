'use strict';

const { Router } = require('express');
const router = new Router();

const event = require('./controller.js');

router.get('/events', event.getAll);

router.post('/events', event.post);

router.post('/updatePost', event.changePost);




module.exports = router;