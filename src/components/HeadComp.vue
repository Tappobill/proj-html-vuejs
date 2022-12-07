<template>
  <header>
    <div class="w-100">
      <div class="container-xl d-flex justify-content-between align-items-center w-100">
        <div>
          <font-awesome-icon icon="fa-solid fa-clock" /> <span>Open Hours: Mon - Sat - 9:00 - 18:00</span>
        </div>
        <div class="d-flex">
          <div class="me-5">
            <font-awesome-icon icon="fa-solid fa-phone" /> <span>+1 (305) 1234-5678</span>
          </div>
          <div class="me-5">
            <font-awesome-icon icon="fa-solid fa-envelope" /> <span>hello@example.com</span>
          </div>
          <div>
            <font-awesome-icon icon="fa-brands fa-facebook-f" class="me-4" />
            <font-awesome-icon icon="fa-brands fa-twitter" class="me-4" />
            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
          </div>
        </div>
      </div>
    </div>
    <div class="index w-100">
      <div class="container-xl w-100 d-flex justify-content-between align-items-center">
        <div>
          <img src="../../public/img/Logo.svg" class="w-50" alt="Logo">
        </div>
        <div class="d-flex align-items-center">
          <voce-nav v-for="(voceNav, indexNav) in vociNav" :key="indexNav" :title="voceNav.title"
            :voci="voceNav.voci" />
          <div class="me-4">
            <font-awesome-icon icon="fa-regular fa-user" />
          </div>
          <div>
            <button class="p-1">GET IN TOUCH</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import VoceNav from './comphead/VoceNav.vue'


export default {
  components: { VoceNav },
  name: 'HeadComp',
  data() {
    return {
      vociNav: [
        {
          title: "Home",
          voci: ["Uno", "Due", "Tre"]
        },
        {
          title: "About",
          voci: ["Uno", "Due", "Tre", "Quattro"]
        },
        {
          title: "Services",
          voci: ["Uno", "Due", "Tre", "Quattro", "Cinque"]
        },
        {
          title: "Team",
          voci: ["Uno", "Due", "Tre", "Quattro", "Cinque", "Sei"]
        },
        {
          title: "Blog",
          voci: ["Uno", "Due", "Tre", "Quattro", "Cinque", "Sei", "Sette"]
        }
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style-type: none;
}

header {
  background-image: linear-gradient(to right, #1d2528, #568597);
  color: #bcbdbd;
  padding: 15px;
  position: relative;

  .index {
    position: absolute;
    top: calc(100% + 20px);

    button {
      width: 120px;
      background-color: #52babb;
      color: white;
      border-radius: 7px;
      border: #52babb;
    }

    button:hover {
      background-color: transparent;
      border: 1px solid #52babb;
    }
  }
}
</style>
