import React, { useState } from 'react';
import { marked } from 'marked';
import './blog.css';

const Blog = () => {
    const [markdown, setMarkdown] = useState('');
    
    const handleChange = (e) => {
      setMarkdown(e.target.value);
    };
  
    return (
      <div className="blog">
        <textarea
          value={markdown}
          onChange={handleChange}
          placeholder="Write your blog post in Markdown..."
        />
        <div
          className="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    );
  };
  
  export default Blog;
