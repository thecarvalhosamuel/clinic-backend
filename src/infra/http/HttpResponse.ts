export class HttpResponse {
  statusCode: number
  message: string
  response?: object | null

  constructor() {
    this.statusCode = 0
    this.message = ''
  }
}

export class HttpResponse200 extends HttpResponse {
  constructor() {
    super()
    this.statusCode = 200
    this.message = 'OK'
  }
}

export class HttpResponse201 extends HttpResponse {
  constructor(readonly response: object) {
    super()
    this.statusCode = 201
    this.message = 'Created'
    this.response = response
  }
}

export class HttpResponse204 extends HttpResponse {
  constructor() {
    super()
    this.statusCode = 204
    this.message = 'No Content'
  }
}