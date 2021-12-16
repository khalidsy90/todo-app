import React, { useEffect, useState ,useContext} from 'react';
import useForm from '../../hooks/form.js';
import List from './List'
import { v4 as uuid } from 'uuid';
import {contextSettings}from '../context/Settings'
import context from 'react-bootstrap/esm/AccordionContext';
import Pagination from './pagination/pagination'
const ToDo = () => {
  
  const settings = useContext(contextSettings)
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
  
  const [currentPage, setCurrentPage] = useState(1);



  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {
    console.log('iiiidddd',id);
    const items = list.map( item => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
      }
      return item;
    });
    console.log('itemmms ',items);
    setList(items);
  }

  // useEffect(() => {
  //   let incompleteCount = list.filter(item => !item.complete).length;
  //   setIncomplete(incompleteCount);
  //   document.title = `To Do List: ${incomplete}`;
  // }, [incomplete,list]);
  //----------------------------------------------------------------
  let x=1;
  const lastItem =currentPage * settings.NumOfItems;
  const firstItem =lastItem-settings.NumOfItems;
  const filteredlist= list.filter(item=>settings.showCompleted?item:!item.complete)
  const itemsInPage = filteredlist.slice(firstItem,lastItem);
  console.log(`currentPage : ${x}\n NumOfItems:${settings.NumOfItems}`);
  console.log(`itemsInPage : ${itemsInPage}\n`);
//----------------------------------------------------------------
const changePage =(page)=>{
  if(page<1){setCurrentPage(1);}
  else if(page>Math.ceil(filteredlist.length / settings.NumOfItems)){setCurrentPage(Math.ceil(filteredlist.length / settings.NumOfItems));}
  else{  setCurrentPage(page);}
  
}
  return (
    <>
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>

      <form onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
        <label>
          <button type="button" onClick={settings.updateShow}>Show/Hide Completed</button>
        </label>
      </form>

      {itemsInPage.map(item => (
        <List list={item} toggleComplete={toggleComplete} data='uncompleted'/> ))}
        <Pagination  itemsPerPage={settings.NumOfItems} totalItems={filteredlist.length} currentPage={currentPage} changePage={changePage} />
    </>
  );
};

export default ToDo;