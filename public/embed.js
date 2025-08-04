// public/embed.js

(function () {
  // Check if already injected
  if (document.getElementById("custom-chatbot-iframe")) return;

  // Create iframe
  const iframe = document.createElement("iframe");
  iframe.src = "https://chatbot-with-authentication.vercel.app/chat";
  iframe.id = "custom-chatbot-iframe";

  // Style the iframe (bottom right corner floating)
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "350px";
  iframe.style.height = "500px";
  iframe.style.border = "none";
  iframe.style.borderRadius = "12px";
  iframe.style.zIndex = "9999";
  iframe.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";

  // Append iframe to body
  document.body.appendChild(iframe);
})();
