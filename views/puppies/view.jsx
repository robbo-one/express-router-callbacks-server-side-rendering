const React = require('react')
const DefaultLayout = require('../layouts/default')

function view(props) {
  return (
    <DefaultLayout>
      <div class="dog">
        <img class="img-circle" src={props.image} alt={props.name}/>
        <h2>{props.name}</h2>
        <div>Breed: {props.breed}</div>
        <div>Owner: {props.owner}</div>
        <a href={`/puppies/edit/${props.id}`}>Edit</a>
      </div>
    </DefaultLayout>
  )
}

module.exports = view
