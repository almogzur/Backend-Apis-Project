

export default class TimeService extends React.Component{
  render(){
    return( <div id="time">
    <h1 className="text-center p-5" >Timestamp Microservice</h1>
    <br/>
       <a className="text-center p-2 " href="https://sitecss.online/api/2020-01-01">[Url]/api/2020-01-01</a>
       <br/>
       <br/>
        <a  className="text-center p-3" href="https://sitecss.online/api/1354891983219"> [Url]/api/1354891983219 </a>
        <br/>
        <h4 className="p-5">{JSON.stringify({"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"})}</h4>
        <h2>Made By AlmogZur</h2>
    </div>
    )
  } 
  }