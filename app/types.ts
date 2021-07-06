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
  date_added: string,
  user_id: number,
  email: string,
  avatar_color: string
}