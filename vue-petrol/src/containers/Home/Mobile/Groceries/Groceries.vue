<template>
  <div class="container">
    <div clss="col-md-12">
      <div class="grocery-product" v-for="(item, index) of shoppingList" :key="index">
        <img class="grocery-image" :src="item.imgUrl" />
        <div class="grocery-detail">
          <img src="../../../../assets/wool-icon.png" />
          <br />
          <b>{{item.name}}</b>
          <br />
        </div>
        <div class="grocery-delete">
          <img class="delete-icon" src="../../../../assets/trashcan-icon.png" />
        </div>
      </div>
      <div class="grocery-total">
        <b>Total:</b>
        <Price :amount="totalPrice()" />
      </div>
      <div class="col-md-12 top-groceries">
        <h6>
          Today's top
          <span>groceries</span> specials:
        </h6>
        <carousel>
          <slide class="top-specials" v-for="(special, index) of todaySpecial" :key="index">
            <div class="special-title">
              <img src="../../../../assets/wool-icon.png" />
              <div class="special-discount">{{special.discount}}%</div>
            </div>
            <div class="special-image">
              <img :src="special.imgUrl" />
            </div>
            <div class="special-price">
              <Price :amount="special.latestPrice" />
              <strike>${{special.latestPrice}}</strike>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script src="./Groceries"></script>

<style src="./Groceries.css"></style>
