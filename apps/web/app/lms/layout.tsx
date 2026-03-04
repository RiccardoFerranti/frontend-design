import { LMSWrapper } from "@/app/lms/components/lms-wrapper";
import { ReactNode } from "react";

type LMSLayoutProps = {
  children: ReactNode;
};

export default function LMSLayout({ children }: LMSLayoutProps) {
  return <LMSWrapper>{children}</LMSWrapper>;
}
