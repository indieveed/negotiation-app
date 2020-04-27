<template>
  <div class="home">
    <Tabs :items="tabs">
       <template v-slot:panel="{ item }">
          <EnterSum
            :label="item.labelText"
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
    </Modal>
    <div class="home__footer">
      {{footer}}
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/ui/tabs"
import EnterSum from '@/components/smart/enter-sum'
import Modal from '@/components/smart/modal'

export default {
  name: 'Home',
  components: {
    Tabs,
    EnterSum,
    Modal
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
  methods: {
    sendSum(item, value) {
      this.sums[item.id] = value
      if (this.sums.employee !== null && this.sums.employer !== null) {
        this.showModal = true
      }
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