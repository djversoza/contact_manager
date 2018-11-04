import React from 'react';
import _ from 'lodash';
import { Button, Modal, Form, Grid } from 'semantic-ui-react';

class ContactEditor extends React.Component{
    state = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address: '',
        id: '',
        submitDisabled: true
    }

    componentWillReceiveProps = (newProps) => {
        if (newProps.contact !== this.state) {
            this.setState({...newProps.contact, submitDisabled: false})
        }
    }

    handleChange = (e, fields) => {
        this.setState({[fields.name]: fields.value}, () => {
            this.checkForm();
        });
    }

    updateContact = (action) => {
        this.props.updateContact(action, _.omit(this.state, ['submitDisabled']))
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
                    <Button floated='left' onClick={() => this.updateContact('delete')} color='red'>
                        Delete
                    </Button>
                    <Button onClick={this.props.closeEditor}>
                        Cancel
                    </Button>
                    <Button disabled={this.state.submitDisabled} onClick={() => this.updateContact('update')} color='green'>
                        Update
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ContactEditor;