import React, { useState } from "react";
import CreateApp from "./CreateApp";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";



export default function App(){
const [notes,setNotes]=useState([]);

function addNote(newNotes){
    setNotes(prevNotes=>{
        return [...prevNotes,newNotes]
    })
    

}
function deleteNote(id){
    setNotes(prevNotes=>{
        return prevNotes.filter((noteItem,index)=>{
            return index!==id
        })
    })

}

    return(
        <div>
             <Header/>
             
        <CreateApp
            onAdd={addNote}
        />
        {
            notes.map((noteItem,index)=>{
                return <Note
                id={index}
                key={index}
                onDelete={deleteNote}
                    title={noteItem.title}
                    content={noteItem.content}
                />
            })
        }
        <Footer/>
        </div>
       
    )
}