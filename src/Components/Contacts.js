import React from 'react';

class Contacts extends React.Component{
     state={
     name :" ",
     mail:" ",
     }

     add=(e) => {
         e.preventDefault();

         if (this.state.name==="" ||  this.state.mail===""){
         alert("Fields cannot be Empty");
        }
        this.props.addcontactHandler(this.state);
        this.setState({name:"",
                        mail:"",})
                        console.log(this.props)
                        this.props.history.push("./")
     }
     render(){
         return(
           
           <div className="ui form">
          
           <h2>Add contact</h2>
                <div className="field">
                <form onSubmit={this.add}>
                 <label>Name</label>
                <input type="text" name="name" placeholder="name"  
                value= {this.state.name}    
                onChange={ (e) =>this.setState({name:e.target.value}) }/>
               
                <div className="field">
                
                 <label>Email</label>
                <input type="text" name="mail" placeholder="enter your mail id"
                value= {this.state.mail} 
                onChange={ (e) => this.setState({mail:e.target.value})}/>
                </div>
                <button class="ui blue submit button">Add</button>
                </form>
                
                </div>
           </div>

         );
     }


}
export default Contacts;