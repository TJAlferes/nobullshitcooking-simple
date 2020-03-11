export interface Message {
  chatMessageId: string
  chatMessageText: string
  room: string
  user: User
}

export interface Whisper {
  whisperId: string
  whisperText: string
  to: string
  user: User
}

export interface User {
  userId: string
  username: string
  avatar: string
}

export interface MessengerState {
  channel: string
  messages: Message|Whisper[]
  users: User[]
  onlineFriends: User[]
  status: string
  connectButtonDisabled: boolean
  disconnectButtonDisabled: boolean
}