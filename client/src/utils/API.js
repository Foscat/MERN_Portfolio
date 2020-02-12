import axios from "axios";

export default {
// Use this as working boilerplate and copy code for new table in db

  ///// Post CRUD \\\\\
  // Any Create, Update or Delete Function requires a key

  // Add a post
  addPost: function(postData) {
    console.log("Add post data: ", postData);
    return axios.post("/api/posts", postData);
  },
  // Gets all posts
  getPosts: function(key) {
    console.log("Get posts request", key);
    return axios.get("/api/posts/"+key);
  },
  // Get published posts
  getApprovedPosts: function(){
    console.log("Get approved post request");
    return axios.get("/api/posts");
  },
  getDraftPosts: function(key){
    return axios.get("/api/posts/draft/"+key)
  },
  // Update info on post
  updatePost: function(id, updateData) {
    console.log("Update post id and data: ", id, updateData);
    return axios.put("/api/posts/"+id, updateData)
  },
  // Delete a post
  deletePost: function(id) {
    console.log("Delete post with id: ", id);
    return axios.delete("/api/posts/"+id);
  },
  // Send email route
  reachOutEmail: function(emailData){
    console.log("Send email with data:", emailData);
    return axios.post("/api/email/reachout", emailData);
  }
}