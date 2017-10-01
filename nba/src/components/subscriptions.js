import React, {Component} from 'react';

class Subscriptions extends Component {
  constructor(props){
    super(props);

    this.state = {
      email:''
    }
  }

  saveSubscription = (email) => {

  }
  
  handleSubmit = (event) =>{

    event.preventDefault();
    let email = this.state.email;
    let regex = /\S+@\S+\.\S+/;

    if(regex.test(email)){
      this.saveSubscription(email)
    }else{
      ///
    }

  }


  onChangeInput = (event) => {
    this.setstate({
      email:event.target.value
    })
  }

  render(){
    return(
      <div className="subscribe_panel">
        <h3>Subscribe to us</h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="youremail@email.com" value={this.state.email} onChange={this.onChangeInput}/>

          </form>
        </div>
        <small>
          lorem

        </small>

      </div>
    )
  }
}

export default Subscriptions;
