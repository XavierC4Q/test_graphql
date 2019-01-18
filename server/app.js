const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { ApolloServer, makeExecutableSchema } = require('apollo-server')
const db = require('./db/db')

const { types, resolvers } = require('./schema/index')
const schema = makeExecutableSchema({ typeDefs: types, resolvers: resolvers })

const server = new ApolloServer({ schema, context: { db } })

server.listen().then(({ url }) => {
    console.log(`SERVER RUNNING ON ${url}`)
})