# Live Tonight (BandsInTown)
A simple React application that connects to the BandsInTown API (https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0).<br>
- Where users can
  - Search events by *Artist Name*
  - Filter events by *Event Date*
  - They also get to see it on Map by clicking 'Location' for which I used GoogleMap in it. 
  - It has the facebook profile linked to the artist.

## Why?
It's completely personal project, where I can show a sample React/Redux application.

## Frameworks Used:
- React
- JSS
- Material-UI
- Redux/Redux-Sauce
- Sagas
- Jest/Enzyme for Unit Testing
## UI
- I've used [Material-UI] which's an awesome implementation of the Material Design for React
- I've used [JSS] for the styling
- Layouts/Components are based on [Flex-Grid], the application is completely **responsive**.

## Redux State Design
- I have designed the redux store so that I cache Artists by `name`
- Given that the `Events` API returns objects not ids, and as results are based on `name`/`from_Date`/`to_Date`, I've decided to keep the events volatile.
- It's important to note that the API sometimes returns results for Artists that their names are *guessed*
  - Example `h` returns results for `Steve Hogarth`
  - That's why I keep the name in the results object
- It's also important to note that sometimes API returns error for not found artists.
  - Example `john reeeed` throws `403 Forbidden Error`

## Extra features than required
- I have deep linked the search filters into the query parameters so that you can have shareable links.
- I've also added a Location GoogleMap for events.

## File Structure
```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
  src/
    index.js
    ...app-scope-config-scripts,
    App/
      App
      Router
    Containers/
      Layout
      Pages...
      ...any-other-containers
    Redux/
      ConfigureStore
      ...all-application-redux-definitions
    Sagas/
      ...all-application-sagas
    Services
      ...any-reusable-pure-js-components
    Test/
      Helpers    
```

## Comments
- I have tried to comment where I think explanation is needed. 
- Disregard the @TODO as they are for me for future improvements in the project.

