import { UserModel } from '../models/user.model';
import { User } from '../interfaces/user.interface';
import userRepository from '../repositories/user.repository';
import { Format } from '../utils/format.util';

export const saveUser = async (user: User) => {
  const userModel = new UserModel();
  userModel.firstName = user.firstName;
  userModel.lastName = user.lastName
  userModel.email = user.email;
  userModel.creationDate = Format.setDate();

  return await userRepository.save(userModel);
}

export const getUsers = async () => {
  const userModelList = await userRepository.find();
  return userModelList ? userModelList : [];
}

export const getUser = async (id: number) => {
  const userModelList = await userRepository.findOneBy({ id });
  return userModelList ? userModelList : null;
}

export const updateUser = async (id: number, user: User) => {
  const userModel = await userRepository.findOneBy({ id });
  if (userModel) {
    const userUpdated = new UserModel();
    userUpdated.firstName = userModel.firstName;
    userUpdated.lastName = userModel.lastName;
    userUpdated.email = userModel.email;
    userUpdated.creationDate = userModel.creationDate;

    return await userRepository.update(userModel.id, userUpdated) ? userUpdated : null;
  } else {
    return null;
  }
}

export const deleteUser = async (id: number) => {
  const user = await userRepository.findOneBy({ id });
  if (user) {
    return await userRepository.delete(user.id) ? user : null;
  } else {
    return null;
  }
}

export const usersPaginated = async (size: number, page: number) => {
  // let options = {};

  // if (sort === 'asc') {
  //   options = {
  //     order: { id: 'ASC' },
  //     take: size,
  //     skip: size * (page - 1)
  //   }
  // } else if (sort === 'desc') {
  //   options = {
  //     order: { id: 'DESC' },
  //     take: size,
  //     skip: size * (page - 1)
  //   }
  // }

  // const [users, totalUsers] = await userRepository.findAndCount(options);

  const [users, totalUsers] = await userRepository.findAndCount(
    {
      order: { id: 'ASC' },
      take: size,
      skip: size * (page - 1)
    }
  );

  return {users, totalUsers, totalPages: Math.ceil(totalUsers/size), usersInPage: users.length};
}
