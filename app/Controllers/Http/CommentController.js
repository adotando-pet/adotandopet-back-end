'use strict'

const Comment = use('App/Models/Comment')

class CommentController {
  async index () {
    const comment = await Comment.query()
      .with('owner')
      .with('advertisement')
      .fetch()

    return comment
  }

  async store ({ request, params, auth }) {
    const data = request.only(['comment'])
    const user = auth.user.id
    const advertisement = params.advertisement_id

    const comment = await Comment.create({
      user_id: user,
      advertisement_id: advertisement,
      ...data
    })

    await comment.loadMany(['owner', 'advertisement'])

    return comment
  }

  async show ({ params, auth }) {
    const comment = await Comment.query()
      .where('user_id', auth.user.id)
      .andWhere('advertisement_id', params.advertisement_id)
      .first()
      .fetch()

    await comment.loadMany(['owner', 'advertisement'])

    return comment
  }

  async update ({ params, request, auth }) {
    const data = request.only(['comment'])
    const user = auth.user.id
    const advertisement = params.advertisement_id

    const comment = await Comment.query()
      .where('user_id', user)
      .andWhere('advertisement_id', advertisement)
      .first()
      .fetch()

    await comment.merge(data)

    await comment.save()

    await comment.loadMany(['owner', 'advertisement'])

    return comment
  }

  async destroy ({ params, auth }) {
    const comment = await Comment.query()
      .where('user_id', auth.user.id)
      .andWhere('advertisement_id', params.advertisement_id)
      .first()
      .fetch()

    await comment.delete()
  }
}

module.exports = CommentController
