import { GraphQLScalarType } from 'graphql';
export var resolvers = {
    Date: new GraphQLScalarType({
        name: 'Date',
        parseValue: function (value) {
            return new Date(value);
        },
        serialize: function (value) {
            return value.toISOString();
        }
    }),
    Query: {
        projects: function () { return projects; },
    },
};
