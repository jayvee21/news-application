import React from 'react'

const Header = (props) => {

    return(
        <header>
            <h3 style={ {display:'inline-block', fontSize: '1.5em', fontWeight: 'bold'} }>  News App </h3> 
            <ul style={ {listStyle:'none', display:'inline-block'} }>
                <li>  Nav </li>
            </ul>
            
        </header>
    )
}

export default Header