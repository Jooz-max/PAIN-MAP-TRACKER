functionfunction showInfo(part) {
  const infoBox = document.getElementById("infoBox");
  let problem = "";
  let suggestion = "";
  let color = "";

  switch (part) {
    case "Head":
      problem = "Persistent or sharp headaches that may be caused by dehydration, stress, eye strain, or even more serious conditions like migraines.";
      suggestion = "Stay hydrated by drinking water, take regular breaks from screens to reduce eye strain, rest in a quiet and dark room, and consult a doctor if the pain persists or worsens.";
      color = "#f44336";
      break;

    case "Neck":
      problem = "Neck stiffness or pain, often caused by poor posture, muscle strain, or sleeping in an awkward position. It may also be related to stress or tension.";
      suggestion = "Try slow and gentle neck stretches, apply a warm compress to relax tight muscles, and maintain proper posture when sitting or using a mobile device. Seek medical attention if you experience tingling or numbness.";
      color = "#ff9800";
      break;

    case "Torso":
      problem = "Pain or tightness in the chest or abdominal area, which could result from muscle strain, indigestion, or more serious issues like heart or lung problems.";
      suggestion = "If the pain is sharp, radiates to the arm or jaw, or is accompanied by shortness of breath or dizziness, seek emergency medical help. Otherwise, rest and monitor your symptoms closely.";
      color = "#e91e63";
      break;

    case "Left Arm":
    case "Right Arm":
      problem = "Soreness, numbness, or shooting pain in the arm due to repetitive movement, injury, or compression of nerves.";
      suggestion = "Rest the arm, avoid activities that worsen the pain, apply ice for swelling, and gently stretch the muscles. Consult a healthcare provider if symptoms persist or worsen.";
      color = "#ffc107";
      break;

    case "Left Leg":
    case "Right Leg":
      problem = "Discomfort, aching, or heaviness in the leg which may be due to overuse, injury, poor circulation, or nerve-related conditions.";
      suggestion = "Elevate your leg, apply cold or warm compresses as needed, wear comfortable footwear, and avoid standing or sitting too long. Visit a doctor if swelling or numbness occurs.";
      color = "#4caf50";
      break;

    case "Reproductive":
      problem = "Discomfort, cramps, or unusual pain in the reproductive area, which could be linked to hormonal changes, infections, or underlying health issues.";
      suggestion = "Track symptoms over time, maintain hygiene, avoid irritants, and consult a healthcare provider if pain is intense, recurring, or accompanied by unusual discharge or fever.";
      color = "#9c27b0";
      break;

    default:
      problem = "Area not identified";
      suggestion = "Please select a valid body part to view more information.";
      color = "#607d8b";
  }

  infoBox.style.backgroundColor = color;
  infoBox.textContent = `${part}:\n\n${problem}\n\nSuggested Action: ${suggestion}`;
}￼Enter
