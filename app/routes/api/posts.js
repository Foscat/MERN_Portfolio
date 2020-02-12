const router = require("express").Router();
const postController = require("../../controllers/posts");

// Matches with "/api/posts"
router.route("/")
  .get(postController.findApprovedPosts)
  .post(postController.create)

// Matches with "/api/posts/:auth"
router.route("/:auth")
  .get(postController.findAll)

// Matches iwth ".api/posts/draft/:auth"
router.route("/draft/:auth")
  .get(postController.findDraftPosts)

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(postController.findById)

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .put(postController.update)
  .delete(postController.remove);

module.exports = router;