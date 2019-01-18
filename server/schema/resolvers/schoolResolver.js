module.exports = {
    Query: {
        allSchools: async (_, args, { db }) => {
            try {
                return await db.any('SELECT * FROM schools')
            } catch (err) {
                return null
            }
        }
    },
    Mutation: {
        addSchool: async (_, {
            name,
            location
        }, { db }) => {
            try {
                await db.none('INSERT INTO schools (name, location) VALUES ($1, $2)',
                    [name, location])
                return true
            } catch (err) {
                return false
            }
        }
    }
}