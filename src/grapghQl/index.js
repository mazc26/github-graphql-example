import {
    gql
} from "@apollo/client";

export const FETCH_USERS = gql`
{ 
	organization(login: "foundry-rs") {
    repositories(first: 20, privacy: PUBLIC, orderBy: {field: STARGAZERS, direction: DESC}) {
      nodes {
        name
        description
        primaryLanguage {
          name
          color
        }
        stargazerCount
        forkCount
        updatedAt
      }
    }
  }
}
` 