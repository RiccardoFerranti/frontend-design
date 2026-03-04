import { Button } from "@workspace/ui/components/button";
import { DsButton } from "@workspace/design-system";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <div className="flex gap-2">
          <Button>Button</Button>
          <DsButton>DsButton</DsButton>
          <Button variant="outline">Outline</Button>
        </div>
      </div>
    </div>
  );
}
