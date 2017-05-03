import React from 'react';
import ReactDOM, { react } from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BodyContainer from './containers/BodyContainer';

class App extends React.Component {

	render() {
		return (
			<div className='container'>
				<Header />
				<BodyContainer />
				<Footer />
			</div>
		)
	}

}

ReactDOM.render(<App />, document.getElementById('app'));