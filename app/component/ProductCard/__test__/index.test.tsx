import { render } from "@testing-library/react";
import ProductCard from "../index";
import Language from "@/dictionaires/en.json";

const testProduct = {
  url: "https://example.com/product1",
  cart_image: "/product1_cart_image.jpg",
  hover_image: "/product1_hover_image.jpg",
  title: "Product 1",
  selling_price: 50.0,
  amount: 3,
};

describe("ProductCard component", () => {
  it("renders product details and handles mouse events", () => {
    const { getByText, getByTestId } = render(
      <ProductCard product={testProduct} params={Language} />
    );

    const titleElement = getByText(testProduct.title);
    expect(titleElement).toBeInTheDocument();

    const priceElement = getByText(`NOK ${testProduct.selling_price}`);
    expect(priceElement).toBeInTheDocument();

    const productLinkElement = getByTestId("product-link");
    expect(productLinkElement).toHaveAttribute("href", testProduct.url);
    expect(productLinkElement).toHaveAttribute("target", "_blank");
    expect(productLinkElement).toHaveAttribute("rel", "noopener noreferrer");
  });
});
