"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
  SidebarProvider,
} from "@workspace/ui/components/sidebar";

export type DsSidebarProps = React.ComponentPropsWithoutRef<typeof Sidebar> & {
  title?: React.ReactNode;
  footer?: React.ReactNode;
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
        <SidebarHeader className="px-3 py-2 text-sm font-semibold">
          {title}
        </SidebarHeader>
      )}

      <SidebarContent>{children}</SidebarContent>

      {footer && <SidebarFooter>{footer}</SidebarFooter>}
    </Sidebar>
  );
};

DsSidebar.displayName = "DsSidebar";
export { SidebarProvider, SidebarTrigger };
