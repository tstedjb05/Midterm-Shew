import React, { Component } from 'react';

export class ReadMore extends Component {
  	
  render() {
  	let{sensor,effect,lcdImg,sen,nameCamera} = this.props;
    return (
      	<div className="container App-textBackground">
      		<div className="row">
  	      		<div className="col-md-6" style={{color:"white"}}>
  		        	<h1 style={{textAlign:"left",marginBottom:"50px"}}>{nameCamera}</h1> 
                  <p>
                    Sensor : {sensor}
                  </p>
                  <p> 
                    Effective Pixels : {effect}
                  </p>
                  <p>
                    LCD Monitor : {lcdImg}
                  </p>
                  <p>
                    Sensitivity : {sen}
                  </p>
  		    		  
  		        </div>
      	    </div>
      	</div>
    );
  }
}

