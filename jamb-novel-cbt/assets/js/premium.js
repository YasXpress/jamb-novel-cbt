/* ====================================
   premium.js — Upgrade to Premium Logic
   ==================================== */

const validCodes = ["PREM2026", "JAMBSTAR1", "CBTPLUS2"]; // admin list
const verifyBtn = document.getElementById("verifyBtn");
const successBox = document.getElementById("successBox");

verifyBtn.addEventListener("click", () => {
  const userCode = document.getElementById("premiumCode").value.trim();

  if (validCodes.includes(userCode)) {
    localStorage.setItem("isPremium", "true");
    successBox.style.display = "block";
    verifyBtn.disabled = true;
    verifyBtn.textContent = "Verified ✅";
  } else {
    alert("❌ Invalid code! Please check and try again.");
  }
});