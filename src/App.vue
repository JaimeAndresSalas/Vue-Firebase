<template>
  <div id="app">
    <router-link :to="{name:'inicio'}">
      <img src="@/assets/logo.png" alt="vue">
    </router-link>
    <router-view/>
  </div>
</template>

