import Database from 'better-sqlite3'
import { v4 as uuidv4 } from 'uuid'

let db = null

export const initDatabase = () => {
  db = new Database('app.db')
  db.pragma('journal_mode = WAL')


  db.exec(`
    CREATE TABLE IF NOT EXISTS player (
      id TEXT NOT NULL PRIMARY KEY,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      email TEXT NOT NULL,
      position TEXT NOT NULL,
      jerseyNumber INTEGER NOT NULL,
      skillLevel TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  db.exec(`
    CREATE TABLE IF NOT EXISTS match (
      id TEXT NOT NULL PRIMARY KEY,
      opponent TEXT NOT NULL,
      matchDate TEXT NOT NULL,
      venue TEXT NOT NULL,
      result TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  db.exec(`
    CREATE TABLE IF NOT EXISTS playerstats (
      id TEXT NOT NULL PRIMARY KEY,
      playerId TEXT NOT NULL,
      matchId TEXT NOT NULL,
      points INTEGER,
      kills INTEGER,
      blocks INTEGER,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  console.log('Database initialized')
}

export const getDb = () => {
  if (!db) {
    throw new Error('Database not initialized')
  }
  return db
}

export const generateId = () => uuidv4()
