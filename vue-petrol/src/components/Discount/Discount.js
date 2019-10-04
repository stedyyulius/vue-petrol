export default {
  name: 'Discount',
  props: ['amount'],
  data() {
    return {
      discountAmount: this.amount
    }
  }
}
