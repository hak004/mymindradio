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
      return `${process.env.PUBLIC_URL}/music/depression${depressionSeverity}_anxiety${anxietySeverity}.mp3`;
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
                            <img width = '30%' src={`${process.env.PUBLIC_URL}/radio.png`}></img>
                          </div>

                        </div>  
                      </div>
                      <div style={{
                        fontSize:'8px',
                        fontWeight: 'lighter',
                        fontWeight: 'normal',
                        color: 'black',
                        paddingLeft:79,
                        paddingTop:200,
                        paddingBottom:50,
                        fontFamily: 'Times New Roman',
                        display:'flex',
                        direction:'row',

                      }}> 
                      Works Cited<br/>Bro.vector. “People listening radio podcast online illustration Premium Vector” Freepik, 2020, https://www.freepik.com/premium-vector/people-listening-radio-podcast-online-illustration_7660995.htm.<br/>Chopin, Frédéric. “Relaxing Classical Music” Youtube, uploaded by HALIDON MUSIC, Jun 1, 2020, https://www.youtube.com/watch?v=y1dbbrfekAM&t=91s. <br/>
Mozart, Wolfgang. "Classical Music for Brain Power" Youtube, uploaded by HALIDON MUSIC, Sep 6, 2017, https://youtu.be/7JmprpRIsEY.<br/>
Gogeup Jupasu. "Real Depression Music Therapy – Highly Effective – 3 hours" Youtube, uploaded by Gogeup Jupasu, Nov 9, 2020, https://youtu.be/hvagzu0AbVY <br/>
Mind Patting. "Healing music that heals depression, panic disorder, and anxiety disorder with a frequency of 528 hz” Youtube, uploaded by Mind Patting, Nov 9, 2020, https://youtu.be/FEBgUazCpq4 <br/>
Nadanmusic. "Binaural Beats Music to Boost Serotonin, Dopamine and Endorphin, Healing Music” Youtube, uploaded by NadanMusic Label, Sep 12, 2019, https://youtu.be/_f-yw10lfgI <br/>
Ease The Pain. "Stress Relief Sound, Music, Meditation, Relaxing Music” Youtube, uploaded by Ease The Pain Music, Nov 18, 2020, https://youtu.be/wumZ0hP4zZ0
                          </div>
                    </div>
                    
                    
                  </div>
                
                </div>
              </div>
        )
    }
}

export default StepTwo;