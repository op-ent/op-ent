declare module '@ioc:Adonis/Core/Validator' {
  interface Rules {
    length(length: number): Rule
  }
}
