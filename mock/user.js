const Mock = require('mockjs')
const Random = Mock.Random


module.exports = [
  {
    // 获取用户
    url: '/api/user/info',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          username: Random.title(),
          nickname: Random.cname(),
        },
      }
    }
  },
  {
    // 注册新用户
    url: '/api/user/register',
    method: 'post',
    response() {
      return {
        errno: 0
      }
    }
  },
  {
    // 用户登录
    url: '/api/user/login',
    method: 'post',
    response() {
      return {
        errno: 0,
        data: {
          token: Random.word(20)
        },
      }
    }
  },
]