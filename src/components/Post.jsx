import React ,{useState}from 'react'
import "./App.css"
const Post = () => {
  const [todo, setTodo]= useState([])

  const [addFormData, setAddFormData] = useState({
    title:'',
    description:''
  })

  const onchangeHandler = (e)=> {
    e.preventDefault()
    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value

    const newFormData= {...addFormData}
    newFormData[fieldName]=fieldValue


    setAddFormData(newFormData)
  }


  const AddTodo = (e)=> {
    e.preventDefault()
    
    const newTodo = {
      title: addFormData.title,
      description:addFormData.description
    }

    const newContacts = [...todo, newTodo]
    setTodo(newContacts)

  }
  return (
    <div>
      <input type="text"  name='title' onChange={onchangeHandler} placeholder="title"/>
      <input type="text" name='description'  onChange={onchangeHandler}  placeholder="description"/>
      <button onClick={AddTodo}>Add Todo</button>
      <div className='app-container'>
      <table>
        <thead>
          <tr>
           <th>title</th>
            <th>description</th>
            </tr>
            </thead>
            <tbody>
              {todo.map((ele)=>(
              
            <tr>
            <td>{ele.title}</td>
            <td>{ele.description}</td>
            </tr>
             ) )}
            </tbody>
      </table>
      </div>
       

    </div>
  )
}

export default Post