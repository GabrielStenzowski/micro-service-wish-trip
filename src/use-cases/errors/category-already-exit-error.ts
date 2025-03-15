export class CategoryAlreadyExistsError extends Error {
  public errorCode: string
  constructor(errorCode: string) {
    super('Category already exists')
    this.errorCode = errorCode
  }
}
