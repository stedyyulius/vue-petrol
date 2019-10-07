<template>
  <div>
  <HomeMobile v-if="window.screen.width <= 768" />
  <div>
    <Navbar />
    <div class="content">
      <div class="wide-box">
        <div class="box-title">
          <b>My Credit Score</b>
          <div class="box-title-icon">
            <b>View Report</b>
            <img class="right-item" src="../../assets/questionMark.png" />
          </div>
        </div>
        <div class="box-body">
          <div class="row charts">
            <div class="col-md-5">
              <MeterBar />
            </div>
            <div class="col-md-6 lineChart">
              <Chart :chart-data="datacollection" />
            </div>
          </div>
        </div>
      </div>
      <div class="flat">
        <div class="box">
          <div class="box-title">
            <b>Fuel Prices</b>
            <div class="box-title-icon">
              <img src="../../assets/gear.png" />
              <img src="../../assets/questionMark.png" />
            </div>
          </div>
          <div class="box-body">
            <select class="form-control fuel-select">
              <option>Darwin, 0800</option>
            </select>
            <div class="flat">
              <p>E10</p>
              <p>Premium98</p>
              <p>Diesel</p>
              <p>Premium95</p>
              <p>Unleaded91</p>
            </div>
            <div class="row stations">
              <div class="fuel-box" v-for="(petrol, index) of petrolStations" :key="index">
                <div class="fuel-box-title">
                  <img src="../../assets/lock-icon.png" />
                  <b>Powerfuel</b>
                </div>
                <div class="fuel-price">
                  <p class="fuel-price-type">{{petrol.fuel_type || 'none'}}</p>
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
        <div class="box">
          <div class="box-title">
            <b>My Shopping List</b>
            <img src="../../assets/questionMark.png" />
          </div>
          <div class="box-body">
            <div class="row shopping-box" v-for="(item, index) in shoppingList" :key="index">
              <div class="row col-md-3 shopping-product">
                <img :src="item.imgUrl" />
              </div>
              <div class="col-md-5 shopping-name">
                <img src="../../assets/wool-icon.png" />
                <br />
                <br />
                <b>{{item.name}}</b>
              </div>
              <div class="row col-md-4 shopping-amount">
                <div class="col-md-1 shopping-discount">
                  <Discount :amount="item.discount" />
                </div>
                <div class="col-md-3 shopping-price">
                  <Price :amount="item.latestPrice" />
                </div>
                <div class="col-md-1 shopping-delete">
                  <img src="../../assets/trashcan-icon.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="shopping-total">
            Total:
            <b>${{totalPrice}}</b>
          </div>
        </div>
      </div>
      <div class="wide-box">
        <div class="box-title">
          <b>
            Today's top
            <span>groceries</span> specials
          </b>
        </div>
        <div class="box-body">
          <div class="row groceries">
            <div
              class="col-md-2 grocery-item"
              v-for="(special, index) of todaySpecial"
              :key="index"
            >
              <img :src="special.imgUrl" />
              <br />
              <b>{{special.name}}</b>
              <div class="grocery-amount">
                <Price :amount="special.latestPrice" />
                <Discount :amount="special.discount" />
              </div>
            </div>
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
