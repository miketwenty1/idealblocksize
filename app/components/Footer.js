import React from 'react';

export default class Footer extends React.Component{
	render(){
		return(
			<footer className="footer">
				<div className='foot1'>
					<p>Please note this is very much a work in progress, more to come soon! (like segwit and Lightning Network scenarios) </p>
      				<p><i>Suggestions on how this can be better?</i><a href="https://twitter.com/miketwenty1/"> @miketwenty1</a></p>
				</div>
				<hr />
				<div className='foot2'>
					<p>Listen to us talk about segwit, transaction malleablity, and lightning network on SoundCloud,<a href="https://soundcloud.com/blocktime/blocktime-ep-4-segwit-and-transaction-malleability-discussion"> Blocktime Podcast</a></p>
				    <p>Enjoy What you see? Donate to Bitcoin Education through the TAB meetup group, <a href="https://www.meetup.com/The-Atlanta-Blockchain/"> Meetup Link</a></p>
				    <p>1MZjTbx1Qho2KY5s7EetLcQBXCyjqySpUh</p>
				</div>
			</footer>
		)
	}
}