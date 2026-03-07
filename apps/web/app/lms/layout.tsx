import type { ReactNode } from "react";
import { LMSWrapper } from "@/app/lms/components/lms-wrapper";

interface LMSLayoutProps {
  children: ReactNode;
}

export default function LMSLayout({ children }: LMSLayoutProps) {
  return <LMSWrapper>{children}</LMSWrapper>;
}
