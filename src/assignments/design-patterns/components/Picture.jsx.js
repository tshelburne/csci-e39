import React from 'react'

export class Pic extends React.Component {
	render () {
		return (
			<figure className="image">
			  <img src={this.props.url} alt={this.props.alt} />
			  <figcaption>{this.props.caption}</figcaption>
			</figure>
		);
	}
}
export class Gallery extends React.Component {
	render() {
		return (
			<ul className={`gallery ${this.props.extraClass}`}>
				<li>
					<Pic url="https://www.wellesley.edu/sites/default/files/styles/news_0_image/public/assets/dailyshot/_39b9251_1.jpg" alt="Wellesley Storm" caption="Winter Wonderland at Wellesley College" />
				</li>
				<li>
					<Pic url="https://www.wellesley.edu/sites/default/files/styles/news_0_thumbnail/public/assets/dailyshot/ds-snowdaymarch23.jpg" alt="Wellesley Storm" caption="Winter Storm hit Wellesley College" />
				</li>
				<li>
					<Pic url="https://www.wellesley.edu/sites/default/files/styles/news_0_image/public/assets/dailyshot/_mg_83681280.jpg" alt="Peace and Justice Studies" caption="How Peace and Justice Studies Came to Wellesley" />
				</li>
				<li>
					<Pic url="https://www.wellesley.edu/sites/default/files/styles/news_0_image/public/assets/dailyshot/_mg_8165_0.jpg" alt="Bird Watch" caption="Paulson Initiative’s Winterfest 2018 Connects Students with Wellesley’s Landscape" />
				</li>
			</ul>
		);
	}
}