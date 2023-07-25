import React from "react";
import { render } from "@testing-library/react";
import SimilarProducts from "../index";
import Language from '@/dictionaires/en.json'

test("SimilarProducts component renders correct product details", () => {
  const data = {
    header: "Similar Products",
    products: [
      {
        url: "https://example.com/product1",
        cart_image: "/product1_cart_image.jpg",
        hover_image: "/product1_hover_image.jpg",
        title: "Product 1",
        selling_price: 50.0,
        amount: 3,
      },
      {
        url: "https://example.com/product2",
        cart_image: "/product2_cart_image.jpg",
        hover_image: "/product2_hover_image.jpg",
        title: "Product 2",
        selling_price: 30.0,
        amount: 5,
      },
    ],
  };

  const { getByText, getAllByTestId } = render(
    <SimilarProducts data={data} params={Language} />
  );

  // Check if the header is rendered correctly
  const headerElement = getByText(data.header);
  expect(headerElement).toBeInTheDocument();

  // Check if all product cards are rendered correctly
  const productCards = getAllByTestId('product-card');
  expect(productCards).toHaveLength(data.products.length);
});
