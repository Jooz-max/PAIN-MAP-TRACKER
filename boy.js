functionfunction showInfo(part) {
  const infoBox = document.getElementById("infoBox");
  let problem = "";
  let suggestion = "";
  let color = "";

  switch(part) {
    case "Head":
      problem = "Persistent Headache or Migraine";
      suggestion = "Make sure you're hydrated, take a break from screens, and consider lying down in a quiet space. Consult a doctor if it lasts long or recurs frequently.";
      color = "#f44336";
      break;
    case "Neck":
      problem = "Stiff or Painful Neck";
      suggestion = "This could be due to poor posture or sleeping position. Try gentle neck stretches, heat therapy, or massage. Seek medical advice if severe.";
      color = "#ff9800";
      break;
    case "Torso":
      problem = "Chest Discomfort or Pressure";
      suggestion = "Could indicate a serious issue like heart or lung problems. Monitor symptoms and seek immediate medical help if it's sharp or spreading.";
      color = "#e91e63";
      break;
    case "Left Arm":
    case "Right Arm":
      problem = "Arm Pain or Weakness";
      suggestion = "This might be due to overuse, muscle strain, or nerve compression. Rest, apply ice, and avoid lifting heavy objects. Consult a doctor if numbness occurs.";
      color = "#ffc107";
      break;
    case "Left Leg":
    case "Right Leg":
      problem = "Leg Soreness or Fatigue";
      suggestion = "Can result from long periods of standing or walking. Elevate your leg, do gentle stretches, and use cold/warm compress. Seek help if swelling or pain worsens.";
      color = "#4caf50";
      break;
    case "Reproductive":
      problem = "Reproductive Area Discomfort";
      suggestion = "Could be caused by infection, irritation, or underlying health conditions. Avoid self-diagnosing and consult a healthcare provider promptly.";
      color = "#9c27b0";
      break;
    default:
      problem = "Unknown Area";
      suggestion = "No information available.";
      color = "#607d8b";
  }

  infoBox.style.backgroundColor = color;
  infoBox.textContent = `${part}: ${problem} — ${suggestion}`;
}

function saveEntry() {
  alert("Entry saved successfully!");
}￼Enter
