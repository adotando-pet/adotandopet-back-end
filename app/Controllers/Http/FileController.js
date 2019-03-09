'use strict'

const File = use('App/Models/File')

const Helpers = use('Helpers')
const Drive = use('Drive')

const v = require('voca')

class FileController {
  async index () {
    const file = await File.query()
      .with('user')
      .fetch()

    return file
  }

  async store ({ request, response, auth }) {
    try {
      if (!request.file('file')) {
        return
      }

      const user = auth.user.id

      const upload = request.file('file', { size: '5mb' })

      const fileName = `${user}_${Date.now()}_${v.slugify(
        v.replace(upload.clientName, `.${upload.extname}`, '')
      )}.${upload.subtype}`

      await upload.move(Helpers.tmpPath('uploads'), {
        name: fileName
      })

      if (!upload.moved()) {
        throw upload.error()
      }

      const file = await File.create({
        file: fileName,
        name: upload.clientName,
        type: upload.type,
        subtype: upload.subtype
      })

      await file.load('user')

      return file
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Erro no upload de arquivo' } })
    }
  }

  async show ({ params, response }) {
    const file = await File.findOrFail(params.id)

    return response.download(Helpers.tmpPath(`uploads/${file.file}`))
  }

  async update ({ params, request, auth }) {
    const file = await File.findOrFail(params.id)
    const user = auth.user.id

    const upload = request.file('file', { size: '5mb' })

    const fileName = `${user}_${Date.now()}_${v.slugify(
      v.replace(upload.clientName, `.${upload.extname}`, '')
    )}.${upload.subtype}`

    if (await Drive.exists(Helpers.tmpPath(`uploads/${file.file}`))) {
      await Drive.delete(Helpers.tmpPath(`uploads/${file.file}`))
    }

    await upload.move(Helpers.tmpPath('uploads'), {
      name: fileName
    })

    if (!upload.moved()) {
      throw upload.error()
    }

    await file.merge({
      file: fileName,
      name: upload.clientName,
      type: upload.type,
      subtype: upload.subtype
    })

    await file.save()

    await file.load('user')

    return file
  }

  async destroy ({ params }) {
    const file = await File.findOrFail(params.id)
    const path = Helpers.tmpPath(`uploads/${file.file}`)

    if (await Drive.exists(path)) {
      await Drive.delete(path)
    }

    await file.delete()
  }
}

module.exports = FileController
