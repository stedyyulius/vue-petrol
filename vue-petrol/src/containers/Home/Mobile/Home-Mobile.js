import TabScore from './TabScore/TabScore.vue';
import Groceries from './Groceries/Groceries.vue';

export default {
  name: 'HomeMobile',
  components: {
    TabScore,
    Groceries
  },
  data() {
    return {
      activeTab: 0,
      tabsItem: [require('../../../assets/personIcon.png'), require('../../../assets/personIcon.png'), require('../../../assets/personIcon.png')]
    }
  },
  methods: {
    handleChangeTab(tab) {
      this.activeTab = tab;
    }
  }
}
