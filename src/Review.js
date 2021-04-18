import React, { useState } from 'react';
import people from './Data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex]=useState(0);
  const [image, name, job, text] = people(index);

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <image src={image} alt={name} class="people-img"/>
        </div>
      </article>
    </main>
  )
};

export default Review;