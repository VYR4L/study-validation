class UsersModel {
    constructor(database) {
        this.database = database; // Assuming a database instance is passed
    }

    async addUser(userData) {
        const { username, email, password, role, photo } = userData;
        const query = `INSERT INTO users (username, email, password, role, photo) VALUES (?, ?, ?, ?, ?)`;
        const values = [username, email, password, role || 'user', photo || null];
        const [result] = await this.database.execute(query, values);
        return result.insertId;
    }

    async findUserByEmail(email) {
        const query = `SELECT * FROM users WHERE email = ?`;
        const [rows] = await this.database.execute(query, [email]);
        return rows[0]; // Return the first user found
    }

    async updateUser(userId, userData) {
        const { username, email, password, role, photo } = userData;
        const query = `UPDATE users SET username = ?, email = ?, password = ?, role = ?, photo = ? WHERE id = ?`;
        const values = [username, email, password, role, photo, userId];
        await this.database.execute(query, values);
    }
}

export default UsersModel;