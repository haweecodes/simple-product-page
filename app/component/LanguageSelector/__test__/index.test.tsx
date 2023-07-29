import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LanguageSelector from "../index";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
  useParams() {
    return {
      lang: "en",
    };
  },
}));

test("LanguageSelector renders with default option and changes selected option on click", () => {
  const { getByText, queryByText, getByRole } = render(<LanguageSelector />);

  waitFor(() => {
    expect(getByText("English")).toBeInTheDocument();
    expect(queryByText("Norwegian")).toBeNull();

    fireEvent.click(getByRole("button"));
    expect(getByText("Norwegian")).toBeInTheDocument();
    expect(queryByText("English")).toBeNull();

    fireEvent.click(getByText("Norwegian"));
    expect(getByText("English")).toBeInTheDocument();
    expect(queryByText("Norwegian")).toBeNull();
  });
});
