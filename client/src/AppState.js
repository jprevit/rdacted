import { reactive } from 'vue'
import { User } from './models/User.js'
import { Chat } from './models/Chat.js'
import { Message } from './models/Message.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  /**@type {User} */
  activeUser: null,

  /**@type {Chat} */
  activeChat: null,
  
  /**@type {Message[]} */
  messages: [],

  /**@type {User[]} */
  chatUsers: null


})