<template>
  <div>
    <HomeMobile v-if="window.width <= 768" />
    <div v-else>
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
            <div class="col-xs-12 col-lg-5">
              <MeterBar />
            </div>
            <div class="col-xs-12 col-lg-6 lineChart">
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
          <div class="box-body station">
            <div class="station-header">
              <select class="form-control fuel-select">
                <option>Darwin, 0800</option>
              </select>
              <div class="flat">
                <p class="active">E10</p>
                <p>Premium98</p>
                <p>Diesel</p>
                <p>Premium95</p>
                <p>Unleaded91</p>
              </div>
            </div>
            <div class="row stations">
               <div class="fuel-box" v-for="(petrol, index) of petrolStations" :key="index">
                  <div class="fuel-box-title">
                    <img src="../../assets/lock-icon.png" />
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
              <div class="shopping-product">
                <img :src="item.imgUrl" />
              </div>
              <div class="shopping-name">
                <img src="../../assets/wool-icon.png" />
                <p>{{item.name}}</p>
              </div>
              <div class="row shopping-right">
                <div class="shopping-discount">
                  <Discount :amount="item.discount" />
                </div>
                <div class="shopping-price">
                  <Price :amount="item.latestPrice" />
                </div>
                <div class="shopping-delete">
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
            <carousel class="groceries">
              <slide
                class="grocery-item"
                v-for="(special, index) of todaySpecial"
                :key="index"
              >
                <img :src="special.imgUrl" />
                <b class="grocery-name">{{special.name}}</b>
                <div class="grocery-amount">
                  <Price :amount="special.latestPrice" />
                  <Discount :amount="special.discount" />
                </div>
            </slide>
            </carousel>

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
