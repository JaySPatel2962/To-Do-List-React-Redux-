import React from "react";
import PropTypes from "prop-types";

function Button(props) {
	const { name, onClick } = props;

	return (
		<button className="buttons__btn" onClick={onClick}>
			{name}
		</button>
	);
}

Button.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	onClick: () => {},
};

export default Button;
