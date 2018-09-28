import React from 'react';
const Input = (props) => {
	return (
		<div className="col-3">
			<input type="text" className="form-control" placeholder={props.placeholder} aria-describedby="basic-addon2"/>
		</div>
	);
}

export default Input;


