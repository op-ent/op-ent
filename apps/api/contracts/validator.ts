declare module '@ioc:Adonis/Core/Validator' {
  interface Rules {
    containsNumber(): Rule
    containsLowercaseCharacter(): Rule
    containsUppercaseCharacter(): Rule
    containsSpecialCharacter(): Rule
  }
}
