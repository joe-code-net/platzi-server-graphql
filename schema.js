const { makeExcutableSchema } = require('graphql-tools')

const schema = `
    type Curso {
        id: ID!
        titulo: String!
    }
`

const schema = makeExcutableSchema({
    typeDefs: schema
})