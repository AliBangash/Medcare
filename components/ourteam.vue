<template>
  <div class="team-info">
    <h4>La nostra squadra</h4>
    <div class="team-detail">
      <div class="team-img" v-for="member in teamMembers" :key="member.name">
        <NuxtImg :src="member.image" alt="team member" class="doctor" />
        <h5>{{ member.name }}</h5>
        <p>{{ member.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const teamMembers = ref([
  {
    name: 'DOTT.GIOVANNI ARATA',
    description: 'medico chirurgo specialista in medicina dello sport e dell\'esercizio fisico, specialista in cardiologia e specialista in medicina interna',
    image: '/images/doc.jpg'
  },
  {
    name: 'DOTT.SSA CARLA RUBBI',
    description: 'medico chirurgo specialista in anestesia e rianimazione, specialista in medicina interna e specialista in malattie dell\'apparato respiratorio.',
    image: '/images/doc.jpg'
  },
  {
    name: 'DOTT.SSA ALLEGRA ARATA',
    description: 'medico chirurgo specializzanda in cardiologia.',
    image: '/images/doc.jpg'
  },
  {
    name: 'DOTT.ALESSANDRO',
    description: 'medico chirurgo specializzando in medicina dello sport e dell\'esercizio fisico.',
    image: '/images/doc.jpg'
  },
  {
    name: 'ELENA CORONA',
    description: 'collaboratrice',
    image: '/images/doc.jpg'
  },
]);
</script>
<style scoped>
.team-info h4 {
  font-size: 30px;
  font-weight: bold;
  color: #2f67aa;
  text-align: center;
  padding: 35px 0;
}

.team-detail {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem; 
  padding: 20px; 
}

.team-img {
  background: #fff; 
  box-shadow: 0 4px 8px rgba(47, 103, 170, 0.3);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex; 
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  padding: 20px;
}

.team-img:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(47, 103, 170, 0.5);
}

.team-img img {
  width: 50%;
  margin: 0 auto;
}

.team-img h5 {
  margin: 10px 0;
  font-size: 18px; 
  color: #ffffff;
  background: linear-gradient(45deg, #9d85ec, #74a9fc);
  box-shadow: 1px 1px 4px rgba(47, 103, 170, 0.2);
  padding: 10px 20px;
  display: flex; 
  justify-content: center; 
  width: 100%; 
  text-align: center;
  border-radius: 4px;
  overflow: hidden; 
  position: relative; 
  line-height: 1.4; 
}

.team-img h5:hover {
  color: #1a4567;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 
}

.team-img p {
  font-size: 14px;
  color: #666;
  line-height: 1.6; 
  text-align: center; 
  min-height: 70px;
}

@media (max-width: 992px) {
  .team-detail {
      grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .team-detail {
      grid-template-columns: repeat(1, 1fr);
  }
}

</style>