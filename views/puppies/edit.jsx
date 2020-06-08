const React = require('react')
const DefaultLayout = require('../layouts/default')

function edit(props) {
  return (
    <DefaultLayout>
      <form class="form" action={`/puppies/edit/${props.id}`} method="post">
        <img class="img-circle" src={props.image} alt={props.name}/>
        <label for="name" class="form-item">
          Name:
          <input type="text" name="name" value={props.name}/>
        </label>
        
        <label for="breed" class="form-item">
          Breed:
          <input type="text" name="breed" value={props.breed}/>
        </label>
        
        <label for="owner" class="form-item">
          Owner:
          <input type="text" name="owner" value={props.owner}/>
        </label>
        
        <input type="hidden" name="image" value={props.image}/>
        
        <input type="submit" name="" value="Submit"/>
      </form>
    </DefaultLayout>
  )
}

module.exports = edit
