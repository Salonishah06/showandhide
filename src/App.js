import  React,{Component} from 'react';



class App extends Component {
  
    constructor(props){
      super(props)
      this.state={show:true}
      this.toggleDiv =this.toggleDiv.bind(this)

      
    }

    toggleDiv = () => {
      const {show} = this.state;
      this.setState({show: !show})
    }
    render(){
      return (
        <div className="App">
          <div className="App-header">
            
            <p>
              Hey
            </p>
          </div>
          <div className="App-Intro">
            <br />
            <button onClick={ this.toggleDiv}>Toggle div</button>
            <br />
            <br />
            {this.state.show && <Box/>}
          </div>
        </div>
      );
    }
    }

    class Box extends Component{
      render(){return(
      <div>This is a div</div>)
      }
    }

export default App;
