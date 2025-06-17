function showSection(id) {
  const sections = ['painMap'];
  sections.forEach(section => {
    const el = document.getElementById(`${section}Section`);
    if (el) el.style.display = (section === id) ? 'block' : 'none';
  });
  document.getElementById("mainMenu").style.display = 'none';
}

function goHome() {
  const sections = ['painMap'];
  sections.forEach(section => {
    const el = document.getElementById(`${section}Section`);
    if (el) el.style.display = 'none';
  });
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
    Stomach: {
      reason: "Possible cause: Indigestion or cramps.",
      suggestion: "Avoid spicy food and drink water."
    },
    Legs: {
      reason: "Possible cause: Strain or poor circulation.",
      suggestion: "Elevate and massage gently."
    }
  };

  document.getElementById("areaTitle").innerText = part;
  document.getElementById("reason").innerText = info[part].reason;
  document.getElementById("suggestion").innerText = info[part].suggestion;
  document.getElementById("painInfo").classList.remove('hidden');
}￼Enter
