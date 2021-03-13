import React from 'react';
import logo from './images/logo.png';
import Refresh from '@material-ui/icons/Autorenew';

function Header(props) {
    
    const deleteAll = () => {
        window.location.reload();
    }
    const searchNote = (event) => {
        
        props.searchFunc(event);
    }
    return (
        <div className = "navbar">
        <div className = "left-navbar">
            <img src = {logo} alt = "logo"/>
            <h2>Google Keep</h2>
        </div>
        <div className = "right-navbar">
        <input type = 'text' placeholder = 'Search Note' className = 'searchbar' onChange = {searchNote}/>
            <Refresh className = "refresh" onClick = {deleteAll}/>
            
        </div>
        </div>
    )

}
export default Header;