import React, { Component } from 'react';
import './App.css';

class Profile extends Component{
  calculateGenderLogo(gender){
    if(gender==='M')
    {
    return (<i className="fa fa-mars genderIcon"></i>);
    }
    else
    return (<i className="fa fa-venus genderIcon"></i>);
  }
  generateProfilePicture(imageUrl){
    return (<img src={`data:image/png;base64,${imageUrl}`}/>
    );
  }
  render() {
    return (
      <div className="profile-card">
        <div className="image" >
          {this.generateProfilePicture(this.props.image)}
        </div>
        <div className="upperhalf">
          <h3>{this.props.name}</h3>
          <span>
          {this.calculateGenderLogo(this.props.gender)}
          </span>
          {this.props.age} years old from {this.props.city}
          <br/>
        </div>
        <div className="lowerhalf" >
          <span className="headers">Works At</span>
          <br/>
          {this.props.job} at {this.props.workplace}
          <hr/>
          <span className="headers">About</span>
          <br/>
          {this.props.about}
          <hr/>
        </div>
      </div>
    );
  }
}
class ProfileList extends Component{

  render() {
    var profiles = this.props.profiles.map(function(p, i){
      var allProps = {name : p.name, gender: p.gender, age: p.age, city: p.city, job: p.job, workplace: p.workplace, about: p.about, image: p.image, key: i}
    return(
      <Profile {...allProps} />
      );
    });
    return (
      <div className='container'>
        {profiles}
      </div> 
    );
  }
}

/*ReactDOM.render(<ProfileList profiles={profiles} />, document.getElementById("app"));*/
/* data-isotope='{ "itemSelector": ".profile-card", "percentPosition": "true" }'  data-infinite-scroll='{ "path": ".pagination__next", "append": ".profile-card", "history": false }'*/


export default ProfileList;