import { ModelAttributes } from '@ioc:Adonis/Lucid/Orm'
import UserModel from 'App/Models/User'

export type User = ModelAttributes<UserModel>
