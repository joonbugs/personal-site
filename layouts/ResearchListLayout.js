import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import Image from '@/components/Image'

const AUTHOR_SHORTNAME = 'J.W. Jang'

// [paperlink, blogpost, demovideo, video, code, slides, talk]
export function generateLinkString(linksArray) {
  var retStringArr = []
  var retString = ''
  for (let i = 0; i < linksArray.length; i++) {
    if (linksArray[i] != null) {
      switch (i) {
        case 0:
          retString += '[<a href="' + linksArray[i] + '">PDF</a>]'
          // retStringArr.push(React.createElement('a', { href: linksArray[i] }, 'paper'))
          break
        case 1:
          retString += '[<a href="' + linksArray[i] + '">blog</a>]'
          // retStringArr.push(React.createElement('a', { href: linksArray[i] }, 'blog'))
          break
        case 2:
          retString += '[<a href="' + linksArray[i] + '">demo video</a>]'
          // retStringArr.push(React.createElement('a', { href: linksArray[i] }, 'demo video'))
          break
        case 3:
          retString += '[<a href="' + linksArray[i] + '">video</a>]'
          // retStringArr.push(React.createElement('a', { href: linksArray[i] }, 'video'))
          break
        case 4:
          retString += '[<a href="' + linksArray[i] + '">code</a>]'
          // retStringArr.push(React.createElement('a', { href: linksArray[i] }, 'code'))
          break
        case 5:
          retString += '[<a href="' + linksArray[i] + '">slides</a>]'
          // retStringArr.push(React.createElement('a', { href: linksArray[i] }, 'slides'))
          break
        case 6:
          retString += '[<a href="' + linksArray[i] + '">talk</a>]'
          // retStringArr.push(React.createElement('a', { href: linksArray[i] }, 'talk'))
          break
        case 7:
          retString += '[<a href="' + linksArray[i] + '">website</a>]'
          // retStringArr.push(React.createElement('a', { href: linksArray[i] }, 'talk'))
          break
      }
      retString += '    '
    }
  }

  return retString
}

export default function ResearchListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredPosts

  return (
    <>
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="flex justify-between">
            <div className="relative max-w-lg">
              <input
                aria-label="Search articles"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search articles"
                className="block w-full px-4 py-2 text-slate-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-color focus:border-primary-color dark:focus:ring-primary-color-dark dark:focus:border-primary-color-dark dark:bg-gray-800 dark:text-slate-100"
              />
              <svg
                className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div>
              <Link
                href={'/tags'}
                className="text-xl font-semibold text-gray-900 sm:p-4 dark:text-gray-100 hover:dark:text-primary-color-dark hover:text-primary-color"
              >
                All Tags
              </Link>
            </div>
          </div>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!filteredPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const {
              slug,
              date,
              title,
              writers,
              venue,
              summary,
              tags,
              heroimage,
              heroimagealt,
              paperlink,
              blogpost,
              demovideo,
              video,
              code,
              slides,
              talk,
              website,
            } = frontMatter
            const linksArray = [paperlink, blogpost, demovideo, video, code, slides, talk, website]
            return (
              // <li key={slug} className="py-4">
              //   <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
              //     <dl>
              //       <dt className="sr-only">Published on</dt>
              //       <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              //         <time dateTime={date}>{formatDate(date)}</time>
              //       </dd>
              //     </dl>
              //     <div className="space-y-3 xl:col-span-3">
              //       <div>
              //         <h3 className="text-2xl font-bold leading-8 tracking-tight">
              //           <Link
              //             href={`/research/${slug}`}
              //             className="text-gray-900 dark:text-gray-100"
              //           >
              //             {title}
              //           </Link>
              //         </h3>
              //         <div className="flex flex-wrap">
              //           {tags.map((tag) => (
              //             <Tag key={tag} text={tag} />
              //           ))}
              //         </div>
              //       </div>
              //       <div className="prose text-gray-500 max-w-none dark:text-gray-400">
              //         {summary}
              //       </div>
              //     </div>
              //   </article>
              // </li>
              <li key={slug} className="py-3">
                <article>
                  <div className="items-left space-y-3 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline xl:-space-y-4">
                    <div
                      className="xl:col-span-1 self-center"
                      style={{ position: 'relative', height: '200px', width: '85%' }}
                    >
                      <Link href={`/research/${slug}`} className="place-content-center">
                        <Image
                          src={heroimage}
                          alt={heroimagealt}
                          layout="fill"
                          className="object-contain"
                        ></Image>
                      </Link>
                    </div>
                    <div className="mt-3 xl:col-span-3">
                      <div className="">
                        <h3 className="justTitle text-2xl font-bold tracking-tight pb-2 mt-6 leading-10">
                          <Link
                            href={`/research/${slug}`}
                            className="text-slate-800 dark:text-slate-200"
                          >
                            {title}
                          </Link>
                        </h3>
                      </div>
                      <div className="flex flex-wrap pb-4">
                        {tags
                          .filter(
                            (tag) => tag.localeCompare('featured') && tag.localeCompare('research')
                            // && !tag.localeCompare('')
                          )
                          .map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                      </div>
                      <div className="flex text-lg flex-wrap prose text-slate-600 max-w-none dark:text-slate-400 pb-2 pt-1">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: writers
                              .split(',')
                              .map((x) =>
                                x.includes(AUTHOR_SHORTNAME) || x.includes('JiWoong Jang')
                                  ? '<b>' + x + '</b>'
                                  : x
                              )
                              .reduce((acc, x) => (x === '' ? '' : acc + ', ' + x)),
                          }}
                        />
                      </div>
                      <div className="flex flex-wrap font-lg italic prose text-slate-600 max-w-none dark:text-slate-400 pb-6">
                        {venue}
                      </div>
                      <div className="flex flex-wrap font-xl prose text-slate-600 max-w-none dark:text-slate-400 pb-6">
                        {/* paperlink, blogpost, demovideo, video, code, slides, talk */}
                        <div dangerouslySetInnerHTML={{ __html: generateLinkString(linksArray) }} />
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/research/${slug}`}
                          className="text-primary-color hover:text-blue-600 dark:hover:text-yellow-300 dark:text-primary-color-dark"
                          aria-label={`Read "${title}"`}
                        >
                          &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
