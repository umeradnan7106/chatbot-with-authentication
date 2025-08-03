(function () {
  const chatbotId = document.currentScript.getAttribute("data-chatbot-id") || 'default-bot';

  // 💬 Floating Chat Button
  const button = document.createElement("div");
  button.innerHTML = "💬";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.width = "50px";
  button.style.height = "50px";
  button.style.backgroundColor = "#2563EB";
  button.style.color = "white";
  button.style.borderRadius = "50%";
  button.style.display = "flex";
  button.style.alignItems = "center";
  button.style.justifyContent = "center";
  button.style.cursor = "pointer";
  button.style.zIndex = "999999";
  button.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
  document.body.appendChild(button);

  // 📦 Iframe Container (hidden)
  const iframeContainer = document.createElement("div");
  iframeContainer.style.position = "fixed";
  iframeContainer.style.bottom = "80px";
  iframeContainer.style.right = "20px";
  iframeContainer.style.width = "350px";
  iframeContainer.style.height = "500px";
  iframeContainer.style.border = "1px solid #ccc";
  iframeContainer.style.borderRadius = "12px";
  iframeContainer.style.overflow = "hidden";
  iframeContainer.style.display = "none";
  iframeContainer.style.zIndex = "999999";
  document.body.appendChild(iframeContainer);

  // 🌐 Iframe
  const iframe = document.createElement("iframe");
  iframe.src = `https://chatbot-integration.vercel.app/embed/widget/${chatbotId}`;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframeContainer.appendChild(iframe);

  // 👇 Toggle Iframe Visibility
  button.addEventListener("click", () => {
    iframeContainer.style.display =
      iframeContainer.style.display === "none" ? "block" : "none";
  });
})();
