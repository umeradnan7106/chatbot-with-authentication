'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { EmojiClickData } from 'emoji-picker-react'

type Props = {
  chatbotId: string
}

type Message = {
  from: 'user' | 'bot'
  text: string
}

const suggestedQuestions = [
  'Can you tell me more about this website?',
  'What services or features do you provide?',
  'How can I get in touch with you?',
  'Do you offer support or help for visitors?',
]

const EmojiPicker = dynamic(() => import('emoji-picker-react'), { ssr: false })

export default function ChatbotClientWrapper({ chatbotId }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: '👋 Hi there! How can I help you today?' },
  ])
  const [input, setInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // 🚀 Handle message send
  const sendMessage = async (textToSend?: string) => {
    const message = textToSend ?? input.trim()
    if (!message || !chatbotId) return

    const userMessage: Message = { from: 'user', text: message }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/ask-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: chatbotId, message }),
      })

      const data = await res.json()
      const botMessage: Message = {
        from: 'bot',
        text: data.reply ?? '🤖 Sorry, no response received.',
      }
      setMessages((prev) => [...prev, botMessage])
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: '⚠️ Something went wrong. Please try again.' },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  // 🚀 Handle Enter key send
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage()
  }

  // 😄 Emoji selection handler
  const onEmojiClick = (emojiData: EmojiClickData) => {
    setInput((prev) => prev + emojiData.emoji)
    setShowEmojiPicker(false)
  }

  // 🔽 Auto-scroll on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <>
      {/* 💬 Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-black text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
      >
        💬
      </button>

      {/* 🪟 Chatbox Modal */}
      {isOpen && (
        <div className="fixed bottom-[90px] right-6 w-[95%] max-w-sm h-[66vh] bg-white shadow-2xl rounded-xl flex flex-col z-50">

          {/* 🧠 Header */}
          <div className="bg-black text-white px-4 py-3 font-semibold flex justify-between items-center rounded-t-xl">
            <span>ChatBot Assistant</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          {/* 💬 Chat Area */}
          <div className="flex-1 overflow-y-auto p-3 bg-gray-100 space-y-2">

            {/* 📝 Suggested Questions */}
            <div className="mb-2 flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => sendMessage(question)}
                  disabled={isLoading}
                  className="text-xs bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300 transition"
                >
                  {question}
                </button>
              ))}
            </div>

            {/* 📥 Messages */}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-lg px-4 py-2 max-w-[75%] whitespace-pre-line text-sm ${
                  msg.from === 'user'
                    ? 'bg-black text-white'
                    : 'bg-white text-black border'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* ✍️ Typing indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-black border px-4 py-2 rounded-lg text-sm">
                  Typing...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* 🔤 Input Section */}
          <div className="border-t p-3 flex items-center gap-2 relative">
            {/* 😊 Emoji Button */}
            <button onClick={() => setShowEmojiPicker((prev) => !prev)} className="text-xl">
              😊
            </button>

            {/* Emoji Picker UI */}
            {showEmojiPicker && (
              <div className="absolute bottom-14 left-0 z-50">
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}

            {/* Input Field */}
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              className="flex-1 p-2 text-sm border rounded-md"
            />

            {/* Send Button */}
            <button
              onClick={() => sendMessage()}
              disabled={isLoading}
              className="bg-black text-white px-3 py-2 rounded-md disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  )
}
