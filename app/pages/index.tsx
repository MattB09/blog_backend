import React, { useState, useEffect } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import API from '../utils/api'
import { Story } from '../types'
import StoryCard from '../components/StoryCard'
import Paginator from '../components/Paginator'

interface Totals {
  stories: number,
  pages: number
}

interface StoriesData {
  total: Totals
  page: number,
  rows: Story[]
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let result

  if (context.query.page === undefined) {
    result = await API.get('/stories')
  } else {
    result = await API.get(`/stories/?page=${context.query.page}`)
  }

  return {
    props: {stories: result.data}
  }
}

const Home: React.FC = ({stories}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // const [columns, setColumns] = useState<number>(1)
  // const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     setWindowWidth(window.innerWidth)
  //   })
  //   if (windowWidth < 640) setColumns(1)
  //   else if (windowWidth < 1024) setColumns(2)
  //   else setColumns(3)
  // }, [windowWidth])

  return (
    <div>
      <main>
        <h1>HomePage</h1>
        <div>
          {stories.rows.length > 0 && stories.rows.map((story:Story, ind: number) => (
            <StoryCard key={story.id} story={story} myStack={false} />
          ))}
        </div>
        <Paginator pages={stories.total.pages} page={stories.page} />
      </main>
    </div>
  )
}

export default Home
