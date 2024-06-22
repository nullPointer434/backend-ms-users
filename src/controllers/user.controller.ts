import { Request, Response } from 'express';
import { User } from '../interfaces/user.interface';
import * as userService from '../services/user.service';

export const createUser = async (req: Request, res: Response) => {
  try {
    const user: User = req.body;
    const userModel = await userService.saveUser(user);
    res.status(200).send(userModel);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUsers();

    if (!users) {
      res.status(404).json({ message: 'users were not found' });;
    } else {
      res.status(200).send(users);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await userService.deleteUser(parseInt(id));

    if(!result) {
      res.status(404).json({ message: 'users were not found' });
    } else {
      res.status(200).send(id);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export const paginatedUsers = async (req: Request, res: Response) => {
  try {
    const size = Number(req.query.size);
    const page = Number(req.query.page);

    const usersPaginated = await userService.usersPaginated(size, page);
    res.status(200).send(usersPaginated);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}
