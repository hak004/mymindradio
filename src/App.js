import {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter
} from 'react-router-dom'
import StepZero from './Views/StepZero';
import StepOne from './Views/StepOne';
import StepTwo from './Views/StepTwo';

class App extends Component{
  constructor(props){
    super();
    this.state = {
        anxietyScore:null,
        depressionScore:null,
      }
    console.log(this.state);
  }

  calculateResults = (questions)=>{
    let anxietyScore = 0;
    let depressionScore = 0; 
    questions.map((question, index)=>{
        const type = question.type;
        const score = question.severity;
        if(type == "anxiety"){
            anxietyScore = anxietyScore+score;
        }

        if(type == "depression"){
            depressionScore = depressionScore+score;
        }
    });
    this.setState({anxietyScore:anxietyScore, depressionScore:depressionScore});
    this.props.history.push('/step-two')
  }

  render(){
    console.log(this.props);
    return (   
      <Switch>
        <Route path="/step-two" render={(props)=><StepTwo {...props} anxietyScore={this.state.anxietyScore} depressionScore={this.state.depressionScore}/>}/>
        <Route path="/step-one" render={(props)=><StepOne {...props} onSubmitAnswers={this.calculateResults}/>}/>
        <Route path="/" render={(props)=><StepZero {...props}/>}/>
      </Switch>
    )
  }
}

export default withRouter(App);