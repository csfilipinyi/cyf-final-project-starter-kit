import { Router } from "express";

import { Connection } from "./db";

import { AuthorizationCode } from "simple-oauth2";

const router = new Router();
var cors = require("cors");
router.use(cors());

const { Octokit } = require("@octokit/core");

const client = new AuthorizationCode({
  client: {
    //these would come from the github where the app is registered.
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET,
  },
  auth: {
    tokenHost: "https://github.com",
    tokenPath: "/login/oauth/access_token",
    authorizePath: "/login/oauth/authorize",
  },
});

const authorizationUri = client.authorizeURL({
  //we can put in the redirect_uri when we deploy the app
  redirect_uri: "https://dev-graduate-directory.herokuapp.com/createprofile",
  scope: "user",
  // expires_in: '30' something to look into later
  // state: '3(#0/!~',
});

router.get("/login", (req, res) => {
  console.log(authorizationUri);
  res.redirect(authorizationUri);
});

// Callback service parsing the authorization token and asking for the access token
router.get("/callback", async (req, res) => {
  const { code } = req.query;
  const options = {
    code,
  };

  try {
    const accessToken = await client.getToken(options);
    console.log("acces token", accessToken);
    //accessing the token number from the above
    const token = accessToken.token.access_token;

    //authenticates the access_token sent by github during the Oauth2 flow
    const octokit = new Octokit({
      auth: token,
    });

    //this returns the authenticated user's username/login
    const { data } = await octokit.request("/user");
    return res.status(200).json(data.login);
  } catch (error) {
    console.error("Access Token Error", error.message);
    return res.status(500).json("Authentication failed");
  }
});

//const githubName = "Buchrateka1984";

router.get("/", (_, res, next) => {
  Connection.connect((err) => {
    if (err) {
      return next(err);
    }
    res.json({ message: "Hello, world!" });
  });
});
router.get("/graduates", (_, res, next) => {
  Connection.connect((err) => {
    if (err) {
      return next(err);
    }
    Connection.query("SELECT * FROM graduates", (error, result) => {
      res.json(result.rows);
    });
  });
});
// create new profile
router.post("/graduates", function (req, res) {
  const newFirstName = req.body.first_name;
  const newSurname = req.body.surname;
  const github_name = req.body.githubName;
  console.log(newFirstName, newSurname, github_name);
  Connection.query(
    `SELECT id FROM github_accounts WHERE account_name = $1`,
    [github_name],
    (err, result) => {
      console.log(result.rowCount);
      if (result.rowCount > 0) {
        const github_id = parsInt(result.rows[0]);
        console.log(github_id);
        Connection.query(
          `insert into graduates (first_name, surname, github_id) values` +
            `($1,$2,$3)`,
          [newFirstName, newSurname, github_id],
          (error, result) => {
            res.json(result.rows);
          }
        );
      } else
        res.send({
          message: "this is  github account does not belong to a CYF graduates",
        });
    }
  );
});
//checking the github username exist in our database
router.get("/accounts/:name", (req, res, next) => {
  const githubName = req.params.name;
  Connection.connect((err) => {
    if (err) {
      return next(err);
    }
    Connection.query(
      "SELECT * FROM github_accounts where account_name=$1 ",
      [githubName],
      (error, result) => {
        if (result.rowCount > 0) {
          Connection.query(
            "SELECT * FROM github_accounts GA join graduates G on(GA.id=G.github_id) where GA.account_name=$1 ",
            [githubName],
            (error, result) => {
              if (result.rowCount > 0) res.json(result.rows);
              else
                res.send({ account_name: githubName, profile_status: false });
            }
          );
        } else
          res.send({
            message:
              "this is  github account does not belong to a CYF graduates",
          });
      }
    );
  });
});

router.get("/graduate/:id", (req, res, next) => {
  const github_id = parseInt(req.params.id);
  Connection.connect((err) => {
    if (err) {
      return next(err);
    }
    Connection.query(
      "SELECT * FROM graduates where github_id=$1 ",
      [github_id],
      (error, result) => {
        if (result.rowCount > 0) res.json(result.rows);
        else
          res
            .status(400)
            .send("It has not been added to the graduate table yet");
      }
    );
  });
});

//editing existing graduate
router.put("/graduates/:id", function (req, res) {
  const github_id = parseInt(req.params.id);
  const newFirstName = req.body.first_name;
  const newSurname = req.body.surname;
  const newCity = req.body.city;
  const newPersonal_bio = req.body.personal_bio;
  const newPast_experience = req.body.past_experience;
  pool.query(
    "update graduates set first_name=$1 ,surname=$2,city =$3,personal_bio=$4 ,past_experience=$5" +
      "where github_id =$6",
    [
      newFirstName,
      newSurname,
      newCity,
      newPersonal_bio,
      newPast_experience,
      github_id,
    ],
    (error) => {
      if (error == undefined) {
        res.send("graduate " + github_id + " updated.");
      }
    }
  );
});

router.delete("/graduates/:id", function (req, res) {
  const github_id = parseInt(req.params.id);

  Connection.query(
    "delete from graduates  where  github_id=$1",
    [github_id],
    (error) => {
      if (error == undefined) {
        res.send("graduat " + github_id + " deleted.");
      }
    }
  );
});

export default router;
