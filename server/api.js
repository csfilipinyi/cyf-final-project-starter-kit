import { Router } from "express";

import { Connection } from "./db";

const router = new Router();
const accountName="Buchrateka1984"

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
		Connection.query('SELECT * FROM graduates', (error, result) => {
				res.json(result.rows);
			})
	});
});
router.post("/graduate",(_, res, next) => {
	const newFirstName =req.body.first_name;
	const newSurname=req.body.surname;
	const newCity=req.body.city;
	const newPersonal_bio=req.body.personal_bio;
	const newPast_experience=req.body.past_experience;

	//const newEmployment_status=req.body.employment_status;
	//const newOrganization=req.body.organization;
	//const newCity=req.body.city;

	pool.query("SELECT id FROM github_accounts WHERE account_name=$1", [accountName],
            (err, result) => {
	  if (result.rowCount > 0) 
	  {

const github_id=result.row.id;
	Connection.connect((err) => {
		if (err) {
			return next(err);
		}
		Connection.query("insert into graduates (first_name, surname, city, personal_bio,past_experience,github_id) values"+ 
		"($1,$2,$3,$4,$5,$6)",[newFirstName,newSurname,newCity,newPersonal_bio,newPast_experience,github_id], (error, result) => {
				res.json(result.rows);
			})
	});
}
			});
		})
		//checking the github username exist in our database
		router.get("/accounts", (_, res, next) => {
	const username=req.params.username;
			Connection.connect((err) => {
				if (err) {
					return next(err);
				}
				Connection.query('SELECT * FROM github_accounts where account_name=$1 ',[username], (error, result) => {
					if (result.rowCount > 0) 
	  
						res.json(result.rows);
						else
						res .status(400).send("this is not  a graduate")
					})
			});
		});

		router.get("/graduate/:id", (_, res, next) => {
			const github_id=parseInt(req.params.id);
					Connection.connect((err) => {
						if (err) {
							return next(err);
						}
						Connection.query('SELECT * FROM graduates where github_id=$1 ',[github_id], (error, result) => {
							if (result.rowCount > 0) 
			  
								res.json(result.rows);
								else
								res .status(400).send("It has not been added to the graduate table yet")
							})
					});
				});

				//editing existing graduate
				router.put("/graduates/:graduateId" ,function (req,res){
					const graduateId=parseInt( req.params.graduateId);
					const newFirstName =req.body.first_name;
	                const newSurname=req.body.surname;
	                const newCity=req.body.city;
	                const newPersonal_bio=req.body.personal_bio;
	                const newPast_experience=req.body.past_experience;
					pool.query("update graduates set first_name=$1 ,surname=$2,city =$3,personal_bio=$4 ,past_experience=$5"+
					"where id =$6"
				 ,[newFirstName,newSurname,newCity ,newPersonal_bio,newPast_experience,graduateId],(error)=> {
						if ((error)== undefined){
							
							res.send("graduate "+graduateId+" updated.");
						}
					
				
				});
			
				

router.delete("/graduates/:id" ,function (req,res){
			const graduateId=parseInt( req.params.id);
		
			Connection.query("delete from graduates  where  id=$1"
		 ,[graduateId],(error)=> {
				if ((error)== undefined){
					
					res.send("graduat "+graduateId+" deleted.");
				}
			});
		});


export default router;
