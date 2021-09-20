import React from 'react'
import Alert from '../Components/Alert'
import styled from 'styled-components'

const Form = ({
  handleSubmit,
  alert,
  list,
  showAlert,
  name,
  setName,
  isEditing,
}) => {
  return (
    <Wrapper onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} list={list} removeAlert={showAlert} />}
      <h3>TO-DO LIST</h3>
      <div className='form-control'>
        <input
          type='text'
          className='todo'
          placeholder='Things To do'
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <button type='submit' className='submit-btn'>
          {isEditing ? 'edit' : 'submit'}
        </button>
      </div>
    </Wrapper>
  )
}

export default Form
const Wrapper = styled.form`
  .form-control {
    display: flex;
    justify-content: center;
  }
  .todo {
    padding: 0.25rem;
    padding-left: 1rem;
    background: var(--clr-grey-10);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    border-color: transparent;
    font-size: 1rem;
    flex: 1 0 auto;
    color: var(--clr-grey-5);
  }
  .todo::placeholder {
    font-family: var(--ff-secondary);
    color: var(--clr-grey-5);
  }
  .submit-btn {
    background: var(--clr-primary-8);
    border-color: transparent;
    flex: 0 0 5rem;
    display: grid;
    align-items: center;
    padding: 0.25rem;
    text-transform: capitalize;
    letter-spacing: 2px;
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    cursor: pointer;
    content: var(--clr-primary-5);
    transition: var(--transition);
    font-size: 0.85rem;
  }
  .submit-btn:hover {
    background: var(--clr-primary-5);
    color: var(--clr-white);
  }
`
