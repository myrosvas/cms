<template>
  <div class="wrapper">
    <div class="constructor">
      <span class="text">Image URL:</span>
      <input type="text" v-model="imgSrc" />
      <hr>
      <span class="text">Text:</span>
      <input type="text" v-model="text" />
      <span class="text">Link:</span>
      <input type="text" v-model="link" />
      <span class="text">Link anchor:</span>
      <input type="text" v-model="anchor" />
      <span class="text">Text color:</span><br>
      <select v-model="textColor">
        <option value="" selected disabled hidden>Choose text color</option>
        <option>white</option>
        <option>yellow</option>
        <option>green</option>
        <option>grey</option>
        <option>blue</option>
        <option>pink</option>
        <option>red</option>
        <option>orange</option>
      </select>
      <br>
      <span class="text">Font size:</span>
      <input v-model="fontSize" type="text" />
    </div>
    <div class="preview">
      <div
        class="image-container"
        :style="{ backgroundImage: 'url(' + imgSrc + ')' }" />
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
</template>

<script>
  import { Draggable } from 'draggable-vue-directive'

  export default {
    data: () => {
      return {
        imgSrc: 'https://vesti.ua/wp-content/uploads/2018/08/299871.jpeg',
        text: '',
        link: '',
        anchor: '',
        fontSize: '',
        textColor: ''
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
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .constructor {
    padding: 20px;
    min-width: 200px;
    max-width: 600px;
    background-color: lightgrey;
  }

  .preview {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    flex: 2;
    background-color: lightgrey;
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
</style>