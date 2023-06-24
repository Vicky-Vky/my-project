import React, { useState } from "react";
import "./User.css"
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

const UserDashboard = (props) => {
    const [searchuser, setSearchuser] = useState("")

    return (
        <>
            
            <div className="Container">
                <div className="search_inputContainer">
                    <input id="searchInput" type="text " placeholder="Search user Name.."
                        onChange={(event) => {
                            setSearchuser(event.target.value);
                        }} />
 
                

            </div>

            <div className="template-container">
                {
                    props.datas.filter((val) => {
                        if (searchuser == "") { return val; }
                        else if (val.first_name.toLowerCase().includes(searchuser.toLowerCase())) { return val; }
                    })
                        .map((val) => {
                            return (
                                <>
                                <div className="template" key={val.id} >

                                    <Col xs={6} md={4}>
                                        <Image className="user_image" src={val.avatar} alt="user_image" rounded />
                                    </Col>
                                    <h2 className="user_id">{val.id}</h2>
                                   
                                </div>
                                 <h1 className="f_name">{val.first_name}</h1></>
                            )
                        })
                }
            </div>
            </div>
        </>
    );

}

export default UserDashboard;