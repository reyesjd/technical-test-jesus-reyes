import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser, User, UserRepositoryAbstract } from '../domain';
import { createHashPassword } from 'src/common';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepositoryAbstract) {}

  public async createUser(user: IUser): Promise<IUser> {
    const newUser = new User(user);

    const hashedPassword = createHashPassword(user.password);

    return await this.userRepository.createUser({
      ...newUser.toObject(),
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  public async getUserById(id: number): Promise<IUser> {
    const existingUser = await this.userRepository.getUserBy({ id });

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    return existingUser;
  }

  public async getUserByEmail(email: string): Promise<IUser> {
    const existingUser = await this.userRepository.getUserBy({ email });

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    return existingUser;
  }

  public async getUsers(): Promise<IUser[]> {
    return await this.userRepository.getUsers();
  }

  public async updateUser(user: IUser): Promise<IUser> {
    const existingUser = await this.getUserById(user.id);

    const newUser = new User({
      ...existingUser,
      ...user,
      updatedAt: new Date(),
    });

    let hashedPassword = existingUser.password;
    if (user.password) {
      hashedPassword = createHashPassword(user.password);
    }

    return await this.userRepository.updateUser({
      ...existingUser,
      ...newUser.toObject(),
      password: hashedPassword,
      updatedAt: new Date(),
    });
  }

  public async deleteUser(id: number): Promise<IUser> {
    const existingUser = await this.getUserById(id);
    return await this.userRepository.updateUser({
      ...existingUser,
      status: false,
      updatedAt: new Date(),
    });
  }
}
