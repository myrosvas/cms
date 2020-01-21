<template>
  <div class="wrapper">
    <v-btn
      height='30px'
      class="btn"
      @click="emptyInputs"
    >
      New
    </v-btn>
    <v-btn
      height='30px'
      class="btn"
      @click="save"
    >
      Save
    </v-btn>
    <v-btn
      height='30px'
      nuxt
      to="/preview"
      class="btn"
    >
      View on page
    </v-btn>
    <v-btn
      height='30px'
      class="user-icon"
    >
      User menu
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    save: (data) => {
      console.log(data)
    },
    emptyInputs: () => {
      console.log('empty');
    }
  }
  
}
</script>

<style scoped>
  .wrapper {
    width: 100%;
    height: 50px;
    padding: 10px;
    background-color: pink;
  }

  .btn {
    margin: 0 10px;
  }
</style>