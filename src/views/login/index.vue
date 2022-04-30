
<template>
  <div>login</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { login } from '../../api/login'

onMounted(() => {
  console.log('onMounted')
  login('15814817357').then(res => {
    console.log(res)
  })
})

console.log('abc')
</script>

<style>

</style>
