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
      <slot name="header">Success!</slot>
    </Modal>
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
        labelText: 'How much would you like to offer?',
        id: 'employer',
        active: true
      }, {
        text: 'Employee',
        labelText: 'How much would you like to earn?',
        id: 'employee',
        active: false
      }],
      showModal: false
    }
  },
  methods: {
    sendSum(item) {
      console.log({item});
      this.showModal = true
    }
  }
}
</script>
<style lang="stylus" scoped>
.home {
  padding-top 1em
}
</style>