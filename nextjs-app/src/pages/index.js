import { getSortedPostsData } from "@/utils/getSortedPostsData";
import Head from "next/head";
import Link from "next/link";

export default function Home({ allPostsData }) {
    console.log(allPostsData);
    return (
        <div>
            <Head>
                <title>Your Name</title>
            </Head>
            <section>
                <p>[Your Self Introduction]</p>
                <p>
                (This is a website)
                </p>
            </section>
            <section>
                <h2>Blog</h2>
                <ul>
                {
                    allPostsData.map(({ id, date, title }) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>
                        {title}
                        </Link>
                        <br />
                        <small>
                        {date}
                        </small>
                    </li>
                    ))
                }
                </ul>
            </section>
        </div>
    );
}

export const getStaticProps = async () => {
    const allPostsData = getSortedPostsData();

    return {
        props: {
        allPostsData
        }
    }
}
