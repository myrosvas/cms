<template>
  <div class="wrapper">
    <span class="motto">Grow your website!</span>
    <v-btn
      height='30px'
      class="btn"
      @click="emptyInputs"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-btn
      height='30px'
      class="btn"
      @click="save"
    >
      <v-icon>mdi-content-save</v-icon>
    </v-btn>
    <v-btn
      height='30px'
      nuxt
      to="/preview"
      class="btn"
    >
      <v-icon>mdi-cube-scan</v-icon>
    </v-btn>
    <v-btn
      height='30px'
      class="btn"
    >
      <v-icon>mdi-account</v-icon>
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
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 50px;
    padding: 10px;
    margin-bottom: 10px;
    background-color: black;
  }

  .btn {
    margin: 0 10px;
    color: #f952e9;
  }

  .motto {
    position: absolute;
    top: 5px;
    left: 20px;
    font-size: 30px;
    font-family: 'Architects Daughter', cursive;
    color: white;
  }

  .motto:hover {
    color: #f952e9;
  }
</style>