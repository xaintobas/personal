const hamburgerIcon = document.getElementById("hamburger");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");
const mobileMenu = document.getElementById("mobile-menu");

function closeMobileMenu() {
  mobileMenu.style.width = "0";
  mobileMenu.classList.add("hidden");
  overlay.style.display = "none";
}

function openMobileMenu() {
  mobileMenu.classList.remove("hidden");
  mobileMenu.style.width = "25rem";
  overlay.style.display = "block";
  mobileMenu.style.display = "block";
}

overlay.addEventListener("click", closeMobileMenu);
closeMenu.addEventListener("click", closeMobileMenu);
hamburgerIcon.addEventListener("click", openMobileMenu);

const aiResponses = {
  symptoms: {
    head: "It seems like you're experiencing a headache. Rest, hydration, and over-the-counter pain relief may help. If it persists, consider seeing a doctor.",
    headache:
      "It seems like you're experiencing a headache. Rest, hydration, and over-the-counter pain relief may help. If it persists, consider seeing a doctor.",
    stomach:
      "Stomach discomfort can be tricky. Avoid heavy meals and stay hydrated. If it worsens, you may want to consult a doctor.",
    fever:
      "A fever could be a sign of an infection. Stay hydrated and rest. If it goes above 102°F or persists, seek medical attention.",
    cough:
      "A cough could be due to a cold, allergies, or something more serious. Try warm fluids and rest. If it persists, consult a doctor.",
    sore_throat:
      "Sore throat? Try soothing teas, lozenges, or saltwater gargles. If it's severe or lasts more than a few days, see a doctor.",
    back_pain:
      "Back pain can stem from poor posture or overexertion. Stretching and rest may help. If the pain is sharp or lasts, consult a professional.",
    dizziness:
      "Dizziness could be caused by dehydration or low blood sugar. Sit down and sip water. If it persists, contact a healthcare provider.",
    nausea:
      "Nausea might indicate an upset stomach or other issues. Ginger tea or light snacks may help. If vomiting occurs, stay hydrated.",
    fatigue:
      "Fatigue could be due to stress or lack of sleep. Prioritize rest and hydration. Persistent fatigue may require a check-up.",
    rash: "A rash might be due to an allergy or skin irritation. Avoid scratching and try a soothing cream. If it spreads, seek medical advice.",
    chest_pain:
      "Chest pain can be serious. Rest and avoid exertion. If it's severe or paired with shortness of breath, seek emergency care.",
    shortness_of_breath:
      "Shortness of breath can be alarming. Try to stay calm. If it persists or worsens, consult a healthcare provider immediately.",
    anxiety:
      "Feeling anxious? Take deep breaths and try grounding techniques. Persistent anxiety may benefit from talking to a professional.",
    depression:
      "Depression can feel overwhelming. Consider talking to someone you trust. Support from a mental health professional can be very helpful.",
    insomnia:
      "Struggling to sleep? Limit screen time before bed and try relaxation techniques. Persistent insomnia may need a doctor's input.",
    allergies:
      "Allergy symptoms can be managed with antihistamines and avoiding triggers. Severe reactions may require medical attention.",
    joint_pain:
      "Joint pain might be due to overuse or arthritis. Rest, ice, and gentle movement can help. If it swells or persists, see a doctor.",
    weight_loss:
      "Unexpected weight loss can be concerning. Ensure you're eating well and staying hydrated. Consult a doctor if it continues.",
    weight_gain:
      "Unexplained weight gain could be linked to diet, activity levels, or hormonal changes. A doctor's input may help pinpoint the cause.",
    vision_problems:
      "Blurred or sudden vision changes should be taken seriously. Rest your eyes and consult an eye doctor promptly.",
  },
  general: [
    "I'm here to help. Could you provide more details about your concern?",
    "Thank you for sharing that information. Let me ask you a few more questions.",
    "I want to make sure we address your health concerns properly.",
  ],
  default:
    "I'm not sure I have the information you're looking for. Would you like to browse our doctors and book an appointment?",
};

let messageCount = 0;
const MAX_AI_MESSAGES = 10;

// DOM Elements
const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

