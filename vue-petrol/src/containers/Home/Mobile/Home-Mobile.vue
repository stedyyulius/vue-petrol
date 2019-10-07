<template>
  <div class="home-mobile">
    <header class="home-mobile--header">
      <img src="../../../assets/compareClubLogo.png" />
      <div id="home-mobile--header-right">
        <img src="../../../assets/personIcon.png" />
        <img src="../../../assets/burgerBar.png" />
      </div>
    </header>
    <div class="home-mobile--navbar">
      <div v-for="(tab, idx) of tabsItem" :key="idx" :class="(idx === activeTab) ? 'active': ''">
        <img :src="tab[idx === activeTab ? 'selected' : 'normal']" @click="activeTab = idx" />
      </div>
    </div>
    <content class="home-mobile--content">
      <Dashboard v-if="activeTab === 0" />
      <Fuel v-if="activeTab === 1" />
      <Groceries v-if="activeTab === 2" />
    </content>
  </div>
</template>

<script src="./Home-Mobile.js"></script>

<style src="./Home-Mobile.css"></style>
