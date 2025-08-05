// Server-side page to render *only* the ChatbotClientWrapper (no navbar etc)
import ChatbotClientWrapper from "@/components/ChatbotClientWrapper";

export default function EmbedPage() {
  return (
    <div className="relative">
      {/* Hardcoded ID for now, can be dynamic later */}
      <ChatbotClientWrapper chatbotId="abc1234" />
    </div>
  );
}
