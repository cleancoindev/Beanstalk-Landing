import ContentWrapper from '../../components/ContentWrapper'
import CustomHead from '../../components/CustomHead'
import { getAllPostIds, getPostData, PostData } from '../../lib/posts'

export async function getStaticProps({ params } : PostData) {
  const postData = await getPostData(params.id)
  return {
    props: {
      title: postData.title,
      content: postData.contentHtml,
      date: postData.date,
      image: postData.thumbnail
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: 'blocking'
  }
}

type PostProps = {
  title: string,
  content: string,
  date: string,
  image?: string
}

const DESCRIPTION_LENGTH = 50

export default function Post({ title, content, date, image } : PostProps) {
  return (
    <>
      <CustomHead
        title={title}
        description={content.substring(0, DESCRIPTION_LENGTH)}
        image={image}
      />
      <ContentWrapper variant="default">
        <div className="space-y-12">
          <div className="space-y-2 border-b border-gray-100 pb-8">
            <p className="text-sm text-slate-400">{date}</p>
            <h2 className="text-4xl font-bold text-slate-900">{title}</h2>
          </div>
          <div
            className="font-normal text-lg prose"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </ContentWrapper>
    </>
  )
}
