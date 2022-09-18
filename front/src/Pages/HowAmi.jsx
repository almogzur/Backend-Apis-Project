import React from 'react';

 export default class HowamI extends React.Component{
    constructor(props) {
      super(props);
      this.state ={}
    }
    render(){
    return (
      <div className="howami">
        <h1 >API Project: Request Header Parser Microservice</h1>
        <h4>Example Usage:</h4>
        <a href="/api/howami">[URL]/api/howami</a>
        <br/>
        <br/>
        <h4>Example Output:</h4>
        <p>{JSON.stringify({"ip":"xxx.xxx.xxx.xxx","language":"en-US,en;q=0.9,he;q=0.8","software":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"})}</p>
        <h5>Made by Almogzur</h5>
      </div>
    );
  }
  }
  