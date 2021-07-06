export interface UserInfo {
  userId: number,
  email: string,
  avatar: string
}

export interface Story {
  id: number,
  title: string,
  content: string,
  photo_url: string | null,
  date_added: Date,
  user_id: number
}