import { DsBadge } from "@workspace/design-system";

export default function LmsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Lesson Title</h1>
      <p className="text-muted-foreground">Lesson content placeholder</p>
      <DsBadge status="completed">Completed</DsBadge>
      <DsBadge status="in-progress">In progress</DsBadge>
      <DsBadge status="locked">Locked</DsBadge>
      <DsBadge status="new">New</DsBadge>
    </div>
  );
}
