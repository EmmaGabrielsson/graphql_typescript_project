import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {schema} from "./schema";
import {getUser, getUsers, createUser, updateUser} from "./resolvers";

const root = {
    getUser,
    getUsers,
    createUser,
    updateUser,
}

// Server
const app = express();

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
)

const PORT = 5000;

app.listen(PORT)
console.log(`Server running at http://localhost:${PORT}/graphql`);