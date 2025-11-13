import sql from 'mssql';
import { config } from '@/config';

/**
 * @summary
 * Database connection pool management
 *
 * @module database/connection
 */

let pool: sql.ConnectionPool | null = null;

/**
 * @summary
 * Gets or creates database connection pool
 *
 * @function getPool
 * @module database/connection
 *
 * @returns {Promise<sql.ConnectionPool>} Database connection pool
 *
 * @throws {Error} When connection fails
 */
export async function getPool(): Promise<sql.ConnectionPool> {
  if (!pool) {
    pool = await sql.connect(config.database);
    console.log('Database connection pool created');
  }
  return pool;
}

/**
 * @summary
 * Closes database connection pool
 *
 * @function closePool
 * @module database/connection
 *
 * @returns {Promise<void>}
 */
export async function closePool(): Promise<void> {
  if (pool) {
    await pool.close();
    pool = null;
    console.log('Database connection pool closed');
  }
}
