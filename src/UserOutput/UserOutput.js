import React, {component} from 'react';
import './UserOutput.css';

const UserOutput = (props) => {

	return (

		<div className = 'UserOutput'>
			<p>Username: {props.username}</p>
			<p>Hi I am also a paragraph</p>
		</div>

	)
}

export default UserOutput;