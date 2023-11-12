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
      products{
      name
      id
      inStock
      gallery
      prices{
        currency{
          label
          symbol
        }
        amount
      }
      brand
    }
    }
  }
`;

export const  GET_PRODUCT_INFO = gql`
  query getProductInfo($id: String!){
  product(id: $id){
    id
    name
    inStock
    gallery
    description
    attributes{
      id
      name
      type
      items{
        displayValue
        value
        id
      }
    }
    prices{
      currency{
        label
        symbol
      }
      amount
    }
    brand
  }
}
`;
