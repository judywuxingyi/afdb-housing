import express from 'express';
import cors from 'cors';
import http from 'http';

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

import { typeDefs }  from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js';

const app = express();
const PORT = 3000;

app.get('/',
  (req, res) => res.sendFile(path.join(__dirname, '../build/index.html'))
);

const ApolloServerStart = async() => {

  const httpServer = http.createServer(app);
  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  
  await server.start();
  
  app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );
  
  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(`Server ready at http://localhost:3000/graphql`);
}

export default ApolloServerStart();