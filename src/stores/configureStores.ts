import { UserStore } from './UserStore';
import { type IUserStore } from './UserStore/types';

export const userStore: IUserStore = new UserStore();
