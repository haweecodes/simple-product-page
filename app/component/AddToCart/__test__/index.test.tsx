// Import necessary testing libraries
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import AddToCartComponent from "../index";
import Language from "@/dictionaires/en.json";

const mockProduct = {
  id: 4380,
  category: "Møbler",
  subcategory: "Salongbord og sidebord",
  name: "Retro og nett salongbord i mørkt treverk",
  amount: 5,
  number_of_parts: 1,
  discounted_price: 700,
  selling_price: 790,
  currency: "NOK",
  description:
    "Retro og nett salongbord i mørkt treverk\n\nBordet har en enkel og nett stil som gjør at den passer inn i de fleste hjem.\n\nDen har en ripe på bordplaten og skruene er tredd nedover langs begge bordben i front - dette er avbildet.",
  created_at: "2023-03-21 14:52:36",
  images: [],
  attributes: [
    {
      attribute: "Høyde",
      value: "53 cm",
    },
    {
      attribute: "Dybde",
      value: "40 cm",
    },
    {
      attribute: "Bredde",
      value: "66 cm",
    },
  ],
  google_review: {
    rate: "4,8/5",
    text: "Google Reviews",
  },
  header_title: "Over 10.000 produkter har fått et nytt liv!",
};

const mockAddToCartProps = {
  product: mockProduct,
  params: Language,
};

describe("AddToCartComponent", () => {
  it("should render the component with initial count of 0", () => {
    const { getByText, getByTestId } = render(
      <AddToCartComponent {...mockAddToCartProps} />
    );

    const countElement = getByTestId("count-input") as HTMLInputElement;
    expect(countElement.value).toBe("0");

    const addToCartButton = getByText("Add to cart (0)");
    expect(addToCartButton).toBeInTheDocument();
  });

  it("should increment count when '+' button is clicked", () => {
    const { getByText, getByTestId } = render(
      <AddToCartComponent {...mockAddToCartProps} />
    );

    const incrementButton = getByText("+");
    fireEvent.click(incrementButton);

    const countElement = getByTestId("count-input") as HTMLInputElement;
    expect(countElement.value).toBe("1");
  });

  it("should not increment count beyond the available product amount", () => {
    const { getByText, getByTestId } = render(
      <AddToCartComponent {...mockAddToCartProps} />
    );

    const incrementButton = getByText("+");
    for (let i = 0; i < 6; i++) {
      fireEvent.click(incrementButton);
    }

    const countElement = getByTestId("count-input") as HTMLInputElement;
    expect(countElement.value).toBe("5");
  });

  it("should decrement count when '-' button is clicked", () => {
    const { getByText, getByTestId } = render(
      <AddToCartComponent {...mockAddToCartProps} />
    );

    const countElement = getByTestId("count-input") as HTMLInputElement;
    fireEvent.change(countElement, { target: { value: "5" } });

    const decrementButton = getByText("-");
    fireEvent.click(decrementButton);

    expect(countElement.value).toBe("4");
  });

  it("should not decrement count below 0", () => {
    const { getByText, getByTestId } = render(
      <AddToCartComponent {...mockAddToCartProps} />
    );

    const decrementButton = getByText("-") as HTMLButtonElement;
    fireEvent.click(decrementButton);

    const countElement = getByTestId("count-input") as HTMLInputElement;
    expect(countElement.value).toBe("0");
  });

  it("should add the product to cart when 'Add to Cart' button is clicked", () => {
    const { getByText } = render(
      <AddToCartComponent {...mockAddToCartProps} />
    );

    waitFor(() => {
      const incrementButton = getByText("+") as HTMLButtonElement;
      for (let i = 0; i <= 2; i++) {
        fireEvent.click(incrementButton);
      }

      const addToCartButton = getByText("Add to cart (2)") as HTMLButtonElement;
      fireEvent.click(addToCartButton);

      expect(addToCartButton).toHaveTextContent("Add to cart (2)");
    });
  });
});
