import {ApolloServer, gql} from 'apollo-server';
import enums from './enums';
import schemas from './schemas';
import resolvers from './resolvers';

export default () => {
  const typeDefs = gql`
    type Query {
      _empty: String
    }
  `;

  const server = new ApolloServer({typeDefs: [typeDefs, ...enums, ...schemas], resolvers});

  return server.listen().then(({url}) => {
    console.log(`Apollo🚀  Server ready at ${url}`);
  })
    .catch(e => console.error(e));
}
