
import { FaHeart } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


import React, { useState } from 'react';
import './QuotesCard.css';

const QuotesCard = ({ quote }) => {
  const [upvotes, setUpvotes] = useState(quote.upvotesCount);
  const [downvotes, setDownvotes] = useState(quote.downvotesCount);
  const [userVote, setUserVote] = useState(quote.givenVote);

  const total = upvotes + downvotes;
  const percentOfLikes = Math.floor((upvotes/total) * 100)

 

  const handleUpVote = () => {
    if (userVote === 'upvote') {
      setUpvotes(upvotes - 1);
      setUserVote(null);
    } else {
      if (userVote === 'downvote') {
        setDownvotes(downvotes - 1);
      }
      setUpvotes(upvotes + 1);
      setUserVote('upvote');
    }
  };

  const handleDownvote = () => {
    if (userVote === 'downvote') {
      setDownvotes(downvotes - 1);
      setUserVote(null);
    } else {
      if (userVote === 'upvote') {
        setUpvotes(upvotes - 1);
      }
      setDownvotes(downvotes + 1);
      setUserVote('downvote');
    }
  };

let color = ''
if(percentOfLikes >= 85){
  color='#01d925';
}else if(percentOfLikes >= 60){
  color = '#b2fe01'
}else if(percentOfLikes >= 40){
  color = 'orange'
}else if(percentOfLikes >= 20){
  color = 'red';
}else{
  color = 'gray'
}

  return (
    <div className='quote-container'>
      <div className="quote-card">      
        <p className='content'><FaQuoteLeft className="marks1"/>{quote.content}<FaQuoteRight className="marks2" /></p>
      <p className="author">- {quote.author}</p>
      <p className="tarik"></p>
      <div className='votes'>
      <button className='btn-vote1' onClick={handleUpVote}><FaHeart  color= {userVote==='upvote' ? 'red': 'grey'}/> {upvotes}</button>
      <button className='btn-vote2' onClick={handleDownvote}><FaThumbsDown  color={userVote === 'downvote' ? 'black': 'grey'}/> {downvotes}</button>
      <p className="procenat"style={{ color: color }}>{percentOfLikes}%</p> 
      </div>
      
    </div>
     </div>
  );
};

export default QuotesCard;




