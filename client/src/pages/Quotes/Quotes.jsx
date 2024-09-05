

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuotesCard from '../../components/QuotesCard/QuotesCard';
import Pagination from '../../components/Paginations/Paginations';
import NewQuote from '../../components/NewQuote/NewQuote';
import Modal from 'react-modal';
import { Select, MultiSelect } from '@mantine/core';
import "./Quotes.css";

Modal.setAppElement('#root'); 

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [sortOption, setSortOption] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [tags, setTags] = useState([]);
  
  const numOfQuotesPerPage = 5;

  const sortOptions = [
    { value: '', label: 'Select' },
    { value: 'author', label: 'Author' },
    { value: 'content', label: 'Content' },
    { value: 'createdAt', label: 'Date of creation' },
    { value: 'upvotesCount', label: 'Upvotes Count' },
    { value: 'downvotesCount', label: 'Downvotes Count' },
  ];

  const dataToShowFilter = tags.map(tag => ({
    value: tag,
    label: `${tag[0].toUpperCase()}${tag.slice(1)}`
  }));

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }, [page]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.get('http://localhost:8000/quotes', {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        let filteredQuotes = response.data.quotes;

        if (selectedTags.length > 0) {
          filteredQuotes = filteredQuotes.filter(quote =>
            quote.tags.some(tag => selectedTags.includes(tag))
          );
        }

        if (sortOption === 'author') {
          filteredQuotes.sort((a, b) => a.author.localeCompare(b.author));
        } else if (sortOption === 'createdAt') {
          filteredQuotes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } else if (sortOption === 'upvotesCount') {
          filteredQuotes.sort((a, b) => b.upvotesCount - a.upvotesCount);
        } else if (sortOption === 'downvotesCount') {
          filteredQuotes.sort((a, b) => b.downvotesCount - a.downvotesCount);
        } else if (sortOption === 'content') {
          filteredQuotes.sort((a, b) => a.content.localeCompare(b.content));
        }

        setQuotes(filteredQuotes);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchQuotes();
  }, [sortOption, selectedTags, page]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get('http://localhost:8000/tags', {
          headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
        });
        setTags(response.data); 
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };

    fetchTags();
  }, []);

  const handleAddQuote = (newQuote) => {
    setQuotes(prevQuotes => [...prevQuotes, newQuote]);
    setShowModal(false);
  };

  const numOfQuotes = quotes.length;
  const numOfPages = Math.ceil(numOfQuotes / numOfQuotesPerPage);
  const displayedQuotes = quotes.slice(numOfQuotesPerPage * (page - 1), numOfQuotesPerPage * page);

  return (
    <>
      <div className='quotes-pr'>
        <button className='nur' onClick={() => setShowModal(true)}>Add New Quote</button>
        <Modal
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
          contentLabel="Add New Quote"
        >
          <NewQuote onAddQuote={handleAddQuote} onRequestClose={() => setShowModal(false)} />
        </Modal>
      </div>

      <div className='sort-dropdown'>
        <Select
          label="Sort by:"
          placeholder="Select"
          data={sortOptions}
          value={sortOption}
          onChange={setSortOption}
          clearButtonLabel="Clear selection"
          clearable
        />
      </div>

      <div className='filter-tags' style={{ maxWidth: '300px' }}>
        <MultiSelect className='filter'
          label="Filter by tags:" 
          placeholder="Select tags"
          data={dataToShowFilter}
          value={selectedTags}
          onChange={setSelectedTags}
          nothingFound="Nothing found"
          clearButtonLabel="Clear selection"
          clearable
        />
      </div>

      <div className='quotes-page'>
        {displayedQuotes.length > 0 ? (
          displayedQuotes.map((quote) => (
            <QuotesCard key={quote.id} quote={quote} />
          ))
        ) : (
          <p className='nema'>No quotes available</p>
        )}
      </div>
      <div className='pagination'>
        <Pagination numOfPages={numOfPages} setPage={setPage} page={page} />
      </div>
    </>
  );
};

export default Quotes;







