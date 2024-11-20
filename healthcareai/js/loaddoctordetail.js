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
      
      <div class="booking-form" id="bookingForm">
        <h3>Book an Appointment</h3>
        <form id="appointmentForm">
          <div class="form-group">
            <label for="name">Full Name:</label>
            <input type="text" id="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" required>
          </div>
          <div class="form-group">
            <label for="date">Preferred Date:</label>
            <input type="date" id="date" required>
          </div>
          <div class="form-group">
            <label for="time">Preferred Time:</label>
            <input type="time" id="time" required>
          </div>
          <div class="form-group">
            <label for="symptoms">Brief Description of Symptoms:</label>
            <textarea id="symptoms" required></textarea>
          </div>
          <button type="submit" class="btn-book">Book Appointment</button>
        </form>
      </div>
    </div>
  `;
} else {
  document.getElementById("doctor-detail").innerHTML =
    "<p>Doctor not found!</p>";
}
