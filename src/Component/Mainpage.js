import React from 'react';
import {NavLink} from 'react-router-dom';
import View1 from './View1';
import View2 from './View2';


export default class Mainpage extends React.Component{

    handelLogout=()=>{
        this.props.history.push('/');
    }

    render(){
        return(
            <div className="dashboard-container">
                <div className="navigation-bar">
                    <div className="user">
                        <h4>John Doe</h4>
                    </div>
                    <div className="link-box-container">
                        <div className="link">
                            <NavLink to="/view1">Text Box 1</NavLink>
                        </div>
                        <div className="link">
                            <NavLink to="/view2">Text Box 2</NavLink>
                        </div>
                    </div>
                    <div className="logout-button">
                        <button onClick={this.handelLogout}>Logout</button>
                    </div>
                </div>
                <div className="view-container">
                    <div className="views">
                        <View1/>
                    </div>
                    <div className="views">
                        <View2/>
                    </div>
                </div>
            </div>
        )
    }
}