import React from 'react'
import List from '../Components/List'
import styled from 'styled-components'
const ListContainer = ({ removeItem, editItem, clearItems, list }) => {
  return (
    <Wrapper className='grocery-container'>
      <List items={list} removeItem={removeItem} editItem={editItem} />
      <button className='clear-btn' onClick={clearItems}>
        Clear Items
      </button>
    </Wrapper>
  )
}

export default ListContainer
const Wrapper = styled.div`
  .grocery-container {
    margin-top: 2rem;
  }
  .clear-btn {
    text-transform: capitalize;
    width: 10rem;
    height: 1.5rem;
    display: grid;
    align-items: center;
    background: transparent;
    border-color: transparent;
    color: var(--clr-red-light);
    margin: 0 auto;
    font-size: 0.85rem;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    margin-top: 1.25rem;
  }
  .clear-btn:hover {
    color: var(--clr-red-dark);
  }
`
