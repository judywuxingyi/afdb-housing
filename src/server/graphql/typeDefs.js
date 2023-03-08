
export const typeDefs = `#graphql
  scalar Date
  
  type Project {
    id: String
    name: String
    completion_date: Date
    wage_status: String
    total_units: Int
  }

  type Query {
    projects: [Project]
  }
`;