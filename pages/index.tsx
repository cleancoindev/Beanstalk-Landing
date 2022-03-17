import type { NextPage } from 'next'
import Button from '../components/Button';
import ContributorButton from '../components/ContributorButton';
import CustomHead from '../components/CustomHead';
import ContentWrapper from '../components/ContentWrapper';
import {getSortedPostsData, PostData} from "../lib/posts";
import PostItem from "../components/PostItem";

type BlogProps = {
  allPostsData: PostData[]
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Home: NextPage<BlogProps> = ({ allPostsData }) => {
  return (
    <>
      <CustomHead
        title="Beanstalk | A Decentralized Credit Based Stablecoin Protocol"
        description="Beanstalk is a decentralized credit based stablecoin protocol that is built on Ethereum. Beanstalk uses credit instead of collateral to create a decentralized, liquid, blockchain-native asset, which is stable relative to the value of a non-blockchain-native asset."
      />
      <ContentWrapper variant="side-image">
        <div className="space-y-6">
          <h1 className="md:text-5xl text-3xl md:leading-[3.5rem]">
            A decentralized credit based stablecoin protocol.
          </h1>
          <Button
            primary
            target="_blank"
            rel="noreferrer"
            href="https://app.bean.money">
            Launch App
          </Button>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl mb-6 font-normal">Learn</h2>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://bean.money/docs/beanstalk.pdf"
            icon="/icon/beanstalk.svg"
            desc="v1.9.0">
            Whitepaper
          </Button>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/beanstalk"
            icon="/icon/discord.png"
            desc="Join the community and ask questions">
            Discord
          </Button>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://dune.xyz/tbiq/Beanstalk"
            icon="/icon/dune.png"
            desc="View Beanstalk protocol analytics">
            Dune Analytics
          </Button>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/XdwostEtoiQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl mb-6 font-normal">Community</h2>
          <div className="flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4">
            <ContributorButton
              href="https://beanmerchant.substack.com/p/updated-beanstalk-faq-"
              name="Bean Merchant"
              avatar="/icon/bean-merchant.png">
              Beanstalk FAQ
            </ContributorButton>
            <ContributorButton
              href="https://mirror.xyz/astn.eth/w5336TYVkb-9eIlKxrCPKLoUNvYRgJmd6nB4Br5-Vs8"
              name="austin"
              avatar="/icon/austin.png">
              Zero to Beanstalk
            </ContributorButton>
          </div>
          <div className="flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4">
            <ContributorButton
              href="https://open.spotify.com/episode/4zSBdnYs56Mlw5RrStZsfk?si=cc15759b547d4ea3"
              name="nasjaq"
              avatar="/icon/nasjaq.jpg">
              Podcast w/ Publius
            </ContributorButton>
            <ContributorButton
              href="https://twitter.com/doctor_parth/status/1488941756448382976?s=21"
              name="DrParth"
              avatar="/icon/drparth.jpg">
              $BEAN vs. ESD
            </ContributorButton>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <h2 className="text-3xl mb-6 font-normal">Blog</h2>
            <a href={`/blog`}><p className="text mb-6 font-normal mr-4 text-blue-600">see all</p></a>
          </div>
          {allPostsData.map(({ id, date, title, thumbnail }) => (
            <Button
              key={id}
              rel="noreferrer"
              href={`/blog/${id}/`}
              icon="/icon/beanstalk.svg"
              desc={date}>
              {title}
            </Button>
          ))}
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl mb-6 font-normal">Follow</h2>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/BeanstalkFarms"
            icon="/icon/twitter.png">
            Twitter
          </Button>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://medium.com/beanstalkfarms"
            icon="/icon/medium.jpg">
            Medium
          </Button>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCsIk5WEk3F4kKmFFmbLd6Ng"
            icon="/icon/youtube.png"
            iconStyle={{ borderRadius: 0 }}>
            Youtube
          </Button>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://www.reddit.com/r/BeanstalkProtocol/"
            icon="/icon/reddit.png">
            Reddit
          </Button>
        </div>
      </ContentWrapper>
    </>
  )
}

export default Home