// Add message to chat
function addMessage(message, isUser = false) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${isUser ? "user" : "ai"}`;
  messageDiv.textContent = message;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Get AI response based on keywords
function getAIResponse(userMessage) {
  const lowerCaseMessage = userMessage.toLowerCase();

  // Keyword-based responses
  if (lowerCaseMessage.includes("stomach")) {
    return aiResponses.symptoms.stomach;
  }
  if (lowerCaseMessage.includes("headache")) {
    return aiResponses.symptoms.headache;
  }

  if (lowerCaseMessage.includes("fever")) {
    return aiResponses.symptoms.fever;
  }
  if (lowerCaseMessage.includes("cough")) {
    return aiResponses.symptoms.cough;
  }
  if (
    lowerCaseMessage.includes("sore throat") ||
    lowerCaseMessage.includes("throat")
  ) {
    return aiResponses.symptoms.sore_throat;
  }
  if (
    lowerCaseMessage.includes("back pain") ||
    lowerCaseMessage.includes("back")
  ) {
    return aiResponses.symptoms.back_pain;
  }
  if (
    lowerCaseMessage.includes("dizziness") ||
    lowerCaseMessage.includes("dizzy")
  ) {
    return aiResponses.symptoms.dizziness;
  }
  if (lowerCaseMessage.includes("nausea")) {
    return aiResponses.symptoms.nausea;
  }
  if (
    lowerCaseMessage.includes("fatigue") ||
    lowerCaseMessage.includes("tired")
  ) {
    return aiResponses.symptoms.fatigue;
  }
  if (lowerCaseMessage.includes("rash")) {
    return aiResponses.symptoms.rash;
  }
  if (
    lowerCaseMessage.includes("chest pain") ||
    lowerCaseMessage.includes("chest")
  ) {
    return aiResponses.symptoms.chest_pain;
  }
  if (
    lowerCaseMessage.includes("shortness of breath") ||
    lowerCaseMessage.includes("breathing") ||
    lowerCaseMessage.includes("breath")
  ) {
    return aiResponses.symptoms.shortness_of_breath;
  }
  if (
    lowerCaseMessage.includes("anxiety") ||
    lowerCaseMessage.includes("anxious")
  ) {
    return aiResponses.symptoms.anxiety;
  }
  if (
    lowerCaseMessage.includes("depression") ||
    lowerCaseMessage.includes("depressed")
  ) {
    return aiResponses.symptoms.depression;
  }
  if (
    lowerCaseMessage.includes("insomnia") ||
    lowerCaseMessage.includes("sleep")
  ) {
    return aiResponses.symptoms.insomnia;
  }
  if (
    lowerCaseMessage.includes("allergy") ||
    lowerCaseMessage.includes("allergies")
  ) {
    return aiResponses.symptoms.allergies;
  }
  if (
    lowerCaseMessage.includes("joint pain") ||
    lowerCaseMessage.includes("joint")
  ) {
    return aiResponses.symptoms.joint_pain;
  }
  if (
    lowerCaseMessage.includes("weight loss") ||
    lowerCaseMessage.includes("losing weight")
  ) {
    return aiResponses.symptoms.weight_loss;
  }
  if (
    lowerCaseMessage.includes("weight gain") ||
    lowerCaseMessage.includes("gaining weight")
  ) {
    return aiResponses.symptoms.weight_gain;
  }
  if (
    lowerCaseMessage.includes("vision problems") ||
    lowerCaseMessage.includes("blurred vision") ||
    lowerCaseMessage.includes("vision")
  ) {
    return aiResponses.symptoms.vision_problems;
  }

  // Check for appointment-related keywords
  if (
    lowerCaseMessage.includes("doctor") ||
    lowerCaseMessage.includes("appointment") ||
    lowerCaseMessage.includes("book") ||
    lowerCaseMessage.includes("call")
  ) {
    return "You can browse our doctors and book an appointment here: <a href='/doctors.html' target='_blank'>Click Here</a>";
  }

  // General response or default if no keyword matches
  if (messageCount >= MAX_AI_MESSAGES) {
    return aiResponses.default;
  }

  const generalResponses = aiResponses.general;
  return generalResponses[Math.floor(Math.random() * generalResponses.length)];
}

// Handle user input
function handleUserInput() {
  const message = userInput.value.trim();
  if (!message) return;

  // Add user message
  addMessage(message, true);
  userInput.value = "";

  // Simulate AI thinking
  setTimeout(() => {
    const aiResponse = getAIResponse(message);
    const isHtmlResponse = aiResponse.includes("<a");

    if (isHtmlResponse) {
      const linkMessage = document.createElement("div");
      linkMessage.className = "message ai";
      linkMessage.innerHTML = aiResponse;
      chatMessages.appendChild(linkMessage);
    } else {
      addMessage(aiResponse);
    }

    // Show a clickable link if max messages are reached and no specific keywords are matched
    if (messageCount >= MAX_AI_MESSAGES && !aiResponse.includes("doctor")) {
      setTimeout(() => {
        const linkMessage = document.createElement("div");
        linkMessage.className = "message ai";
        linkMessage.innerHTML = `
          I'm here to help further. Please <a href="/doctors.html" >click here</a> to browse our doctors and book an appointment.
        `;
        chatMessages.appendChild(linkMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 1000);
    }

    messageCount++;
  }, 1000);
}

// Event Listeners
sendButton.addEventListener("click", handleUserInput);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleUserInput();
});

// Initialize chat input focus
userInput.focus();
