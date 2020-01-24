<template>
  <div>
    <Header />
    <div class="create-wrapper" >
    <div class="constructor" data-app>
      <v-form>
        <v-text-field
          v-model="imgSrc"
          label="Image URL:"
        ></v-text-field>
        <v-text-field
          v-model="text"
          label="Text:"
        ></v-text-field>
        <v-text-field
          v-model="link"
          label="Link:"
        ></v-text-field>
        <v-text-field
          v-model="anchor"
          label="Link anchor:"
        ></v-text-field>
        <v-select
          v-model="textColor"
          :items="colors"
          label="Text color:"
        ></v-select>
        <v-text-field
          v-model="fontSize"
          label="Font size:"
        ></v-text-field>
      </v-form>
    </div>
    <div class="preview">
      <div
        class="image-container"
        :style="{ backgroundImage: 'url(' + imgSrc + ')' }"
      >
      <div type="text/html" v-draggable>
        <span style="white-space: pre-line;"
        :style="{
          fontSize: fontSize  + 'px',
          color: textColor
        }">
          {{ text }}
        </span>
      </div>
      <div v-if="link" type="text/html" v-draggable>
        <a 
          v-if="link"
          :href="link"
          :style="{
            fontSize: fontSize + 'px',
            color: textColor
          }"
        >
          {{ anchor }}
        </a>
      </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import Header from './Header'
  import { Draggable } from 'draggable-vue-directive'
  import { colors } from '../data/colors'

  export default {
    components: {
      Header,
    },
    data: () => {
      return {
        imgSrc: 'https://www.impactbnd.com/hubfs/Green%20in%20design.jpg',
        text: '',
        link: '',
        anchor: '',
        fontSize: '',
        textColor: '',
        colors
      }
    },
    directives: {
      Draggable,
    },
    methods: {
      linkify: (text) => {
        const urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

        if (text.match(urlRegex)) {
          return text.replace(urlRegex, function(url) {
              const link = `<a href="${url}">${url}</a>`;

              return link;
          });
        } 
          return text;
      }
    }
  }
</script>

<style scoped>
  .create-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(197,241,197,1) 54%, rgba(251,184,255,1) 100%);
  }

  .constructor {
    padding: 20px;
    width: 50%;
    background-color: #c5f1c5;
    border: 5px solid;
  }

  .preview {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 2;
    padding: 20px;
    border: 5px solid;
    border-left: none;
    cursor: url('../assets/nat946.gif'), auto;
  }

  .image-container {
    width: 300px;
    height: 300px;
    background-size: cover;
  }

  .uploaded-picture {
    width: 90%;
  }

  .text {
    font-size: 18px;
  }

  input {
    width: 100%;
    height: 30px;
    margin: 15px 0;
    padding: 15px 10px;
    font-size: 18px;
  }

  select {
    height: 30px;
    font-size: 18px;
    padding: 0;
    margin: 10px 0;
    color: black;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .save-btn {
    display: flex;
    align-self: flex-end;
    justify-self: center;
    margin: 10px;
    padding: 10px;
  }
</style>