import gql from 'graphql-tag';

export default gql`
  extend type Query {
    items(filter: ItemFilter): [Item]!
  }

  interface IItem {
    id: ID!
    name: String!
    description: String!
    level: Int!
    bulk: Int!
    price: Int!
    traits: [Trait]
    hands: Int
  }

  input ItemFilter {
    name: String
    description: String
    level: Int
    bulk: Int
    price: Int
    traits: [Trait]
    hands: Int
  }

  type Item implements IItem {
    id: ID!
    name: String!
    description: String!
    level: Int!
    bulk: Int!
    price: Int!
    traits: [Trait]
    hands: Int
  }`
