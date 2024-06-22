import { appDataSource } from '../data-source';
import { UserModel } from '../models/user.model';

const userRepository = appDataSource.getRepository(UserModel);

export default userRepository;