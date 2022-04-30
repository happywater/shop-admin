
<template>
  <div>登录</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { login } from '../../api/login'
import type LoginResponse from '../../api/types/loginTypes'

onMounted(() => {
  console.log('onMounted')
  login('15814817357').then((res: LoginResponse) => {
    console.log(res)
  })
})

console.log('abc')
</script>

<style>

</style>
