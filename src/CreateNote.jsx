import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


function CreateNote(props) {
  const [titleInput,setTitleInput] = useState({
      title:"",text:""
    });
  

    const fetchVal = (event) =>{
        const name = event.target.name;
        const val = event.target.value;
        setTitleInput( (prevVal) => {
         
            return {
                ...prevVal,
                [name] : val
              
            };
        });
    };
    const addItem = () => {
        props.passNote(titleInput);
        setTitleInput({title:'',text:''});
    };
    
   
    
    return (
        <>
        <div className = "createnote">
           <form>
               <input type = 'text' name = 'title' placeholder = 'title' onChange = {fetchVal} value = {titleInput.title}/>
               <textarea rows = "6.5" column = "30" name = 'text' placeholder = "Write Note Here" onChange = {fetchVal} value = {titleInput.text}></textarea>
                <Button>
                    <AddIcon className = "addicon" onClick = {addItem}/>
                </Button>
           </form>
           
        </div>
        
        
        </>
        
    )

}
export default CreateNote;