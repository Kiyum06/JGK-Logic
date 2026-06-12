import bcrypt from 'bcrypt';
import { createUser, findUserByEmail } from '../model/default.repo.js';

// hashes password with bcrypt and saves the user to DB
export const registerUser = async (username, email, password) => {
    const existing = await findUserByEmail(email);
    if (existing) {
        throw new Error('Email already in use');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(username, email, hashedPassword);
};