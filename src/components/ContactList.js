import React, { Component } from 'react';
import {Button, Grid, Form, Table, Pagination, Segment, Menu, Icon, Select, Checkbox} from  'semantic-ui-react';

class ContactList extends Component {
    state = {
        contacts: [
            {name: 'bob', number: 123123123, address: 'place'},
            {name: 'kevin', number: 456456456, address: 'streetland'},
            {name: 'zach', number: 890890890, address: 'fogland'},
        ]
    }

  render() {
    return (
      <Grid sortable padded stackable={true}>
        <Grid.Row>
            <Grid.Column>
                <h5>Contacts</h5>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Number</Table.HeaderCell>
                            <Table.HeaderCell>Address</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.contacts.map(contact => {
                            return (
                                <Table.Row key={contact.number}>
                                    <Table.Cell>{contact.name}</Table.Cell>
                                    <Table.Cell>{contact.number}</Table.Cell>
                                    <Table.Cell>{contact.address}</Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ContactList;
