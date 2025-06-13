const embeds = [
  "https://www.eporner.com/embed/DILr0schJYd/",
  "https://www.eporner.com/embed/XTXB9hyaDen/",
  "https://www.eporner.com/embed/VnYFX5PjeAF/",
  "https://www.eporner.com/embed/XTXB9hyaDen/",
  "https://www.eporner.com/embed/0i3lXywZxls/"
];

const container = document.getElementById("reels-container");

embeds.forEach((src, index) => {
  const div = document.createElement("div");
  div.className = "reel";
  div.innerHTML = `<iframe id="reel-${index}" src="${src}?autoplay=1&mute=1" allow="autoplay; fullscreen"></iframe>`;
  container.appendChild(div);
});

// Pause videos out of view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const iframe = entry.target;
    iframe.contentWindow.postMessage(
      JSON.stringify({
        event: entry.isIntersecting ? "play" : "pause"
      }),
      "*"
    );
  });
}, {
  threshold: 0.8
});

window.addEventListener("load", () => {
  document.querySelectorAll("iframe").forEach(iframe => {
    observer.observe(iframe);
  });
});
