funcfunction showSection(id) {
  const sectionId = `${id}Section`;
  const el = document.getElementById(sectionId);
  if (el) el.style.display = 'block';

  document.getElementById("mainMenu").style.display = 'none';
}

function goHome() {
  document.getElementById("painMapSection").style.display = 'none';
  document.getElementById("mainMenu").style.display = 'block';
  document.getElementById("painInfo").classList.add('hidden');
}

function showPainInfo(part) {
  const info = {
    Head: {
      reason: "Possible cause: Headache due to tension or dehydration.",
      suggestion: "Drink water and rest your eyes."
    },
    Chest: {
      reason: "Possible cause: Stress or heartburn.",
      suggestion: "Try deep breathing. Seek help if severe."
    },
    Heart: {
      reason: "Possible cause: Palpitations or high blood pressure.",
      suggestion: "Rest and check your pulse. Seek medical help if it persists."
    },
    Stomach: {
      reason: "Possible cause: Indigestion or cramps.",
      suggestion: "Avoid spicy food and drink water."
    },
    Respiratory: {
      reason: "Possible cause: Breathing issues or congestion.",
      suggestion: "Try deep breaths or steam inhalation. See a doctor if severe."
    },
    Hands: {
      reason: "Possible cause: Joint strain or overuse.",
      suggestion: "Rest hands, do gentle stretching."
    },
    Legs: {
      reason: "Possible cause: Strain or poor circulation.",
      suggestion: "Elevate and massage gently."
    }
  };

  if (!info[part]) {
    console.warn(`No info found for part: ${part}`);
    return;
  }

  document.getElementById("areaTitle").innerText = part;
  document.getElementById("reason").innerText = info[part].reason;
  document.getElementById("suggestion").innerText = info[part].suggestion;
  document.getElementById("painInfo").classList.remove('hidden');
}￼Enter
