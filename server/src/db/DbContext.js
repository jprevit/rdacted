import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { ChatSchema } from '../models/Chat.js';
import { MessageSchema } from '../models/Message.js';
import { UserSchema } from '../models/User.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Chat = mongoose.model('Chat', ChatSchema);
  Message = mongoose.model('Message', MessageSchema);
  User = mongoose.model('User', UserSchema)
}

export const dbContext = new DbContext()
