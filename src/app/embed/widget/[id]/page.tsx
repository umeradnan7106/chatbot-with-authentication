// src/app/embed/widget/[id]/page.tsx

"use client";

import { useParams } from "next/navigation";
import ChatbotClientWrapper from "@/components/ChatbotClientWrapper";

export default function EmbeddedChatbotPage() {
  const { id } = useParams();

  return (
    <div>
      
      <ChatbotClientWrapper chatbotId={id as string} />
    </div>
  );
}
