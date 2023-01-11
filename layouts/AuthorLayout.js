import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Experience from '@/components/Experience'
import experienceData from '@/data/experienceData'
import { RoughNotation } from 'react-rough-notation'
import React from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
    affiliations,
    mission_statement,
    hobbytext1,
    questionstext,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About Me
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="font-xs pt-3 text-gray-400 dark:text-gray-400 font-italics">
              affiliations
            </div>
            <div className="font-xs tracking-tight text-gray-400 dark:text-gray-400 font-italics">
              ~
            </div>
            {affiliations.map((lab) =>
              React.createElement(
                'a',
                { href: lab[1], className: 'font-medium text-primary-color pb-1' },
                lab[0]
              )
            )}
            <br />
            {/* <div className="text-gray-500 dark:text-gray-400">Contact: [<a href="mailto:jiwoongj@cs.cmu.edu" className="text-primary-color">Email</a>] </div>
            <div className="flex flex-col items-center justify-between md:flex-row mt-10 mb-4"> */}
            <div className="flex mx-7 space-x-6 stroke">
              <SocialIcon kind="github" href={siteMetadata.github} size="5" />
              <SocialIcon kind="gscholar" href={siteMetadata.gscholar} size="5" />
              <SocialIcon kind="mail" href={'mailto:' + siteMetadata.email} size="5" />
              {/* <SocialIcon kind="instagram" href={siteMetadata.instagram} size="5" />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size="5" /> */}
            </div>
            {/* </div> */}
          </div>
          {/* <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">{children}</div> */}
          <div className="text-lg pt-6 pb-6 prose dark:prose-dark max-w-none xl:col-span-2">
            {children}
            <p>
              <RoughNotation
                type="bracket"
                brackets={['left', 'right']}
                show={true}
                color="#FF0000"
              >
                <strong>{mission_statement}</strong>
              </RoughNotation>
            </p>
            <br />
            {hobbytext1}
            <br />
            <br />
            {questionstext}
          </div>
        </div>
        <div className="mt-2">
          <div className="pb-2 space-y-2 md:space-y-5">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
              Short Curriculum Vitae
            </h2>
            <div className="text-lg prose dark:prose-dark max-w-none xl:col-span-2">
              <i>(still under construction, sorry!)</i> A PDF form of my CV can be found{' '}
              <a href="https://drive.google.com/file/d/1ScP4vVQGR8_MSjnSxaY3Sq8BO024F1UY/view?usp=share_link">
                here
              </a>
              .
            </div>
          </div>
          <h3 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14">
            Education
          </h3>
          <h3 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14">
            Research and Work History
          </h3>
          <h3 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14">
            Service
          </h3>
          {/* <div className="pt-8 pb-8 max-w-none xl:col-span-2">
            {experienceData.map((d) => (
              <Experience
                key={d.company}
                title={d.title}
                company={d.company}
                location={d.location}
                range={d.range}
                url={d.url}
                text1={d.text1}
                text2={d.text2}
                text3={d.text3}
              />
            ))}
          </div> */}
        </div>
      </div>
    </>
  )
}
