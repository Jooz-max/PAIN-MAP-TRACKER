function goTo(gender) {
  if (gender === 'boy') {
    window.location.href = "boy.html";
  } else if (gender === 'girl') {
    window.location.href = "girl.html";
  }
}

function openSettings() {
  const input = prompt("This button is used by the developer. Enter password:");
  const correctPassword = "(Bonang100)"; // You can change this to your real password

  if (input === correctPassword) {
    window.location.href = "settings.html"; // Go to settings page
  } else {
    alert("Access denied.");
  }
                       }
