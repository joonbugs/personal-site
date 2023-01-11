import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

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

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/research/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/research/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
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
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/research/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-slate-500 dark:text-slate-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <div className="text-center font-lg italic prose text-slate-600 max-w-none dark:text-slate-400 pt-2">
                {venue}
              </div>
              <div className="text-center font-xl prose text-slate-600 max-w-none dark:text-slate-400 pt-2">
                {/* paperlink, blogpost, demovideo, video, code, slides, talk */}
                <div dangerouslySetInnerHTML={{ __html: generateLinkString(linksArray) }} />
              </div>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            {/* <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width="38px"
                          height="38px"
                          alt="avatar"
                          className="w-10 h-10 rounded-full"
                        />
                      )}
                      <dl className="text-sm font-medium leading-5 whitespace-nowrap">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-slate-900 dark:text-slate-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-primary-color dark:text-primary-color-dark hover:text-blue-600 dark:hover:text-yellow-300"
                            >
                              {author.twitter.replace('https://twitter.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl> */}
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="prose dark:prose-dark max-w-none">
                <div
                  className="self-flex-center object-contain"
                  style={{ position: 'relative', width: '100%', height: '390px' }}
                >
                  <Image
                    src={heroimage}
                    alt={heroimagealt}
                    layout="fill"
                    className="object-contain"
                  ></Image>
                </div>
                <div className="flex text-lg flex-wrap prose text-slate-600 max-w-none dark:text-slate-400 pt-2">
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
                {children}
              </div>
              <div className="pt-6 pb-6 text-sm text-slate-700 dark:text-slate-300">
                {/* <Link href={discussUrl(slug)} rel="nofollow">
                  {'Discuss on Twitter'}
                </Link>
                {` • `} */}
                {/* <Link href={editUrl(fileName)}>{'View on GitHub'}</Link> */}
              </div>
              {/* <Comments frontMatter={frontMatter} /> */}
            </div>
            <footer>
              <div className="text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs tracking-wide text-slate-500 uppercase dark:text-slate-400">
                          Previous Article
                        </h2>
                        <div className="text-primary-color dark:text-primary-color-dark hover:text-blue-600 dark:hover:text-yellow-300">
                          <Link href={`/research/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs tracking-wide text-slate-500 uppercase dark:text-slate-400">
                          Next Article
                        </h2>
                        <div className="text-primary-color dark:text-primary-color-dark hover:text-blue-600 dark:hover:text-yellow-300">
                          <Link href={`/research/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/research"
                  className="text-primary-color dark:text-primary-color-dark hover:text-blue-600 dark:hover:text-yellow-300"
                >
                  &larr; Back to Research
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
