<template>
  <div class="home">
    <Tabs :items="tabs">
       <template v-slot:panel="{ item }">
          {{ item.id }}
        </template>
    </Tabs>
  </div>
</template>

<script>
import Tabs from "@/components/ui/tabs"

export default {
  name: 'Home',
  data() {
    return {
      tabs: [{
        text: 'Employer',
        id: 'employer',
        active: true
      }, {
        text: 'Employee',
        id: 'employee',
        active: false
      }]
    }
  },
  components: {
    Tabs
  }
}
</script>
