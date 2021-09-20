import { useState } from 'react'
import Form from './container/Form'
import ListContainer from './container/ListContainer'
import styled from 'styled-components'
function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('helo')
    console.log(name)
    if (!name) {
      showAlert(true, 'danger', 'please enter value')
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      )

      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'Value Changed')
    } else {
      showAlert(true, 'success', 'Item Added')
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }
  const clearItems = () => {
    showAlert(true, 'danger', 'Items Clear')
    setList([])
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, msg, type })
  }
  const removeItem = (id) => {
    const newItems = list.filter((item) => item.id !== id)
    showAlert(true, 'danger', 'Item Removed')

    setList(newItems)
  }
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setEditID(id)
    setIsEditing(true)
    setName(specificItem.title)
  }

  return (
    <Wrapper className='section-center'>
      <Form
        handleSubmit={handleSubmit}
        alert={alert}
        list={list}
        showAlert={showAlert}
        name={name}
        setName={setName}
        isEditing={isEditing}
      />

      {list.length > 0 && (
        <ListContainer
          list={list}
          removeItem={removeItem}
          editItem={editItem}
          clearItems={clearItems}
        />
      )}
    </Wrapper>
  )
}

export default App
const Wrapper = styled.section`
  @media screen and (min-width: 992px) {
    .section-center {
      width: 95vw;
    }
  }
  main {
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
`
