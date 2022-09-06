import axios from "axios";   // axios 

const getData = async (userId)=> {


    // await 
const {data : user} = await axios("https://jsonplaceholder.typicode.com/users/"+userId)


const {data : posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+ userId);




console.log({user, posts});

}


export default getData;