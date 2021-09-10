//= === === === === === === === === === === === ===
//1.import file 
//= === === === === === === === === === === === ===
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import session  from 'express-session';
import passport  from 'passport';
import {graphqlHTTP } from 'express-graphql';
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'; //convert to es6
import { Strategy as GitHubStrategy } from 'passport-github'; //convert to es6

import schema from './schemas/Schema';
import {buildSchema} from 'graphql';

import Event from './models/event'
// import User from './models/user'
// import User from './schemas/User';


//======================================================================
//2.initialization
//======================================================================
const app = express()
dotenv.config(); //for precessing env file
app.use(express.json())
// app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:3000',credentials:true}));

app.use(session({
  secret: 'ahmedsohelcu',
  resave: true,
  saveUninitialized: true,
  // cookie: { secure: true }
}));


//----------------------------------------------------------------------------------------------------
                                                        //oAuth2 start    
//----------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------
//Passport is authentication middleware for Node. It is designed to serve a singular purpose: //Ahmed 
//----------------------------------------------------------------------
app.use(passport.initialize());
app.use(passport.session());
//======================================================================
//0Auth auth2 Authentication start
//======================================================================
passport.serializeUser((user,done)=>{
  return done(null,user);
});

passport.deserializeUser((user,done)=>{
  return done(null,user);
});

//----------------------------------------------------------------------
//login request to google
//----------------------------------------------------------------------
passport.use(new GoogleStrategy({
  clientID: `${process.env.GOOGLE_CLIENT_ID}`,
  clientSecret:`${process.env.GOOGLE_CLIENT_SECRET}`,
  callbackURL: "/auth/google/callback"
},

function(accessToken, refreshToken, profile, cb) { 
  //Called when successfull authentication is done
  //insert into database.....
 // cb(null,profile);
  
  User.findOne({googleId:profile.id},async (err,doc)=>{
    if(err){      
      cb(err, null);
    }

    if(!doc){
      //store  user in db
      const newUser = new User({
        googleId:profile.id,
        username:profile.givenName,
      });
      await newUser.save();      
      cb(null,newUser);
    }    
    cb(null,doc);
  });
  
}));


app.get('/auth/google',passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',passport.authenticate('google', { failureRedirect: '/login' }),function(req, res) {
  // Successful authentication, redirect home.
  console.log('res is ',res);
  res.redirect('http://localhost:3000');
});


//======================================================================
//2. login request with  with github
//store in db
//======================================================================
passport.use(new GitHubStrategy({
  clientID: `${process.env.GITHUB_CLIENT_ID}`,
  clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
  callbackURL: "/auth/github/callback"  
},
function(accessToken, refreshToken, profile, cb) {
  //cb(null,profile);
  
  User.findOne({githubId:profile.id},async (err,doc)=>{
    if(err){      
      cb(err, null);
    }

    if(!doc){
      //store  user in db
      const newUser = new User({
        githubId:profile.id,
        username:profile.username,
      });
      await newUser.save();      
      cb(null,newUser);
    }    
    cb(null,doc);
  });
  
}));

app.get('/auth/github',passport.authenticate('github'));
app.get('/auth/github/callback',passport.authenticate('github', { failureRedirect: '/login' }),function(req, res) {
    // Successful authentication, redirect home.
    console.log('res is ',res);
    res.redirect('http://localhost:3000');
});
//======================================================================
//0Auth auth2 Authentication end
//======================================================================


