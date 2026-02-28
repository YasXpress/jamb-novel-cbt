/* ====================================
   performance.js — View past exam results
   ==================================== */

const performanceList = document.getElementById("performanceList");
const clearBtn = document.getElementById("clearBtn");

// Load last result (if any)
const lastResult = JSON.parse(localStorage.getItem("lastExamResult")) || null;
let allResults = JSON.parse(localStorage.getItem("examHistory")) || [];

// If user just finished an exam, save it to history
if (lastResult) {
  allResults.push({
    date: lastResult.date,
    score: lastResult.score,
    total: lastResult.total
  });
  localStorage.setItem("examHistory", JSON.stringify(allResults));
  localStorage.removeItem("lastExamResult"); // prevent duplicate
}

// Display results
if (allResults.length === 0) {
  performanceList.innerHTML = `<p class="empty">No past records yet. Take a test to see results here!</p>`;
} else {
  performanceList.innerHTML = allResults
    .map((res, i) => {
      const percent = ((res.score / res.total) * 100).toFixed(1);
      const grade = getGrade(percent);
      return `
        <div class="score-card">
          <h3>Attempt ${i + 1}</h3>
          <p>Date: ${res.date}</p>
          <p>Score: ${res.score}/${res.total} (${percent}%)</p>
          <p>Grade: <span class="grade ${grade}">${grade}</span></p>
        </div>
      `;
    })
    .join("");
}

// Function to get grade letter
function getGrade(pct) {
  if (pct >= 80) return "A";
  if (pct >= 65) return "B";
  if (pct >= 50) return "C";
  return "F";
}

// Clear all records
clearBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete all performance records?")) {
    localStorage.removeItem("examHistory");
    performanceList.innerHTML = `<p class="empty">All records cleared.</p>`;
  }
});