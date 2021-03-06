import { Component } from "react";

class StepOne extends Component{
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
    
    updateQuestionWithAnswer = (value, index)=>{
      let updatedQuestions = this.state.questions;
      updatedQuestions[index]['severity'] = parseInt(value) ;
      this.setState({questions:updatedQuestions});
    }

    checkQuestionsComplete = (questions)=>{
      let isComplete = false;
      for(var i = 0; i < questions.length; i++){
        if(questions[i].severity == -1){
          break;
        }
        isComplete = true;
      }
      
      return isComplete
    }

    render(){
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
                      paddingTop:'50px',
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
                          height:'10px'
                      }}>
                        <div style={{flexGrow:1}}/>
          
                    </div>
                   
                    <table style={{ width:'100%'}} id="questions">
                        <tr>
                            <th style={{width:'40%'}}></th>
                            <th style={{width:'15%'}}>Not at all</th>
                            <th style={{width:'15%'}}>Several days</th>
                            <th style={{width:'15%'}}>More than half the days</th>
                            <th style={{width:'15%'}}>Nearly everyday</th>
                        </tr>
        
                      {
                        this.state.questions.map((question, index)=><tr> 
                            <td style={{padding:10}}>
                                <label style={{display:'block', fontSize:'12px', color : 'black', width:255}}><b>{index+1}</b>. {question.name}</label>
                            </td>
                            <td align="center">
                                <input type="radio" name={`severityFor${index}`} value={0} onChange={(event)=>this.updateQuestionWithAnswer(event.target.value, index)}></input>
                            </td >
                            <td style={{padding:10}} align="center">
                                <input type="radio"  name={`severityFor${index}`} value={1} onChange={(event)=>this.updateQuestionWithAnswer(event.target.value, index)}></input>
                            </td>
                            <td style={{padding:10}} align="center">
                                <input type="radio" name={`severityFor${index}`} value={2} onChange={(event)=>this.updateQuestionWithAnswer(event.target.value, index)}></input>
                            </td>
                            <td style={{padding:10}} align="center">
                                <input type="radio" name={`severityFor${index}`} value={3} onChange={(event)=>this.updateQuestionWithAnswer(event.target.value, index)}></input>
                            </td>
                        </tr>)
                      }
                    </table>
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
                      }}
                      onClick={()=>this.props.onSubmitAnswers(this.state.questions)}
                      disabled={!(this.checkQuestionsComplete(this.state.questions))}> 
                      SUBMIT</button>
              </div>
        )
    }
}
export default StepOne;