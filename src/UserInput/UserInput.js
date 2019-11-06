import React from 'react';

const UserInput = (props) => {

	const style = {

		border: '1px solid red'
	}

	return(

		<input 
			style={style} 
			onChange={props.change} 
			value={props.username} />
	)
}

export default UserInput;