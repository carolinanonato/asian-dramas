import type { NextPage } from 'next'

import Intro from '../components/Intro'

import ProjectSnippet, {ProjectSnippetInterface} from '../components/project_snippet'


const Home: NextPage = () => {

  const projectMetadataArray = []

  projectMetadataArray.push(
    {
    title: 'Japan',
    desc: 'Nihongo Wakarimasu? The best selection of Japanese doramas.',
    linkUrl: '/japan',
    img: '/japan.jpg'
    }
  )

  projectMetadataArray.push(
    {
    title: 'South Korea',
    desc: '♥ Saranghae ♥ Kdramas are so popular nowadays, do you know which to watch?',
    linkUrl: '/southkorea',
    img: '/southkorea.jpg'
    }
  )

  projectMetadataArray.push(
    {
    title: 'China',
    desc: 'Gege... ',
    linkUrl: '/japan',
    img: '/china.jpg'
    }
  )

const ProjectSnippetElements =[]

for (let i = 0; i < projectMetadataArray.length; i++) {
  const metaData = projectMetadataArray[i]
  const element = <ProjectSnippet {...metaData} key={i}/>
  ProjectSnippetElements.push(element)

}

  return (
   <div>
     <Intro/>
     <div className='mt-4 flex flex-col gap-2 bg-slate-100'>    {ProjectSnippetElements}     </div>
   </div>
  )
  
}

export default Home
