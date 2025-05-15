export interface IUserStore {
  userId: number | null;
  setUserId: (userId: number | null) => void;
}
