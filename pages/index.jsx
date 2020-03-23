import React from 'react';
// import withRedux from 'lib/redux';

function HomePage() {
	return (
		<div>
			Welcome to Next.js!
			<style global jsx>
				{`
					* {
						margin: 0;
						padding: 0;
					}

					body,
					html,
					#__next {
						height: 100%;
						width: 100%;
					}
				`}
			</style>
		</div>
	);
}

export default HomePage;
