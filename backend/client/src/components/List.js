import React from 'react';

const List = (props) => {

    const Users = props.usersList;
    const style = { margin: 50 }

    return (
        <div style={style}>
            {
                Users && Users.length > 0 ?
                    <ul>
                        {Users.map(user => (
                            <li key={user.userName}>
                                <div>{JSON.stringify(user)}</div>
                            </li>
                        ))}</ul>
                    : 'No Users Found'
            }
        </div >
    )
}

export default List;