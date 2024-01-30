function addMessage() {
  const messageInput = document.getElementById("message-input");
  const gratitudeWall = document.getElementById("gratitude-wall");

  if (messageInput.value.trim() !== "") {
    const message = document.createElement("div");
    message.className = "gratitude-message";
    message.innerText = messageInput.value;
    gratitudeWall.appendChild(message);

    // Clear the input field
    messageInput.value = "";
  }
}

function toggleSection(sectionId) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => section.classList.add('hidden'));
  document.getElementById(sectionId).classList.remove('hidden');
}
