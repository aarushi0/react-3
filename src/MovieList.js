import React from 'react';

export default function MovieList(props) {
  return (
    <div>
      <ul>
        {props.movie.map((list) => {
          return (
            <li key={list.id}>
              {' '}
              {list.title}
              {list.discription}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
