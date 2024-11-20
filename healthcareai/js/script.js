const hamburgerIcon = document.getElementById("hamburger");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");
const mobileMenu = document.getElementById("mobile-menu");

function closeMobileMenu() {
  mobileMenu.style.width = "0";
  mobileMenu.classList.add("hidden");
  overlay.style.display = "none";
}

function openMobileMenu() {
  mobileMenu.classList.remove("hidden");
  mobileMenu.style.width = "25rem";
  overlay.style.display = "block";
  mobileMenu.style.display = "block";
}

overlay.addEventListener("click", closeMobileMenu);
closeMenu.addEventListener("click", closeMobileMenu);
hamburgerIcon.addEventListener("click", openMobileMenu);

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const tabBtns = document.querySelectorAll(".tab-btn");

// Tab switching
tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabName = btn.dataset.tab;
    tabBtns.forEach((b) => b.classList.remove("active-tab"));
    btn.classList.add("active-tab");
    if (tabName === "login") {
      loginForm.classList.remove("hidden");
      signupForm.classList.add("hidden");
    } else {
      loginForm.classList.add("hidden");
      signupForm.classList.remove("hidden");
    }
  });
});
