console.log("boy.js loaded ✅");

let currentPart = null;
let currentInfo = '';

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Ready ✅");

  document.querySelectorAll("area").forEach(area => {
    area.addEventListener("click", e => {
      e.preventDefault();
      const part = area.dataset.part;
      showInfo(part);
    });
  });

  document.getElementById("saveBtn").addEventListener("click", saveEntry);
  document.getElementById("backBtn").addEventListener("click", goBack);
});

function showInfo(part) {
  const info = {
    "Head": "Headache? Dizzy? Any head-related issues?",
    "Neck": "Neck pain or stiffness?",
    "Torso": "Any chest or stomach discomfort?",
    "Left Arm": "Pain or weakness in your left arm?",
    "Right Arm": "Pain or numbness in your right arm?",
    "Left Leg": "Left leg pain or cramps?",
    "Right Leg": "Right leg discomfort?",
    "Reproductive": "Any unusual pain or concerns there?"
  };
  currentPart = part;
  currentInfo = info[part] || "Tapped an unknown area.";
  document.getElementById("infoBox").textContent = currentInfo;
}

function saveEntry() {
  if (!currentPart) {
    alert("Please tap a body part first!");
    return;
  }
  const entries = JSON.parse(localStorage.getItem('painEntries') || '[]');
  entries.push({ part: currentPart, info: currentInfo, date: new Date().toISOString() });
  localStorage.setItem('painEntries', JSON.stringify(entries));
  alert(`Saved entry for ${currentPart}`);
}

function goBack() {
  currentPart = null;
  currentInfo = '';
  document.getElementById("infoBox").textContent = "Tap a body part";
  alert("Back to menu (you can link this to your homepage)");
                                            }
