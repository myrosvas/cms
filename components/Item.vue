<template>
  <div class="wrapper">
    <div
      class="item-container"
      v-for="item in testData"
      :key="item.img"
      :style="{ backgroundImage: 'url(' + item.img + ')'}"
    >
      {{ item.content }}
    </div>
  </div>
</template>

<script>
import { testData } from '../data/data';

export default {
  data: () => {
    return {
      testData
    }
  }

}
</script>

<style scoped>
  .item-container {
    width: 300px;
    height: 300px;
  }
</style>

