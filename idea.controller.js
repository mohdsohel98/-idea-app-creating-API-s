//  write the logics to create the controller  for the idea resources 

 const ideas  =  require("../models/ideas.model")

 let id  = 4 // initial count of  the id 


/**
 * cretae the controller for fetching all the ideas 
 * 
 *  GET 127.0.0.1:8000/ideaApp/api/v1/ideas
 * 
 *  Return list of all the ideas 
 * 
 *  */ 


 exports.getAllIdeas = (req, res)=>{

//  first read all the ideas from idea.model file 

//  return all those ideas 

 res.status(200).send(ideas)


 }



//   controller that fetches ideas bassed on thhe id 

exports.getIdeaBasedOnId = (req, res)=>{

//   we need  to first read the idea id from the  req path param
//  using id, check if the idea with that id is present 

//  if present return the id

idea_id  = req.params.id

   if (ideas[idea_id]){
    res.status(200).send(ideas[idea_id])
   }
   else{
    res.status(404).send({
      message: "ideas with given idea is not found "
    })
   }



}




  // exports.getideabyId = (req, res)=>{

  // const  idea_id = req.params.id

  //  if (idea_id.idea_id){
  //   res.status(200),res.send(ideas.idea_id)
  //  }

  //  else{
  //   res.send(404).send({
  //     message:"idea with the given idea id not found "
  //   })
  //  }
    
  // }




  //  controller to create a new idea 


  exports.createIdea = (req, res)=>{

    //  I need to read the request  body

     idea_object =  req.body
      id++;
      idea_object['id'] = id //setting the id in the new created idea object
      ideas[id] = idea_object
    // Add the new object provided in the ideas objects

    //  return the response 

    res.status(200).send(idea_object)

 
  }


  //  controller  for updating the idea 

  exports.updateIdea = (req, res)=>{

    //  read the idea id 

     idea_id = req.params.id
    //  check the idea id is present 

    if (ideas[idea_id]){ 
       idea_obj = req.body
      ideas[idea_id] = idea_obj 
      res.status(200).send(idea_obj) 
      }
     else{
      return  res.status(404).send({
        message: "idea id if you wanted to update  doesnt exist!"
      })
     }
    //  read tehn new idea body and replace it 

    //  return the updated idea 


  }


  

  exports.deleteIdea = (req, res)=>{

    //  fetch teh idea  and see if it's present 


      idea_id = req.params.id

     if (ideas[idea_id]){
  //   delete it 
   delete ideas[idea_id]

     res.status(200).send({
      messgae:"yay your idea has been deleted sucessfully deleted"
     })
     }
     else{
      return res.status(404).send({
        message: "idea id is not present to delete "
      })
     }

    //  delete if its is present 


  }