// Button Click
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("🎉 Button was clicked!");
});

// Hover Box
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "lightgreen";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "lightblue";
});

// Keypress Detection
document.addEventListener("keydown", (e) => {
  console.log(`You pressed: ${e.key}`);
});

// Secret Button: Double Click and Long Press
const secretBtn = document.getElementById("secretBtn");
secretBtn.addEventListener("dblclick", () => {
  alert("🤫 Secret double-click action triggered!");
});

let pressTimer;
secretBtn.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => {
    alert("🔥 Long press activated!");
  }, 1000);
});
secretBtn.addEventListener("mouseup", () => {
  clearTimeout(pressTimer);
});

// Button that Changes Text/Color
document.getElementById("changeBtn").addEventListener("click", (e) => {
  e.target.textContent = "Changed!";
  e.target.style.backgroundColor = "#f39c12";
});

// Image Gallery
const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3"
];
let imgIndex = 0;
document.getElementById("nextImg").addEventListener("click", () => {
  imgIndex = (imgIndex + 1) % images.length;
  document.getElementById("galleryImg").src = images[imgIndex];
});

// Tabs
document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    const tabNum = button.getAttribute("data-tab");
    document.querySelectorAll(".tab-content").forEach((el) => (el.style.display = "none"));
    document.getElementById(`tabContent${tabNum}`).style.display = "block";
  });
});

// Form Validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("formFeedback");

  const emailValid = /\S+@\S+\.\S+/.test(email);
  const passwordValid = password.length >= 8;

  if (!emailValid) {
    feedback.textContent = "❌ Invalid email format.";
    return;
  }
  if (!passwordValid) {
    feedback.textContent = "❌ Password must be at least 8 characters.";
    return;
  }

  feedback.textContent = "✅ Form is valid!";
});

// Real-time password feedback
document.getElementById("password").addEventListener("input", (e) => {
  const feedback = document.getElementById("formFeedback");
  feedback.textContent =
    e.target.value.length < 8 ? "Password too short" : "Password looks good!";
});
