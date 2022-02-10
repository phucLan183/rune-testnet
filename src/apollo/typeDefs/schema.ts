import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Rune {
    soil: Int
    stone: Int
    wood:Int
    rubber: Int
    plastic: Int
    crystal: Int
    metal:Int
    gem: Int
    onixius: Int
    crypton: Int
    pythium: Int
    paranium: Int
  }

  type Query {
    totalOwnerRune(address: String!): Rune
    totalRuneHolder: Rune
  }
`