import { getByTestId, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Breadcrumb from "../breadcrumb";
import Language from "@/dictionaires/en.json";

jest.mock("next/navigation", () => {
  return {
    usePathname: () => "/products/category/item",
  };
});

describe("Breadcrumb wrapper component with breadcrumb component", () => {
  it("breadcrumb component renders correctly with search input", () => {
    const breadcrumbProps = {
      params: Language,
      children: <div>Mock Children</div>,
    };

    const { getByText, getByTestId } = render(
      <Breadcrumb {...breadcrumbProps} />
    );

    const homeLink = getByText("Home");
    expect(homeLink).toBeInTheDocument();

    const searchInput = getByTestId("search-bar");
    expect(searchInput).toBeInTheDocument();
  });

});
