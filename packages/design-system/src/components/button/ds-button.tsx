import * as React from "react";
import { Button } from "@workspace/ui/components/button";

export type DsButtonProps = React.ComponentPropsWithoutRef<typeof Button>;

export const DsButton = React.forwardRef<
  React.ComponentRef<typeof Button>,
  DsButtonProps
>((props, ref) => {
  return <Button ref={ref} {...props} />;
});

DsButton.displayName = "DsButton";
