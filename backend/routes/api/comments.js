const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// Hey GitHub Copilot, I want to create a new comment

router.get("/", async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
});

// add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  await comment.remove();
  res.json({ success: true });
});

// add another endpoint for creating a new comment
router.post("/", async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Documentation

