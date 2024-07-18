import React, { useState } from "react";
import { usePosts } from "../../context/PostContext";
import './Admin.css'

const Admin = () => {
    const { addPost } = usePosts();
    const [title, setTitle] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now().toString(),
            title,
            coverImage,
            date,
            description,
            content,
        };
        addPost(newPost);
        setTitle('');
        setCoverImage('');
        setDate('');
        setDescription('');
        setContent('');
    };

return (
    <div className="admin">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Cover Image URL"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <textarea
          placeholder="Content (Markdown)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
    );
};

export default Admin;