<template>
<div class="main-wrapper">
  <h1>Component preview</h1>
  <div class="container">
    <Item />
  </div>
</div>
</template>

<script>
import Item from '../components/Item';

export default {
  components: {
    Item
  }
  
}
</script>

<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

</style>