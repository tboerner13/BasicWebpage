import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css'

function App(){
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({title: '', body: ''});
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5000/posts')
    .then(res=>setPosts(res.data))
    .catch(err=>console.error("Error fetching posts:", err))
    .finally(setLoading(false))
  }, [])

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      axios.put(`http://localhost:5000/posts/${editId}`, form)
        .then(res => {
          setPosts(posts.map(post => post._id === editId ? res.data : post));
          setIsEditing(false);
          setEditId(null);
          setForm({ title: '', body: '' });
        })
        .catch(err => console.error("Error updating the post:", err));
    } else {
      axios.post('http://localhost:5000/posts', form)
        .then(res => {
          setPosts([...posts, res.data]);
          setForm({ title: '', body: '' });
        })
        .catch(err => console.error("Error submitting the post:", err));
    }
  }

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this post?')){
      return;
    }else{
      axios.delete(`http://localhost:5000/posts/${id}`)
      .then(() => {
        setPosts(posts.filter(post => post._id !== id));
      })
      .catch(err => console.error("Error deleting the post:", err));
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>{isEditing ? 'Edit Post' : 'Create a Blog Post'}</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <input
          name="title"
          placeholder="Post Title"
          value={form.title}
          onChange={handleChange}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <textarea
          name="body"
          placeholder="Post Body"
          value={form.body}
          onChange={handleChange}
          style={{ width: '100%', padding: '10px', height: '100px', marginBottom: '10px' }}
        />
        <button type="submit" className='btn btn-green'>
          {isEditing ? 'Update Post' : 'Submit Post'}
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={() => {
              setIsEditing(false);
              setEditId(null);
              setForm({ title: '', body: '' });
            }}
            className='btn btn-red'
          >
            Cancel Edit
          </button>
        )}
      </form>

      <h2>Blog Posts</h2>
      {loading ? <p>Loading posts...</p> : (
        posts.map(post => (
          <div key={post._id} style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
            <h3>{post.title}</h3>
            <p style={{marginBottom: '0px', paddingBottom: '0px'}}>{post.body}</p>
            <p style={{marginTop: '0px', paddingTop: '0px', fontSize: '.6em', color: 'gray'}}>Created on: {new Date(post.createdAt).toLocaleString()}</p>
            <button onClick={() => handleDelete(post._id)} className='btn btn-red'>Delete</button>
            <button onClick={() => {
              setIsEditing(true);
              setEditId(post._id);
              setForm({ title: post.title, body: post.body });
            }} className='btn btn-green'>Edit</button>
          </div>
        ))
      )}
    </div>
  )
}

export default App;
