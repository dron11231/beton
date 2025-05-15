import { makeAutoObservable } from 'mobx';
import { IUserStore } from './types';

export class UserStore implements IUserStore {
  public userId: number | null;

  constructor() {
    makeAutoObservable(this);
  }

  public setUserId = (userId: number | null) => {
    this.userId = userId;
  };
}
