/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const followersArray = [ 
  "schandrupatla",
  "tetondan",
   "dustinmyers",
   "justsml",
   "luishrd",
   "bigknell"];

 const entryPoint = document.querySelector(".cards")


//Task-5
followersArray.forEach((item)=>{
  const newPerson =`https://api.github.com/users/${item}`
  console.log(newPerson);
  axios
  .get(newPerson)
  .then((res)=>{
    const results = res.data;
    const newCard = cardMaker(results);
    entryPoint.appendChild(newCard);
    console.log("RESPONSE :", res.data);
  })
   .catch((err)=>{
    console.log(err);
   });
});

//Task-1
// .get("https://api.github.com/users/schandrupatla")
// .then((res)=>{
//   const results = res.data;
//   const newCard = cardMaker(results);
//   entryPoint.appendChild(newCard);
//   console.log("RESPONSE :", res.data);
// })
//  .catch((err)=>{
//   console.log(err);
//  });


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = [ 
//  "tetondan",
//   "dustinmyers",
//   "justsml",
//   "luishrd",
//   "bigknell"];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(obj){
  //div-card
const divCard = document.createElement("div");
divCard.classList.add("card");

//img
const img = document.createElement("img");
img.setAttribute('src',obj.avatar_url );
divCard.appendChild(img);

//div-"card-info"
const divCardInfo = document.createElement("div");
divCardInfo.classList.add("card-info");
divCard.appendChild(divCardInfo);

//<h3 class="name">{users name}</h3>
const h3 = document.createElement("h3");
h3.classList.add("name");
h3.textContent = obj.name;
divCardInfo.appendChild(h3);

// <p class="username">{users user name}</p>
const pUsername = document.createElement("p");
pUsername.classList.add("username");
pUsername.textContent= obj.login;
divCardInfo.appendChild(pUsername);

// <p>Location: {users location}</p>
const pLocation = document.createElement("p");
pLocation.textContent = obj.location;
divCardInfo.appendChild(pLocation);

// <p>Profile:
const pProfile = document.createElement("p");
pProfile.textContent = "Profile :";
// pProfile.href =`${obj.url}`
 divCardInfo.appendChild(pProfile);

//   <a href={address to users github page}>{address to users github page}</a>
const aProfile = document.createElement("a");
// aProfile.href =`${obj.html_url}` ;
aProfile.textContent = "LinkedIn Profile";
aProfile.setAttribute('href',`${obj.html_url}`) ;
pProfile.appendChild(aProfile);

// <p>Followers: {users followers count}</p>
const pFollowers = document.createElement("p");
pFollowers.textContent = `Followers : ${obj.followers}`;
divCardInfo.appendChild(pFollowers);

 //<p>Following: {users following count}</p>
const pFollowing = document.createElement("p");
pFollowing.textContent = `Following : ${obj.following}`;
divCardInfo.appendChild(pFollowing);

// <p>Bio: {users bio}</p> */}
const pBio = document.createElement("p");
pBio.textContent = `Bio: ${obj.bio}`;
divCardInfo.appendChild(pBio);



//pProfile.appendChild(aProfile);
console.log(divCard);
return divCard;
}




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
