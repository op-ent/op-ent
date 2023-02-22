import { ModelAttributes } from '@ioc:Adonis/Lucid/Orm'
import UserModel from './app/Models/User'

export type User = ModelAttributes<UserModel>
