import React from 'react';
import {Typography} from '@material-ui/core';
import useStyles from './styles.js';
import { Menu, Dropdown, Space } from 'antd';
import { HomeOutlined, FilterOutlined, FolderOpenOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';


const Header = () =>{
    const classes = useStyles();

    return(
        <div>    
            <Typography variant='h5' style={{ alignContent: 'center'}} className={classes.logo}>
                Personal Website
            </Typography> 

            <Menu style={{ padding: 40, listStyleType: 'none'}}>
                <Menu.Item style={{ padding: 10, color: '#89CFF0'}} icon={<HomeOutlined />}>
                    <Link to='/' style={{textDecoration: 'none'}}> Home</Link>
                </Menu.Item>
                <Menu.Item style={{ padding: 10, color: '#89CFF0'}} icon={<FolderOpenOutlined />}>
                    port
                    <Menu style={{  listStyleType: 'none'}}>
                        <Menu.Item style={{ padding: 10, color: '#89CFF0'}}>
                            <Link to='/Calculator' style={{textDecoration: 'none'}}> Calculator</Link> 
                        </Menu.Item>
                        <Menu.Item style={{ padding: 10, color: '#89CFF0'}}>
                            <Link to='/CountDown' style={{textDecoration: 'none'}}> Count Down Timer</Link> 
                        </Menu.Item>
                        <Menu.Item style={{ padding: 10, color: '#89CFF0'}}>
                            <Link to='/ToDOList' style={{textDecoration: 'none'}}> To Do List</Link> 
                        </Menu.Item>
                        <Menu.Item style={{ padding: 10, color: '#89CFF0'}}>
                            <Link to='/Currency' style={{textDecoration: 'none'}}> Currency Converter</Link> 
                        </Menu.Item>
                    </Menu>  
                    
                </Menu.Item>
            </Menu>    
        </div>);
};

export default Header;