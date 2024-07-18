import React from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from '../../context/PostContext';
import './home.css'


const Home = () => {
    const { posts } = usePosts();
  
    return (
        <div className="home-container">
          <div className="posts-list">
            {posts.map((post, index) => (
              <div key={index} className="post-preview">
                <Link to={`/post/${index}`}>
                  <h2>{post.title}</h2>
                  {post.coverImage && <img src={post.coverImage} alt="Post cover" />}
                </Link>
                <p>{post.description}</p>
                <div className="post-date">{post.date}</div>
              </div>
            ))}
          </div>
        </div>
      );
  };

export default Home;
