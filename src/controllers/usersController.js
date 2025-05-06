class UsersController {
    async createUser(req, res) {
        const { username, email, password, role, photo } = req.body;

        // Validate input
        if (!username || !email || !password) {
            return res.status(400).json({ message: "Username, email, and password are required" });
        }

        try {
            // Check if user already exists
            const existingUser = await this.usersModel.findUserByEmail(email) ||
            await this.usersModel.findUserByUsername(username);
            if (existingUser) {
                return res.status(409).json({ message: "User already exists" });
            }

            // Create new user
            const userId = await this.usersModel.addUser({ username, email, password, role, photo });
            res.status(201).json({ message: "User created successfully", userId });
        }
        catch (error) {
            res.status(500).json({ message: "Error creating user", error });
        }
    }

    async getUsers(req, res) {
        try {
            const users = await this.usersModel.getAllUsers();
            res.status(200).json(users);
        }
        catch (error) {
            res.status(500).json({ message: "Error retrieving users", error });
        }
    }

    async updateUser(req, res) {
        const { id } = req.params;
        const { username, email, password, role, photo } = req.body;

        // Validate input
        if (!username || !email || !password) {
            return res.status(400).json({ message: "Username, email, and password are required" });
        }

        try {
            // Update user
            await this.usersModel.updateUser(id, { username, email, password, role, photo });
            res.status(200).json({ message: "User updated successfully" });
        }
        catch (error) {
            res.status(500).json({ message: "Error updating user", error });
        }
    }

    async deleteUser(req, res) {
        const { id } = req.params;

        try {
            // Delete user
            await this.usersModel.deleteUser(id);
            res.status(200).json({ message: "User deleted successfully" });
        }
        catch (error) {
            res.status(500).json({ message: "Error deleting user", error });
        }
    }

    async getUserById(req, res) {
        const { id } = req.params;

        try {
            const user = await this.usersModel.findUserById(id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json(user);
        }
        catch (error) {
            res.status(500).json({ message: "Error retrieving user", error });
        }
    }
}

export default new UsersController;