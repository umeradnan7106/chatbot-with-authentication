// src/app/embed/route.ts

import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // for hot reload in dev

export async function GET() {
  const jsCode = `
(function () {
  const chatbotId = "abc1234"; // You can make this dynamic per website

  // Styles
  const button = document.createElement("button");
  button.innerText = "💬 Chat";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.padding = "12px 16px";
  button.style.backgroundColor = "#0f172a";
  button.style.color = "#fff";
  button.style.border = "none";
  button.style.borderRadius = "50px";
  button.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
  button.style.cursor = "pointer";
  button.style.zIndex = "9999";

  // Chat window
  const chatWindow = document.createElement("div");
  chatWindow.style.position = "fixed";
  chatWindow.style.bottom = "80px";
  chatWindow.style.right = "20px";
  chatWindow.style.width = "320px";
  chatWindow.style.maxHeight = "400px";
  chatWindow.style.background = "#ffffff";
  chatWindow.style.border = "1px solid #ccc";
  chatWindow.style.borderRadius = "10px";
  chatWindow.style.padding = "10px";
  chatWindow.style.display = "none";
  chatWindow.style.zIndex = "9999";
  chatWindow.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
  chatWindow.style.overflow = "auto";
  chatWindow.innerHTML = \`
    <div style="font-weight:bold;margin-bottom:8px;">AI Assistant</div>
    <div id="chat-log" style="font-size: 14px; max-height: 250px; overflow-y: auto; margin-bottom: 10px;"></div>
    <input id="chat-input" placeholder="Type your question..." style="width: 100%; padding: 6px; border-radius: 6px; border: 1px solid #ccc;" />
  \`;

  document.body.appendChild(button);
  document.body.appendChild(chatWindow);

  // Toggle visibility
  button.addEventListener("click", () => {
    chatWindow.style.display = chatWindow.style.display === "none" ? "block" : "none";
  });

  const chatInput = chatWindow.querySelector("#chat-input");
  const chatLog = chatWindow.querySelector("#chat-log");

  chatInput.addEventListener("keydown", async (e) => {
    if (e.key === "Enter" && chatInput.value.trim()) {
      const userMessage = chatInput.value.trim();
      chatLog.innerHTML += \`<div><strong>You:</strong> \${userMessage}</div>\`;
      chatInput.value = "";

      try {
        const res = await fetch("${process.env.NEXT_PUBLIC_SITE_URL}/api/ask-question", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMessage, id: chatbotId }),
        });
        const data = await res.json();
        chatLog.innerHTML += \`<div><strong>Bot:</strong> \${data.reply}</div>\`;
        chatLog.scrollTop = chatLog.scrollHeight;
      } catch (err) {
        chatLog.innerHTML += \`<div style="color:red;">Error talking to bot.</div>\`;
      }
    }
  });
})();
  `.trim();

  return new NextResponse(jsCode, {
    status: 200,
    headers: {
      "Content-Type": "application/javascript",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
