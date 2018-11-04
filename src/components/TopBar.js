import React from 'react';
import { Menu, Button, Icon, Dropdown } from 'semantic-ui-react';

class TopBar extends React.Component{

    handleItemClick = () =>{
        console.log('click');
    }

    render(){
        return(
            <div>
                <Menu>
                    <Menu.Item header>Contact Manager</Menu.Item>
                </Menu>
            </div>

        )
    }
}

export default TopBar;