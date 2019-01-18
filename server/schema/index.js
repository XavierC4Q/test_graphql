const { gql } = require('apollo-server')

const SchoolTypes = require('./types/schoolType')
const TeacherTypes = require('./types/teacherType')

const ResolveMap = require('./resolvers/resolveMap')
const SchoolResolver = require('./resolvers/schoolResolver')
const TeacherResolver = require('./resolvers/teacherResolver')

const LinkTypes = gql`
    interface Node {
        id: ID!
        name: String!
    }

    enum TableEnum {
        SCHOOLS
        TEACHERS
    }

    type Query {
        _: Boolean
        search(table: TableEnum!, id: Int!): Node
    }

    type Mutation {
        _: Boolean
    }
`

const SearchResolver = {
    Query: {
        search: async (_,{ table, id }, { db }) => {
            if (table === 'SCHOOLS'){
                try {
                   return await db.one('SELECT * FROM schools WHERE id = $1', id) 
                } catch(err) {
                    return null
                }
            }

            if (table === 'TEACHERS'){
                try {
                    return await db.one('SELECT * FROM teachers WHERE id = $1', id) 
                 } catch(err) {
                     return null
                 }
            }

            return null
        } 
    }
}

module.exports = {
    types: [LinkTypes, SchoolTypes, TeacherTypes],
    resolvers: [ResolveMap, SchoolResolver, TeacherResolver, SearchResolver]
}