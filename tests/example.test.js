import { double } from './example'

test('first test', () => {
  expect(123).toBe(123)
})

test('argument is Number', () => {
  expect(double(3)).toBe(6)
  expect(double(10)).toBe(20)
})

test('no argumrnt', () => {
  expect(double()).toBe(0)
})