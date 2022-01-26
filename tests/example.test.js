import { double } from './example'

describe('group1', () => {
  beforeAll(() => {
    console.log("beforeAll")
  })
  afterAll(() => {
    console.log("afterAll")
  })

  beforeEach(() => {
    console.log("beforeEach")
  })
  afterEach(() => {
    console.log("afterEach")
  })

  test('first test', () => {
    console.log("first test")
    expect(123).toBe(123)
  })
  
  test('argument is Number', () => {
    console.log("argument is Number")
    expect(double(3)).toBe(6)
    expect(double(10)).toBe(20)
  })
  
  test('no argumrnt', () => {
    console.log("no argument")
    expect(double()).toBe(0)
  })
})
