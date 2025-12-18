const commentService = require('../services/commentService');

const commentController = {
    addComment: async (req, res) => {
        const content = typeof req.body === 'object' ? req.body.content : req.body;

        if (!content || typeof content !== 'string') {
            return res.status(400).json({ error: 'Invalid comment content' });
        }

        try {
            await commentService.createComment(content);
            res.json({ success: true });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Database error' });
        }
    },

    listComments: async (req, res) => {
        try {
            const comments = await commentService.getComments();
            res.json(comments);
        } catch (err) {
            console.error(err);
            res.status(500).send('Database error');
        }
    },
};

module.exports = commentController;
