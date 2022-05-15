import type { NextPage } from 'next'
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Button from '../components/Button';
import PostButton from '../components/PostButton';
import ContentWrapper from '../components/ContentWrapper';
import {getSortedPostsData, PostData} from "../lib/posts";
import ContributorButton from '../components/ContributorButton';

type BlogProps = {
  allPostsData: PostData[]
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData(3)
  return {
    props: {
      allPostsData
    }
  }
}

const TITLE = `Learn | Beanstalk`;
const DESC  = `Beanstalk is a decentralized credit based stablecoin protocol that is built on Ethereum. Beanstalk uses credit instead of collateral to create a decentralized, liquid, blockchain-native asset, which is stable relative to the value of a non-blockchain-native asset.`;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://bean.money';

const Home: NextPage<BlogProps> = ({ allPostsData }) => {
  return (
    <>
      <NextSeo
        title={TITLE}
        description={DESC}
        openGraph={{
          url: `${SITE_URL}/learn`,
          title: TITLE,
          description: DESC,
          images: [
            {
              url: SITE_URL + "/assets/meta/basic.png",
              width: 1200,
              height: 628,
              type: 'image/jpeg',
            }
          ],
          site_name: 'Beanstalk',
        }}
        twitter={{
          handle: '@beanstalkfarms',
          cardType: 'summary_large_image',
          site: '@beanstalkfarms'
        }}
      />
      <ContentWrapper variant="farm">
        <div className="space-y-6">
          <h1 className="md:text-5xl text-3xl md:leading-[3.5rem]">
            Learn more about Beanstalk.
          </h1>
          <div className="space-y-2">
            <div className="md:flex md:flex-row md:space-y-0 space-y-2 md:space-x-2 items-stretch">
              <div className="flex-1">
                <a href="https://beanstalkfarmsdao.notion.site/Beanstalk-Learning-Center-92b8e9477e694a48aff37abac5b2865f" target="_blank" rel="noreferrer">
                  <Button
                    primary
                    desc={<span className="text-white text-2xl system md:block hidden">&rarr;</span>}
                    icon="/assets/icon/beanstalk-white.svg">
                    Beanstalk Learning Center
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl mb-6 font-normal">From the Community</h2>
          <div className="flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4">
            <ContributorButton
              href="https://beanmerchant.substack.com/p/updated-beanstalk-faq-"
              name="Bean Merchant"
              avatar="/assets/community/bean-merchant.png">
              Beanstalk FAQ
            </ContributorButton>
            <ContributorButton
              href="https://mirror.xyz/astn.eth/w5336TYVkb-9eIlKxrCPKLoUNvYRgJmd6nB4Br5-Vs8"
              name="austin"
              avatar="/assets/community/austin.png">
              Zero to Beanstalk
            </ContributorButton>
          </div>
          <div className="flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4">
            <ContributorButton
              href="https://open.spotify.com/episode/4zSBdnYs56Mlw5RrStZsfk?si=cc15759b547d4ea3"
              name="nasjaq"
              avatar="/assets/community/nasjaq.jpg">
              Podcast w/ Publius
            </ContributorButton>
            <ContributorButton
              href="https://twitter.com/doctor_parth/status/1488941756448382976?s=21"
              name="DrParth"
              avatar="/assets/community/drparth.jpg">
              BEAN vs. ESD
            </ContributorButton>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl mb-6 font-normal">Subscribe</h2>
          <p>{`Subscribe to The Bi-Weekly Bean and we'll send major Beanstalk updates straight to your inbox.`}</p>
          <iframe src="https://beanstalkfarms.substack.com/embed" width="100%" frameBorder="0" scrolling="no"></iframe>
        </div>
      </ContentWrapper>
    </>
  )
}

export default Home
