const pgp = require('pg-promise')

const connection = pgp({})
const db = connection('postgres:///test_graphql')

module.exports = db