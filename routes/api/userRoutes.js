const userRoutes = require('./index.js')
const {getUsers, getSingleUser, createUser, updateUser, deleteUser} = require('../../controllers')


router.route('/').get(getUsers);

router.route('/:user_id').get(getSingleUser);

router.route('/').post(createUser);

router.route('/').put(updateUser)

router.route('/').delete(deleteuser)


module.exports = router