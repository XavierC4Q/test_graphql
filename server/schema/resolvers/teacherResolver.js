module.exports = {
    Query: {
        teacherBySubject: async (_, {
            subject
        }, { db }) => {
            try {
                return await db.any('SELECT * FROM teachers WHERE subject = $1', [subject])
            } catch (err) {
                return null
            }
        }
    },
    Mutation: {
        addTeacher: async (_, {
            name,
            school_name,
            school_id,
            subject
        }, { db }) => {
            try {
                await db.none('INSERT INTO teachers (name, school_name, school_id, subject) VALUES ($1, $2, $3, $4)',
                    [name, school_name, school_id, subject])
                return true
            } catch (err) {
                return false
            }
        }
    }
}