function showSection(id) {
  const section = document.getElementById(id + 'Section');
  if (!section) return;
  
  section.classList.remove('hidden');
  document.getElementById('mainMenu').classList.add('hidden');
  
  // Hide pain info box if visible
  const painInfo = document.getElementById('painInfo');
  if (painInfo) painInfo.classList.add('hidden');
}

function goHome() {
  document.getElementById('painMapSection').classList.add('hidden');
  document.getElementById('mainMenu').classList.remove('hidden');
  
  // Hide pain info box
  const painInfo = document.getElementById('painInfo');
  if (painInfo) painInfo.classList.add('hidden');
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
    Stomach: {
      reason: "Possible cause: Indigestion or cramps.",
      suggestion: "Avoid spicy food and drink water."
    },
    Legs: {
      reason: "Possible cause: Strain or poor circulation.",
      suggestion: "Elevate and massage gently."
    }
  };

  if (!info[part]) {
    alert(`No info found for ${part}`);
    return;
  }

  document.getElementById('areaTitle').innerText = part;
  document.getElementById('reason').innerText = info[part].reason;
  document.getElementById('suggestion').innerText = info[part].suggestion;

  document.getElementById('painInfo').classList.remove('hidden');
    }
