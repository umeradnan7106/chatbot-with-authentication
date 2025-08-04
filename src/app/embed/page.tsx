// app/embed/page.tsx
'use client'

import ChatbotClientWrapper from '@/components/ChatbotClientWrapper'

export default function EmbedPage() {
  return (
    <div className="h-screen w-screen bg-transparent">
      <ChatbotClientWrapper chatbotId="your-default-id" />
    </div>
  )
}
