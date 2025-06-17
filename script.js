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
      suggestion: "Drink water and rest your eyes.",
      severity: "mild"
    },
    Eyes: {
      reason: "Possible cause: Eye strain or dryness.",
      suggestion: "Rest your eyes, use eye drops if needed.",
      severity: "mild"
    },
    Ears: {
      reason: "Possible cause: Ear infection or pressure buildup.",
      suggestion: "Avoid loud noise and consult a doctor if pain persists.",
      severity: "moderate"
    },
    Neck: {
      reason: "Possible cause: Muscle tension or poor posture.",
      suggestion: "Apply a warm compress and stretch gently.",
      severity: "moderate"
    },
    Chest: {
      reason: "Possible cause: Stress or heartburn.",
      suggestion: "Try deep breathing. Seek help if severe.",
      severity: "moderate"
    },
    Heart: {
      reason: "Possible cause: Palpitations or high blood pressure.",
      suggestion: "Rest and check your pulse. Seek medical help if it persists.",
      severity: "severe"
    },
    Respiratory: {
      reason: "Possible cause: Breathing issues or congestion.",
      suggestion: "Try deep breaths or steam inhalation. See a doctor if severe.",
      severity: "severe"
    },
    Stomach: {
      reason: "Possible cause: Indigestion or cramps.",
      suggestion: "Avoid spicy food and drink water.",
      severity: "moderate"
    },
    Back: {
      reason: "Possible cause: Muscle strain or poor posture.",
      suggestion: "Rest and apply a warm compress.",
      severity: "mild"
    },
    Hands: {
      reason: "Possible cause: Joint strain or overuse.",
      suggestion: "Rest hands, do gentle stretching.",
      severity: "mild"
    },
    Arms: {
      reason: "Possible cause: Muscle fatigue or tension.",
      suggestion: "Massage and rest your arms.",
      severity: "mild"
    },
    Legs: {
      reason: "Possible cause: Strain or poor circulation.",
      suggestion: "Elevate and massage gently.",
      severity: "moderate"
    },
    Feet: {
      reason: "Possible cause: Overuse or bad footwear.",
      suggestion: "Soak in warm water and rest.",
      severity: "mild"
    },
    Skin: {
      reason: "Possible cause: Allergic reaction or dryness.",
      suggestion: "Apply lotion or an antihistamine cream.",
      severity: "moderate"
    }
  };

  const severityEmojis = {
    mild: "🟢 Mild",
    moderate: "🟡 Moderate",
    severe: "🔴 Severe"
  };

  const severityColors = {
    mild: "lightgreen",
    moderate: "gold",
    severe: "lightcoral"
  };

  if (!info[part]) {
    console.warn(`No info found for part: ${part}`);
    return;
  }

  document.getElementById("areaTitle").innerText = part;
  document.getElementById("reason").innerText = info[part].reason;
  document.getElementById("suggestion").innerText = info[part].suggestion;

  // Show severity emoji
  document.getElementById("severity").innerText = severityEmojis[info[part].severity];

  // Color the info box
  const infoBox = document.getElementById("painInfo");
  infoBox.classList.remove('hidden');
  infoBox.style.border = `2px solid ${severityColors[info[part].severity]}`;
  infoBox.style.backgroundColor = `${severityColors[info[part].severity]}33`; // Light tone
      }
