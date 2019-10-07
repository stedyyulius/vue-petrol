<template>
  <div class="home-mobile">
    <header class="home-mobile--header">
      <img src="../../../assets/compareClubLogo.png" />
      <div id="home-mobile--header-right">
        <img src="../../../assets/personIcon.png" />
        <img src="../../../assets/burgerBar.png" />
      </div>
    </header>
    <navbar class="home-mobile--navbar">
      <div v-for="(tab, idx) of tabsItem" :key="idx" :class="(idx === activeTab) ? 'active': ''">
        <img :src="tab" />
      </div>
    </navbar>
    <content class="home-mobile--content">
      <TabScore />
    </content>
  </div>
</template>

<script src="./Home-Mobile.js"></script>

<style src="./Home-Mobile.css"></style>
