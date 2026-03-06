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
    children: [],
  },

  {
    id: "m0",
    label: "M0. Fundamentals",
    icon: Box,
    children: [
      {
        id: "m0-intro-data",
        label: "Introduzione al mondo dei dati",
        icon: BookOpen,
        children: [
          {
            id: "m0-intro-data-video",
            label: "Video",
            icon: Video,
            children: [
              {
                id: "m0-intro-data-video-1",
                label: "1. Intro all'analisi dei dati (1)",
                icon: Video,
                href: "/lms?lesson=m0-intro-data-video-1",
                status: "completed",
              },
              {
                id: "m0-intro-data-video-2",
                label: "2. Intro all'analisi dei dati (2)",
                icon: Video,
                href: "/lms?lesson=m0-intro-data-video-2",
                status: "in-progress",
              },
              {
                id: "m0-intro-data-video-3",
                label: "3. Analisi dati",
                icon: Video,
                href: "/lms?lesson=m0-intro-data-video-3",
                status: "new",
              },
              {
                id: "m0-intro-data-video-4",
                label: "4. Gestione dati",
                icon: Video,
                href: "/lms?lesson=m0-intro-data-video-4",
                status: "locked",
              },
            ],
          },
          {
            id: "m0-intro-data-theory",
            label: "Teoria",
            icon: FileText,
            children: [
              {
                id: "m0-intro-data-theory-dati-1",
                label: "Dati 1",
                icon: FileText,
                href: "/lms?lesson=m0-intro-data-theory-dati-1",
                status: "in-progress",
              },
            ],
          },
        ],
      },

      {
        id: "m0-prof-figures",
        label: "Figure professionali & Open Data",
        icon: BookOpen,
        status: "new",
        children: [],
      },

      {
        id: "m0-business-intelligence",
        label: "Business intelligence",
        icon: BookOpen,
        status: "new",
        children: [],
      },

      {
        id: "m0-excel",
        label: "Excel",
        icon: BookOpen,
        status: "new",
        children: [],
      },

      {
        id: "m0-exam",
        label: "Esame finale",
        icon: BookOpen,
        status: "locked",
        children: [],
      },
    ],
  },

  {
    id: "m1",
    label: "M1. Excel: febbraio 9 - marzo 13",
    icon: Box,
    status: "new",
    children: [],
  },

  {
    id: "m2",
    label: "M2: marzo 16 - aprile 17",
    icon: Box,
    status: "locked",
    children: [],
  },

  {
    id: "m3",
    label: "M3. aprile 20 - maggio 22",
    icon: Box,
    status: "locked",
    children: [],
  },

  {
    id: "m4",
    label: "M4. Google Looker Studio: maggio",
    icon: Box,
    status: "locked",
    children: [],
  },

  {
    id: "m5",
    label: "M5. Power BI: giugno 15 - luglio 17",
    icon: Box,
    status: "locked",
    children: [],
  },

  {
    id: "capstone",
    label: "Capstone Project & Career Training",
    icon: Box,
    children: [],
  },
];