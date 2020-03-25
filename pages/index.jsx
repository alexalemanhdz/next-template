// @flow
import React, { type Node } from 'react';
// import withRedux from 'lib/redux';

type Props = {
	children: Node,
	title?: string,
};

function HomePage({ children, title = 'Hello World' }: Props) {
	return (
		<div>
			<p>{title}</p>
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
