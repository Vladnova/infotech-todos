const express = require('express');
const router = express.Router();
const validate = require('../middleware/validates');
const ctrl = require('../controllers/todos');
const {auth} = require('../middleware/auth');

router.get('/', auth,ctrl.getAll);

router.get('/:todoId', auth, ctrl.getOne);

router.post('/', auth, validate.create, ctrl.add);

router.delete('/:todoId', auth, ctrl.remove);

router.patch('/:todoId', auth, validate.update, ctrl.update);

module.exports = router;
