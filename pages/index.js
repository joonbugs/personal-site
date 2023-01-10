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

const MAX_FEATURED_DISPLAY = 3
const MAX_BLOG_DISPLAY = 2
const MAX_DISPLAY = 2

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const research = await getAllFilesFrontMatter('research')
  const featured = research.filter((x) => x.tags.includes('featured'))

  return { props: { posts, featured } }
}

// helper function for featured tag

// helper function for news

export default function Home({ posts, featured }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* top to end of command bar */}
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          {/* highlight text + image */}
          <div className="flex items-center justify-between">
            <div className="headingtext">
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
            {/* profile image */}
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
          {/* flavor text */}
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
          {/* social icons */}
          <div className="flex mr-7 space-x-6 stroke center">
            <SocialIcon kind="github" href={siteMetadata.github} size="5" />
            <SocialIcon kind="gscholar" href={siteMetadata.gscholar} size="5" />
            <SocialIcon kind="mail" href={'mailto:' + siteMetadata.email} size="5" />
            {/* <SocialIcon kind="instagram" href={siteMetadata.instagram} size="5" /> */}
            {/* <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" /> */}
            {/* <SocialIcon kind="twitter" href={siteMetadata.twitter} size="5" /> */}
          </div>
          <br />
          {/* action command bar */}
          <div className="flex justify-center w-full">
            <div className="justify-center mt-2">
              <ShortcutHome />
            </div>
          </div>
        </div>

        {/* bottom content */}
        {/* <div className="pt-4 space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline pb-4"> */}
        {/* recent updates */}
        <div className="recentUpdates pt-4 space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline pb-4">
          <h2 className="flex-none text-2xl font-semibold leading-8 tracking-tight text-slate-800 dark:text-slate-200">
            <RoughNotation type="underline" show={true} color="#ADD8E6" animationDuration={1}>
              {' '}
              Recent Updates
            </RoughNotation>
          </h2>
          {/* <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{children}</div> */}
          <ul className="col-span-3 leading-8 tracking-tight text-m pt-2 pb-2 prose dark:prose-dark">
            <li>
              <strong>2023 Jan</strong> - 🌐 Overhauled this personal website for improved design
              and accessibility
            </li>
            <li>
              <strong>2022 Nov</strong> - 🎉 Joined the VariAbility Lab
            </li>
            <li>
              <strong>2022 Oct</strong> - 🇬🇷 ASSETS 22 @ Athens: shared a poster and participated as
              an SV
            </li>
            <li>
              <strong>2022 Sept</strong> - 🥳 Officially joined CMU HCII and the AXLE Lab as a Ph.D.
              Student
            </li>
          </ul>
        </div>
      </div>
      {/* research stuff here */}
      <div className="featuredResearch pt-4 space-y-2 pb-4">
        <div className="pt-4">
          <h2
            href="/research"
            className="text-2xl font-semibold text-slate-800 dark:text-slate-200"
          >
            <RoughNotation type="underline" show={true} color="#fff176" animationDuration={1}>
              {' '}
              Featured Research{'  '}
            </RoughNotation>
          </h2>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!featured.length && 'No posts found.'}
            {featured.slice(0, MAX_FEATURED_DISPLAY).map((frontMatter) => {
              const {
                slug,
                date,
                title,
                authors,
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
              } = frontMatter
              return (
                <li key={slug} className="py-5">
                  <article>
                    <div className="items-left space-y-4 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline xl:-space-y-6">
                      <div className="xl:col-span-1 self-center">
                        <Link href={`/research/${slug}`} className="place-content-center">
                          <Image
                            src="/static/images/profile/conf-volunteering.jpg"
                            alt={heroimagealt}
                            height="180%"
                            width="210%"
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
                              (tag) =>
                                tag.localeCompare('featured') && tag.localeCompare('research')
                              // && !tag.localeCompare('')
                            )
                            .map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                        </div>
                        <div className="flex text-lg flex-wrap prose text-slate-600 max-w-none dark:text-slate-400 pb-2 pt-1">
                          {authors}
                        </div>
                        <div className="flex flex-wrap prose text-slate-600 max-w-none dark:text-slate-400 pb-6">
                          {venue}
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
      </div>
      {featured.length > MAX_FEATURED_DISPLAY && (
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
      {/* blog stuff here */}
      <div className="blogPosts pt-4 space-y-2 pb-4">
        <div className="pt-4">
          <h2 href="/blog" className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
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
                          <div className="pb-2">
                            <h3 className="text-2xl font-bold leading-10 tracking-tight pb-1">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-slate-800 dark:text-slate-200"
                              >
                                {title}
                              </Link>
                            </h3>
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
                          <div className="flex flex-wrap prose text-slate-600 max-w-none dark:text-slate-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6 ">
                          <Link
                            href={`/blog/${slug}`}
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
      </div>
      {/* </div> */}
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
