import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
   
    const deleteItem = () => {
        props.onDelete(props.ind);
    }
    let check = false;
    if(props.title.toUpperCase().indexOf(props.userInp.toUpperCase()) > -1) {
        check = true;
    }
    if(check) {
    return (
       
               <div className = "noteelem ">
               <h3>{props.title}</h3>
               <p>{props.text}</p>
                <Button>
                    <DeleteIcon className = "deleteicon "  onClick = {deleteItem}/>
                </Button>
                </div>
    );
    }
    else {
        return (<p></p>);
    }

}
export default Note;