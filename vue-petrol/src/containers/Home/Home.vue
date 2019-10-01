<template>
  <div>
    <Navbar />
    <div class="content">
      <div class="box">
        <div class="box-title">
          <b>My Credit Score</b>
          <b class="right-item">View Report</b>
        </div>
      </div>
      <div class="box">
        <div class="box-title">
          <b>Fuel Prices</b>
        </div>
        <div class="box-body">
          <select class="fuel-select">
            <option>Darwin, 0800</option>
          </select>
          <div class="flat">
            <p>E10</p>
            <p>Premium98</p>
            <p>Diesel</p>
            <p>Premium95</p>
            <p>Unleaded91</p>
          </div>
          <div class="fuel-box">
            <div class="fuel-box-title">
              <img src="../../assets/lock-icon.png" />
              <b>Powerfuel</b>
            </div>
            <div class="fuel-price">
              <p class="fuel-price-type">E10</p>
              <div class="fuel-price-bg"></div>
              <p class="fuel-price-amount">140.5</p>
            </div>
            <div class="fuel-location">
              <img src="../../assets/location-icon.png" />
              <p>43.80 km away from this station</p>
            </div>
            <div class="fuel-box-footer">
              <b>Get Directions</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Home" />

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Home.css" scoped />
