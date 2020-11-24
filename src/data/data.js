const data = {
  posts: [{
    imageRef: "/parentconnect.png",
    type: "Post",
    title: "Placholder",
    date: "12/31/20",
    description: "This is placeholder, because I have yet to write a post",
    color: 'parentConnect'
  }],
  projects:[
    {
      type: "Project",
      date: "8/29/20",
      title: "Parent Connect",
      description: "Homeschool together during COVID",
      imageRef: "/parentconnect.png",
      repoLink: "github.com/mitchellmunderwood/Parent-Connect",
      liveLink: "parent-connect.herokuapp.com/",
      badges: [
        {type: "Code", name: "JS"},
        {type: "Code", name: "HTML"},
        {type: "Code", name: "CSS"},
        {type: "Code", name: "Handlebars"},
        {type: "Code", name: "Express"},
        {type: "Code", name: "NodeJS"},
        {type: "Data", name: "MySql"},
      ],
      color: "parentConnect"
    },
  
    {
      type: "Project",
      date: "7/2/20",
      title: "Party Planner",
      description: "Discover meals and cocktails",
      imageRef: "/party_planner.png",
      repoLink:
        "github.com/mitchellmunderwood/Party-Planning-Committee",
      liveLink:
        "mitchellmunderwood.github.io/Party-Planning-Committee/",
        badges: [
          {type: "Code", name: "JavaScript"},
          {type: "Code", name: "HTML5"},
          {type: "Code", name: "CSS3"},
          {type: "Code", name: "Material Design"},
          {type: "API", name: "MealsDB"},
          {type: "API", name: "DrinksDB"}
        ],
      color: "partyPlanner"
    },
    {
      type: "Project",
      date: "8/15/20",
      title: "Eat-Da-Burger!",
      description: "Eat delicious burgers",
      imageRef: "/burgers.png",
      repoLink: "github.com/mitchellmunderwood/Burger-Buddy",
      liveLink: "burger-buddy-mu.herokuapp.com/",
      badges: [
        {type: "Code", name: "JavaScript"},
        {type: "Code", name: "HTML5"},
        {type: "Code", name: "CSS3"},
        {type: "Code", name: "Handlebars"},
        {type: "Code", name: "Express"},
        {type: "Code", name: "NodeJS"},
        {type: "Code", name: "MySQL"},
      ],
      color: "burger"
    },
    {
      type: "Project",
      date: "6/25/20",
      title: "Daily Forecast",
      description: "Get your local weather",
      imageRef: "/weather.png",
      repoLink: "github.com/mitchellmunderwood/Weather-App",
      liveLink: "mitchellmunderwood.github.io/Weather-App/",
      badges: [
        {type: "Code", name: "JavaScript"},
        {type: "Code", name: "HTML5"},
        {type: "Code", name: "CSS3"},
        {type: "Code", name: "Bootstrap"},
        {type: "API", name: "Open Weather"}
      ],
      color: "weather"
    },
    {
      type: "Project",
      date: "6/8/20",
      title: "Code Quiz",
      description: "Test your JS knowledge",
      imageRef: "/quiz.png",
      repoLink: "github.com/mitchellmunderwood/Code-Quiz",
      liveLink: "mitchellmunderwood.github.io/Code-Quiz/",
      badges: [
        {type: "Code", name: "JavaScript"},
        {type: "Code", name: "HTML5"},
        {type: "Code", name: "CSS3"},
      ],
      color: "quiz"
    },
    {
      type: "Project",
      date: "5/27/20",
      title: "Password Generator",
      description: "Stay safe with secure passwords",
      imageRef: "/password.png",
      repoLink: "github.com/mitchellmunderwood/Password-Generator",
      deployLink: "mitchellmunderwood.github.io/Password-Generator/",
      badges: [{type: "Code", name: "JavaScript"}],
      color: "password"
    }]
  
  };
  
  export default data;
  