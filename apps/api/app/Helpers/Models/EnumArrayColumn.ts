import { DecoratorFn, LucidModel } from '@ioc:Adonis/Lucid/Orm'

export type EnumDecorator = () => DecoratorFn

export const enumArrayColumn: EnumDecorator = () => {
  return function decorateAsColumn(target, property) {
    const Model = target.constuctor as LucidModel
    Model.boot()
    Model.$addColumn(property, {
      prepare: (value: string[]): string => `{${value.join(',')}}`,
      consume: (value: string): string[] => value.slice(1, -1).split(','),
    })
  }
}
