
import { Router } from "express";

import { Connection } from "./db";

import { AuthorizationCode } from "simple-oauth2";

const router = new Router();
var cors = require('cors');
router.use(cors());

const { Octokit } = require("@octokit/core");


const client = new AuthorizationCode({
	client: {
		//these would come from the github where the app is registered.
		id: process.env.CLIENT_ID,
		secret: process.env.CLIENT_SECRET,
	},
	auth: {
		tokenHost: 'https://github.com',
		tokenPath: '/login/oauth/access_token',
		authorizePath: '/login/oauth/authorize',
	},
});

const authorizationUri = client.authorizeURL({
	//we can put in the redirect_uri when we deploy the app
	redirect_uri: 'https://dev-graduate-directory.herokuapp.com',
	scope: 'user',
	// expires_in: '30' something to look into later
	// state: '3(#0/!~',
});

router.get('/login', (req, res) => {
	console.log(authorizationUri);
	res.redirect(authorizationUri);
});

 // Callback service parsing the authorization token and asking for the access token
 router.get('/callback', async (req, res) => {
    const { code } = req.query;
    const options = {
      code,
    };

    try {
	  const accessToken = await client.getToken(options);
		console.log('acces token', accessToken)
	  //accessing the token number from the above
	  const token = accessToken.token.access_token; 

      //authenticates the access_token sent by github during the Oauth2 flow
	  const octokit = new Octokit({
		auth:token,
	  });

	  //this returns the authenticated user's username/login
	  const { data } = await octokit.request("/user");
	  return res.status(200).json(data.login);

	
    } catch (error) {
      console.error('Access Token Error', error.message);
      return res.status(500).json('Authentication failed');
    }
  });


router.get("/", (_, res, next) => {
	res.json({ message: "Hello, world!" });
});



export default router;

