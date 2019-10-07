import MeterBar from '../../../../components/MeterBar/MeterBar.vue';
import Chart from '../../../../components/Chart/Chart.js';
import PoinIcon from '../../../../assets/pointChart.png';

var PoinStyle = new Image();
PoinStyle.src = PoinIcon;
const CHART_STYLE = {
    pointRadius: '7',
    pointBackgroundColor: '#ffa000',
    pointStyle: PoinStyle,
    fill: false,
    lineTension: 0,
    borderColor: '#ffa000',
    borderWidth: '1'
}

export default {
    name: 'Dashboard',
    components: {
        MeterBar,
        Chart
    },
    data() {
        return {
            datacollection: null
        }
    },
    created() {
        this.fillData()
    },
    methods: {
        fillData() {
            this.datacollection = {
                labels: ['JAN 19', 'FEB 19', 'MAR 19'],
                datasets: [
                    {
                        label: 'Data One',
                        data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
                        ...CHART_STYLE
                        
                    }, {
                        label: 'Data One',
                        data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
                        ...CHART_STYLE
                    }
                ]
            }
        },
        getRandomInt() {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        }
    }
}
