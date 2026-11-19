const roles = document.querySelectorAll(".role");
let activeRole = "Student";
roles.forEach(button => button.addEventListener("click", () => {
  roles.forEach(item => item.classList.remove("selected"));
  button.classList.add("selected");
  activeRole = button.dataset.role;
}));
const phoneForm = document.getElementById("phone-form");
const otpForm = document.getElementById("otp-form");
const phoneInput = document.getElementById("phone");
const phoneMessage = document.getElementById("phone-message");
const otpMessage = document.getElementById("otp-message");
phoneInput.addEventListener("input", () => phoneInput.value = phoneInput.value.replace(/\D/g,"").slice(0,10));
phoneForm.addEventListener("submit", event => {
  event.preventDefault();
  const number = phoneInput.value.trim();
  if (!/^[6-9]\d{9}$/.test(number)) {
    phoneMessage.textContent = "Enter a valid 10-digit Indian mobile number.";
    return;
  }
  phoneMessage.textContent = "";
  document.getElementById("masked-number").textContent = "+91 " + number.slice(0,2) + "••••••" + number.slice(-2);
  phoneForm.classList.add("hidden");
  otpForm.classList.remove("hidden");
});
document.getElementById("back").addEventListener("click", () => {
  otpForm.classList.add("hidden");
  phoneForm.classList.remove("hidden");
  otpMessage.textContent = "";
});
document.getElementById("otp").addEventListener("input", event => event.target.value = event.target.value.replace(/\D/g,"").slice(0,6));
otpForm.addEventListener("submit", event => {
  event.preventDefault();
  otpMessage.textContent = "Demo only: real OTP authentication is not connected yet.";
});
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
