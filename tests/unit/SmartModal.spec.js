import { shallowMount } from '@vue/test-utils'
import Modal from '@/components/smart/modal.vue'


describe('ui/tabs.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(Modal)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('renders the slots', () => {
    const wrapper = shallowMount(Modal, {
      slots: {
        body: `body`,
        header: `header`,
        footer: `footer`,
      }
    })
    expect(wrapper.contains('.modal__body')).toBe(true)
    expect(wrapper.contains('.modal__footer')).toBe(true)
    expect(wrapper.contains('.modal__header')).toBe(true)
  })
})
