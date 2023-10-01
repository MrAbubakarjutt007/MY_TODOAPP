import React from 'react'

const TodoItems = () => {
  return (
    <>
    <div className='text-center mt-5'>
     <div><p>my todo app</p></div>
     <div className='text-center'>
       <input type='text' placeholder='add items...'/>
       <i className="fa-solid fa-plus add-btn" title='add item'></i>
     </div>
     <div className='enteritem text-center'>
        <div className='putitem'>
            <h3>Apple</h3>
            <i className="fa-solid fa-trash add-btn" title='Delete Item' ></i>
        </div>
        <div className=''>
            <button className='btn bg-danger'><span> CHECK LIST DELETE ALL</span></button>
        </div>

     </div>
     </div>
    </>
  )
}

export default TodoItems;
