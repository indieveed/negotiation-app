import { shallowMount } from '@vue/test-utils'
import SmartEnterSum from '@/components/smart/enter-sum.vue'
import UINumberInput from '@/components/ui/number-input'


describe('ui/tabs.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(SmartEnterSum)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('contains a number input', () => {
    const wrapper = shallowMount(SmartEnterSum)
    expect(wrapper.contains(UINumberInput)).toBe(true)
  })
  it('passes label prop to the input', () => {
    const wrapper = shallowMount(SmartEnterSum, {
      propsData: {
        label: 'foo'
      }
    })
    const input = wrapper.find(UINumberInput)
    expect(input.vm.label).toBe(wrapper.vm.label)
  })
})
