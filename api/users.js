const UserController = require('../controller/users');
const express = require('express');

const router = express.Router();

router.get('/all', UserController.findAllUsers);

router.get('/findAllGeoUser', UserController.findAllGeoUser);

router.get('/:id', UserController.findById);

router.post('/add', UserController.addUser);

router.post('/updUserLocation', UserController.updUserLocation);

router.post('/removeById/:id', UserController.removeById);

router.post('/updateUserLocation', UserController.updateUserLocation);

router.get('/byusername/:username', UserController.findByUsername);


module.exports = router;