// Array of doctor objects
const doctors = [
  {
    id: 1,
    name: "Dr. Naomi Obaseki",
    category: "General Physician",
    experience: 10,
    about:
      "Dr. Naomi Obaseki is a dedicated general physician with a passion for providing exceptional care to her patients. She believes in holistic healing and personalized medical treatment.",
    fee: "₦17,000",
    image: "img/doc1.png",
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      slots: ["9:00 AM - 11:00 AM", "1:00 PM - 3:00 PM"],
    },
  },

  {
    id: 2,
    name: "Dr. Anthonia Idahosa",
    category: "Gynecologist",
    experience: 10,
    about:
      "Dr. Anthonia Idahosa is a dedicated Gynecologist with a passion for providing exceptional care to her patients. She believes in holistic healing and personalized medical treatment.",
    fee: "₦7,000",
    image: "img/doc2.png",
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      slots: ["9:00 AM - 11:00 AM", "1:00 PM - 3:00 PM"],
    },
  },

  {
    id: 3,
    name: "Dr. Louis Osagie",
    category: "Dermatologist",
    experience: 10,
    about:
      "Dr. Louis Osagie is a dedicated Dermatologist with a passion for providing exceptional care to her patients. He believes in holistic healing and personalized medical treatment.",
    fee: "₦7,000",
    image: "img/doc6.png",
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      slots: ["9:00 AM - 11:00 AM", "1:00 PM - 3:00 PM"],
    },
  },

  {
    id: 4,
    name: "Dr. Lucky Osadolor",
    category: "Pediatricians",
    experience: 10,
    about:
      "Dr. Lucky Osadolor is a dedicated Pediatricians with a passion for providing exceptional care to her patients. He believes in holistic healing and personalized medical treatment.",
    fee: "₦15,000",
    image: "img/doc5.png",
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      slots: ["9:00 AM - 11:00 AM", "1:00 PM - 3:00 PM"],
    },
  },

  {
    id: 5,
    name: "Dr. Monday Uyiosa ",
    category: "Neurologist",
    experience: 10,
    about:
      "Dr. Monday Uyiosa is a dedicated Neurologist with a passion for providing exceptional care to her patients. He believes in holistic healing and personalized medical treatment.",
    fee: "₦12,000",
    image: "img/doc4.png",
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      slots: ["9:00 AM - 11:00 AM", "1:00 PM - 3:00 PM"],
    },
  },

  {
    id: 6,
    name: "Dr. Adesuwa Philips",
    category: "Gastroenterologist",
    experience: 10,
    about:
      "Dr. Adesuwa Philips is a dedicated Gastroenterologist with a passion for providing exceptional care to her patients. She believes in holistic healing and personalized medical treatment.",
    fee: "₦5,000",
    image: "img/doc3.png",
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      slots: ["9:00 AM - 11:00 AM", "1:00 PM - 3:00 PM"],
    },
  },

  // Add more doctors...
];

// Get references to the necessary elements
const doctorContainer = document.querySelector(".doctor-container");
const filterCategory = document.getElementById("filter-category");

// Function to render doctors based on the selected category
function renderDoctors(filter = "all") {
  // Clear the existing doctor cards
  doctorContainer.innerHTML = "";

  // Filter doctors based on the category
  const filteredDoctors =
    filter === "all"
      ? doctors
      : doctors.filter((doctor) =>
          doctor.category.toLowerCase().includes(filter.toLowerCase())
        );

  // Create and append doctor cards
  if (filteredDoctors.length > 0) {
    filteredDoctors.forEach((doctor) => {
      const doctorCard = document.createElement("a");
      doctorCard.href = `doctordetail.html?id=${doctor.id}`; // Pass doctor ID in query
      doctorCard.innerHTML = `
        <div class="doctor-card">
          <img src="${doctor.image}" alt="Image of ${doctor.name}" />
          <div class="doctor-info">
            <div class="status online">
              <span class="icon"></span>
              <span>Available</span>
            </div>
            <p class="name">${doctor.name}</p>
            <p class="role">${doctor.category}</p>
          </div>
        </div>
      `;
      doctorContainer.appendChild(doctorCard);
    });
  } else {
    // Show a message if no doctors match the filter
    doctorContainer.innerHTML =
      "<p>No doctors found for the selected category.</p>";
  }
}

// Event listener for the filter dropdown
filterCategory.addEventListener("change", (e) => {
  const selectedCategory = e.target.value;
  renderDoctors(selectedCategory);
});

// Initial render of all doctors
renderDoctors();

doctors.forEach((doctor) => {
  const doctorCard = document.createElement("a");
  doctorCard.href = `doctordetail.html?id=${doctor.id}`; // Pass doctor ID in query
  doctorCard.innerHTML = `
    <div class="doctor-card">
      <img src="${doctor.image}" alt="Image of ${doctor.name}" />
      <div class="doctor-info">
        <div class="status online">
          <span class="icon"></span>
          <span>Available</span>
        </div>
        <p class="name">${doctor.name}</p>
        <p class="role">${doctor.category}</p>
      </div>
    </div>
  `;
  doctorContainer.appendChild(doctorCard);
});

// Parse doctor ID from URL
const params = new URLSearchParams(window.location.search);
const doctorId = parseInt(params.get("id"));

// Find the doctor data
const doctor = doctors.find((doc) => doc.id === doctorId);

if (doctor) {
  const detailContainer = document.getElementById("doctor-detail");
  detailContainer.innerHTML = `
    <div class="doctor-profile">
      <img src="${doctor.image}" alt="Image of ${doctor.name}" />
      <h2>${doctor.name}</h2>
      <p><strong>Category:</strong> ${doctor.category}</p>
      <p><strong>Years of Experience:</strong> ${doctor.experience} years</p>
      <p><strong>About:</strong> ${doctor.about}</p>
      <p><strong>Appointment Fee:</strong> ${doctor.fee}</p>
      <div class="availability">
        <h3>Available Slots</h3>
        ${doctor.availability.days
          .map(
            (day) =>
              `<div>
                <p><strong>${day}:</strong> ${doctor.availability.slots.join(
                ", "
              )}</p>
              </div>`
          )
          .join("")}
        <button class="btn-book">Book Appointment</button>
      </div>
    </div>
  `;
} else {
  document.getElementById("doctor-detail").innerHTML =
    "<p>Doctor not found!</p>";
}
