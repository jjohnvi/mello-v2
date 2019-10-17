const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");

let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  }
];

let idCount = links.length;
const resolvers = {
  Query: {
    info: () => `This is the API of Mello.`,

    feed: () => links,

    link: (parent, args) => {
      return links.find(val => val.id === args.id);
    }
  },

  Mutation: {
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      };
      links.push(link);
      return link;
    },
    updateLink: (parent, args) => {
      links.forEach(link => {
        if (link.id === args.id) {
          link.url = args.url;
          link.description = args.description;
        }
        return args;
      });
    },

    deleteLink: (parent, args) => {
      const removeIndex = links.findIndex(item => item.id === args.id);
      const removedLink = links[removeIndex];
      links.splice(removeIndex, 1);

      return removedLink;
    }
  }
};

const options = {
  port: 5000
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});
server.start(options, ({ port }) =>
  console.log(`Server is running on http://localhost:5000`)
);
