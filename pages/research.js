// import siteMetadata from '@/data/siteMetadata'
// import projectsData from '@/data/projectsData'
// import Card from '@/components/Card'
// import { PageSEO } from '@/components/SEO'

// export default function Research() {
//   return (
//     <>
//       <PageSEO title={`Research - ${siteMetadata.author}`} description={siteMetadata.description} />
//       <div className="">
//         <div className="pt-6 pb-8 space-y-2 md:space-y-5">
//           <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
//             Research
//           </h1>
//           <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
//             A listing of different research projects I'm involved with.
//           </p>
//         </div>
//         <div className="container py-12">
//           <div className="flex flex-wrap -m-4">
//             {projectsData.map((d) => (
//               <Card
//                 key={d.title}
//                 title={d.title}
//                 description={d.description}
//                 imgSrc={d.imgSrc}
//                 href={d.href}
//                 github={d.github}
//                 tech1={d.tech1}
//                 tech2={d.tech2}
//                 tech3={d.tech3}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ResearchListLayout from '@/layouts/ResearchListLayout'
import { PageSEO } from '@/components/SEO'

export const POSTS_PER_PAGE = 10

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('research')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Research({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={`Research - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ResearchListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Research"
      />
    </>
  )
}
