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
import React from 'react';
import $ from 'jquery';

const PersonDao = {};

PersonDao.search = function (id) {
    return $.getJSON(`http://swapi.co/api/people/${id}`);
}

const FilmDao = {};

FilmDao.search = function (id) {
    return $.getJSON(`http://swapi.co/api/films/${id}`);
}

export default class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {person: {}, visible:false}
        if (this.props.init)
            this.getPersonData(this.props.id);
    }

    getPersonData()  {
        const xhr = PersonDao.search(this.props.id);
        xhr.then((res) => {
            this.setState({ person: res,
            visible: true});
        });
    }

    render() {
        const person = this.state.person;
        const visible = this.state.visible;
        return (
            <div>
        {visible ? (this.renderPersonData(person)) : (<button onClick={this.getPersonData.bind(this)}>Person {this.props.index +1}</button>)}
            </div>);
    }

    renderPersonData(person) {
        return (<div>
            <p><label>Name</label>{person.name}</p>
            <p><label>Height</label>{person.height}</p>
            <p><label>Mass</label>{person.mass}</p>
            <div><label>Films</label><div>{person.films.map((row,idx) => (<Film index={idx} id={this.extractFilmId(person, idx)}  />))}</div></div>
        </div>);
    }

    extractFilmId(person, idx){
        const film = person.films[idx];
        return Number(film[film.length - 2])
    }
}

Person.propTypes = {
    name: React.PropTypes.string,
    height: React.PropTypes.number,
    mass: React.PropTypes.number,
    films: React.PropTypes.array,
    id: React.PropTypes.number.isRequired,
    init: React.PropTypes.bool
};


class Film extends React.Component {
    constructor(props) {
        super(props);
        this.state = {film: {}, visible: false};
    }

    getFilmData()  {
        const xhr = FilmDao.search(this.props.id);
        xhr.then((res) => {
            this.setState({ film: res, visible : true });
        });
    }
    renderFilmData(film) {
        return (<div>
            <p><label>Title</label>{film.title}</p>
            <p><label>Episode Id</label>{film.episode_id}</p>
            <p><label>Director</label>{film.director}</p>
            <p><label>Producer</label>{film.producer}</p>
            <div><label>Characters</label>
                <div>{film.characters.map((row, idx) => (<Person index={idx} id={this.extractPersonId(film,idx)}/>))}</div>
            </div>
        </div>);
    }
    render() {
        const film = this.state.film;
        const visible = this.state.visible;
        return (
            <div>
                {visible ? (this.renderFilmData(film)) : (<button onClick={this.getFilmData.bind(this)}>Film {this.props.index+1}</button>)}
            </div>);
    }

    extractPersonId(film, idx){
        const person = film.characters[idx];
        return Number(person[person.length - 2])
    }

}

Film.propTypes = {
    title: React.PropTypes.string,
    episode_id: React.PropTypes.number,
    director: React.PropTypes.string,
    producer: React.PropTypes.string,
    characters: React.PropTypes.array,
    id: React.PropTypes.number.isRequired,
    index: React.PropTypes.number,
    showFilmDetails: React.PropTypes.func,
};