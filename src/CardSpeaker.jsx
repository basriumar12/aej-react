import React from 'react';
import {Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody   } from 'reactstrap';

export default class CardSpeaker extends React.Component {
  render() {
    return (
        <div algin="center">
          <CardGroup>
      <Card>
        <CardImg top width="100%" src="https://instagram.fcgk12-1.fna.fbcdn.net/vp/b4d0c471ac6e472be4d36c1db80752e8/5BFC2CFF/t51.2885-15/e35/37176910_279188249300012_6309658144414892032_n.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kelas Rest Api</CardTitle>
          <CardSubtitle>Speaker : Gandhi</CardSubtitle>
          <CardText>Kelas Rest Api menggunakan Codeigniter, Codeigniter yait salah satu framework bahasa program PHP, denga menggunakan Codeigniter memudahkan dalam pembuatan Api, karena sudah ada library Codeigniter yang telah disediakan.</CardText>
          <Button>More Info</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://instagram.fcgk12-1.fna.fbcdn.net/vp/0795645b2454504166336152d9f90ccd/5BFABEEC/t51.2885-15/e35/32743786_333232463869941_6356499684810293248_n.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kelas Woman (Android Dasar)</CardTitle>
          <CardSubtitle>Speaker : Ratri Retnowati</CardSubtitle>
          <CardText>Kelas Woman android dasar, yang diadakan di Universitas Trilogi. </CardText>
          <Button>More Info</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://instagram.fcgk12-1.fna.fbcdn.net/vp/eee4b410a844f01152d51d074ab179cf/5BF45A10/t51.2885-15/e35/29414475_142689976567499_1066708205167443968_n.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kelas Android Intermediate</CardTitle>
          <CardSubtitle>Speaker : Basri Umar</CardSubtitle>
          <CardText>Kelas Android Intermediate, kelas yang diadakan di Mozilla Working Space Community.</CardText>
          <Button>More Info</Button>
        </CardBody>
      </Card>
    </CardGroup>
      </div>
      
    );
  }
}