// import {React, useState} from 'react'
// import AboutStyles from "../styles/About.module.css"
// export default function ContactForm() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleNameChange = (e) => {
//         setName(e.target.value);
//       };
    
//       const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//       };
    
//       const handleMessageChange = (e) => {
//         setMessage(e.target.value);
//       };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log({
//           name: name,
//           email: email,
//           message: message
//         });
//       };

//   return (
//     <form onSubmit={handleSubmit} className={AboutStyles.form}>
//       <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         id="name"
//         value={name}
//         onChange={handleNameChange}
//         required
//       />

//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         id="email"
//         value={email}
//         onChange={handleEmailChange}
//         required
//       />

//       <label htmlFor="message">Message:</label>
//       <textarea
//         id="message"
//         value={message}
//         onChange={handleMessageChange}
//         required
//       ></textarea>

//       <input type="submit" value="Submit" />
//     </form>
//   );
// }


