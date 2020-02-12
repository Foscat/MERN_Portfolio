
function Project(name="", repoLink="", deployLink="", description="", extras=[""], codeFlows=[""], preview="") {
    this.name = name;
    this.repoLink = repoLink;
    this.deployLink = deployLink;
    this.description = description;
    this.extras = extras;
    this.codeFlows = codeFlows;
    this.preview = preview;
}


const front = [
    new Project("Gif Freak", "https://github.com/Foscat/gif-buttons", "https://foscat.github.io/gif-buttons/", 
        "Minimalist html using jQuery for dynamic generation. Uses the Giphy API for content", ["HTML","Giphy API", "jQuery"], 
        ["./images/codeFlows/gifFreak/gifFreakCF.png", "./images/codeFlows/gifFreak/genBtn.png", "./images/codeFlows/gifFreak/genGif.png"], 
        "./images/previews/gifFreak.png"),
    new Project("Word Guess", "https://github.com/Foscat/Word-Guess-Game", "https://foscat.github.io/Word-Guess-Game/", 
        "Vanilla javascript based game. Try and guess the correst letters to spell out the answer to the question.",
        ["HTML", "CSS", "Javascript", "mp3 audio"], ["./images/codeFlows/htmlWord/genFlow.png", "./images/codeFlows/htmlWord/keyInput.png"], 
        "./images/previews/wordGuess.png"),
    new Project("Crystal Collector", "https://github.com/Foscat/unit-4-game", " https://foscat.github.io/unit-4-game/",
        "Crysals get randomly assigned numbers and a target number is randomly generated. Clicking a crystal adds its value to tootal. Tyr to get total to match target score.",
        ["HTML", "CSS", "Javascript", "jQuery"] ,["./images/codeFlows/crystal/general.png", "./images/codeFlows/crystal/click.png"],
        "./images/previews/crystalCollector.png")
];

const back = [
    new Project("Liri Bot", "https://github.com/Foscat/liri-node-app", "", "Command line app for looking up band, song and event information.",
        ["Spotify API", "OMDB API", "Request.js", "Moment", "Node.js"] ,["./images/codeFlows/liri/bandsInTown.png", "./images/codeFlows/liri/omdb.png",
        "./images/codeFlows/liri/spotify.png"], "./images/previews/bandsInTown.png"),
    new Project("Word Guess", "https://github.com/Foscat/constructor-word-guess", "", "Hangman style command line game. Built using constructor functions",
        ["Node.js", "Inquirer.js"], ["./images/codeFlows/nodeWord/letter.png", "./images/codeFlows/nodeWord/word.png"],
         "./images/previews/conWordGuess.png"),
    new Project("SQL Store", "https://github.com/Foscat/SQL-store-app", "", "Simulated store with differant options for customers and managers.",
        ["MySQL", "Inquirer.js", "Node.js"], ["./images/codeFlows/sqlStore/main.png", "./images/codeFlows/sqlStore/search.png", 
        "./images/codeFlows/sqlStore/choose.png", "./images/codeFlows/sqlStore/add.png", "./images/codeFlows/sqlStore/stock.png"],
        "./images/previews/sqlStore.png")
];

const full = [
    new Project("MERN App Template", "https://github.com/Foscat/MERN_app-template", "https://glacial-everglades-91451.herokuapp.com/",
        `MERN stack template inspired by create react app. Comes with CRUD functions and frontend components to interact with those functions. Is ready for
        cloud deployment out of the box. Also comes with an issue template for if other devlopers ever use it and want to help me improve it.
        This portfolio is built on version 1.3.0. This is my pet project I continue to update and imporve. This template was also used for the 
        site that won my team a hackathon.`,
        ["React.js", "Express.js", "Reactstrap", "Bootstrap", "MongoDB", "Mongoose", "Moment"], 
        ["./images/codeFlows/mernTemp/genFlow.png", "./images/codeFlows/mernTemp/userSignUp.png"],
        "./images/previews/mernTemp.png"),
    new Project("MERN App Template Bcrypt+JWT", "https://github.com/Foscat/MERN_app-template", "https://glacial-everglades-91451.herokuapp.com/",
        `Modification of my MERN stack template. Now with log in and sign out features. Bcrypt is used for hashing and JWT for authentication`, 
        ["React.js", "MongoDB", "Reactstrap", "Bcrypt", "JSON Web Token"], 
        ["./images/codeFlows/mernTempAuth/homePage.png", "./images/codeFlows/mernTempAuth/newUser.png"],
        "./images/previews/mernTemp_auth.png"),
    new Project("\"Friend\" Finder", "https://github.com/Foscat/FriendFilter", "https://mighty-lake-64628.herokuapp.com/",
        `Built on MERN App Template Bcrypt+JWT template. Revised and improved version of old SMU project rebuilt, the original version was in Handlebars and MySQL.
        Users make a profile, choose an avatar, take a survey and get a personality type thenget matches with other users of that personality type.
        Recent update now includes a forum where users can make board posts and other users can comment on it. Only the user who created each post or comment can
        update them. If a user is deleted all boardposts and comments by that user are deleted.`, ["React.js", "JWT", "Bcrypt", "PicMonkey", "Moment"],
        ["./images/codeFlows/friendFinder/friendFinderCF.png", "./images/codeFlows/friendFinder/createUser.png",
         "./images/codeFlows/friendFinder/survey.png", "./images/codeFlows/friendFinder/createBP.png", "./images/codeFlows/friendFinder/delBP.png"], 
        "./images/previews/friendFilter.png")
];

module.exports= {
    front,
    back,
    full
}