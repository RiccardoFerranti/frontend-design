"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@workspace/ui/components/sidebar";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type DsSidebarProps = ComponentPropsWithoutRef<typeof Sidebar> & {
  title?: ReactNode;
  footer?: ReactNode;
};

export const DsSidebar = ({
  title,
  footer,
  children,
  ...props
}: DsSidebarProps) => {
  return (
    <Sidebar {...props}>
      {title && (
        <SidebarHeader className="px-3 py-2 font-semibold text-sm">
          {title}
        </SidebarHeader>
      )}

      <SidebarContent>{children}</SidebarContent>

      {footer && <SidebarFooter>{footer}</SidebarFooter>}
    </Sidebar>
  );
};

DsSidebar.displayName = "DsSidebar";

// biome-ignore lint/performance/noBarrelFile: design-system re-exports for convenience
export {
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";
