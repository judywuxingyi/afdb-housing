import { GraphQLScalarType } from 'graphql';

export const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      return value.toISOString();
    }
  }),
  Query: {
    projects: () => projects,
  },

};