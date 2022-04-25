
<script setup lang="ts">

const props = defineProps({
  msg: {
    type: String,
    default: 'msg1'
  }
})
</script>

<template>
  <div>{{ props.msg }}</div>
</template>

<style>

</style>
