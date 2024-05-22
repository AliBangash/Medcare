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
            <input type="date" id="date" v-model="appointment.date" required />
          </div>

          <div class="form-field">
            <input type="time" id="time" v-model="appointment.time" required />
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
  </div>
</template>

<script setup>
const appointment = ref({
  name: '',
  phone: '',
  email: '',
  doctor: '',
  date: '',
  time: ''
});

const formatDateTime = (date, time) => {
  const dateObj = new Date(`${date}T${time}`);
  return dateObj.toISOString().replace('T', ' ').replace('Z', '');
};

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
  console.log('Event created:', result);
} catch (error) {
  console.error('Issue with the fetch operation:', error);
}

};
</script>

<style scoped>
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
