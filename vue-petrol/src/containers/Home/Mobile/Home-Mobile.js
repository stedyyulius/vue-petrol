import TabScore from './TabScore/TabScore.vue'

export default {
  name: 'HomeMobile',
  components: {
    TabScore
  },
  data() {
    return {
      activeTab: 0,
      tabsItem: [require('../../../assets/personIcon.png'), require('../../../assets/personIcon.png'), require('../../../assets/personIcon.png')]
    }
  },
  methods: {
    handleChangeTab (tab) {
      this.activeTab = tab;
    }
  }
}
