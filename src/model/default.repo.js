//place repository code here...
import pool from '../model/db.connect.js';

export const getAllProducts = async () => {
    const [rows] = await pool.query('SELECT * FROM products');
    return rows;
};

export const findUserByEmail = async (email) => {
    const [ rows ] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
};

export const createUser = async (username, email, password) => {
     await pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
};

export const getFilteredProducts = async (category, minPrice) => {
     let query = 'SELECT * FROM products WHERE 1=1';
    const params = [];

    if (category) {
        query += ' AND category = ?';
        params.push(category);
    }

    if (minPrice) {
        query += ' AND price >= ?';
        params.push(minPrice);
    }

    const [rows] = await pool.query(query, params);
    return rows;
};

export const getProductById = async (id) => {
    const [rows] = await pool.query(
        "SELECT * FROM products WHERE id = ?",
        [id]
    );

    return rows[0];
};
