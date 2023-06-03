import React from "react";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

import styles from "./post-content.module.css";

export default function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = { //this is to override react markdown and give your own html to element
    // img(image) { // this is for all img element in md, instead of regular img tag, it uses nextjs img optimised tag
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },

    p(paragraph) { // this is to override paragraph element including image wrapped in p tag, since its the default for md
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') { // we are specific targeting img element that is wrapped in p tag
        const image = node.children[0];

        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }

      return (
        <p>{paragraph.children}</p> // if theres no image wrapped in p tag, then its a normal p tag element
      )
    }
  };

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
