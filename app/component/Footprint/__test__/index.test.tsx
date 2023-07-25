import React from "react";
import { getAllByText, render } from "@testing-library/react";
import FootprintStackedLayout from "../index";

const validFootprintData = {
  title: "Product Details",
  life_span: {
    icon: "/icons/life_span.png",
    title: "Life Span",
    description: "This product has a long life span.",
  },
  return_policy: {
    icon: "/icons/return_policy.png",
    title: "Return Policy",
    description: "30-day return policy.",
  },
};

describe("test FootprintStackedLayout component", () => {
  it("renders correctly with valid footprintData", () => {
    const { getByText, getAllByText, getByAltText } = render(
      <FootprintStackedLayout footprintData={validFootprintData} />
    );

    const titleElement = getByText(/Product Details/i);
    expect(titleElement).toBeInTheDocument();

    const lifeSpanDescription = getByText(
      /This product has a long life span./i
    );
    expect(lifeSpanDescription).toBeInTheDocument();

    const lifeSpanIcon = getByAltText(/Life Span/i);
    expect(lifeSpanIcon).toBeInTheDocument();

    const returnPolicyTitle = getAllByText(/Return Policy/i);
    expect(returnPolicyTitle.length).toBe(2);

    const returnPolicyDescription = getByText(/30-day return policy./i);
    expect(returnPolicyDescription).toBeInTheDocument();
    const returnPolicyIcon = getByAltText(/Return Policy/i);
    expect(returnPolicyIcon).toBeInTheDocument();
  });

  it('FootprintStackedLayout component renders correctly with empty footprintData', () => {
    const emptyFootprintData = {};
  
    const { queryByText } = render(<FootprintStackedLayout footprintData={emptyFootprintData} />);
  
    const noDetailsMessage = queryByText(/No Details Available/i);
    expect(noDetailsMessage).toBeInTheDocument();
  
    const titleElement = queryByText(/Product Details/i);
    expect(titleElement).not.toBeInTheDocument();
  
    const lifeSpanTitle = queryByText(/Life Span/i);
    expect(lifeSpanTitle).not.toBeInTheDocument();
    const lifeSpanDescription = queryByText(/This product has a long life span./i);
    expect(lifeSpanDescription).not.toBeInTheDocument();
    const lifeSpanIcon = queryByText(/Life Span/i);
    expect(lifeSpanIcon).not.toBeInTheDocument();
  
    const returnPolicyTitle = queryByText(/Return Policy/i);
    expect(returnPolicyTitle).not.toBeInTheDocument();
    const returnPolicyDescription = queryByText(/30-day return policy./i);
    expect(returnPolicyDescription).not.toBeInTheDocument();
    const returnPolicyIcon = queryByText(/Return Policy/i);
    expect(returnPolicyIcon).not.toBeInTheDocument();
  });
});
