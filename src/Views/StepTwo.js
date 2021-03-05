import { Component } from "react";

class StepTwo extends Component{
    constructor(props){
        super();
        this.state = {
            playFile:''
        }
      const depressionSeverityLetter = this.calculateSeverityLetter(props.depressionScore);
      const anxietySeverityLetter = this.calculateSeverityLetter(props.anxietyScore);
      this.state.playFile = this.getFileNameForSeverity(depressionSeverityLetter, anxietySeverityLetter);
    }

    calculateSeverityLetter = (score)=>{
        let levelLetter = 'L';
        if(score <= 9)
            levelLetter='L'
        if(score >=10)
            levelLetter='M'
        if(score >=15)
            levelLetter = "H"
        return levelLetter;
    }

    getFileNameForSeverity = (depressionSeverity, anxietySeverity)=>{
      return `/music/depression${depressionSeverity}_anxiety${anxietySeverity}.mp3`;
    }

    componentDidMount(){
      
    }

    render(){
        return(
            <div style={{ 
                display: 'table', 
                marginLeft: 'auto', 
                marginRight: 'auto' 
              }}>
                <div style={{
                  width:(1068)
                }}>
          
                  <div style={{
                    paddingBottom:16,
                    paddingTop:16,
                  }}>
                    <div style={{
                      fontSize:'1.3em',
                      fontWeight: 'bold',
                      color: '#23286b',
                      paddingLeft:79,
          
                    }}> 
                      ✦ My Mind Radio
                    </div>
                  </div>
                  <div style = {{
                  }}>
                    <div style={{
                      backgroundColor:'white',
                    }}>
                      <div style={{
                        fontSize:'30px',
                        fontWeight: 'bold',
                        color: '#f1b522',
                        paddingLeft:79,
                        paddingTop:50,
                        fontFamily: 'Times New Roman',
                      }}> 
                        Your radio station is set.<br/>
                        Enjoy.
                        {/*<br></br> 는 <br/>과 같음*/}
                        
                        <div style={{
                          paddingBottom:16,
                          paddingTop:16,
                          display:'flex',
                          direction:'column'
                        }}>
                          <div>
                            <audio controls autoPlay loop>
                              <source src={this.state.playFile} type="audio/mpeg"></source>
                            </audio>
                          </div>
                          <div>
                            <img width = '30%' src="radio.png"></img>
                          </div>
                        </div>  
                      </div>
                    </div>
                    
                    
                  </div>
                
                </div>
              </div>
        )
    }
}

export default StepTwo;