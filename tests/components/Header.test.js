import { shallowMount } from '@vue/test-utils'

import router from '~/routes'
import store from '~/store'
import Header from '~/components/Header'

//대부분의 경우 각 test 환경에서 데이터를 처리할 수 있기 때문에 data가 contaminate 될 수 있다. 따라서 shallowmount 즉 mount하는 값들은 각각의 test안에서 각 test가 보관하는 것이 좋다. 이게 기본이다
//이거를 beforeEach로 가능
describe('components/Header.vue', () => {
  let wrapper
  beforeEach(async () => {
    window.scrollTo = jest.fn()
    router.push('/movie/tt1234567')
    await router.isReady()
    wrapper = shallowMount(Header, {
      global: {
        plugins: [
          router,
          store
        ]
      }
    })
  })

  test('경로 정규표현식이 없는 경우 일치x', () => {
    const regExp = undefined
    expect(wrapper.vm.isMatch(regExp)).toBe(false)
  })

  test("경로 정규표현식이 없는 경우 일치", () => {
    const regExp = /^\/movie/
    expect(wrapper.vm.isMatch(regExp)).toBe(true)
  })

  test("경로 정규표현식과 일치x", () => {
    const regExp = /^\/jay/
    expect(wrapper.vm.isMatch(regExp)).toBe(false)
  })
})