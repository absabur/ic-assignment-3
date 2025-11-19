document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const menuIcon = document.getElementById("menuIcon");

  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
    // Toggle icon between hamburger and close
    if (mobileNav.classList.contains("hidden")) {
      menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />';
    } else {
      menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
    }
  });

  // const form = document.getElementById("contactForm");
  // const formMsg = document.getElementById("formMsg");

  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   formMsg.classList.remove("hidden");
  //   setTimeout(() => {
  //     formMsg.classList.add("hidden");
  //     form.reset();
  //   }, 2000);
  // });

  // Scroll reveal (optional)
  const reveals = document.querySelectorAll("section, .glass");
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-y-0");
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach(el => {
    el.classList.add("opacity-0", "translate-y-6", "transition", "duration-700", "ease-out");
    io.observe(el);
  });
});
