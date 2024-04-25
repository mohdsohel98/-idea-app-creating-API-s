
 const  ideas_controller = require('../controller/idea.controller')
/***
 *  routes for 
 * 
 *   get  127.0.0.1:8000/ideaApp/api/v1/ideas
 * 
 * 
 * notes -> for running  application first you inseure that the   client connected  the server which means (App) in App (routes, controller , model)  routes call   controller  and controller call the  model 
 */

   module.exports = (app)=>{

   app.get("/ideaApp/api/v1/ideas", ideas_controller.getAllIdeas)

//    Get  127.0.0.1:8000/ideaApp/api/v1/ideas
 app.get("/ideaApp/api/v1/ideas/:id",ideas_controller.getIdeaBasedOnId)

  // post  127.0.0.1:8000/ideaApp/api/v1/ideas
  app.post("/ideaApp/api/v1/ideas", ideas_controller.createIdea)

  //  put  127.0.0.1:8000/ideaApp/api/v1/ideas

  app.put("/ideaApp/api/v1/ideas/:id", ideas_controller.updateIdea)
//   delete  127.0.0.1:8000/ideaApp/api/v1/ideas

 app.delete("/ideaApp/api/v1/ideas/:id", ideas_controller.deleteIdea)

 }

 