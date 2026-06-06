//place repository code here...
import pool from '../model/db.connect.js';

export const getAllProducts = async () => {
    const [rows] = await pool.query('SELECT * FROM products');
    return rows;
}