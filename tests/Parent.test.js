import { shallowMount } from '@vue/test-utils'
import Parent from './Parent.vue'

test('Mount', () => {
  const wrapper = shallowMount(Parent)
  expect(wrapper.html()).toBe('')
})

//shallowmount가 권장이 되는 부분이다