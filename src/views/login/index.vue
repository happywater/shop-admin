
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

console.log('VITE_APP_TITLE:' + import.meta.env.VITE_APP_TITLE)
</script>

<style>

</style>
