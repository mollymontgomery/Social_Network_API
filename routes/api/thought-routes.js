const router = require('express').Router();
const {
    getAllThoughts,
    addThought,
    getThoughtById,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');
const { route } = require('./user-routes');

// /api/thoughts GET
router.route('/').get(getAllThoughts);

// /api/thoughts/ "USER ID TO POST THOUGHT"
router.route('/:userId').post(addThought);

// /api/thoughts/the thought id thats in the DB
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)


router
    .route('/:userId/:thoughtId')
    .delete(removeThought);

router
    .route('/:thoughtId/reactions')
    .post(addReaction);

    // api/thoughts/ thought id from db/reactions/ reaction id from DB
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;