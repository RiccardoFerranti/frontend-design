import * as React from "react";
import { describe, expect, it } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";

import { DsInput } from "./ds-input";

describe("DsInput", () => {
  it("should render without crashing", () => {
    render(<DsInput placeholder="Email" />);
    expect(screen.getByPlaceholderText("Email")).toBeTruthy();
  });

  it("should render a label when provided", () => {
    render(<DsInput label="Email" placeholder="Email" />);
    expect(screen.getByText("Email")).toBeTruthy();
  });

  it("should render helper text when provided", () => {
    render(<DsInput helperText="We won't spam you" />);
    expect(screen.getByText("We won't spam you")).toBeTruthy();
  });

  it("should show error text and set aria-invalid", () => {
    const { container } = render(
      <DsInput placeholder="Email" error="Required" />,
    );

    const scope = within(container);
    expect(scope.getByText("Required")).toBeTruthy();

    const input = scope.getByPlaceholderText("Email");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("should update value when input changes", () => {
    render(<DsInput aria-label="name" />);

    const input = screen.getByLabelText("name") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "Riccardo" } });

    expect(input.value).toBe("Riccardo");
  });
});
