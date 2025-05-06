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
    async findUserById(userId) {
        const query = `SELECT * FROM users WHERE id = ?`;
        const [user] = await this.database.execute(query, [userId]);
        return user;
    }
    async updateUser(userId, userData) {
        const { username, email, password, role, photo } = userData;
        const query = `UPDATE users SET username = ?, email = ?, password = ?, role = ?, photo = ? WHERE id = ?`;
        const values = [username, email, password, role, photo, userId];
        await this.database.execute(query, values);
    }
    async deleteUser(userId) {
        const query = `DELETE FROM users WHERE id = ?`;
        await this.database.execute(query, [userId]);
    }
    async findAllUsers() {
        const query = `SELECT * FROM users`;
        const [users] = await this.database.execute(query);
        return users;
    }
}

export default UsersModel;