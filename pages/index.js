import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { RoughNotation } from 'react-rough-notation'
import Image from '@/components/Image'
import ShortcutHome from '@/components/ShortcutHome'
import SocialIcon from '@/components/social-icons'
import NewsletterForm from '@/components/NewsletterForm'

const MAX_FEATURED_DISPLAY = 4
const MAX_BLOG_DISPLAY = 1
const MAX_DISPLAY = 2

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const research = await getAllFilesFrontMatter('research')
  const featured = research.filter((x) => x.tags.includes('featured'))
  console.log(featured)
  return { props: { posts, featured } }
}

// helper function for featured tag

// helper function for news

export default function Home({ posts, featured }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <div className="flex items-center justify-between">
            <div className="">
              <h1 className="text-2xl font-bold tracking-tight leading-normal text-slate-900 dark:text-slate-100 sm:text-4xl sm:leading-normal md:text-5xl md:leading-normal">
                Hi 👋 - I'm{' '}
                <span className="text-primary-color dark:text-primary-color-dark">Joon</span>, a phd
                student focused on making the world more{' '}
                <RoughNotation
                  type="highlight"
                  show={true}
                  color="#ffa472"
                  animationDelay={400}
                  animationDuration={800}
                >
                  accessible.
                </RoughNotation>
              </h1>
            </div>
            <div>
              <Image
                src={siteMetadata.image}
                alt="profile photo of Joon"
                width="750%"
                height="500%"
                // className=" [clip-path:polygon(0%_0%,100%_0%,50%_100%,0%_50%)]"
                className="rounded-full"
              />
            </div>
          </div>
          <p className="text-lg leading-7 text-slate-600 dark:text-slate-300">
            This is a home base for{' '}
            <RoughNotation
              type="underline"
              show={true}
              color="#fff176"
              animationDelay={800}
              animationDuration={1200}
            >
              research,{' '}
            </RoughNotation>
            <RoughNotation
              type="underline"
              show={true}
              color="#BEE5B0"
              animationDelay={1400}
              animationDuration={1200}
            >
              reflections,{' '}
            </RoughNotation>
            &{' '}
            <RoughNotation
              type="underline"
              show={true}
              color="#ADD8E6"
              animationDelay={1700}
              animationDuration={1200}
            >
              everything{' '}
            </RoughNotation>
            in between.
          </p>
          <br />
          <div className="flex mr-7 space-x-6 stroke center">
            <SocialIcon kind="github" href={siteMetadata.github} size="5" />
            <SocialIcon kind="gscholar" href={siteMetadata.gscholar} size="5" />
            <SocialIcon kind="mail" href={'mailto:' + siteMetadata.email} size="5" />
            {/* <SocialIcon kind="instagram" href={siteMetadata.instagram} size="5" /> */}
            {/* <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" /> */}
            {/* <SocialIcon kind="twitter" href={siteMetadata.twitter} size="5" /> */}
          </div>
          <br />
          <div className="flex justify-center w-full">
            <div className="justify-center mt-2">
              <ShortcutHome />
            </div>
          </div>
        </div>
        <div className="pt-4 space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline pb-4">
          <h2 className="flex-none text-xl font-semibold leading-8 tracking-tight text-slate-800 dark:text-slate-200">
            <RoughNotation type="underline" show={true} color="#ADD8E6" animationDuration={1}>
              {' '}
              Recent Updates
            </RoughNotation>
          </h2>
          {/* <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{children}</div> */}
          <ul className="col-span-3 leading-8 tracking-tight text-m pt-2 pb-2 prose dark:prose-dark">
            <li>
              <strong>2023 Jan</strong> - Overhauled this personal website for improved design and
              accessibility 🌐
            </li>
            <li>
              <strong>2022 Nov</strong> - Joined the VariAbility Lab 🎉
            </li>
            <li>
              <strong>2022 Oct</strong> - ASSETS 22 @ Athens(🇬🇷): shared a poster and participated
              as an SV
            </li>
            <li>
              <strong>2022 Sept</strong> - Officially joined CMU HCII and the AXLE Lab as a Ph.D.
              Student 🥳
            </li>
          </ul>
        </div>
        {/* research stuff here */}
        <div>
          <div className="pt-4">
            <h2 href="/blog" className="text-xl font-semibold text-slate-800 dark:text-slate-200">
              <RoughNotation type="underline" show={true} color="#fff176" animationDuration={1}>
                {' '}
                Featured Research
              </RoughNotation>
            </h2>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {!featured.length && 'No posts found.'}
              {featured.slice(0, MAX_FEATURED_DISPLAY).map((frontMatter) => {
                const { slug, date, title, summary, tags } = frontMatter
                return (
                  <li key={slug} className="py-5">
                    <article>
                      <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-base font-medium leading-5 text-slate-600 dark:text-slate-400">
                            <time dateTime={date}>{formatDate(date)}</time>
                          </dd>
                        </dl>
                        <div className="space-y-5 xl:col-span-3">
                          <div className="space-y-6">
                            <div>
                              <h2 className="text-2xl font-bold leading-10 tracking-tight pb-1">
                                <Link
                                  href={`/research/${slug}`}
                                  className="text-slate-800 dark:text-slate-200"
                                >
                                  {title}
                                </Link>
                              </h2>
                              <div className="flex flex-wrap">
                                {tags
                                  .filter(
                                    (tag) =>
                                      !tag.localeCompare('featured') &&
                                      !tag.localeCompare('research')
                                  )
                                  .map((tag) => (
                                    <Tag key={tag} text={tag} />
                                  ))}
                              </div>
                            </div>
                            <div className="prose text-slate-600 max-w-none dark:text-slate-400">
                              {summary}
                            </div>
                          </div>
                          <div className="text-base font-medium leading-6">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-primary-color hover:text-blue-600 dark:hover:text-yellow-300 dark:text-primary-color-dark"
                              aria-label={`Read "${title}"`}
                            >
                              More research &rarr;
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
          {posts.length > MAX_FEATURED_DISPLAY && (
            <div className="flex justify-end text-base font-medium leading-6 pb-5">
              <Link
                href="/research"
                className="text-primary-color hover:text-blue-600 dark:hover:text-yellow-300 dark:text-primary-color-dark"
                aria-label="more research posts"
              >
                Other Research &rarr;
              </Link>
            </div>
          )}
        </div>
        {/* blog stuff here */}
        <div className="pt-4">
          <h2 href="/blog" className="text-xl font-semibold text-slate-800 dark:text-slate-200">
            <RoughNotation type="underline" show={true} color="#BEE5B0" animationDuration={1}>
              {' '}
              Blog Posts{'  '}
            </RoughNotation>
          </h2>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_BLOG_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, tags } = frontMatter
              return (
                <li key={slug} className="py-5">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-5 text-slate-600 dark:text-slate-400">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-10 tracking-tight pb-1">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-slate-800 dark:text-slate-200"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags
                                .filter(
                                  (tag) => tag.localeCompare('blog')
                                  // && !tag.localeCompare('')
                                )
                                .map((tag) => (
                                  <Tag key={tag} text={tag} />
                                ))}
                            </div>
                          </div>
                          <div className="prose text-slate-600 max-w-none dark:text-slate-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary-color hover:text-blue-600 dark:hover:text-yellow-300 dark:text-primary-color-dark"
                            aria-label={`Read "${title}"`}
                          >
                            Read more &rarr;
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
      </div>
      {posts.length > MAX_BLOG_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-color hover:text-blue-600 dark:hover:text-yellow-300 dark:text-primary-color-dark"
            aria-label="more blog posts"
          >
            Blog Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
