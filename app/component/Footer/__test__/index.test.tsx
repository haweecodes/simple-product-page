import { render } from "@testing-library/react";
import Footer from "../index";
import Language from "@/dictionaires/en.json";

describe("Footer component", () => {
  it("renders contact information correctly", () => {
    const { getByText, getByRole } = render(<Footer params={Language} />);

    const clickAndCollectText = getByText("Click and Collect");
    expect(clickAndCollectText).toBeInTheDocument();

    const postEmailLink = getByRole("link", {
      name: "post@secundo.no",
    });
    expect(postEmailLink).toBeInTheDocument();

    const phoneNumberLink = getByRole("link", { name: "22 19 90 00" });
    expect(phoneNumberLink).toBeInTheDocument();
  });

  it("renders help links correctly", () => {
    const { getByRole } = render(<Footer params={Language} />);

    const customerServiceLink = getByRole("link", {
      name: "Customer service",
    });
    expect(customerServiceLink).toBeInTheDocument();

    const openingHoursLink = getByRole("link", {
      name: "Opening hours",
    });
    expect(openingHoursLink).toBeInTheDocument();

    const deliveryLink = getByRole("link", { name: "Delivery" });
    expect(deliveryLink).toBeInTheDocument();

    const addressLink = getByRole("link", { name: "Address" });
    expect(addressLink).toBeInTheDocument();

    const faqLink = getByRole("link", { name: "FAQ" });
    expect(faqLink).toBeInTheDocument();
  });

  it("renders about links correctly", () => {
    const { getByRole } = render(<Footer params={Language} />);

    const aboutSecundoLink = getByRole("link", {
      name: "About Secundo",
    });
    expect(aboutSecundoLink).toBeInTheDocument();

    const termsOfPurchaseLink = getByRole("link", {
      name: "Terms of purchase",
    });
    expect(termsOfPurchaseLink).toBeInTheDocument();

    const privacyStatementLink = getByRole("link", {
      name: "Privacy statement",
    });
    expect(privacyStatementLink).toBeInTheDocument();
  });

  it("renders category links correctly", () => {
    const { getByRole } = render(<Footer params={Language} />);

    const furnitureLink = getByRole("link", { name: "Furniture" });
    expect(furnitureLink).toBeInTheDocument();

    const sofaAndArmchairsLink = getByRole("link", {
      name: "Sofa and armchairs",
    });
    expect(sofaAndArmchairsLink).toBeInTheDocument();

    const toTheOfficeLink = getByRole("link", {
      name: "To the office",
    });
    expect(toTheOfficeLink).toBeInTheDocument();

    const appliancesLink = getByRole("link", { name: "Appliances" });
    expect(appliancesLink).toBeInTheDocument();

    const rareFindsLink = getByRole("link", { name: "Rare finds" });
    expect(rareFindsLink).toBeInTheDocument();

    const cheapHookLink = getByRole("link", { name: "The cheap hook" });
    expect(cheapHookLink).toBeInTheDocument();
  });
});
