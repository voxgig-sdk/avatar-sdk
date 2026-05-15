
import { Context } from './Context'


class AvatarError extends Error {

  isAvatarError = true

  sdk = 'Avatar'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  AvatarError
}

