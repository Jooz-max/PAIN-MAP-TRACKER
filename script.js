fufunction showPainMap() {
  document.getElementById("mainMenu").style.display = "none";
  document.getElementById("painMapSection").style.display = "block";
}

function goHome() {
  document.getElementById("painMapSection").style.display = "none";
  document.getElementById("mainMenu").style.display = "block";
  document.getElementById("painInfo").style.display = "none";
}

function showPainInfo(part) {
  const reasons = {
    Head: {
      reason: "Possible cause: Headache due to stress, dehydration, or tension.",
      suggestion: "Try resting in a quiet room and drink water."
    },
    Chest: {
      reason: "Possible cause: Chest pain from anxiety, heartburn, or strain.",
      suggestion: "Take deep breaths or consult a doctor if severe."
    },
    Stomach: {
      reason: "Possible cause: Indigestion, gas, or mild food poisoning.",
      suggestion: "Drink warm water or eat light foods."
    },
    Legs: {
      reason: "Possible cause: Fatigue, overuse, or poor circulation.",
      suggestion: "Elevate legs and massage gently."
    }
  };

  document.getElementById("areaTitle").innerText = part;
  document.getElementById("reason").innerText = reasons[part].reason;
  document.getElementById("suggestion").innerText = reasons[part].suggestion;
  document.getElementById("painInfo").style.display = "block";
}￼Enter
