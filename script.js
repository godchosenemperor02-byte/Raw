document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  // Toggle mobile menu visibility
  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking a link (mobile UX)
  document.querySelectorAll('.nav-item, .nav-btn-mobile').forEach(link => {
    link.addEventListener('click', () => {
      hamburgerBtn.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
});

// Set default date to tomorrow in date input
const dateInput = document.getElementById('bookingDate');
if (dateInput) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  dateInput.value = tomorrow.toISOString().split('T')[0];
}

// Time Slot Selection logic
const timeSlots = document.querySelectorAll('.time-slot');
let selectedTime = '09:00 AM';

timeSlots.forEach(slot => {
  slot.addEventListener('click', () => {
    timeSlots.forEach(s => s.classList.remove('active'));
    slot.classList.add('active');
    selectedTime = slot.getAttribute('data-time');
  });
});

// Radio option styling highlight
const packageCards = document.querySelectorAll('.option-card');
packageCards.forEach(card => {
  card.addEventListener('click', () => {
    packageCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

// Demo Submission and Modal Popup
const bookingForm = document.getElementById('bookingForm');
const bookingModal = document.getElementById('bookingModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalDetails = document.getElementById('modalDetails');

if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedPackage = document.querySelector('input[name="package"]:checked').value;
    const name = document.getElementById('fullName').value;
    const date = dateInput.value;

    modalDetails.innerHTML = `Thank you, <strong>${name}</strong>! Your request for the <strong>${selectedPackage}</strong> on <strong>${date} at ${selectedTime}</strong> has been received. Rhys will confirm via SMS shortly.`;
    
    bookingModal.classList.add('active');
  });
}

if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => {
    bookingModal.classList.remove('active');
  });
}
// Dynamic Copyright Year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
