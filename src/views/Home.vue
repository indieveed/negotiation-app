<template>
  <div class="home">
    <Tabs :items="tabs">
       <template v-slot:panel="{ item }">
          <EnterSum
            :label="item.labelText"
            :hideInput="!!sums[item.id]"
            @submit="sendSum(item, $event)"
          />
        </template>
    </Tabs>
    <Modal v-if="showModal" @close="showModal=false">
      <template v-slot:header>{{header}}</template>
      <template v-slot:body>
        <p>The offer is €{{sums.employer}}</p>
        <p>The desired pay is €{{sums.employee}}</p>
      </template>
      <template v-slot:footer>
        {{weatherText}}
      </template>
    </Modal>
    <UIButton @click.native="restart" v-if="this.sums.employee !== null || this.sums.employer !== null">Ah. I would like to start from scratch.</UIButton>
    <div class="home__footer">
      {{footer}}
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/ui/tabs"
import UIButton from "@/components/ui/button"
import EnterSum from '@/components/smart/enter-sum'
import Modal from '@/components/smart/modal'

const weatherPromise = fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=7dfb07fe03b4a7621f7c3439f2eb6b4f')
  .then(data => {
    return data.json()
  }).catch(e => {
    console.error('Error fetching weather data', e)
  })

export default {
  name: 'Home',
  components: {
    Tabs,
    EnterSum,
    Modal,
    UIButton
  },
  data() {
    return {
      tabs: [{
        text: 'Employer',
        labelText: 'How much would you like to offer? (€)',
        id: 'employer',
        active: true
      }, {
        text: 'Employee',
        labelText: 'How much would you like to earn? (€)',
        id: 'employee',
        active: false
      }],
      showModal: false,
      sums: {
        employee: null,
        employer: null,
      },
      weatherText: 'Please wait while I fetch the current weather in London for you...'
    }
  },
  computed: {
    isSuccess() {
      return this.sums.employee <= this.sums.employer
    },
    header() {
      return this.isSuccess ? 'Success! Flawless victory!': 'Failure! Fatality!'
    },
    tabsById() {
      return this.tabs.reduce((acc, tab) => {
        acc[tab.id] = tab
        return acc
      }, {})
    },
    footer() {
      return Object.entries(this.sums).reduceRight((acc, [key, value], index) => {
        if (value === null) return `${index === 0 ? 'Please' : 'Also'}, answer the question at the ${this.tabsById[key].text} tab. ${acc}`
        return ''
      }, '')
    }
  },
  mounted() {
    weatherPromise.then(({
      weather,
      main
    }) => {
      this.weatherText = `If you go out in London now, you'll experience ${weather.map(({description}) => description).join(' and ')}. The temperature is around ${Math.floor(main.temp_min)}° - ${Math.ceil(main.temp_max)}°. But you'd better stay home for now.`
    })
  },
  methods: {
    sendSum(item, value) {
      this.sums[item.id] = value
      if (this.sums.employee !== null && this.sums.employer !== null) {
        this.showModal = true
      }
    },
    restart() {
      Object.keys(this.sums).forEach((key) => {
        this.sums[key] = null
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.home {
  padding-top 1em
  display flex
  flex-direction column
  justify-content space-between
  flex-grow 1
  padding-bottom 2rem

  &__footer {
    margin-top 2rem
  }
}
</style>