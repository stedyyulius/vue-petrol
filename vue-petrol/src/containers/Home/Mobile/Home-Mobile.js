import Dashboard from './Dashboard/Dashboard.vue';
import Groceries from './Groceries/Groceries.vue';
import Fuel from './Fuel/Fuel.vue';

export default {
  name: 'HomeMobile',
  components: {
    Groceries,
    Dashboard,
    Fuel
  },
  data() {
    return {
      activeTab: 0,
      tabsItem: [{ normal: require('../../../assets/clockIcon.png'), selected: require('../../../assets/clockIconSelected.png') }, { normal: require('../../../assets/meterIcon.png'), selected: require('../../../assets/meterIconSelected.png') }, { normal: require('../../../assets/groceriesIcon.png'), selected: require('../../../assets/groceriesIconSelected.png')}]
    }
  },
  methods: {
    handleChangeTab(tab) {
      this.activeTab = tab;
    }
  }
}
