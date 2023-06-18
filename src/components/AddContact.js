// import React from 'react'

// class AddContact extends React.Component {
//      state = {
//         name : "" , 
//         email:""
//     }
//     add = (e) =>{
//       e.preventDefault() ; 
//       if(this.state.name === "" || this.state.email === ""){
//         alert("all the fields are manadatory") ;
//         return ;
//       }
//       this.props.addContactHandler(this.state) ;
//       this.setState({name : ""  , email : ""});
//     }

// render(){
//     return(
// <div className='ui main'>

//   <h2>dddd</h2>
//   <h2>AddContact</h2>
//  <form className='ui form' onSubmit={this.add}>
//     <div className='field' >
//         <label>
//             Name
//         </label>
//         <input type = "text" name = "name" placeholder='Name' 
//         value  = {this.state.name} onChange={(e) => this.setState({name : e.target.value})}/>
//     </div>
//     <div className='field' >
//         <label>
//            Email
//         </label>
//         <input type = "text" name = "email" placeholder='Email'
//            value  = {this.state.email} onChange={(e) => this.setState({email : e.target.value})} />
//     </div>
//     <button className='ui button blue'> ADD</button>
//  </form>
// </div>
//     ) ;
// }
// }

// export default AddContact ;

import React, { useState } from 'react';

function AddContact({ addContactHandler }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const add = (e) => {
    e.preventDefault();
    if (name === '' || email === '') {
      alert('All the fields are mandatory');
      return;
    }
    addContactHandler({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <div className="ui main">
      <h2>dddd</h2>
      <h2>AddContact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">ADD</button>
      </form>
    </div>
  );
}

export default AddContact;
