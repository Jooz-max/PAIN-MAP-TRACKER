function showInfo(part) {
  const infoBox = document.getElementById("infoBox");
  let problem = "";
  let suggestion = "";
  let color = "";

  switch (part) {
    case "Head":
      problem = "Persistent or sharp headaches that may be caused by dehydration, stress, eye strain, or even more serious conditions like migraines.";
      suggestion = "Stay hydrated by drinking water, take regular breaks from screens, rest in a quiet and dark room, and consult a doctor if the pain persists or worsens.";
      color = "#f44336";
      break;
    case "Neck":
      problem = "Neck stiffness or pain, often caused by poor posture, muscle strain, or sleeping in an awkward position.";
      suggestion = "Try slow and gentle neck stretches, use a warm compress to relax tight muscles, and maintain proper posture when using a mobile device.";
      color = "#ff9800";
      break;
    case "Torso":
      problem = "Pain or tightness in the chest or abdomen that could indicate muscle strain, indigestion, or a more serious condition.";
      suggestion = "If you feel pressure, dizziness, or pain spreading to your arm or jaw, seek medical help immediately.";
      color = "#e91e63";
      break;
    case "Left Arm":
    case "Right Arm":
      problem = "Pain in the arm due to strain, poor posture, or nerve compression.";
      suggestion = "Rest, ice the area, and avoid movements that cause pain. Seek medical help if symptoms persist.";
      color = "#ffc107";
      break;
    case "Left Leg":
    case "Right Leg":
      problem = "Leg pain or cramps from overuse, lack of hydration, or circulation issues.";
      suggestion = "Elevate the leg, rest, and gently massage. See a doctor if there’s swelling or numbness.";
      color = "#4caf50";
      break;
    case "Reproductive":
      problem = "Discomfort or abnormal pain in reproductive organs, possibly related to infection or internal issues.";
      suggestion = "Maintain hygiene, avoid irritants, and consult a doctor for diagnosis and care.";
      color = "#9c27b0";
      break;
    default:
      problem = "Unknown area selected.";
      suggestion = "Please select a valid body part.";
      color = "#607d8b";
  }

  infoBox.style.backgroundColor = color;
  infoBox.textContent = `${part}:\n\n${problem}\n\nSuggested Action: ${suggestion}`;
}

function saveEntry() {
  alert("Entry saved successfully!");
}
