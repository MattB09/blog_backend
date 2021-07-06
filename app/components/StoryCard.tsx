import React from 'react'
import Link from 'next/link'
import { Story } from '../types'

interface Props {
  story: Story,
  myStack: boolean,
  deleteFunc: () => {}
}

const StoryCard: React.FC<Props> = ({story, myStack, deleteFunc}) => {

  return (
    <article className="">
      {!myStack && (
        <div className="">

        </div>
      )}
    </article>
  )
}

export default StoryCard