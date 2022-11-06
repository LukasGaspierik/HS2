import React from 'react';
import './styles.css';

const ListItem = ({
  item: { coverSrc, title, price, Releasedate, rating },
}) => (
  <div className='listItem-wrap'>
    <img className='img-box' src={coverSrc} alt='' />
    <footer>
      <p>
       <span> Release date {Releasedate}</span>
      </p>
      <p>
        <b>${price}</b>
      </p>
    </footer>
  </div>
);

export default ListItem;