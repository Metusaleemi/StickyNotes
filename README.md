# keep-copy

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Rails

# download and install Rails http://railsinstaller.org/en

# In command prompt
rails new --api notes
cd notes
rails generate scaffold note title:string body:text
rails db:migrate
rails server

# Runs in http://localhost:3000/notes
