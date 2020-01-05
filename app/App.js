import React from 'react';
import ReactDom from 'react-dom';
import { Button } from "antd";
import "antd/dist/antd.css";

import Register from "./pages/register";

class App extends React.Component {
	render() {
		return (
			<div>
				<Register/>
			</div>
		);
	}
}

ReactDom.render(<App/>, document.getElementById("app"));