import React, { useState } from 'react';
import people from './Data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex]=useState(0);
  const {image, name, job, text} = people[index];

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>
      </article>
  );
};

export default Review;