<template>
  <div class="wrapper">
    <div
      v-for="item in testData"
      :key="item.img"
      :style="{
        backgroundImage: 'url(' + item.img + ')',
        gridRow: item.row,
        gridColumn: item.column
      }"
      class="item-container">
      <span
        v-for="obj in item.content"
        :key="obj.text + obj.left + obj.top"
        class="text"
        :style="{
          top: obj.top + 'px',
          left: obj.left + 'px',
          color: obj.color,
          fontSize: obj.size,
          fontFamily: obj.family }"
      >
        {{ obj.text }}
      </span>
    </div>
  </div>
</template>

<script>
import { testData } from '../data/data'

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
    position: relative;
    width: 300px;
    height: 300px;
    background-size: cover;
  }

  .wrapper {
    display: grid;
    grid-gap: 10px;
  }

  .text {
    position: absolute;
  }
</style>
