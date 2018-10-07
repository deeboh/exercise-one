import React, { Component } from 'react'                                                              
                                                                                                      
class Favorites extends Component {                                                                
  render(){                                                                                           
    return(                                                                                           
        <ol className='user-list'>                                                                 
    {this.props.users.map((user) => (                                                           
                                                                                                      
          <li key={user.id} className='user-list-item'>                                         
            <div className='user-details'>                                                         
              <p>{user.name}</p>                                                                   
              <p>{user.handle}</p>                                                                 
            </div>                                                                                    
            <button className='contact-remove'>                                                       
              Remove                                                                                  
            </button>                                                                                 
          </li>                                                                                       
        ))}                                                                                           
                                                                                                      
        </ol>                                                                                         
        )                                                                                             
  }                                                                                                   
                                                                                                      
}                                                                                                     
                                                                                                      
export default Favorites  