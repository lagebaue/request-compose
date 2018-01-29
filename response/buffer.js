
module.exports = () => ({res}) => new Promise((resolve, reject) => {
  var body = ''
  res
    .on('data', (chunk) => body += chunk)
    .on('end', () => resolve({res, body}))
    .on('error', reject)
})
