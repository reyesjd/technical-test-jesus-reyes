import { Injectable } from '@nestjs/common';
import { IUser, UserRepositoryAbstract } from '../../domain';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/common';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository implements UserRepositoryAbstract {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  /**
   * Create a new user
   * @param {IUser} user
   * @returns {Promise<IUser>}
   */
  public async createUser(user: IUser): Promise<IUser> {
    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }

  /**
   * Update a user
   * @param {IUser} user
   * @returns {Promise<IUser>}
   */
  public async updateUser(user: IUser): Promise<IUser> {
    await this.userRepository.update(user.id, user);
    return this.getUserBy({ id: user.id });
  }

  /**
   * Get a user by id
   * @param {number} id
   * @returns {Promise<IUser>}
   */
  public async getUserBy(user: Partial<IUser>): Promise<IUser> {
    return await this.userRepository.findOneBy({ ...user, status: true });
  }

  /**
   * Get a users
   * @param {number} id
   * @returns {Promise<IUser[]>}
   */
  public async getUsers(): Promise<IUser[]> {
    return await this.userRepository.findBy({
      status: true,
    });
  }
}
