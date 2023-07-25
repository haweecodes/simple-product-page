import React from "react";
import { render } from "@testing-library/react";
import ProductPrice from "../index";

describe("ProductPrice component test", () => {
  it("displays discounted price correctly", () => {
    const price = 20.0;
    const discountedPrice = 15.0;

    const { getByText, queryByText } = render(
      <ProductPrice price={price} discountedPrice={discountedPrice} />
    );

    const originalPriceElement = getByText("NOK 20.00");
    expect(originalPriceElement).toBeInTheDocument();

    const discountedPriceElement = getByText("NOK 15.00");
    expect(discountedPriceElement).toBeInTheDocument();

    const lineThroughPriceElement = queryByText("NOK 20.00");
    expect(lineThroughPriceElement).toBeInTheDocument();
  });

  it("displays regular price when there is no discount", () => {
    const price = 25.0;
    const discountedPrice = 0;

    const { getByText, queryByText } = render(
      <ProductPrice price={price} discountedPrice={discountedPrice} />
    );

    const originalPriceElement = queryByText("NOK 0");
    expect(originalPriceElement).not.toBeInTheDocument();

    const discountedPriceElement = getByText("NOK 25.00");
    expect(discountedPriceElement).toBeInTheDocument();

    const lineThroughPriceElement = queryByText("NOK 0");
    expect(lineThroughPriceElement).not.toBeInTheDocument();
  });
});
