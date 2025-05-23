import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

import { currentDayName, currentYear } from '@/lib/utils/dateUtils'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-between md:flex-row mt-10 mb-4">
        <div className="flex mr-7 space-x-6 stroke mb-4 mt-2">
          <SocialIcon kind="github" href={siteMetadata.github} size="5" />
          <SocialIcon kind="gscholar" href={siteMetadata.gscholar} size="5" />
          <SocialIcon kind="mail" href={'mailto:' + siteMetadata.email} size="5" />
          {/* <SocialIcon kind="instagram" href={siteMetadata.instagram} size="5" /> */}
          {/* <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" /> */}
          {/* <SocialIcon kind="twitter" href={siteMetadata.twitter} size="5" /> */}
        </div>
        <div className="flex mt-4 mb-3 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          © {currentYear()} {siteMetadata.author} | Have a great {currentDayName()}!
        </div>
      </div>
    </footer>
  )
}
