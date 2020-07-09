/* eslint-disable class-methods-use-this */
import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';

import AppError from '../errors/AppError';

interface Request {
  username: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ username, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { username },
    });

    if (checkUserExists) {
      throw new AppError('Username already used');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      username,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
