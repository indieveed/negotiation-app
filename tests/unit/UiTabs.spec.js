import { shallowMount } from '@vue/test-utils'
import UiTabs from '@/components/ui/tabs.vue'

const items = [{
  text: 'Employer',
  id: 0,
  active: true
}, {
  text: 'Employee',
  id: 1,
  active: false
}]


describe('ui/tabs.vue', () => {
  it('renders the same amount of tabs passed', () => {
    const wrapper = shallowMount(UiTabs, {
      propsData: {
        items
      }
    })
    expect(wrapper.findAll('.tabs__label').length).toEqual(items.length)
  })
})
