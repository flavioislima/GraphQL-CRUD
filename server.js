const express = require('express')
const ExpressGraphQL = require('express-graphql')

const schema = require('./schema/schema')
const app = express()

app.use('/graphql', ExpressGraphQL({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log("GraphQL Rules!")
})