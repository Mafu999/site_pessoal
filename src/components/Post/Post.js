import React from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from '../../context/PostContext';
import './Post.css';

const Post = () => {
  const { postId } = useParams();
  const { posts } = usePosts();
  const post = posts[postId];

  return (
    <div className="post-container">
      <h1 className="post-title">{post.title}</h1>
      {post.coverImage && <img src={post.coverImage} alt="Post cover" className="post-image" />}
      <div className="post-date">{post.date}</div>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default Post;
