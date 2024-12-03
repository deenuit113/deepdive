import { getAllPostsIds, getPostData } from '@/utils/getSortedPostsData'
import Head from 'next/head';
import React from 'react'

const PostsDetailPage = ({
    postData
}) => {
    console.log(postData);
    return (
        <div>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1>{postData.title}</h1>
                <div>
                    {postData.date}
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </div>
    )
}

export default PostsDetailPage


// id post 
// getStaticPaths
export const getStaticPaths = async () => {
    const paths = getAllPostsIds();
    return {
        paths,
        fallback: false
    }
}

// getStaticProps   posts/ssg-ssr  localhost:3000/posts/pre-rendering
export const getStaticProps = async ({ params }) => {
    //params.id ===> ssg-ssr

    // ssg-ssr
    const postData = await getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}