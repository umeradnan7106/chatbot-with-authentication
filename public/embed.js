(function () {
  // Create chatbot button
  const chatButton = document.createElement("button");
  chatButton.innerHTML = "💬";
  chatButton.id = "custom-chatbot-btn";
  chatButton.style.position = "fixed";
  chatButton.style.bottom = "20px";
  chatButton.style.right = "20px";
  chatButton.style.zIndex = "9999";
  chatButton.style.borderRadius = "50%";
  chatButton.style.padding = "15px";
  chatButton.style.border = "none";
  chatButton.style.background = "#007bff";
  chatButton.style.color = "#fff";
  chatButton.style.fontSize = "24px";
  chatButton.style.cursor = "pointer";
  document.body.appendChild(chatButton);

  // Create iframe container
  const iframe = document.createElement("iframe");
  iframe.src = "https://chatbot-with-authentication.vercel.app/chat";
  iframe.style.position = "fixed";
  iframe.style.bottom = "80px";
  iframe.style.right = "20px";
  iframe.style.width = "360px";
  iframe.style.height = "500px";
  iframe.style.border = "1px solid #ccc";
  iframe.style.borderRadius = "10px";
  iframe.style.zIndex = "9998";
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  // Toggle chatbot
  chatButton.addEventListener("click", () => {
    iframe.style.display = iframe.style.display === "none" ? "block" : "none";
  });
})();
