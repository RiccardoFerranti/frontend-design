import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type React from "react";
import { describe, expect, it } from "vitest";
import type { TreeNode } from "./ds-tree-item";
import { DsTreeItem } from "./ds-tree-item";

describe("DsTreeItem", () => {
  it("should render without crashing", () => {
    const node: TreeNode = { id: "1", label: "Item" };
    render(<DsTreeItem node={node} />);
    expect(true).toBe(true);
  });

  it("should render label when provided", () => {
    const node: TreeNode = { id: "1", label: "My label" };
    render(<DsTreeItem node={node} />);
    expect(screen.getByText("My label")).toBeTruthy();
  });

  it("should render as link when href is provided", () => {
    const node: TreeNode = { id: "1", label: "Link item", href: "/path" };
    render(<DsTreeItem node={node} />);
    const link = screen.getByRole("link", { name: "Link item" });
    expect(link).toBeTruthy();
    expect(link).toHaveAttribute("href", "/path");
  });

  it("should use renderLink when provided and node has href", () => {
    const node: TreeNode = { id: "1", label: "Custom link", href: "/custom" };
    const renderLink = ({
      href,
      children,
    }: {
      href: string;
      children: React.ReactNode;
    }) => (
      <a data-testid="custom-link" href={href}>
        {children}
      </a>
    );
    render(<DsTreeItem node={node} renderLink={renderLink} />);
    const customLink = screen.getByTestId("custom-link");
    expect(customLink).toBeTruthy();
    expect(customLink).toHaveAttribute("href", "/custom");
    expect(customLink).toHaveTextContent("Custom link");
  });

  it("should render status badge when status is provided", () => {
    const node: TreeNode = { id: "1", label: "Item", status: "completed" };
    render(<DsTreeItem node={node} />);
    expect(screen.getByText("Completed")).toBeTruthy();
  });

  it("should render 'In progress' badge when status is in-progress", () => {
    const node: TreeNode = { id: "1", label: "Item", status: "in-progress" };
    render(<DsTreeItem node={node} />);
    expect(screen.getByText("In progress")).toBeTruthy();
  });

  it("should render children when node has children", () => {
    const node: TreeNode = {
      id: "1",
      label: "Parent",
      children: [{ id: "2", label: "Child" }],
    };
    render(<DsTreeItem defaultOpen node={node} />);
    expect(screen.getByText("Parent")).toBeTruthy();
    expect(screen.getByText("Child")).toBeTruthy();
  });

  it("should show expand button when node has children", () => {
    const node: TreeNode = {
      id: "1",
      label: "Parent",
      children: [{ id: "2", label: "Child" }],
    };
    render(<DsTreeItem defaultOpen={false} node={node} />);
    expect(screen.getByRole("button", { name: "Expand" })).toBeTruthy();
  });

  it("should toggle expand/collapse when button is clicked", async () => {
    const user = userEvent.setup();
    const node: TreeNode = {
      id: "1",
      label: "Parent",
      children: [{ id: "2", label: "Child" }],
    };
    const { container } = render(
      <DsTreeItem defaultOpen={false} node={node} />
    );
    const scope = within(container);
    const expandBtn = container.querySelector(
      'button[aria-label="Expand"]'
    ) as HTMLButtonElement;
    expect(scope.queryByText("Child")).not.toBeInTheDocument();
    await user.click(expandBtn);
    expect(scope.getByText("Child")).toBeTruthy();
    const collapseBtn = container.querySelector(
      'button[aria-label="Collapse"]'
    ) as HTMLButtonElement;
    expect(collapseBtn).toBeTruthy();
    await user.click(collapseBtn);
    expect(scope.queryByText("Child")).not.toBeInTheDocument();
  });
});
