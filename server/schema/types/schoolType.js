const { gql } = require('apollo-server')

const SchoolTypeDefs = gql`
    type School implements Node {
        id: ID!
        name: String!
        location: String!
    }

    extend type Query {
        allSchools: [Node]
    }

    extend type Mutation {
        addSchool(name: String! location: String!): Boolean!
    }
`

module.exports = SchoolTypeDefs