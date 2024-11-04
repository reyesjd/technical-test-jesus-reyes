import { IUser } from '../interface';

export abstract class UserRepositoryAbstract {
  /**
   * Create a new user
   * @param {IUser} user - the user object
   * @returns {Promise<IUser>}
   */
  public abstract createUser(user: IUser): Promise<IUser>;

  /**
   * update a user
   * @param {IUser} user - the user object
   * @returns {Promise<IUser>}
   */
  public abstract updateUser(user: IUser): Promise<IUser>;

  /**
   * Get all user
   * @param {number} id - user id to find
   * @returns {Promise<IUser>}
   */
  public abstract getUserBy(user: Partial<IUser>): Promise<IUser>;

  /**
   * Get all users
   * @returns {Promise<IUser[]>}
   */
  public abstract getUsers(): Promise<IUser[]>;
}
