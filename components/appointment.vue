<template>
  <div class="container appointment">
    <div class="appointment-form-container">
      <form @submit.prevent="submitForm" class="appointment-form">
        <div class="form-row">
          <div class="form-field">
            <input
              placeholder="Name"
              type="text"
              id="name"
              v-model="appointment.name"
              required
            />
          </div>

          <div class="form-field">
            <input
              placeholder="Phone Number"
              type="tel"
              id="phone"
              v-model="appointment.phone"
              required
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-field">
            <input
              placeholder="Email"
              type="email"
              id="email"
              v-model="appointment.email"
              required
            />
          </div>

          <div class="form-field">
            <select id="doctor" v-model="appointment.doctor" required>
              <option disabled value="">Please select Doctor</option>
              <option>DOTT. GIOVANNI ARATA</option>
              <option>DOTT.SSA CARLA RUBBI</option>
              <option>DOTT.SSA ALLEGRA ARATA</option>
              <option>DOTT. ALESSANDRO</option>
              <option>ELENA CORONA</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-field">
            <input
              type="date"
              id="date"
              v-model="appointment.date"
              :min="minDate"
              @change="checkSunday"
              required
            />
          </div>
          <div class="form-field">
    <select id="time" v-model="appointment.time" required>
      <option disabled value="">Please select time</option>
      <option v-for="time in filteredTimeOptions" :key="time" :value="time">{{ time }}</option>
    </select>
  </div>
        </div>

        <div class="form-field" style="text-align: center">
          <button type="submit">Prenota appuntamento</button>
        </div>
      </form>
    </div>
    <div class="opening-times">
      <h2>Orari di apertura</h2>
      <div class="time-slot">
        <strong>Lunedì to venerdì:</strong>
        <div class="extra-div">
        <span>08:00am - 11:00am</span>
        <span>04:00pm - 08:00pm</span>
      </div>
      </div>
      <div class="time-slot">
        <strong>Sabato: </strong>
        <span>08:00am - 03:00pm</span>
      </div>
      <div class="time-slot">
        <strong>Domenica: </strong>
        <span>Closed</span>
      </div>
    </div>
    <Popup
      :message="popupMessage"
      :link="link"
      :visible="isPopupVisible"
      @close="isPopupVisible = false"
    />
  </div>
</template>

<script setup>

const isPopupVisible = ref(false);
const popupMessage = ref('');
const link = ref('');

const appointment = ref({
  name: '',
  phone: '',
  email: '',
  doctor: '',
  date: '',
  time: ''
});

const today = new Date().toISOString().split('T')[0];
const minDate = ref(today);


const formatDateTime = (date, time) => {
  const dateObj = new Date(`${date}T${time}`);
  const offsetMs = dateObj.getTimezoneOffset() * 60000; // Get the time zone offset in milliseconds
  const localTimeMs = dateObj.getTime() - offsetMs; // Convert to local time
  const localDateObj = new Date(localTimeMs);
  const formattedDateTime = localDateObj.toISOString().replace('T', ' ').split('.')[0]; // Remove 'T'
  return formattedDateTime;
};

// Function to check if a date is Sunday
const isSunday = (date) => {
  const selectedDate = new Date(date);
  return selectedDate.getDay() === 0;
};

const checkSunday = () => {
  if (isSunday(appointment.value.date)) {
    appointment.value.date = '';
    alert('Sundays are not available for booking. Please select another day.');
  }
};


// Generate time options in 24-hour format
const timeOptions = [];
for (let hour = 0; hour < 24; hour++) {
  for (let minute = 0; minute < 60; minute += 20) {
    const formattedHour = hour.toString().padStart(2, '0');
    const formattedMinute = minute.toString().padStart(2, '0');
    timeOptions.push(`${formattedHour}:${formattedMinute}`);
  }
}

