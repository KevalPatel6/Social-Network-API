const router = require('express').Router()
const {getUsers, getSingleUser, createUser, updateUser, deleteUser} = require('../../controllers/userController.js')


router.route('/').get(getUsers);

router.route('/:userId').get(getSingleUser);

router.route('/').post(createUser);

router.route('/:userId').put(updateUser)

router.route('/:userId').delete(deleteUser)

module.exports = router