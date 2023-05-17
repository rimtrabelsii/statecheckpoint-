
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  const [person, setperson] = useState({fullname:"Rim trabelsi",img:"gm5.jpg",  bio:"Believe in yourself", profession:"Developpeuse web"})
  const [shows, setshows] = useState(false)
  return (
    <div className="gmc" >
      <h1 className='title' >Welcome To Gomycode World  </h1>
      <button className='butt1' onClick={()=>(setshows(!shows))}>click here to enter new student's information </button>
      {shows?(<Card className='card1' style={{ width: '350px' }}>
      <Card.Img variant="top" width={"200px"} height={"250px"} src="rima.jpg" />
      <Card.Body>
        <Card.Title style={{color:"white"}}>
         <h1> {person.fullname}</h1> </Card.Title>
        <Card.Text style={{color:"white"}}>
       <h3>{person.profession}</h3> 
        <h4> {person.bio}</h4> 
        
        </Card.Text>
        <Button variant="primary">Fomer student 2023</Button>
      </Card.Body>
    </Card>):<div> <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src="https://previews.123rf.com/images/armducky/armducky1610/armducky161000015/67101429-new-student.jpg" width={"250px"} height={"250px"} />
      <Card.Body>
        <Card.Title style={{color:"white"}}> <h1>{person.fullname}</h1> 
      <input type='texte' onChange={(e)=>setperson({...person, fullname:e.target.value})}></input>
      </Card.Title>
        <Card.Text style={{color:"white"}}>
        <h3>{person.profession}</h3> 
      <input type='texte' onChange={(e)=>setperson({...person, profession:e.target.value})}></input>
      <h4>{person.bio}</h4> 
      <input type='texte' onChange={(e)=>setperson({...person, bio:e.target.value})}></input>
        
        </Card.Text>
        <Button variant="primary">new student</Button>
      </Card.Body>
    </Card> </div>}
        
    </div>
  );
}

export default App;
