import React from 'react';
import {Jumbotron, Button} from 'reactstrap';
export default class Jumbo extends React.Component{
    render(){
        return(
            <Jumbotron align="center">
            <h1 className="display-3">Hello, Kuy</h1>
        <p className="lead">Selamat Datang Di Dashboard Android Enthusiast Jakarta</p>
        <hr className="my-2" />
        <p>What Do You want ?</p>
  
            <p className="lead">
              <Button color="primary">More Info</Button>
            </p>
          </Jumbotron>
    
        )
    }
}

