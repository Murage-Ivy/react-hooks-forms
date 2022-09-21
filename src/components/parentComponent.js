import React, { useState } from 'react';
import Form from './Form';

function App () {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
    const [newsLetter, setNewsLetter] = useState(true);
  
    function getFirstNameInput(event) {
      setFirstName(event.target.value);
      console.log(event.target.value);
    }
  
    function getSecondNameInput(event) {
      setLastName(event.target.value);
    }
  
    function changeValue(event) {
      event.preventDefault();
      setLastName("");
    }

    function onChangeChecked (event){
        setNewsLetter(event.target.value)
    }
    return (
        <div className='App'>
            <Form 
            firstName={firstName} 
            lastName={lastName} 
            onChangeFirstName={getFirstNameInput} 
            onChangeLastName={getSecondNameInput} 
            onSubmitForm={changeValue} 
            checked={newsLetter} 
            onChangeNewsLetter={onChangeChecked}
            />
        </div>
    )
}

export default App;