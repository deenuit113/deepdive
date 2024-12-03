import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {

    const fileNames = fs.readdirSync(postsDirectory);
    // ['pre-rendering.md', 'ssg-ssr.md']

    const allPostsData = fileNames.map(fileName => {
        //'pre-rendering', 'ssg-ssr'
        const id = fileName.replace(/\.md$/, '');
        // 'pre-rendering'
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        return {
            id: id,
            ...matterResult.data
        }
    })

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    })

}

export function getAllPostsIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            }
        }
    })
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    // parse metadata.
    const matterResult = matter(fileContents);

    // HTML String
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id: id,
        contentHtml: contentHtml,
        ...matterResult.data
    }
}