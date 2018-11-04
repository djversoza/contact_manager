import React, { Component } from 'react';
import ContactAdder from './ContactAdder.js';
import ContactEditor from './ContactEditor.js';
import {Button, Grid, Form, Table, Pagination, Segment, Menu, Icon, Select, Checkbox} from  'semantic-ui-react';
import _ from 'lodash';

class ContactList extends Component {
    state = {
        openCreator: false,
        openEditor: false,
        contacts: [],
        contactToEdit: {},
        column: null,
        direction: null
    }

    handleSort = clickedColumn => () => {
        const { column, contacts, direction } = this.state
    
        if (column !== clickedColumn) {
          this.setState({
            column: clickedColumn,
            contacts: _.sortBy(contacts, [clickedColumn]),
            direction: 'ascending',
          })
    
          return
        }
    
        this.setState({
          contacts: contacts.reverse(),
          direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    }

    addContact = (contact) => {
        let newContacts = [...this.state.contacts, contact];
        this.setState({contacts: newContacts, openCreator: false});
    }

    updateContact = (action, contact) => {
        let contacts = this.state.contacts;
        if (action === 'update') {
            contacts[contacts.findIndex(x => x.id === contact.id)] = contact;     
        } else if (action === 'delete') {
            let index = contacts.findIndex(x => x.id === contact.id);
            contacts.splice(index, 1);
        };

        this.setState({contacts: contacts});
        this.closeEditor();
        
    }

    creatorHandler = () => {
        let shouldOpenOrClose = this.state.openCreator;
        this.setState({openCreator: !shouldOpenOrClose});
    }

    editorHandler = (contact) => {
        let shouldOpenOrClose = this.state.openEditor;
        if (contact) {
            this.setState({contactToEdit: contact}, () => {
                this.setState({openEditor: !shouldOpenOrClose})
            });
        }   
    } 
    closeEditor = () => {
        this.setState({openEditor: false, contactToEdit: {}});
    }

  render() {
    const { column, contacts, direction } = this.state;
    return (
      <div>
        <ContactAdder openModal={this.state.openCreator} creatorHandler={this.creatorHandler} addContact={this.addContact} />
        <ContactEditor contact={this.state.contactToEdit} openModal={this.state.openEditor} closeEditor={this.closeEditor} editorHandler={this.editorHandler} updateContact={this.updateContact} />
        <Grid padded stackable={true}>
            <Grid.Row>
                <Grid.Column>
                    <Button onClick={this.creatorHandler} primary floated='left'>Add Contact</Button>
                    <h5>Contacts</h5>
                    <Table sortable selectable celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell
                                sorted={column === 'name' ? direction : null}
                                onClick={this.handleSort('name')}>Name</Table.HeaderCell>
                                <Table.HeaderCell
                                sorted={column === 'phonenumber' ? direction : null}
                                onClick={this.handleSort('phonenumber')}>Phone Number</Table.HeaderCell>
                                <Table.HeaderCell
                                sorted={column === 'email' ? direction : null}
                                onClick={this.handleSort('email')}>Email</Table.HeaderCell>
                                <Table.HeaderCell
                                sorted={column === 'address' ? direction : null}
                                onClick={this.handleSort('address')}
                                >Address</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {this.state.contacts.map(contact => {
                                return (
                                    <Table.Row onClick={this.editorHandler.bind(this, contact)} key={contact.id}>
                                        <Table.Cell>{contact.firstName + ' ' + contact.lastName}</Table.Cell>
                                        <Table.Cell>{contact.phoneNumber}</Table.Cell>
                                        <Table.Cell>{contact.email}</Table.Cell>
                                        <Table.Cell>{contact.address}</Table.Cell>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                    </Table>
                </Grid.Column>
            </Grid.Row>
        </Grid>
      </div>  
    );
  }
}

export default ContactList;
