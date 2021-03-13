import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import { useState } from 'react';

function App() {

  let keyVal = 0;
 
  const [noteList,setNoteList] = useState([]);
  //adding the note 
  const addNote = (note) => {
   
     setNoteList((preVal)=> {
   
        return [...preVal,note];
    });
   
    
}
//deleting the note
const deleteNote = (index) => {
  console.log('deleted');
  setNoteList((currentNoteList) => {
    return currentNoteList.filter ( (item,ind)=> {
      
      if(index !== ind) {
        return item;
      }

    });
  });
}

const [inpVal,setInpVal] = useState('');

//search note
const searchItem = (val) => {
  console.log('key pressed');
  setInpVal(val.target.value);
}

 
  

  return (
    <>
   <Header
     searchFunc = {searchItem}
   />
   <CreateNote passNote = {addNote}/>
   <div className = "note">
   {
   noteList.map( (item,index) => {
    return (
      <Note
      title = {item.title}
      text = {item.text}
      key = {keyVal++}
      ind = {index}
      userInp = {inpVal}
      onDelete = {deleteNote}
      />
    )
 })
   }
   
   </div>
   <Footer/>
   </>
  );
}

export default App;
