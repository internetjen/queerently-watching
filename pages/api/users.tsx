// import { NextApiRequest, NextApiResponse } from 'next';
// import { UserModel, UserDocument } from '../../database/models/UserModel';
// import { getUsersCollection } from '../../database/connect';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'POST') {
//     try {
//       const { username, email, password } = req.body;

//       const usersCollection = await getUsersCollection();
//       const userExists = await usersCollection.findOne({ email });

//       if (userExists) {
//         return res
//           .status(400)
//           .json({ message: 'User with this email already exists' });
//       }

//       const user: UserDocument = await UserModel.create({
//         username,
//         email,
//         password,
//       });

//       return res.status(201).json({
//         user: {
//           id: user._id,
//           username: user.username,
//           email: user.email,
//           createdAt: user.createdAt,
//         },
//       });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: 'Something went wrong' });
//     }
//   }

//   return res.status(404).json({ message: 'API endpoint not found' });
// }
