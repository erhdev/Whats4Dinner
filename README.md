# What's 4 Dinner

## Description

Have you ever really been craving a delicious meal at your favorite restuarant, but funds were a little tight? No need to sacrifice flavor and miss out on an awesome meal. Check out What's 4 Dinner to help you out. With this app, you can select your favorite restaurant, choose your meal, and get an awesome copycat recipe to make at home! You will also have a handy ingredient list to help make the grocery trip a bit easier. If you don't see your favorite restaurant on the list, you can also search for a recipe either using ingredients you have on hand or by entering the meal you want to prepare. Happy cooking!

![homeScreen](https://user-images.githubusercontent.com/21156508/59630016-379d3800-9112-11e9-88f7-d3c57ad9f5a1.png)

## Installation

To install the necessary npm packages, cd into the folder and then run:

```

npm install

```

You will also need a Food2Fork API key, which you can obtain [here.](https://www.food2fork.com/about/api)
Once you have an API key, create an apikey.js file in /config that looks like this:

```

module.exports = {
  api_key: "YOUR API KEY HERE"
};

```

## Group Members

- Becca Shieh- Project Manager
- Emerson Harmon- Front End
- Kevin Schroeder- Back End
- Steve Travis- DevOps

## Github Link

[See the app on Github](https://github.com/madflowerr/Whats4Dinner)

## Technologies Used

- Frontend - Bootstrap/HTML/CSS
- Database - MySQL
- Express
- Handlebars
- Sequelize
- JavaScript
- Axios
- Deployment - OpenShift
- Testing - Mocha/Chai
- ESLint

## Live Link

[OpenShift Link](http://whats4dinner-mytestproject1.apps.us-east-2.online-starter.openshift.com/)
