export class UserAlreadyExistsError extends Error {
  public errorCode: string
  constructor(errorCode: string) {
    super('User already exists')
    this.errorCode = errorCode
  }
}
