// app/chat/page.tsx
"use client";

import React from "react";

export default function ChatPage() {
  return (
    <div style={{ padding: "1rem", height: "100%", background: "#f5f5f5" }}>
      <h2>🤖 Welcome to the Chatbot</h2>
      {/* Replace this with your chatbot component */}
      <div
        style={{
          marginTop: "20px",
          height: "400px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          background: "#fff",
          overflowY: "auto",
        }}
      >
        <p><strong>Chatbot:</strong> Hello! How can I help you today?</p>
      </div>
    </div>
  );
}
