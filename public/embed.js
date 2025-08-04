// public/embed.js
(function () {
  const iframe = document.createElement('iframe');
  iframe.src = "https://chatbot-intigration.vercel.app/embed";
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "370px";
  iframe.style.height = "500px";
  iframe.style.border = "none";
  iframe.style.zIndex = "99999";
  document.body.appendChild(iframe);
})();
