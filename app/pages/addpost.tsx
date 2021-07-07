import React, { useEffect, useState, FormEvent } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useAuthContext } from '../components/auth/AuthProvider'
import API from '../utils/api'
import axios from 'axios'

const addpost:React.FC = () => {
  const { status, accessToken } = useAuthContext()
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const router = useRouter()

  useEffect(() => {
    if (status === 'unathenticated') {
      router.push('/')
    }
  }, [status])

  const handlePostSubmit = async (clickEvent:FormEvent<HTMLFormElement>): Promise<void> => {
    clickEvent.preventDefault()

    if (title === '' || content === '') {
      alert("must fill in all required fields")
    }

    let photo_url = null
    
    if (photoFile !== null) {
      let fd = new FormData()
      fd.append("file", photoFile)

      let upload_url = await API.get(
        `s3upload/${photoFile.name}`,
        {headers: {'Authorization': `${accessToken}`}, withCredentials: true}
      );

      let res = await axios({
        url: `${upload_url.data}`,
        method: 'PUT',
        headers: {"Content-Type": "multipart/form-data"},
        data: photoFile
      });

      photo_url = upload_url.data.split('?')[0]
    }

    await API.post(`/stories`, { title, content, photo_url}, { headers: {'Authorization': `${accessToken}`}, withCredentials: true})
    router.push('/mystack')
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files
    let file = files === null ? null : files[0] 
    if (file !== null) {
      setPhotoFile(file)
    } else {
      setPhotoFile(null)
    }
  }

  return (
    <main className="">
      {status === 'authenticated' && (
        <>
          <h1 className="">Add a post</h1>
          <form onSubmit={handlePostSubmit}>
            
            <label htmlFor="title">Title  <span className="">Required</span></label>
            <input id="title" type="text" onChange={(e)=> setTitle(e.target.value)} required /> 

            <label htmlFor="description">Description  <span className="">Required</span></label>
            <textarea id="description" onChange={(e)=> setContent(e.target.value)} required >
            </textarea>
            
            <div className=""> 
              <input id="upload" className=""
                type="file" accept="image/png, image/jpeg" onChange={handleFileChange} />
              <label htmlFor="upload">
                <span className="">Upload</span>
                <Image src='/attachment.png' width={9.96} height={12} alt='Stacked Logo' />
                <p className="">{photoFile === null ? "" : photoFile.name}</p>             
              </label>
            </div>

            <button type="submit" className="">Post</button> 
          </form>
        </>
      )}
    </main>
  )
}

export default addpost