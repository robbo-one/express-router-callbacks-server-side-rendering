const React = require('react')
const DefaultLayout = require('../layouts/default')

function index(props) {
  return (
    <DefaultLayout>
    <div class="container">
      {
        props.puppies.map(puppy => {
          return (
            <div class="dog-list">
              <a href={ `/puppies/${puppy.id}` }>
                <img class="img-circle" src={puppy.image} alt={puppy.name}/>
              </a>
            </div>
          )
        })
      }
    </div>
    </DefaultLayout>
  )
}

module.exports = index
