import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { ChatSchema } from '../models/Chat.js';
import { MessageSchema } from '../models/Message.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Chat = mongoose.model('Chat', ChatSchema);
  Message = mongoose.model('Message', MessageSchema);
}

export const dbContext = new DbContext()
