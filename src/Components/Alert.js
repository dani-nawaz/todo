import React, { useEffect } from 'react'
import styled from 'styled-components'

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeOut)
    // eslint-disable-next-line
  }, [list])
  return (
    <Wrapper>
      <p className={`alert alert-${type}`}>{msg}</p>
    </Wrapper>
  )
}

export default Alert
const Wrapper = styled.div`
  .alert {
    margin-bottom: 1rem;
    height: 1.25rem;
    display: grid;
    align-items: center;
    text-align: center;
    font-size: 0.7rem;
    border-radius: 0.25rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
  }
  .alert-danger {
    color: #721c24;
    background: #f8d7da;
  }
  .alert-success {
    color: #155724;
    background: #d4edda;
  }
`
