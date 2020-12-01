import React from 'react';

export default function Button(props) {
	let className;
	const { type, color, text, size, click } = props;

	// force the standard button if size and or color is not included in props.
	if (!color || !size) {
		className = `button`;
	} else className = `${color}Button ${size}Button button`;

	return (
		<button type={type ? type : 'button'} className={className} onClick={click} aria-label='button'>
			{text}
		</button>
	);
}
