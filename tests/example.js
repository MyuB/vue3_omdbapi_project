export function asyncFn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('DONE!')
    }, 2000)
  }) 
}