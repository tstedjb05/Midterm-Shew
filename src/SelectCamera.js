import React, { Component } from 'react';

import camFuji1 from './images/FUJIFILM-X-A1.jpg';
import camFuji2 from './images/FUJIFILM-X-T1.jpg';
import camFuji3 from './images/FUJIFILM-X100T.jpg';

import {ImgCamera} from './ImgCamera';
import {ReadMore} from './ReadMore';


export class SelectCamera extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      path:"",
      checkPick:false,
      pickCam:{
        Cam1:{
          nameC:'Fijifilm X70',
          Sensor: 'APS-C"X-Trans CMOS II"', 
          Effective:"16.3M",
          LCD: "3.0-inch (1,040K-dot)",
          Sensitivity:"ISO 51200*4"
        },
        Cam2:{
          nameC:'Fijifilm X100T',
          Sensor: 'APS-C"X-Trans CMOS II"', 
          Effective:"16.3M",
          LCD: "3.0-inch (1,040K-dot)",
          Sensitivity:"ISO 51200"
        },
        Cam3:{
          nameC:'Fijifilm X-A10',
          Sensor: 'APS-C CMOS', 
          Effective:"16M",
          LCD: "3.0-inch tilting LCD screen (1,040K-dot)",
          Sensitivity:"ISO 25600"
        },
      },
      isPick:{
          nameCam:'',
          SensorCam:'',
          Eff:'',
          LCDCam:'',
          sensitive:''
      }
    };
    this.pickCameraChangeContent = this.pickCameraChangeContent.bind(this);
  }
  pickCameraChangeContent =(event)=>{
      if (event.target.options[event.target.selectedIndex].id == "camera1") {
          this.setState({
              path:event.target.value,
              isPick:{
                nameCam: this.state.pickCam.Cam1.nameC,
                SensorCam : this.state.pickCam.Cam1.Sensor,
                Eff : this.state.pickCam.Cam1.Effective,
                LCDCam : this.state.pickCam.Cam1.LCD,
                sensitive : this.state.pickCam.Cam1.Sensitivity
              },
              checkPick:false
          });
      }
      if (event.target.options[event.target.selectedIndex].id == "camera2") {
          this.setState({
              path:event.target.value,
              isPick:{
                nameCam: this.state.pickCam.Cam2.nameC,
                SensorCam : this.state.pickCam.Cam2.Sensor,
                Eff : this.state.pickCam.Cam2.Effective,
                LCDCam : this.state.pickCam.Cam2.LCD,
                sensitive : this.state.pickCam.Cam2.Sensitivity
              },
              checkPick:false
          });
      }
      if (event.target.options[event.target.selectedIndex].id == "camera3") {
          this.setState({
              path:event.target.value,
              isPick:{
                nameCam: this.state.pickCam.Cam3.nameC,
                SensorCam : this.state.pickCam.Cam3.Sensor,
                Eff : this.state.pickCam.Cam3.Effective,
                LCDCam : this.state.pickCam.Cam3.LCD,
                sensitive : this.state.pickCam.Cam3.Sensitivity
              },
              checkPick:false
          });
      }
      
      this.setState({
        checkPick:true
      });
  }
  render() {
    let {path , readMore , isPick} = this.state;
    if (this.state.checkPick) {
        readMore = (<ReadMore nameCamera={isPick.nameCam}
                              sensor={isPick.SensorCam}
                              effect={isPick.Eff}
                              lcdImg={isPick.LCDCam}
                              sen={isPick.sensitive} />);
    }
    return (
      <div style={{background:"black"}}>
        <div className="container">
          <div className="col-md-6" style={{marginTop:"30px"}}>
              <div className="row">
                <div className="container">
                  <select className="form-control" onChange={this.pickCameraChangeContent}>
                    <option id={0} value="" >เลือกรุ่นกล้อง</option>
                    <option id="camera1" value={camFuji1} >Fijifilm X70</option>
                    <option id="camera2" value={camFuji2} >Fijifilm X100T</option>
                    <option id="camera3" value={camFuji3} >Fijifilm X-A10</option>
                  </select>
                </div>
                <div style={{marginTop:"30px"}}>
                  <ImgCamera img={path}/>
                </div>
              </div>
          </div>
          <div className="col-md-6" style={{marginTop:"100px"}}>
             {readMore}
          </div>
        </div>
      </div>
    );
  }
}


