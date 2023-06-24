import { useEffect, useState } from 'react';
import UserDashboard from './components/User';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [data, setData] = useState([ 
 
]);

const user_request = async()=>{
  const url = 'https://reqres.in/api/users?page=1';
  const response = await fetch(url);
  const responseJson = await response.json()
  console.log(responseJson);
  setData(responseJson.data)
}
useEffect(()=>{
  user_request();
},[]);
  return (
  <div>
    <UserDashboard datas = {data}/>
  </div>
  );
}

export default App;
