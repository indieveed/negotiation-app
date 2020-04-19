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
  it('renders the same amount of labels as tabs passed', () => {
    const wrapper = shallowMount(UiTabs, {
      propsData: {
        items
      }
    })
    expect(wrapper.findAll('.tabs__label').length).toEqual(items.length)
  })
  it('renders the same amount of panels as tabs passed', () => {
    const wrapper = shallowMount(UiTabs, {
      propsData: {
        items
      }
    })
    expect(wrapper.findAll('.tabs__panel').length).toEqual(items.length)
  })
  it('renders the scoped slots', () => {
    const wrapper = shallowMount(UiTabs, {
      propsData: {
        items
      },
      scopedSlots: {
        panel: `<div slot-scope="{item}">{{item.id}}</div>`
      }
    })
    const panels = wrapper.findAll('.tabs__panel')
    for (let index = 0; index < panels.length; index++) {
      expect(panels.at(index).text()).toEqual(items[index].id.toString())
    }
  })
})
