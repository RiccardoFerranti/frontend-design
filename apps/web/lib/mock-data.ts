import {
  BookOpen,
  Box,
  GraduationCap,
  Video,
  FileText,
} from "lucide-react";

export type NodeStatus = "completed" | "in-progress" | "locked" | "new";

export type NavNode = {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  href?: string;
  status?: NodeStatus;
  children?: NavNode[];
};

export const courseTree: NavNode[] = [
  {
    id: "welcome",
    label: "Welcome: Data Analyst",
    icon: GraduationCap,
    children: []
  },

  {
    id: "m0",
    label: "M0. Fundamentals",
    icon: Box,
    children: [
      {
        id: "intro-data",
        label: "Introduzione al mondo dei dati",
        icon: BookOpen,
        children: [
          {
            id: "video",
            label: "Video",
            icon: Video,
            children: [
              {
                id: "v1",
                label: "1. Intro all'analisi dei dati (1)",
                icon: Video,
                href: "/lesson/v1",
                status: "completed"
              },
              {
                id: "v2",
                label: "2. Intro all'analisi dei dati (2)",
                icon: Video,
                href: "/lesson/v2",
                status: "in-progress"
              },
              {
                id: "v3",
                label: "3. Analisi dati",
                icon: Video,
                href: "/lesson/v3",
                status: "new"
              },
              {
                id: "v4",
                label: "4. Gestione dati",
                icon: Video,
                href: "/lesson/v4",
                status: "locked"
              }
            ]
          },
          {
            id: "theory",
            label: "Teoria",
            icon: FileText,
            children: [
              {
                id: "dati-1",
                label: "Dati 1",
                icon: FileText,
                href: "/lesson/dati-1",
                status: "in-progress"
              }
            ]
          }
        ]
      },

      {
        id: "prof-figures",
        label: "Figure professionali & Open Data",
        icon: BookOpen,
        status: "new",
        children: []
      },

      {
        id: "business-intelligence",
        label: "Business intelligence",
        icon: BookOpen,
        status: "new",
        children: []
      },

      {
        id: "excel",
        label: "Excel",
        icon: BookOpen,
        status: "new",
        children: []
      },

      {
        id: "exam",
        label: "Esame finale",
        icon: BookOpen,
        status: "locked",
        children: []
      }
    ]
  },

  {
    id: "m1",
    label: "M1. Excel: febbraio 9 - marzo 13",
    icon: Box,
    status: "new",
    children: []
  },

  {
    id: "m2",
    label: "M2: marzo 16 - aprile 17",
    icon: Box,
    status: "locked",
    children: []
  },

  {
    id: "m3",
    label: "M3. aprile 20 - maggio 22",
    icon: Box,
    status: "locked",
    children: []
  },

  {
    id: "m4",
    label: "M4. Google Looker Studio: maggio",
    icon: Box,
    status: "locked",
    children: []
  },

  {
    id: "m5",
    label: "M5. Power BI: giugno 15 - luglio 17",
    icon: Box,
    status: "locked",
    children: []
  },

  {
    id: "capstone",
    label: "Capstone Project & Career Training",
    icon: Box,
    children: []
  }
];