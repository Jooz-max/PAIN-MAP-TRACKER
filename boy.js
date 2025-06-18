let currentPart = null;
let currentInfo = '';

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
  alert("Back to menu (functionality to implement)");
}￼Enter
