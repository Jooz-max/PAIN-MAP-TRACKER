function showPainMap() {
  document.getElementById("mainMenu").style.display = "none";
  document.getElementById("painMapScreen").style.display = "block";
}

function goBackHome() {
  document.getElementById("painMapScreen").style.display = "none";
  document.getElementById("mainMenu").style.display = "block";
}

function showPainInfo(part) {
  const painReasons = {
    Head: {
      reason: "Possible causes: Stress, dehydration, or lack of sleep.",
      suggestion: "Solution: Drink water, rest, and consider pain relief if needed."
    },
    Chest: {
      reason: "Possible causes: Anxiety, indigestion, or muscle strain.",
      suggestion: "Solution: Relax, breathe slowly, and avoid heavy meals."
    },
    Stomach: {
      reason: "Possible causes: Indigestion, food poisoning, or gas.",
      suggestion: "Solution: Eat light, drink warm water, and rest."
    },
    Legs: {
      reason: "Possible causes: Fatigue, strain, or circulation issues.",
      suggestion: "Solution: Elevate legs, stretch, and rest well."
    }
  };

  document.getElementById("areaTitle").innerText = part + " Pain";
  document.getElementById("reason").innerText = painReasons[part].reason;
  document.getElementById("suggestion").innerText = painReasons[part].suggestion;
  document.getElementById("painInfo").style.display = "block";
}

function hidePainInfo() {
  document.getElementById("painInfo").style.display = "none";
}

function savePainLog() {
  const title = document.getElementById("areaTitle").innerText;
  const reason = document.getElementById("reason").innerText;
  const suggestion = document.getElementById("suggestion").innerText;

  const listItem = document.createElement("li");
  listItem.textContent = `${title} - ${reason} | ${suggestion}`;
  document.getElementById("logList").appendChild(listItem);

  hidePainInfo();
}￼Enter
