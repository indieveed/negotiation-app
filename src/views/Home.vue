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
  </div>
</template>

<script>
import Tabs from "@/components/ui/tabs"
import EnterSum from '@/components/smart/enter-sum'

export default {
  name: 'Home',
  components: {
    Tabs,
    EnterSum,
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
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.home {
  padding-top 1em
}
</style>