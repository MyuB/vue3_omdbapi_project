import { asyncFn } from "./example";

//TEST는 최대 5000ms로 지정되어 있다. 그래서 test의 세 번쨰 argument에 ms단위로 초를 넣어줄 수 있다
describe('async test', () => {
  test('done', (done) => {
    asyncFn().then(res => {
      expect(res).toBe('DONE!')
      done()
    })
  })
  //return 은 비동기로 작동되어야해서 이러게 작성도 가능
  test('then', () => {
    return asyncFn().then(res => {
      expect(res).toBe('DONE!')
    })
  })

  test('resolves', ()=> {
    return expect(asyncFn()).resolves.toBe('DONE!')
  })

  test('async/await', async () => {
    const res = await asyncFn()
    expect(res).toBe("DONE!")
  }, 7000)
})

// const userA = {
//   name: 'jay',
//   age: 25
// }
// const userB = {
//   name: 'neo',
//   age: 22
// }

// test('data match', () => {
//   expect(userA.age).toBe(25)
//   expect(userA).toEqual({
//     name: 'jay',
//     age: 25
//   })
// })

// test('data should not match', () => {
//   expect(userB.name).not.toBe('jay')
//   expect(userB).not.toEqual(userA)
// })



// import { double } from './example'

// describe('group1', () => {
//   beforeAll(() => {
//     console.log("beforeAll")
//   })
//   afterAll(() => {
//     console.log("afterAll")
//   })

//   beforeEach(() => {
//     console.log("beforeEach")
//   })
//   afterEach(() => {
//     console.log("afterEach")
//   })

//   test('first test', () => {
//     console.log("first test")
//     expect(123).toBe(123)
//   })
  
//   test('argument is Number', () => {
//     console.log("argument is Number")
//     expect(double(3)).toBe(6)
//     expect(double(10)).toBe(20)
//   })
  
//   test('no argumrnt', () => {
//     console.log("no argument")
//     expect(double()).toBe(0)
//   })
// })
