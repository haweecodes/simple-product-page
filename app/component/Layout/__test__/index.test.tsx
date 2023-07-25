import { render } from "@testing-library/react";
import LayoutWithTopNavbar from "../layout-with-top-navbar";

describe("Layout with top nav bar test", () => {
  const navBarMockProps = {
    homeLabel: "Home",
    children: <div>Mock Children</div>,
  };

  jest.mock("next/image", () => ({
    __esModule: true,
    default: (props: any) => {
      return <img {...props} />;
    },
  }));
  test("renders the logo image with the correct URL", () => {
    const { getByAltText } = render(<LayoutWithTopNavbar {...navBarMockProps} />);
    const logoImage = getByAltText('Secundo');

    expect(logoImage).toHaveAttribute(
      "src",
      "https://eco-prod-bucket.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/09/29084448/secundo-logo-black.png"
    );
  });

  test("renders the navigation links", () => {
    const { getByRole } = render(<LayoutWithTopNavbar {...navBarMockProps} />);
    const sofaAndArmchairsLink = getByRole('link', { name: 'Sofa and armchairs' });
    const furnitureLink = getByRole('link', { name: 'Furniture' });
    const outletsLink = getByRole('link', { name: 'Outlets' });
    const companyLink = getByRole('link', { name: 'Company' });


    expect(sofaAndArmchairsLink).toBeInTheDocument();
    expect(furnitureLink).toBeInTheDocument();
    expect(outletsLink).toBeInTheDocument();
    expect(companyLink).toBeInTheDocument();
  });


  test('renders the "Log in" link', () => {
    const { getByText } = render(<LayoutWithTopNavbar {...navBarMockProps} />);
    const loginLink = getByText("Log in");
    expect(loginLink).toBeInTheDocument();
  });
});
