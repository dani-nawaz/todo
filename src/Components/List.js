import { FaEdit, FaTrash } from 'react-icons/fa'
import React from 'react'
import styled from 'styled-components'

const List = ({ items, removeItem, editItem }) => {
  return (
    <Wrapper>
      <div className='todo-list' style={{ marginTop: '1rem' }}>
        {items.map((item) => {
          const { id, title } = item
          return (
            <article key={id} className='todo-item'>
              <p className='title'>{title}</p>
              <div className='btn-container'>
                <button
                  type='button'
                  className='edit-btn'
                  onClick={() => {
                    editItem(id)
                  }}
                >
                  <FaEdit />
                </button>
                <button
                  type='button'
                  className='delete-btn'
                  onClick={() => {
                    removeItem(id)
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default List
const Wrapper = styled.div`
  .todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    transition: var(--transition);
    padding: 0.25rem 1rem;
    border-radius: var(--radius);
    text-transform: capitalize;
  }
  .todo-item:hover {
    color: var(--clr-grey-5);
    background: var(--clr-grey-10);
  }
  .todo-item:hover .title {
    color: var(--clr-grey-5);
  }
  .title {
    margin-bottom: 0;
    color: var(--clr-grey-1);
    letter-spacing: 2px;
    transition: var(--transition);
  }
  .edit-btn,
  .delete-btn {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    font-size: 0.7rem;
    margin: 0 0.15rem;
    transition: var(--transition);
  }
  .edit-btn {
    color: var(--clr-green-light);
  }
  .edit-btn:hover {
    color: var(--clr-green-dark);
  }
  .delete-btn {
    color: var(--clr-red-light);
  }
  .delete-btn:hover {
    color: var(--clr-red-dark);
  }
`
