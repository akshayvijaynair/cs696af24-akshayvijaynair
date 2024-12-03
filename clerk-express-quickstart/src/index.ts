import 'dotenv/config';
import express from 'express';

import { Router } from 'express';
import {
  clerkClient,
  clerkMiddleware,
  getAuth,
  requireAuth,
} from '@clerk/express';
const router = Router();

const app = express();
const PORT = 3000;

app.use(clerkMiddleware());
router.get('/home', (req, res) => {
  res.send('Welcome to the Index Route!');
});
// Use requireAuth() to protect this route
router.get('/protected', requireAuth(), async (req, res) => {
  // Use `getAuth()` to get the user's `userId`
  const { userId } = getAuth(req);

  // Use Clerk's JavaScript Backend SDK to get the user's User object
  const user = await clerkClient.users.getUser(userId);

  res.json({ user });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
