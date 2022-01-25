exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'jay',
      age: 25,
      email: 'eoihnhohn@og.com'
    })
  }
}