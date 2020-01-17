<template>
  <section class="container">
    <img src='./../assets/2.png' alt="Dracena"/>
    <div>
      <h1>Grow your website!</h1>
      <button><nuxt-link to="/create">Create</nuxt-link></button>
      <button><nuxt-link to="/preview">Preview</nuxt-link></button>
    </div>
  </section>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  font-size: 36px;
  font-family: 'Architects Daughter', cursive;
}

button {
  height: 40px;
  margin: 20px 10px;
  padding: 0 15px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Quicksand', sans-serif;
  box-shadow: 10px 10px 12px -3px rgba(0,0,0,0.23);
}

button:hover {
  color: orange;
  border-color: orange;
  transform: scale(1.1);
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: orange;
}
</style>

