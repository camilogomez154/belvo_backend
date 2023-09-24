export interface IValidator<T, R = void> {
  validate(command: T): Promise<R>;
}
