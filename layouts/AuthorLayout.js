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
    koreanname,
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
            <h3 className="pt-1 pb-6 text-xl italic leading-4 tracking-tight">{koreanname}</h3>
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
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" />
              {/* <SocialIcon kind="instagram" href={siteMetadata.instagram} size="5" />
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
        {/* <div className="mt-2"> */}
        <div className="pb-2 space-y-2 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            Curriculum Vitae
          </h2>
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
        {/* </div> */}
        <div className="mt-2">
          <div className="pb-2 space-y-2 md:space-y-5">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
              Short Curriculum Vitae
            </h2>
            {/* Education Section */}
            <h3 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14 mt-8 mb-4">
              Education
            </h3>
            <div className="prose dark:prose-dark max-w-none">
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-lg mb-1">
                      Carnegie Mellon University - School of Computer Science
                    </p>
                    <p className="text-base mb-1">Ph.D. in Human-Computer Interaction</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Advised by Patrick Carrington and Andrew Begel
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">08/2022 - current</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-lg mb-1">Carnegie Mellon University</p>
                    <p className="text-base mb-1">B.S. in Artificial Intelligence, Minor in HCI</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Phi Beta Kappa (2022) and Senior Leadership Recognition Award
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">05/2022</p>
                </div>
              </div>
            </div>

            {/* Research and Work History Section */}
            <h3 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14 mt-8 mb-4">
              Research and Work History
            </h3>
            <div className="prose dark:prose-dark max-w-none">
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-lg mb-1">
                      Graduate Research Assistant - VariAbility Lab
                    </p>
                    <p className="text-base">Carnegie Mellon University with Dr. Andrew Begel</p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">S2022 - Current</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-lg mb-1">Graduate Research Assistant - AXLE Lab</p>
                    <p className="text-base">
                      Carnegie Mellon University with Dr. Patrick Carrington
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">F2021 - Current</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-lg mb-1">
                      Research Assistant - MIT Visualization Group
                    </p>
                    <p className="text-base">
                      Massachusetts Institute of Technology - CSAIL with Dr. Arvind Satyanarayan
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Summer 2021</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-lg mb-1">REU Research Assistant</p>
                    <p className="text-base">
                      Carnegie Mellon University - HCII Summer Research Program with Dr. Vincent
                      Aleven
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Summer 2020 - F2020</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-lg mb-1">Research Assistant - Big Lab</p>
                    <p className="text-base">
                      Carnegie Mellon University with Drs. Amy Pavel and Jeffrey P. Bigham
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">S2020 - F2020</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-lg mb-1">Web Backend / Frontend / Design Intern</p>
                    <p className="text-base">
                      CREATE Lab (EarthTime / AI & Humanity Archive) - Supervised by Dr. Illah
                      Nourbakhsh
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Summer 2019</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-lg mb-1">
                      Special Task Force (Advisory to the Minister on Accessible Technology)
                    </p>
                    <p className="text-base">
                      Ministry of Health and Welfare - Republic of South Korea
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Jun 2016 - Jul 2018</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-lg mb-1">
                      Team Lead / Social Worker for Deaf and Hard-of-Hearing Causes
                    </p>
                    <p className="text-base">Community Chest of Korea</p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Mar 2013 - May 2016</p>
                </div>
              </div>
            </div>

            {/* Service Section */}
            <h3 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14 mt-8 mb-4">
              Teaching and Service
            </h3>
            <div className="prose dark:prose-dark max-w-none">
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <p className="text-base">
                    Dean's Undergraduate Research Recruitment Working Group
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">F2022 - current</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <p className="text-base">SCS4Accessibility, co-Lead + co-Founder</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">F2021 - current</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <p className="text-base">ABLE CMU (Disability Advocacy), Founding Member</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">F2019 - F2021</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <p className="text-base">CMU Graduate Application Support Program</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">F2022, F2023, F2024</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-base font-semibold">Head Teaching Assistant</p>
                    <p className="text-sm">
                      05-431 / 05-631 (SSUI - Software Structures for User Interfaces)
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">F2023</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-base font-semibold">Head Teaching Assistant</p>
                    <p className="text-sm">05-499 / 05-899 (Accessibility)</p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">F2021</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-base font-semibold">Teaching Assistant</p>
                    <p className="text-sm">15-122 (Principles of Imperative Computation)</p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">F2019, S2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
