import {Component} from 'react';

class App extends Component{
  constructor(props){
    super();
    this.state = {
      questions:[
        this.createQuestion("Little interest or pleasure in doing things", "depression"),
        this.createQuestion("Feeling down, depressed, or hopeless", "depression"),
        this.createQuestion("Feeling nervous, anxious, or on edge", "anxiety"),
        this.createQuestion("Not being able to stop or control worrying", "anxiety"),
        this.createQuestion("Worrying too much about different things", "anxiety"),
        this.createQuestion("Trouble falling or staying asleep, or sleeping too much", "depression"),
        this.createQuestion("Feeling tired or having little energy", "depression"),
        this.createQuestion("Trouble relaxing", "anxiety"),
        this.createQuestion("Poor appetite or overeating", "depression"),
        this.createQuestion("Feeling bad about yourself-or that you are a failure or have let yourself or your family down", "depression"),
        this.createQuestion("Trouble concentrating on things, such as reading the newspaper or watching television", "depression"),
        this.createQuestion("Being so restless that it's hard to sit still", "anxiety"),
        this.createQuestion("Becoming easily annoyed or irritable", "anxiety"),
        this.createQuestion("Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual", "depression"),
        this.createQuestion("Feeling afraid as if something awful might happen", "anxiety"),
        this.createQuestion("Thoughts that you would be better off dead, or of hurting yourself", "depression"), 
      ]
    }
  }

  createQuestion = (name, type)=>{
    return {name:name, severity:-1, type:type}
  }

  render(){
    const tableHeaderStyle = {
                    backgroundColor: 'white',
                    fontSize:'12px',
                    color : 'black',
                    fontWeight: 'Bold',
                    width:65,
                    paddingLeft: 10,
                    marginTop:-70
                }
    return (
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
            <div style={{
              paddingTop:'60px',
              fontSize:'11px',
              color: '#23286b',
              paddingLeft:79,
            }}> 
              Select the best answer for each of the questions below and get an automatically designed radio station in minutes.
            <br/><br/> Over the last 2 weeks, how often have you been bothered by any of the
  following problems
            </div>
          </div>

          <div id="container" style={{width:550, marginLeft:80}}>
            
              <div id="legend" style={{
                  display:"flex",
                  flexDirection:"row",
                  height:'60px'
              }}>
                <div style={{flexGrow:1}}/>
  
            </div>
           
            <div style={{ width:'100%'}} id="questions">
              {
                this.state.questions.map((question, index)=><div style={{
                  backgroundColor: 'rgb(217,217,217)',
                  width : 'calc(100% - 10px)',      
                  padding:5,
                  paddingTop:10,
                  paddingBottom:10,
                  display:'flex',
                  direction:'column'
                }}> 
                  <label style={{display:'block', fontSize:'12px', color : 'black', width:255}}><b>{index+1}</b>. {question.name}</label>
                  
                  <div style={{flexGrow:1, display:'flex'}}>
                    <div style={{width:65, border:'1px solid red'}}>
                      {index == 0 ? <div style={tableHeaderStyle}>Not at all
                      </div>: ''}
                      <input type="radio" name="severity" value={0}></input>
                    </div>
                    <div style={{width:75, border:'1px solid red'}}>
                     {index == 0 ?<div style={tableHeaderStyle}>Several Days
                      </div>:''}
                      <input type="radio" name="severity" value={1}></input>
                    </div>
                    <div style={{width:75, border:'1px solid red'}}>
                      {index == 0 ?<div style={tableHeaderStyle}>More than <br/>half the <br/>days
                      </div>: ''}
                      <input type="radio" name="severity" value={2}></input>
                    </div>
                    <div style={{width:75, border:'1px solid red'}}>
                      {index == 0 ?<div style={tableHeaderStyle}>Nearly <br/>every day
                      </div>:''}
                      <input type="radio" name="severity" value={3}></input>
                    </div>
                  </div>
                </div>)
              }
            </div>
          </div>
        </div>
        <button button type="button" style={{
                marginLeft: '85px',
                fontWeight: 'bold',
                border: 'none',
                color: '#23286b',
                backgroundColor: '#f1b522',
                height : '50px', 
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
              SUBMIT</button>
      </div>
    )
  }
}

export default App;