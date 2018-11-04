import React, { Component } from 'react';
import {Button, Grid, Form, Table, Pagination, Segment, Menu, Icon, Select, Checkbox} from  'semantic-ui-react';
import _ from 'lodash';

class ContactList extends Component {
    state = {
        contacts: [
            {name: 'bob', number: 123123123, address: 'place'},
            {name: 'kevin', number: 456456456, address: 'streetland'},
            {name: 'zach', number: 890890890, address: 'fogland'},
        ],
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

  render() {
    const { column, data, direction } = this.state;
    return (
      <Grid padded stackable={true}>
        <Grid.Row>
            <Grid.Column>
                <h5>Contacts</h5>
                <Table sortable  celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell
                            sorted={column === 'name' ? direction : null}
                            onClick={this.handleSort('name')}>Name</Table.HeaderCell>
                            <Table.HeaderCell
                            sorted={column === 'number' ? direction : null}
                            onClick={this.handleSort('number')}>Number</Table.HeaderCell>
                            <Table.HeaderCell
                            sorted={column === 'address' ? direction : null}
                            onClick={this.handleSort('address')}
                            >Address</Table.HeaderCell>
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
