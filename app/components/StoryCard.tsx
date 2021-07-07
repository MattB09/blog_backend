import React from 'react'
import Link from 'next/link'
import { Story } from '../types'

interface Props {
  story: Story,
  myStack: boolean,
  deleteFunc?: (id: number) => {}
}

const StoryCard: React.FC<Props> = ({story, myStack, deleteFunc}) => {

  // format date to DD Mon YYYY ie. 20 Jun 2018
  const dateFormat = (dateStr: string) => {
    let dt = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    return dt.toLocaleDateString('en-gb', options);
  }

  return (
    <article className="">

      {/* avatar, user and date of story */}
      {!myStack && (
        <div className="">
          <div className="">
            <svg viewBox="0 0 100 100" height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill={story.avatar_color}>
              <circle cx="50%" cy="50%" r="50%" />
            </svg>
            <h3>{story.email.split('@')[0]}</h3>
          </div>
          <time className="">{dateFormat(story.date_added)}</time>
        </div>
      )}

      {/* Photo */}
      <div className="">
        { story.photo_url !== null && (
          <img src={story.photo_url} alt={story.title} height={200} width={350} loading="lazy" />
        )}
      </div>

      {/* title and content */}
      <h2 className="">{story.title}</h2>
      <p className="">{story.content}</p>

      { myStack && (
        <div className="">
          <button className="" onClick={() => deleteFunc(story.id)}>Delete</button>
          <Link href={`/editpost/${story.id}`}><a className="">
            Edit
          </a></Link>
        </div>
      )}
    </article>
  )
}

export default StoryCard