//----------------------------------------------------------------------
//3.Remote Database connection
//----------------------------------------------------------------------
//connected with remote server
mongoose.connect(`${process.env.MONGODB_PREFIX}${process.env.DB_USER}:${process.env.DB_PASS}${process.env.MONGODB_CLUSTER}${process.env.DB_NAME}${process.env.MONGODB_END}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(response => {
    console.log('mongoose remote connection successful');
})
.catch(err => {
    console.log('connection not found ',err)
});

//----------------------------------------------------------------------
//connected with Local server
//----------------------------------------------------------------------
// mongoose.connect('mongodb://localhost', {
//   dbName:'node_react_mongoose_graphql',
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//     console.log('local mongodb connection successful');
// })
// .catch(err => {
//     console.log(err)
// });

//======================================================================
//4.Application's route
//======================================================================

//----------------------------------------------------------------------
//get logged user data
//----------------------------------------------------------------------
app.get('/getuser',(req,res)=>{
  res.send(req.user);
});

//----------------------------------------------------------------------
//oauth2 Logout User
//----------------------------------------------------------------------
app.get('/auth/logout',(req,res)=>{
  if(res.user){
    req.logout();
    res.send('success');
  }
});
//----------------------------------------------------------------------------------------------------
                                //oAuth2 finish
//----------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------
  //GRAPHQL START
//----------------------------------------------------------------------------------------------------
app.use('/graphql2',graphqlHTTP({
  schema,
  graphiql:true
}));



/*
//this  graphql route will use as api endpoint
app.use('/graphql',graphqlHTTP({
  schema: buildSchema(`
    type Event {
      _id: ID!   
      title: String!
      description:String!
      price: Float!      
      date:String
    }

    type User {
      _id: ID!   
      googleId: String
      githubId: String
      username:String!
      email: Float     
      phone:String
      customer:String
    }

    input EventInput {
      title: String!
      description:String!
      price: Float!
      date:String
    }
    
    type UserInput {
      googleId: String
      githubId: String
      username:String
      email: Float     
      phone:String
      customer:String
    }


    
    type RootQuery{
      events: [Event!]!
      users: [User!]!
    }

    type RootMutation{
      createEvent(eventInput: EventInput): Event
      createUser(userInput: UserInput): User
    }

    schema{
      query: RootQuery,
      mutation:RootMutation
    }

  `),
  rootValue:{
    events: ()=>{
      return Event.find()
        .then(events => {        
            return events.map(event=>{
              return {
                ...event._doc, _id:event._doc._id.toString()
              };
            });
        })
      .catch(err=>{
        console.log('error to store in db',err);
        throw err;
      });
    },
    users: ()=>{
      return User.find()
        .then(users => {        
            return users.map(user=>{
              return {
                ...user._doc, _id:user._doc._id.toString()
              };
            });
        })
      .catch(err=>{
        console.log('error to store in db',err);
        throw err;
      });
    },


    //-------------------------------------------
      //Create Event
    //-------------------------------------------
    createEvent: args =>{
      //------------------------
      //store in mongoose
      //------------------------
      const event = new Event({
        title:args.eventInput.title,
        description:args.eventInput.description,
        price:+args.eventInput.price,
        date:args.eventInput.date,
      });
      return event
        .save()
        .then(result=>{
          console.log('store in db',result);
          return {...result._doc, _id:result._doc._id.toString()};
      })
      .catch(err=>{
        console.log('error to store in db',err);
        throw err;
      });
    },


    //-------------------------------------------
    //Create User
    //-------------------------------------------    
    createUser: args =>{
      const user = new User({
        googleId:args.userInput.googleId,
        githubId:args.userInput.githubId,
        username:args.userInput.username,
        email:args.userInput.email,
        phone:args.userInput.phone,
        customer:args.userInput.customer,
      });
      return user
        .save()
        .then(result=>{
          return {...result._doc, _id:result._doc._id.toString()};
          // return {...result._doc};
      })
      .catch(err=>{
        throw err;
      });
    },

  },
  graphiql:true
}));

*/


//----------------------------------------------------------------------------------------------------
  //GRAPHQL END
//----------------------------------------------------------------------------------------------------

app.get('/', (req, res) => {
  res.send('Welcome to Node React Redux Graphql and Mongoose Website!')
})







//======================================================================
//5.default error handling
//======================================================================
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
      return next(err);
  }
 res.status(500).json({ error: err });
 console.log(err)
}
app.use(errorHandler);


//----------------------------------------------------------------------
//6.application listening port
//----------------------------------------------------------------------
app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT || 5000}`)
})