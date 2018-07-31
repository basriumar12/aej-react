import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

export default class Footer extends React.Component {
  render() {
    return (
        <div align = "center">
        <Card>
        <CardHeader tag="h3"></CardHeader>
        <CardBody>
          <CardTitle>www.aej.id</CardTitle>
          <CardText>Let's to Join Kuy, want to be speaker or member ?</CardText>
        
        </CardBody>
        <CardFooter className="text-muted">Copyright © Android Enthusiast Jakarta 2018. All rights reserved.</CardFooter>
      </Card>
    
      </div>
      
    );
  }
}