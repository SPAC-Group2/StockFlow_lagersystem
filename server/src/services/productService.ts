import pool from '../db/db_module'; // Adjust the import path as needed

/**
 * Example function to retrieve user role by ID.
 * Parameterized queries safeguard against SQL injection.
*/
export async function getAllProductsFromDB() {
  const query = 'SELECT * FROM ProductsView';
  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

export async function getProductsFromDBByPage(take: number, skip: number) {
  const query = 'SELECT * FROM ProductsView LIMIT  $1  OFFSET $2;';
  const values = [take, skip]
  try {
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }}