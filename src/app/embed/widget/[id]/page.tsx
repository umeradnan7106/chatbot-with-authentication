// src/app/embed/widget/[id]/page.tsx

'use client'

import { useParams } from 'next/navigation'
import ChatbotClientWrapper from '@/components/ChatbotClientWrapper'

export default function EmbeddedChatbotPage() {
  const { id } = useParams()

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[350px] h-[500px] shadow-lg rounded-xl overflow-hidden border border-gray-300 bg-white">
      <div className="bg-blue-600 text-white p-2 text-center font-semibold">
        Chatbot for: {id}
      </div>
      <ChatbotClientWrapper chatbotId={id as string}/>
    </div>
  )
}
