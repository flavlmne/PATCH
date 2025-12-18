const prisma = require('../config/db');

const commentService = {
    createComment: async (content) => {
        return await prisma.comment.create({
            data: { content: content.substring(0, 500) },
        });
    },

    getComments: async (limit = 50) => {
        return await prisma.comment.findMany({
            orderBy: { id: 'desc' },
            take: limit,
        });
    },
};

module.exports = commentService;
