import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), 'posts')

//--------------------------------------------------------//

export function getPostData(fileName) {
  const postSlug = fileName.replace(/\.md$/, ''); //removes file extension e.g. .md
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent); //matter function in the package returns 2 properties, data object and content object

  const postData = {
    slug: postSlug,
    ...data,
    content
  }

  return postData;
}

//--------------------------------------------------------//

export function getAllPosts() {
  const postFiles = fs.readdirSync(postDirectory); //this returns an array of the files name  in the directory with extension name

  const allPost = postFiles.map(postFile => {
    return getPostData(postFile);
  })

  const sortedPost = allPost.sort((a, b) => a.date > b.date ? -1:1);

  return sortedPost;
}

//--------------------------------------------------------//

export function getFeaturedPost() {
  const allPost = getAllPosts();

  const featuredPosts = allPost.filter(post => post.isFeatured);

  return featuredPosts;
}