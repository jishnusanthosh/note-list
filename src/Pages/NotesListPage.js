import React from 'react'
import notes from '../assets/data'
import ListItem from '../Components/ListItem'

const NotesListPage = () => {
  return (
    <div>
        <div className='note-list'> 
            {notes.map((note,index)=>(
                <ListItem key={index} note={note}/>
            ))}
        </div>
      
    </div>
  )
}

export default NotesListPage
