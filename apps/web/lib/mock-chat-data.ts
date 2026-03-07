export interface ChatMessage {
  content: string;
  id: string;
  role: "user" | "assistant";
}

export const mockChatData: ChatMessage[] = [
  {
    id: "1",
    role: "assistant",
    content:
      "Hi! I can help you review this lesson. What would you like to clarify?",
  },
  {
    id: "2",
    role: "user",
    content: "Can you summarize structured vs unstructured data?",
  },
  {
    id: "3",
    role: "assistant",
    content:
      "Structured data follows a predefined format like rows and columns. Unstructured data includes free-form content such as text, images, and videos.",
  },
  {
    id: "4",
    role: "user",
    content: "Where do spreadsheets fit in this?",
  },
  {
    id: "5",
    role: "assistant",
    content:
      "Spreadsheets like Excel typically store structured data because the information is organized in rows and columns.",
  },
  {
    id: "6",
    role: "user",
    content: "What about JSON?",
  },
  {
    id: "7",
    role: "assistant",
    content:
      "JSON is semi-structured. It has a defined structure but allows flexible nesting and varying fields.",
  },
  {
    id: "8",
    role: "user",
    content: "So text documents are unstructured?",
  },
  {
    id: "9",
    role: "assistant",
    content:
      "Yes. Plain text documents, PDFs, emails, and social media posts are usually considered unstructured data.",
  },
  {
    id: "10",
    role: "assistant",
    content:
      "In practice, many systems combine structured and unstructured data for analysis.",
  },
  {
    id: "11",
    role: "assistant",
    content:
      "For example, a customer support system may store structured ticket data and unstructured conversation logs.",
  },
];
