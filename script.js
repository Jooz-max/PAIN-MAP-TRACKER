functifunction showBodyMap() {
  document.getElementById("mainMenu").style.display = "none";
  document.getElementById("bodyScreen").style.display = "block";
}

function goHome() {
  document.getElementById("bodyScreen").style.display = "none";
  document.getElementById("mainMenu").style.display = "block";
}

function showPainInfo(part) {
  const info = {
    "Head": {
      reason: "Common causes: headache, stress, dehydration.",
      suggestion: "Rest, hydrate, and reduce screen time."
    },
    "Chest": {
      reason: "Common causes: anxiety, muscle strain, or indigestion.",
      suggestion: "Relax, breathe slowly, or seek medical help if sharp."
    },
    "Stomach": {
      reason: "Common causes: indigestion, hunger, or cramps.",
      suggestion: "Try a light meal, rest, or a warm drink."
    },
    "Legs": {
      reason: "Common causes: fatigue, cramps, or poor circulation.",
      suggestion: "Stretch, massage, or elevate your legs."
    }
  };

  const area = info[part];
  document.getElementById("areaTitle").innerText = part + " Pain";
  document.getElementById("reason").innerText = area.reason;
  document.getElementById("suggestion").innerText = area.suggestion;
  document.getElementById("painInfo").style.display = "block";
}

function hidePainInfo() {
  document.getElementById("painInfo").style.display = "none";
}

function savePainLog() {
  const logText = document.getElementById("areaTitle").innerText + ": " + document.getElementById("reason").innerText;
  const listItem = document.createElement("li");
  listItem.textContent = logText;
  document.getElementById("logList").appendChild(listItem);
  alert("Pain log saved.");
}￼Enter
