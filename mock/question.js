const Mock = require('mockjs')

const getQuestionList = require("./data/getQuestionList")

const Random = Mock.Random


module.exports = [
  {
    // 获取问卷信息
    url: '/api/question/:id',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
          desc: "问卷描述",
          js: "",
          css: "",
          isPublished: true,
          componentList: [
            {
              fe_id: Random.id(),
              type: 'questionTitle',
              title: '标题',
              isHidden: false,
              isLocked: false,
              props: {
                text: '个人信息调研',
                level: 1,
                isCenter: false
              }
            }, {
              fe_id: Random.id(),
              type: 'questionInput',
              title: '输入框',
              isHidden: false,
              isLocked: false,
              props: {
                text: '你的姓名',
                placeholder: '请输入姓名...',
              }
            }, {
              fe_id: Random.id(),
              type: 'questionInput',
              title: '输入框',
              isHidden: false,
              isLocked: false,
              props: {
                text: '你的电话',
                placeholder: '请输入电话...',
              }
            }, {
              fe_id: Random.id(),
              type: 'questionParagraph',
              title: '段落',
              isHidden: false,
              isLocked: false,
              props: {
                text: "一行段落",
                isCenter: false,
              }
            }, {
              fe_id: Random.id(),
              type: 'questionInfo',
              title: '信息',
              isHidden: false,
              isLocked: false,
              props: {
                title: "问卷标题",
                desc: "问卷描述",
              }
            }, {
              fe_id: Random.id(),
              type: 'questionTextarea',
              title: '多行输入框',
              isHidden: false,
              isLocked: false,
              props: {
                text: "多行输入框标题",
                placeholder: "请输入多行文本...",
              }
            }, {
              fe_id: Random.id(),
              type: 'questionRadio',
              title: '单选',
              isHidden: false,
              isLocked: false,
              props: {
                title: "单选标题",
                isVertical: false,
                options: [
                  { value: "Dp_7_", text: "选项1" },
                  { value: "s0iyj", text: "选项2" },
                  { value: "9jVTJ", text: "选项3" },
                ],
                value: "",
              }
            },
          ]
        },
      }
    }
  },
  {
    // 新建问卷
    url: '/api/question',
    method: 'post',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id()
        }
      }
    }
  },
  {
    // 获取问卷列表
    url: '/api/question',
    method: 'get',
    response(ctx) {
      const { query = {} } = ctx

      const isStar = query.isStar === 'true'
      const isDeleted = query.isDeleted === 'true'
      const page = parseInt(query.page) || 1
      const pageSize = parseInt(query.pageSize) || 10
      return {
        errno: 0,
        data: {
          list: getQuestionList({ isStar, isDeleted, page, pageSize }),
          total: 100
        }
      }
    }
  },
  {
    // 更新问卷信息
    url: '/api/question/:id',
    method: 'post',
    response() {
      return {
        errno: 0
      }
    }
  },
  {
    // 复制问卷信息
    url: '/api/question/duplicate/:id',
    method: 'post',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        }
      }
    }
  },
  {
    // 批量恢复问卷
    url: '/api/question/recover',
    method: 'post',
    response() {
      return {
        errno: 0,
      }
    }
  },
  {
    // 批量恢复问卷
    url: '/api/question/deleteQuestions',
    method: 'delete',
    response() {
      return {
        errno: 0,
      }
    }
  },
]