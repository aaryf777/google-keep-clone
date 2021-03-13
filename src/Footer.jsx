import React from 'react';
function Footer() {
    let curr_year = new Date().getFullYear();
    return (
      
            <footer>
                <p>Copyright <span>©</span> {curr_year} || Google</p>
            </footer>
      
    )

}
export default Footer;