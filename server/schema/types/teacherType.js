const { gql } = require('apollo-server')

const TeacherTypeDefs = gql`
    type Teacher implements Node {
        id: ID!
        school_id: Int!
        name: String!
        school_name: String!
        subject: String!
    }

    extend type Query {
        teacherBySubject(subject: String!): [Teacher]
    }

    extend type Mutation {
        addTeacher(name: String! school_id: Int! school_name: String! subject: String!): Boolean!
    }
`
module.exports = TeacherTypeDefs