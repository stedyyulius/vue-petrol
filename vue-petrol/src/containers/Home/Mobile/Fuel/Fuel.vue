<template>
  <div class="tab">
    <div class="tab-item">
      <label class="tab-item--header--title">Show Fuel Prices for:</label>
      <div class="tab-item--header fuel">
          <select class="form-control" id="fuel-select">
            <option>Darwin, 0800</option>
          </select>
          <img src='../../../../assets/gear.png' />
      </div>
    </div>
    <div class="tab-item--content">
      <div class="fuel-title">
        <div class="active">E10</div>
        <div>Premium98</div>
        <div>Diesel</div>
      </div>
      <carousel>
          <slide class="fuel-box" v-for="(petrol, index) of petrolStations" :key="index">
              <div class="fuel-box-title">
                <img src="../../../../assets/lock-icon.png" />
                <b>Powerfuel</b>
              </div>
              <div class="fuel-price">
                <div class="fuel-price-type">{{petrol.fuel_type || 'none'}}</div>
                <div class="fuel-price-amount">
                  <div class="arrow-left"></div>
                  <div class="fuel-price-amount-text">140.5</div>
                </div>
              </div>
              <div class="fuel-location">
                <img src="../../../../assets/location-icon.png" />
                <p>43.80 km away from this station</p>
              </div>
              <div class="fuel-box-footer">
                <b>Get Directions</b>
              </div>
            </slide>
      </carousel>
    </div>

  </div>
</template>

<script src="./Fuel"></script>

<style src="./Fuel.css"></style>
