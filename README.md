# Brian Nelons Final 3790

## Project Requirements


### 1. Effectively use conditional logic and JavaScript array methods to render large lists.
Two list working right now [example here](src\views\About.vue)


### 2. Encapsulate your code as VueJS single-file components.
[Components are registered in the App.vue component](src/App.vue)

### 3. Work with the Vue-CLI to create and manage your project within a real development toolset.
Vue cli used

### 4. Properly use Git for your source version control with an established record of at least 4 days of commits each week from October 15th through December 6th.
[Git used for version control maybe not enough commits.](https://github.com/Lazer-lad)

### 5. Allow communication between components using props, custom events, or local store.
Event bus is broken, cant get it to pass anything

### 6. Present a form for user input that provides useful form validation and feedback.
login validates and redirects. [login stuff](https://kind-panini-383726.netlify.com/form)

### 7. Create a custom directive and use it on at least one of your components.
Custom directive is used [here](https://kind-panini-383726.netlify.com/about) but a bit lame and coded [here](src\main.js)

### 8. Use a mix of animations and transitions to enhance some aspects of your project.

### 9. Connect to a server using HTTP and display retrieved data (use vue-resource or Axios).
Axios code found [here](src/views/Home.vue). Axios shown [here](https://kind-panini-383726.netlify.com/) (loads the people array)

### 10. Provide at least 3 different routes with navigation between them using vue-router.
Routing is in the navigation, coding [here](src/router/index.js)

### 11. Manage your application's state using vuex. 
Used with the login, can be seen [here](https://kind-panini-383726.netlify.com/form). Coding can mostly be seen [here](src/store/index.js) If you put a username in the login it wild say your name and put a picture in the main hero photo and the menu.

### 12. Structure, document, and deploy your final project code according to common industry practices.

Deployed to [netlify](https://kind-panini-383726.netlify.com)


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
