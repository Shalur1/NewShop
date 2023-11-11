import {gql} from "@apollo/client";

export const GET_CATEGORIES = gql`
query GetCategories {
        categories{
            name
         }
      }
    `;
export const GET_PRODUCTS = gql`
  query getCategory($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        name
      }
    }
  }
`;
