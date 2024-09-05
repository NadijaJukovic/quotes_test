import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";
import "./NewQuote.css";

Modal.setAppElement('body');

const NewQuote = ({ onAddQuote, onRequestClose }) => {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newQuote = {
      content,
      author,
      tags: tags.split(',').map(tag => tag.trim()),
    };
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await axios.post('http://localhost:8000/quotes', newQuote, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      onAddQuote(response.data);
      onRequestClose();
    } catch (error) {
      console.error('Error adding quote:', error);
    }
  };

  return (
    <Modal
  isOpen={true}
  onRequestClose={onRequestClose}
  overlayClassName="custom-overlay"
  className="custom-modal" 
  contentLabel="Add New Quote"
>
  <h2 className="naslov"> Add New Quote</h2>
  <div className="line"></div>
  <form className="forma" onSubmit={handleSubmit}>
    <div className="nadija">
      <label>Content</label>
      <textarea  className='input'type="text" value={content} onChange={(e) => setContent(e.target.value)} required />
    </div>
    <div className="nadija">
      <label>Author</label>
      <input className="input" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
    </div>
    <div className="nadija">
      <label>Tags (comma separated)</label>
      <input className="input" type="text" value={tags} onChange={(e) => setTags(e.target.value)} required />
    </div>
    <div className="buttoni">
    <button className="klik" type="submit">Add Quote</button>
    <button className="klik" type="button" onClick={onRequestClose}>Cancel</button>
    </div>
  </form>
</Modal>

  );
}

export default NewQuote;
