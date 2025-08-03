(function () {
  const BOT_ID = "__BOT_ID__";
  const iframe = document.createElement("iframe");
  iframe.src = `https://yourdomain.com/embed/widget/${BOT_ID}`;
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "350px";
  iframe.style.height = "500px";
  iframe.style.border = "none";
  iframe.style.zIndex = "9999";
  iframe.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
  iframe.setAttribute("title", "Chatbot");
  document.body.appendChild(iframe);
})();
