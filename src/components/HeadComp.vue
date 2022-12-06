<template>
  <header>
    <div class="head d-flex justify-content-between align-items-center">
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
    <div class="head d-flex justify-content-between align-items-center index">
      <div>
        Logo
      </div>
      <div class="d-flex align-items-center">
        <div class="me-4">
          <ul>Home <span><font-awesome-icon icon="fa-solid fa-chevron-down" /></span>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div class="me-4">
          <ul>About <span><font-awesome-icon icon="fa-solid fa-chevron-down" /></span>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div class="me-4">
          <ul>Services <span><font-awesome-icon icon="fa-solid fa-chevron-down" /></span>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div class="me-4">
          <ul>Team <span><font-awesome-icon icon="fa-solid fa-chevron-down" /></span>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div class="me-4">
          <ul>Blog <span><font-awesome-icon icon="fa-solid fa-chevron-down" /></span>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div class="me-4">
          <font-awesome-icon icon="fa-regular fa-user" />
        </div>
        <div>
          <button class="p-1">GET IN TOUCH</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>


export default {
  name: 'HeadComp'

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

  .head {
    width: 60%;
    margin: auto;

    .me-4:hover {
      color: #52babb;
      cursor: pointer;
    }

    ul:hover li {
      display: block;
      color: white;
    }

    li {
      display: none;
    }
  }

  .index {
    position: absolute;
    top: 0;
    right: 0;
    left: 40px;
    bottom: -200px;

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
