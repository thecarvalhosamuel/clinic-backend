export class ErrorHandler extends Error {
  statusCode: number

  constructor() {
    super()
    this.message = 'Internal server error'
    this.statusCode = 500
  }
}

export class NotFoundError extends ErrorHandler {
  constructor(message: string) {
    super()
    this.message = message
    this.statusCode = 404
  }
}
export class BadRequestError extends ErrorHandler {
  constructor(message: string) {
    super()
    this.message = message
    this.statusCode = 400
  }
}
