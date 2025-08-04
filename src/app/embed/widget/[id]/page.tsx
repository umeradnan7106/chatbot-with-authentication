"use client";
import { useParams } from "next/navigation";
import ChatbotClientWrapper from "@/components/ChatbotClientWrapper";

export default function Page() {
  const { id } = useParams();

  return <ChatbotClientWrapper chatbotId={id as string} />;
}
