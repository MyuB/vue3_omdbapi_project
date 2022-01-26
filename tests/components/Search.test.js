import { shallowMount } from '@vue/test-utils'
import Search from '~/components/Search'

describe('components/Search.vue', () => {
  let wrapper 
  beforeEach(() => {
    wrapper = shallowMount(Search)
  })

  test('year size matches', () => {
    const year = wrapper.vm.filters.find(f => {
      return f.name === 'year'
    })
    const yearLen = new Date().getFullYear() - 1985 + 1;
    expect(year.items.length).toBe(yearLen)
  })
})