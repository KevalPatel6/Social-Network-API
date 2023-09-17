const router = require('express').Router()
const{getThoughts, getSingleThought, createThought, updateThought, deleteThought} = require('../../controllers/thoughtController.js')

router.route('/').get(getThoughts)

router.route('/:thoughtId').get(getSingleThought)

router.route('/').post(createThought)

router.route('/:thoughtId').put(updateThought)

router.route('/:thoughtId').delete(deleteThought)

module.export = router