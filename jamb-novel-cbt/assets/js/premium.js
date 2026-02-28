/* ====================================
   premium.js — Upgrade to Premium Logic
   ==================================== */

// ================================
// Premium Access Codes (Admin Only)
// ================================
const validCodes = [
  "PREM2026", "JAMBSTAR1", "CBTPLUS2",
  "GX9K47QP", "MZT82YJL", "P3QF9XAR", "KJ2R6WVT", "R8YHZ3ND",
  "TLM4X9VE", "HQ57JZPC", "W84Q2BKR", "Y3J9XPLT", "NQ2V5KZH",
  "ZKP39RVA", "R5TQL7WB", "FD6XJ9SM", "L3M2P8QT", "VJ7K9RFX",
  "BX6Y2DQL", "JZR54KMW", "KX8T2VGH", "C9QJ7PLF", "T8W3V6XR",
  "PQ7L4KDM", "MXF9H2RQ", "H9N2Y4CL", "WQ8J7TRK", "FG4X3LPM",
  "R2D5K6QZ", "T7J9W3XP", "LK9F8QHM", "BZ2P7TRN", "GJ3X5LQY",
  "X9N6K2VH", "DQ8J4WTP", "M4F2R6KC", "RZ9Y7QDL", "HV3N6PJB",
  "T8K5X9LM", "PQ3L7YRN", "JX6Z4KQD", "WN2F8TRL", "KQ9R6ZHP",
  "R7M8Q2LF", "FG5Y9PXC", "Q8K3T4LW", "VZ2R9JPM", "HX6L8QDY",
  "C4N7Z5RP", "MW3T8JQL", "NQ5V6KLR", "R2J9Y7XP", "LZ4M3QKD",
  "TP8W5HFR", "QK6L9ZPM", "R7Y2D4TX", "F3N8Q6JV", "JK9L2WRX",
  "GZ5P7MHT", "N3Q6V9LR", "W4T8K2JP", "H9L5Y7MQ", "RB3F6XND",
  "Q8P9Z3KW", "TJ2V5HQL", "MX7R6DYP", "LK8N3QJR", "WZ4H5LTP",
  "FG9R2KXM", "QJ5L7VYH", "X3T8K2RN", "PB6Q9ZWM", "M4L2J5TR",
  "HY7V9KQP", "NZ8L3WDF", "RK5Q6XTM", "TJ9M2PHL", "FG2R4KVC",
  "Q8Y3L6XP", "VW7N5JRD", "HZ9Q2TMP", "ML3K8FYW", "NP5J6VHR",
  "R4L9XZQM", "QJ7K3TWP", "HF6Y8LNR", "BD2P9VQC", "ZK3L5MWT",
  "RY7N2HXP", "LQ8V4KJM", "TW9F6PRC", "XM5J3ZHQ", "GN2R8VLY",
  "Q6K9TPWR", "HF4M8LYZ", "WJ7N3QPR", "RP9L6KTY", "BZ3M4QXF",
  "GX8V7RLP", "KJ9Q2TFW", "MC6L5YNR", "H8X4PQZT", "RF7N3LWK"
];
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
