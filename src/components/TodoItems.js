import React, { useEffect, useState } from 'react'
import '../App.css';
const getLocalItem =()=>{
const list = localStorage.getItem('Lists');
 if(list){
  return JSON.parse(localStorage.getItem('Lists'));
 }else{
   return[];
 }   
 
} 

const TodoItems = () => {
  const [addData, SetData]= useState('');
  const [Item, setItem]= useState(getLocalItem());
   const addItem=()=>{
     if(addData){
      setItem([...Item,addData]);
      SetData(''); 
     }else{
       alert('empty data not add');
    }
   }
   const deleteDateInfo=(idn)=>{
    const deleteData =Item.filter((ele,Id)=>{
       return  Id!=idn;               

    });
    setItem(deleteData);
   }
   const removeAll=()=>{
     setItem([]);
   }
   useEffect(()=>{
     localStorage.setItem('Lists',JSON.stringify(Item))

   },[Item]);
  return (
    <>
    <div className='text-center  mt-5'>
     <div><p>my todo app</p></div>
     <div className='bordersdata d-flex justify-content-between'>
       <input type='text' className='borderinfo' placeholder='add items...' value={addData} onChange={(eve)=>SetData(eve.target.value)}/>
       <i className="fa-solid fa-plus mb-2 add-btn text-white" title='add item' onClick={addItem}></i>
     </div>
     <div className='enterdata'>
        {
          Item.map((ele,Id)=>{
              return(
                <div className='putitem d-flex justify-content-between' key={Id}>
                  <h3 className='text-white'>{ele}</h3>
                  <i className="fa-solid fa-trash add-btn text-white" title='Delete Item' onClick={()=>deleteDateInfo(Id)} ></i>
                </div>
              )
          })
        }
        
        <div className=''>
            <button className='btn bg-danger text-white mt-3' onClick={removeAll}><span> CHECK LIST DELETE ALL</span></button>
        </div>
     </div>
     </div>
    </>
  )
}

export default TodoItems;
