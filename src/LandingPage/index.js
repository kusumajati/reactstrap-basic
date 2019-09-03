import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom'
import '../App.css'

export default class LandingPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:''
        }
    }

handleChangeName=(event)=>[
    this.setState({
        name: event.target.value
    })
]

    render(){
        
    
  return (
    <div  className='form-lp'>
<Form  inline>

        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Enter Your Name</Label>
          <Input onChange={this.handleChangeName} name="password" id="examplePassword" placeholder="don't tell!" />
        </FormGroup>
        <Link to={`/homepage/${this.state.name}`}>
        <Button>Submit</Button>
        </Link>
      </Form>    </div>
  );
}
}

