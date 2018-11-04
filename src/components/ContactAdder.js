import React from 'react';
import uuidv4 from 'uuid/v4';
import _ from 'lodash';
import { Menu, Button, Icon, Dropdown, Modal, Header, Form, Grid } from 'semantic-ui-react';

class ContactAdder extends React.Component{

    state = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address: '',
        id: uuidv4(),
        submitDisabled: true
    }

    handleChange = (e, fields) => {
        this.setState({[fields.name]: fields.value}, () => {
            this.checkForm();
        });
    }

    submitContact = () => {
        let newContact = _.omit(this.state, ['submitDisabled']);
        this.props.addContact(newContact);
        this.setState({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            address: '',
            id: uuidv4(),
            submitDisabled: true
        });
    }

    checkForm = () => {
       let cantSubmit = _.some(_.omit(this.state, ['submitDisabled']), _.isEmpty);
       this.setState({submitDisabled: cantSubmit});
    }

    render(){
        return(
            <Modal open={this.props.openModal}>
                <Modal.Header>Add your contact</Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Form>
                                    <Form.Input onChange={this.handleChange} name='firstName' value={this.state.firstName} width={12} fluid label='First Name' placeholder='First Name' />
                                    <Form.Input onChange={this.handleChange} name='lastName' value={this.state.lastName} width={12} fluid label='Last Name' placeholder='Last Name' />
                                    <Form.Input onChange={this.handleChange} name='phoneNumber' value={this.state.phoneNumber} type='number' width={12} fluid label='Phone Number' placeholder='Phone Number' />
                                    <Form.Input onChange={this.handleChange} name='email' value={this.state.email} width={12} fluid label='Email' placeholder='Email' />
                                    <Form.Input onChange={this.handleChange} name='address' value={this.state.address} width={12} fluid label='Address' placeholder='Address' />
                                </Form>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={this.props.creatorHandler}>
                        Cancel
                    </Button>
                    <Button disabled={this.state.submitDisabled} onClick={this.submitContact} color='green'>
                        Submit
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ContactAdder;