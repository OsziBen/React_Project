/* eslint-disable react/prop-types */
import { getImageUrl } from "./utils";

function Profile({size = 70, person}){
    return(
        <section className="profile">
          <h2>{person.name}</h2>
          <img
            className="avatar"
            src={getImageUrl(person.imageId)}
            alt={person.name}
            width={size}
            height={size}
          />
          <ul>
            <li>
              <b>Profession: </b> 
              {person.profession}
            </li>
            <li>
              <b>Awards: {person.numberOfAwards} </b> 
              {'(' + person.awards.join(', ') + ')'}
            </li>
            <li>
              <b>Discovered: </b>
              {person.discovered}
            </li>
          </ul>
        </section>
    );
}

export default function Gallery(){
    return(
        <div>
        <h1>Notable Scientists</h1>
        <Profile 
        person={{
            name: 'Maria Skłodowska-Curie',
            imageId: 'szV5sdG',
            profession: 'physicist and chemist',
            numberOfAwards: 4,
            awards: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'],
            discovered: 'polonium (chemical element)'
        }} />
        <Profile 
        person={{
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2',
            profession: 'geochemist',
            numberOfAwards: 2,
            awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
            discovered: 'a method for measuring carbon dioxide in seawater'
        }} />
      </div>
    );
}