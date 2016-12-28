/**
 * Lab 01:
 *
 * Write two components for showing data from swapi.co:
 *
 * Person component should show information about a specific character.
 * Film component should show information about a specific film.
 *
 * Both Person and Film show a list of the corresponding film/person,
 * allowing a user to expand from a Person to a Film she played in,
 * to another Person from that film and so on.
 */
import React from "react";

const PEOPLE_PREFIX = "http://swapi.co/api/people/";
const FILMS_PREFIX = "http://swapi.co/api/films/";

/**
 * Extract the number from the middle part of "text", by removing the "prefix" and "suffix"
 */
function middlePartAsNumber(text, prefix, suffix) {
	const numberAsString = text.replace(prefix, "").replace(suffix, "");
	return Number(numberAsString);
}

/**
 * This class will be a super class for the other 2 classes: Person & Film.
 * They share some common functionality: fetching data, checking state on "mount", expanded state.
 * The sub-classes should override the "createExpandedElements" function to draw the component in "expanded" mode.
 * They should also assign values to inputBoxTitle for the input box text in "non-expanded" mode, and the
 * fetchUrlPrefix for the URL prefix that will be used for the data fetching.
 */
class AbstractExpandable extends React.Component {
	static propTypes = {
		identity: React.PropTypes.number.isRequired, isExpanded: React.PropTypes.bool,
	};

	static defaultProps = {isExpanded: false,};

	constructor(props) {
		super(props);
		this.state = {details: null, isExpanded: props.isExpanded};

		// assign values in sub-classes
		this.fetchUrlPrefix = null;
		this.inputBoxTitle = null;

		this.createExpandedElements.bind(this);
	}

	componentWillMount() {
		// if the component should be expanded then we need to fetch the details
		if (this.state.isExpanded) {
			this.fetchDetails();
		}
	}

	fetchDetails = () => {
		// Should this be extracted to "DAO" ? maybe even in another class ?? maybe use a 3rd party ?
		const request = new XMLHttpRequest();
		request.open('GET', this.fetchUrlPrefix + this.props.identity + '/?format=json');
		request.addEventListener('load', () => {
			const details = JSON.parse(request.responseText);
			// only set the details.. the isExpanded flag is set before the call back so that the "loading..." message will be rendered
			this.setState({details});
		});

		// the isExpanded flag will be set before the details so the "loading..." message will be displayed
		this.setState({isExpanded: true});
		request.send();
	}

	// Implement in sub-classes
	createExpandedElements() {
	}

	render() {
		const btnText = this.inputBoxTitle + this.props.identity;
		return (
			<div style={{display: "block-inline", float: "left"}}>
				{!this.state.isExpanded && <input type="button" value={btnText} onClick={this.fetchDetails}/>}
				{this.state.isExpanded && this.state.details == null && <div style={{border: "3px solid red"}}>Loading...</div>}
				{this.state.isExpanded && this.state.details != null && this.createExpandedElements()}
			</div>
		);
	}
}

class Person extends AbstractExpandable {
	constructor(props) {
		super(props);
		this.fetchUrlPrefix = PEOPLE_PREFIX;
		this.inputBoxTitle = "Person #";
	}

	createExpandedElements() {
		return <fieldset>
			<legend>Person #{this.props.identity} details</legend>
			{this.state.details != null && <div>
				Name: {this.state.details.name} <br/>
				Height: {this.state.details.height} <br/>
				Hair color: {this.state.details.hair_color} <br/>
				Skin color: {this.state.details.skin_color} <br/>
				Gender: {this.state.details.gender} <br/>
				{this.state.details.films.map((link) => {
					const filmId = middlePartAsNumber(link, FILMS_PREFIX, "/");
					return <Film identity={filmId} key={filmId}/>
				})}
			</div>}
		</fieldset>
	}
}

class Film extends AbstractExpandable {
	constructor(props) {
		super(props);
		this.fetchUrlPrefix = FILMS_PREFIX;
		this.inputBoxTitle = "Film #";
	}

	createExpandedElements() {
		return <fieldset>
			<legend>Film #{this.props.identity} details</legend>
			{this.state.details != null && <div>
				Title: {this.state.details.title} <br/>
				Opening crawl: {this.state.details.opening_crawl} <br/>
				Director: {this.state.details.director} <br/>
				Producer: {this.state.details.producer} <br/>
				Release date: {this.state.details.release_date} <br/>
				{this.state.details.characters.map((link) => {
					const personId = middlePartAsNumber(link, PEOPLE_PREFIX, "/");
					return <Person identity={personId} key={personId}/>
				})}
			</div>}
		</fieldset>
	}
}

export default function GalleryBrowser(props) {
	return (
		<div>
			<Person identity={1} isExpanded={true}/>
		</div>
	);
}
