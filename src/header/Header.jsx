import React from 'react';

const Header = ({ fruitList, userList }) => {
    return (
        <>
            <div>Header</div>
            {
                fruitList.map((fruit, index) => (
                    <p key={index}>{fruit}</p>
                ))
            }

            <h3>Usuarios</h3>
            <ul>
                {

                    userList.map((user, index) => (
                        <div key={index}>
                            <li>{user.name}</li>
                            <p >{user.age}</p>
                        </div>
                    ))
                }

            </ul>
            
        </>
    )
};

export default Header;
