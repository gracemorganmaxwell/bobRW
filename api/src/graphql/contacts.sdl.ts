export const schema = gql`
  type Contact {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    contactType: String!
    firstName: String!
    lastName: String!
    email: String!
    address: String!
    contactNumber: String!
    message: String!
    when: DateTime
  }

  type Query {
    contacts: [Contact!]! @skipAuth
    contact(id: Int!): Contact @skipAuth
  }

  input CreateContactInput {
    contactType: String!
    firstName: String!
    lastName: String!
    email: String!
    address: String!
    contactNumber: String!
    message: String!
    when: DateTime
  }

  input UpdateContactInput {
    contactType: String
    firstName: String
    lastName: String
    email: String
    address: String
    contactNumber: String
    message: String
    when: DateTime
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @skipAuth
    updateContact(id: Int!, input: UpdateContactInput!): Contact! @skipAuth
    deleteContact(id: Int!): Contact! @skipAuth
  }
`
