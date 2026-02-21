import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/Hero";

// We already mock next-intl in jest.setup.ts, so useTranslations returns the key

describe("Hero Component", () => {
  it("renders the developer's name structure correctly", () => {
    // We cannot easily test the exact text if it relies on translations,
    // but we can test that the elements with the correct classes and structure exist.
    const { container } = render(<Hero />);

    // The component should render successfully
    expect(container).toBeInTheDocument();

    // Check if the gradient text container exists
    const gradientText = container.querySelector(".heading-gradient");
    expect(gradientText).toBeInTheDocument();

    // The component should have an profile image
    const image = screen.getByAltText("Abdelhafid Rahab");
    expect(image).toBeInTheDocument();
  });
});
