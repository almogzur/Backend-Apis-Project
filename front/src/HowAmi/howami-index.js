
 import "./howami.css"
 
 export default class App extends React.Component{
    constructor(props) {
      super(props);
      this.state ={}
    }
    render(){
    return (
      <div className="App">
        <h1 >API Project: Request Header Parser Microservice</h1>
        <h4>Example Usage:</h4>
        <a href="sitecss.online/api/whoami">[URL]/api/howami</a>
        <br/>
        <br/>
        <h4>Example Output:</h4>
        <p></p>
        <h5>Made by Almogzur</h5>
      </div>
    );
  }
  }
  