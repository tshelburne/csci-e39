import React from 'react'
import {Pic} from './Picture.jsx'

const imageLinks = [
	{
		id: 0,
		url: 'https://www.wellesley.edu/sites/default/files/styles/news_0_image/public/assets/dailyshot/_39b9251_1.jpg',
		alt: 'Wellesley Storm',
		caption: 'Winter Wonderland at Wellesley College',
	},
	{
		id: 1,
		url: 'https://www.wellesley.edu/sites/default/files/styles/news_0_thumbnail/public/assets/dailyshot/ds-snowdaymarch23.jpg',
		alt: 'Wellesley Storm',
		caption: 'Winter Storm hit Wellesley College',
	},
	{
		id: 2,
		url: 'https://www.wellesley.edu/sites/default/files/styles/news_0_image/public/assets/dailyshot/_mg_83681280.jpg',
		alt: 'Peace and Justice Studies',
		caption: 'How Peace and Justice Studies Came to Wellesley',
	},
	{
		id: 3,
		url: 'https://www.wellesley.edu/sites/default/files/styles/news_0_image/public/assets/dailyshot/_mg_8165_0.jpg',
		alt: 'Bird Watch',
		caption: 'Winterfest 2018 Connects Students with Wellesley’s Landscape',
	},
];

export class Gallery extends React.Component {
	render() {
		return (
			<ul className={`gallery ${this.props.extraClass}`} aria-label={this.props.title}>
				{imageLinks.map(imageLinks => (
						<li>
							<Pic url={imageLinks.url} alt={imageLinks.alt} caption={imageLinks.caption} />
						</li>
					)
				)}
			</ul>
		);
	}
}