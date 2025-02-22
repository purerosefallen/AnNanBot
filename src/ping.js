module.exports.name = 'ping'

module.exports.apply = (ctx) => {
  // 如果收到“天王盖地虎”，就回应“宝塔镇河妖”
  ctx.middleware(async (session, next) => {
    if (session.content === '天王盖地虎') {
      console.log(session)
      session.send('宝塔镇河妖')
    } else {
      return next()
    }
  })
}
