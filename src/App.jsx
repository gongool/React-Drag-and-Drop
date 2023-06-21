import React from 'react'
import "./App.css"
import Dropfileinput from './components/Drop-file-input/Dropfileinput'

const App = () => {

    const onFileChange = (files) => {
        console.log(files);
    }
    return (
        <div className='box'>
            <h2 className="header">React Drop Files Input</h2>
            <Dropfileinput
                onFileChange={(files) => onFileChange(files)}
            />
        </div>
    )
}

export default App