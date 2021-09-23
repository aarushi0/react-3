import React, { useRef } from 'react';

export default function AddMovie(props) {
  const titleRef = useRef('');
  const discriptionRef = useRef('');

  const onFormSubmitHandler = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const discription = discriptionRef.current.value;

    if (title.trim().length !== 0 && discription.trim().length != 0) {
      const data = {
        id: Math.random().toString(),
        title: title,
        discription: discription,
      };

      props.onAddMovie(data);

      //const data = [title, discription];
      // props.onAddMovie(title, discription);
    }

    titleRef.current.value = '';
    discriptionRef.current.value = '';
  };

  return (
    <form onSubmit={onFormSubmitHandler}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        style={{ 'margin-left': '50px' }}
        ref={titleRef}
      />{' '}
      <br />
      <br />
      <label htmlFor="discription">discription</label>
      <input
        type="text"
        id="discription"
        name="discription"
        ref={discriptionRef}
        style={{ 'margin-left': '10px' }}
      />{' '}
      <br />
      <br />
      <button type="submit" style={{ 'margin-left': '90px' }}>
        {' '}
        Add{' '}
      </button>
    </form>
  );
}
