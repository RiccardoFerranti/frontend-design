import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { DsCard } from "./ds-card";

describe("DsCard", () => {
  it("should render without crashing", () => {
    render(<DsCard />);
    // no assertion needed other than not throwing
    expect(true).toBe(true);
  });

  it("should render title when provided", () => {
    render(<DsCard title="My title" />);
    expect(screen.getByText("My title")).toBeTruthy();
  });

  it("should render description when provided", () => {
    render(<DsCard description="My description" />);
    expect(screen.getByText("My description")).toBeTruthy();
  });

  it("should render action when provided", () => {
    render(<DsCard action={<button type="button">Action</button>} />);
    expect(screen.getByRole("button", { name: "Action" })).toBeTruthy();
  });

  it("should render children inside content when provided", () => {
    render(
      <DsCard>
        <div>Body</div>
      </DsCard>,
    );
    expect(screen.getByText("Body")).toBeTruthy();
  });

  it("should render footer when provided", () => {
    render(<DsCard footer={<div>Custom footer</div>} />);
    expect(screen.getByText("Custom footer")).toBeTruthy();
  });

  it("should render custom header when header prop is provided", () => {
    render(
      <DsCard header={<div>Custom header</div>}>
        <div>Custom header card body</div>
      </DsCard>,
    );
    expect(screen.getByText("Custom header")).toBeTruthy();
    expect(screen.getByText("Custom header card body")).toBeTruthy();
  });
});
