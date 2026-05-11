document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // When element enters viewport
        if (entry.isIntersecting) {
          entry.target.classList.add("active");

          // Stop observing after animation triggers
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15, // Trigger when 15% visible
    },
  );

  reveals.forEach((el) => observer.observe(el));
});

const btn = document.getElementById("whatsappBtn");

setInterval(() => {
  btn.classList.add("animate-ping");

  setTimeout(() => {
    btn.classList.remove("animate-ping");
  }, 500);
}, 500);
