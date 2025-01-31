
import React, { useState } from "react";

function Form({ firstName, lastName, handleFirstNameChange, handleLastNameChange }) {
  
  return (
    <form>
      <input
        type="text"
        onChange={handleFirstNameChange}
        value={firstName}
      />
      <input
        type="text"
        onChange={handleLastNameChange}
        value={lastName}
      />
     <button type="submit">Submit</button>
    </form>

    
  );
}


// function Form() {
//   const [newsetter, setNewsetter] = useState(false);

//   function handleNewsletterChange(event) {
//     // .checked, not .value!
//     setNewsetter(event.target.checked);
//   }

//   return (
//     <form>
//       <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
//       <input
//         type="checkbox"
//         id="newsletter"
//         onChange={handleNewsletterChange}
//         checked={newsetter}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

export default Form;
