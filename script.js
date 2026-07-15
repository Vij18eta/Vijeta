// CUSTOM CURSOR
const cursorDot = document.querySelector(".cursor-dot");
window.addEventListener("mousemove", (e) => {
  if (!cursorDot) return;
  cursorDot.style.left = e.clientX + "px";
  cursorDot.style.top = e.clientY + "px";
});

// SCROLL REVEAL
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // if this element has butterfly effect, trigger it
        if (entry.target.dataset.butterfly === "true") {
          entry.target.classList.add("butterfly-fly");
        }

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealEls.forEach((el) => observer.observe(el));


// TILT EFFECT ON PROJECT CARDS
const tiltCards = document.querySelectorAll(".tilt");
tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 10;
    const rotateY = (x / rect.width) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

// CERTIFICATE CARD FLIP
function flipCert(card) {
  card.classList.toggle("flipped");
}

// SIMPLE CHAT WIDGET TOGGLE
const chatToggle = document.getElementById("chatToggle");
const chatWidget = document.getElementById("chatWidget");
const chatClose = document.getElementById("chatClose");

if (chatToggle && chatWidget && chatClose) {
  chatToggle.addEventListener("click", () => {
    chatWidget.style.display =
      chatWidget.style.display === "flex" ? "none" : "flex";
  });
  chatClose.addEventListener("click", () => {
    chatWidget.style.display = "none";
  });
}
