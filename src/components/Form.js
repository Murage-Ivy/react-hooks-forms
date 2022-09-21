import React from "react";

function Form({firstName, lastName, onChangeFirstName, onChangeLastName, onSUbmitForm, checked, onChangeNewsLetter}) {

  return (
    <form onSubmit={onSUbmitForm}>
      <input type="text" value={firstName} onChange={onChangeFirstName} />
      <input type="text" value={lastName} onChange={onChangeLastName} />
      <br></br>
      <label>
        <input type="checkbox" checked={checked} onChange={onChangeNewsLetter}/> Subrscribe to newsLetters
      </label>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
