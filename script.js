funcfunction showSection(id) {
  const sectionId = `${id}Section`;
  const el = document.getElementById(sectionId);
  if (el) el.classList.remove('hidden');

  document.getElementById("mainMenu").classList.add('hidden');
}

function goHome() {
  document.getElementById("painMapSection").classList.add('hidden');
  document.getElementById("mainMenu").classList.remove('hidden');
  document.getElementById("painInfo").classList.add('hidden');
}

function showPainInfo(part) {
  const info = {
    Head: {
      reason: "Possible cause: Tension headache or dehydration.",
      suggestion: "Drink water and rest."
    },
    Eyes: {
      reason: "Possible cause: Eye strain or infection.",
      suggestion: "Avoid screens and rinse with clean water."
    },
    Throat: {
      reason: "Possible cause: Sore throat or infection.",
      suggestion: "Gargle warm salt water and drink fluids."
    },
    Chest: {
      reason: "Possible cause: Stress, heartburn or chest infection.",
      suggestion: "Try deep breathing or consult a doctor if pain is sharp."
    },
    Stomach: {
      reason: "Possible cause: Indigestion, cramps, or food poisoning.",
      suggestion: "Avoid spicy foods and rest."
    },
    Back: {
      reason: "Possible cause: Poor posture or muscle strain.",
      suggestion: "Apply heat and improve posture."
    },
    Arms: {
      reason: "Possible cause: Muscle fatigue or nerve issues.",
      suggestion: "Rest and gentle stretching."
    },
    Legs: {
      reason: "Possible cause: Overuse, strain or poor circulation.",
      suggestion: "Elevate and massage your legs."
    },
    Feet: {
      reason: "Possible cause: Long standing or injury.",
      suggestion: "Soak in warm water and rest."
    },
    Joints: {
      reason: "Possible cause: Arthritis or inflammation.",
      suggestion: "Use warm compress and gentle movement."
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
