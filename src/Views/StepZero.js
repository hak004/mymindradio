import {Link} from 'react-router-dom';

export default function StepZero(){
    return <div style={{ 
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
            display:"flex",
            flexDirection:"row",
          }}>
            <div style={{
              width:'50%',
              backgroundColor:'white',
            }}>
              <div style={{
                fontSize:'36px',
                fontWeight: 'bold',
                color: '#f1b522',
                paddingLeft:79,
                paddingTop:100,
  
                fontFamily: 'Times New Roman',
              }}> 
                Get a personalized music therapy radio station for free
                {/*<br></br> 는 <br/>과 같음*/}
                
                
              </div>
              <div style={{
                marginTop: '10px',
                fontSize:'18px',
                color: '#23286b',
                paddingLeft:'60px',
                paddingBottom:40,
              }}> 
                Answer the questions and get an automatically designed radio station just for you in minutes.
              </div>
              <Link to="/step-one" type="button" style={{
                marginLeft: '85px',
                maginTop: '100px',
                fontWeight: 'bold',
                border: 'none',
                color: '#23286b',
                backgroundColor: '#f1b522',
                weight : '172px',
                paddingLeft : '36px',
                paddingRight : '36px',
                paddingTop : '16px',
                paddingBottom : '16px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '16px',
                transitionDuration: '0.2ms',
                cursor: 'pointer',
              }}> 
              START HERE</Link>
              
            </div>
            <p1>
              <img width = '50%' src="radio.png" marginLeft = '500px'></img>
            </p1>
          </div>
        </div>
      </div>
}