//A[i call
const submitForm = async () => {
  const formattedDateTime = formatDateTime(appointment.value.date, appointment.value.time);

  const eventData = {
    paitent_name: appointment.value.name,
    patient_email: appointment.value.email,
    doc_name: appointment.value.doctor,
    start_time: formattedDateTime
  };

  const encodedData = new URLSearchParams(eventData).toString();
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  try {
  const response = await fetch('https://d095-182-182-251-128.ngrok-free.app/create',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: encodedData
  });
  console.log('Response object:', response);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const result = await response.json();
  popupMessage.value = "Evento creato con successo.";
  link.value = result.link;
    isPopupVisible.value = true
  console.log('Event created:', result);
} catch (error) {
  popupMessage.value = 'An error occurred. Please try again.';
    isPopupVisible.value = true;
  console.error('Issue with the fetch operation:', error);
}

};


//Filter time
const filterTimeOptions = () => {
  const selectedDate = new Date(appointment.value.date);
  const selectedDay = selectedDate.getDay();
  const filteredOptions = [];

  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 20) {
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = minute.toString().padStart(2, '0');
      const time = `${formattedHour}:${formattedMinute}`;
      
      // Check if the time slot is within the allowed ranges
      if (
        (selectedDay >= 1 && selectedDay <= 5 && (hour >= 8 && hour < 11 || hour >= 16 && hour < 20)) ||
        (selectedDay === 6 && (hour >= 8 && hour < 15))
      ) {
        filteredOptions.push(time);
      }
    }
  }

  return filteredOptions;
};

const filteredTimeOptions = computed(() => filterTimeOptions());

//Watch
watch([() => appointment.value.date, isSunday], ([newDate, sunday]) => {
  if (sunday) {
    appointment.value.date = ''; // Reset date if it's Sunday
  } else {
    appointment.value.time = ''; // Reset time if the date changes
  }
});

</script>

<style scoped>
select:focus {
  background-color: white !important;
  font-size: 16px;
}
.extra-div {
    display: flex;
    gap: 10px;
}
.appointment {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  background-color: #2f67aa;
  border-radius: 15px;
}

.appointment-form-container,
.opening-times {
  flex: 1;
  padding: 20px 50px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #2f67aa !important;
}
.time-slot {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed #fff;
  padding: 10px 0;
}
.time-slot strong {
  font-size: 16px;
  color: #fff;
}
.time-slot span {
  font-size: 14px;
  color: #fff;
}
.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.form-field {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 10px;
}

.form-field:last-child {
  margin-right: 0;
}

input,
select {
  outline: none;
}

input:focus,
select:focus {
  outline: 2px solid #2f67aa;
}

button {
  cursor: pointer;
  padding: 10px 20px;
  background-color: #2d5380;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  width: 50%;
  margin: 0 auto;
}
.opening-times h2 {
  font-size: 32px;
  font-weight: bold;
  color: #fff;
}
button:hover {
  background-color: #0056b3;
}
.form-field input,
.form-field select {
  height: 40px;
  padding: 0 10px;
  font-size: 14px;
  color: gray;
  width: 100%;
}
@media (max-width: 767px) {
  .appointment-form-container, .opening-times {
    padding: 20px;
}
  .form-row {
    flex-direction: column;
    gap: 1rem;
  }
  button {
    width: 100%;
  }
  .appointment {
    flex-direction: column;
  }
  .form-field{
    margin-right: 0;
}
}
@media (max-width: 992px) and (min-width: 768px) {
  .appointment {
    padding: 20px 9px;
  }
  .appointment-form-container, .opening-times {
    padding: 20px 12px;
  }
  .opening-times h2 {
    font-size: 24px;
  }
  .time-slot strong {
    font-size: 14px;
  }
  .time-slot span {
    font-size: 14px;
  }
}
@media (max-width: 1199px) and (min-width: 992px) {
  .appointment-form-container, .opening-times {
    padding: 20px;
}
}
</style>
