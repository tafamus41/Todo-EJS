"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
//* ROUTERS:

// const router = express.Router()
const router = require('express').Router()

// Call todo.controller:
const todo = require('../controllers/todo.controller.api')


// //? CRUD -> 

router.route('/')
    .get(todo.list)
    .post(todo.create)

router.route('/:id')
    .get(todo.read)
    .put(todo.update) // Tam data güncellemesi
    .patch(todo.update) // Kısmi data güncellemesi
    .delete(todo.delete)

// Export:
module.exports = router
/* ------------------------------------------------------- */