const Mock = require('mockjs');
const Random = Mock.Random;

function getQuestionList(opt = {}) {
  const { page = 1, pageSize = 10, isStar, isDeleted } = opt
  const list = [];
  for (let i = 0; i < pageSize; i++) {
    list.push({
      _id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStar: isStar || Random.boolean(),
      answerCount: Random.natural(50, 100),
      createdAt: Random.datetime(),
      isDeleted: isDeleted || Random.boolean()
    })
  }

  return list;
}

module.exports = getQuestionList;