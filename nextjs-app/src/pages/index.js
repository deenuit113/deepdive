import Image from "next/image";
import localFont from "next/font/local";
import Head from "next/head";

export default function Home() {

    
    return (
        <div>
            <Head>
                <title>Your Name</title>
            </Head>
            <section>
                <p>[Your Self Introduction]</p>
                <p>(This is a website)</p>
            </section>
            <section>
                <h2>blog</h2>
                <ul>
                    build time
                </ul>
            </section>
        </div>
    );
}
