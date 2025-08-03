document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const sidebar = document.querySelector(".sidebar");
  const themeToggle = document.getElementById("theme-toggle");

  // 1. Toggle sidebar on mobile
  menuBtn.addEventListener("click", () => {
    if (sidebar.style.display === "flex") {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "flex";
    }
  });

  // 2. Hide sidebar when any link is clicked
  const sidebarLinks = sidebar.querySelectorAll("a");
  sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
      sidebar.style.display = "none";
    });
  });

  // 3. Toggle dark/light theme
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    // Save preference
    const currentTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
  });

  // 4. Load saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
});
