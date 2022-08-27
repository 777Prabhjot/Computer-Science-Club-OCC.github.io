const mongoose = require("mongoose")
const ReadingSchema = require("./Readings")
const db = require("../../db")

// Define test instances here

// Database for testing
beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async () => await db.closeDatabase())

// Add your test here