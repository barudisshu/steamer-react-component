import React, { Component } from 'react';

import './index.less';

class Hello extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			word: "hello world!"
		};
	}

	render() {

		return (
	        <div>
				<span className="hello">{this.state.word}</span>
			</div>
		);
	}
}

export default Hello;