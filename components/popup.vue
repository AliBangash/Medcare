<template>
    <div v-if="visible" class="popup-overlay">
      <div class="popup-content">
        <button class="close-btn" @click="closePopup">X</button>
        <p class="popup-message">{{ message }}</p>
        <a v-if="link" :href="link" target="_blank" class="popup-link">Clicca qui per ulteriori dettagli.</a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, watch } from 'vue';
  
  const props = defineProps({
    message: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    }
  });
  
  const emit = defineEmits(['close']);
  
  const closePopup = () => {
    emit('close');
  };
  
  // Watch for visibility change to handle body overflow
  watch(() => props.visible, (newVal) => {
    if (newVal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  </script>
  
  <style scoped>
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    overflow: hidden;
  }
  
  .popup-content {
    background: white;
    padding: 40px;
    border-radius: 8px;
    text-align: center;
    position: relative;
    width: 80%;
    max-width: 600px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    right: 20px;
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  
  .popup-message {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .popup-link {
    display: block;
    margin-top: 20px;
    font-size: 1rem;
    color: #007bff;
    text-decoration: underline;
  }
  </style>
  