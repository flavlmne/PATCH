const prisma = require('../config/db');
const bcrypt = require('bcryptjs');
const axios = require('axios');

const userService = {
    createUser: async (name, rawPassword) => {
        const hashedPassword = await bcrypt.hash(rawPassword, 10);
        return await prisma.user.create({
            data: {
                name,
                password: hashedPassword,
            },
        });
    },

    getAllUsers: async () => {
        return await prisma.user.findMany({
            select: { id: true, name: true },
        });
    },

    getUserById: async (id) => {
        return await prisma.user.findMany({
            where: { id },
            select: { id: true, name: true },
        });
    },

    populateUsers: async () => {
        const urls = [1, 2, 3].map(() => axios.get('https://randomuser.me/api/'));
        const results = await Promise.all(urls);
        const users = results.map((r) => r.data.results[0]);

        for (const u of users) {
            const fullName = `${u.name.first} ${u.name.last}`;
            const rawPassword = u.login.password;
            await userService.createUser(fullName, rawPassword);
        }
    },
};

module.exports = userService;
