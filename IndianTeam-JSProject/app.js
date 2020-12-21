//get only unique categories
//iterate over categories and return buttons 
//make sure to select buttons when they are available

const Players = [
  {
    id:1,
    name: "Virat Kohli(C)",
    category:"Batsman",
    price: "$50M",
    img:"./images/viratkohli.png",
    desc:"Talent: Kohli has a seemingly hot head on his shoulders, but he channels all his anger while he is batting. Known to be an aggressive batsman always on the lookout for runs, he has a fairly sound , albeit slightly unconventional technique, which makes him judge the length of the ball earlier than most, and amazingly quick wrists to run his hands through the ball, even against fast bowlers."
  },
  {
    id:2,
    name:"Rohit Sharma(VC)",
    category:"Batsman",
    price: "$40M",
    img:"./images/RohitSharma.png",
    desc:"Talent: The standout performer in both the limited overs series and the T20 series has been Rohit Sharma. Like Virender Sehwag before him, he is unstoppable once he gets going and like Viru he has an appetite for big hundreds."
  },
  {
    id:3,
    name:"MS Dhoni(WK)",
    category:"Batsman",
    price: "$50M",
    img:"./images/MSD.png",
    desc:"Talent: Dhoni is a right-handed batsman and wicket-keeper. Initially, Dhoni appeared as a lower-order attacking batsman but he gradually changed his playing style to deal with high-pressure scenarios and his growing responsibility as a captain. He is a powerful hitter of the ball and is one of the fastest men in running between the wickets.He made use of the helicopter shot technique,taught to him by was fellow player and childhood friend Santosh Lal."
  },
  {
    id:4,
    name:"KL Rahul",
    category:"Batsman",
    price: "$30M",
    img:"./images/klRahul.jpg",
    desc:"Talent: KL Rahul became the first batsman from Karnataka to score a triple century in the Ranji Trophy. He also became the first Indian batsman to score a century on ODI debut in 2016. The same year he scored the fastest century in T20 by an Indian. He scored the century off 46 balls in what was a losing cause. He is also the only batsman to score a hundred in the first innings as an opener in both ODIs and Tests."
  },
  {
    id:5,
    name:"Suresh Raina",
    category:"Batsman",
    price: "$40M",
    img:"./images/Raina.jpg",
    desc:"Talent: He is the third batsman in the world and first Indian to hit a T20I century.Raina was the first ever batsman to score a T20I century when batting at number 3 position or lower as well as in World T20 history as he did it in the 2010 ICC World T20.He is the first Indian batsman to score centuries in all the three formats of the game.He was the twelfth Indian player to score test century on debut."
  },
  {
    id:6,
    name:"Hardik Pandya",
    category:"AllRounder",
    price: "$50M",
    img:"./images/HardikPandya.png",
    desc:"Talent: He the ability to surge when required and target a particular bowler, he has pulled off 20-run overs in pressure situations and remains a vital cog in the ODI fold. With an ageing MS Dhoni shifting into a sheet anchor mode rather than his usual swashbuckling mode, Pandya is a crucial factor in the team and can form a vital pairing with Dhoni, by batting around his stability as his apprentice to finish off games."
  },
  {
    id:7,
    name:"Ravindra Jadeja",
    category:"AllRounder",
    price: "$40M",
    img:"./images/Jadeja.jpg",
    desc:"Talent: The all-round package that he is, Jadeja is a tough candidate for a captain to ignore because he is a live wire in the field, bowls decent spin and can give those extra few runs towards the end overs. The advent of wrist spinners has made things tough although Jadeja's multi-dimensional skills does keep him in the hunt. He is arguably India's best fielder and can tonk a few with the bat apart from his bowling skills."
  },
  {
    id:8,
    name:"Jasprit Bumra",
    category:"Bowler",
    price: "$30M",
    img:"./images/JspritBmra.png",
    desc:"Jasprit Bumrah reached into the limelight with his unorthodox action and his ability to bowl yorkers at the right time and perform well in the death overs. He has an anomalous, sling-arm action and coupled with natural pace, and a peculiar release point of his deliveries makes it hard for the batsmen to pick him up early. He bowls outside the off-stump or short quite consistently."
  },
  {
    id:9,
    name:"Yuzendra Chahal",
    category:"Bowler",
    price: "$20M",
    img:"./images/ChahalJpeg.jpg",
    desc:"Chahal has since then grown onto become the linchpin of Royal Challengers Bangalore's spin attack. While he doesn't have a deceptive googly, he more than makes up for it with his skiddy bowling action and accurate line and length. One of the few bowlers who doesn't mind to lure the batsmen with the flight, several of his wickets have come with the batsmen attempting to clear the fence."
  },
  {
    id:10,
    name:"Ashwin",
    category:"Bowler",
    price: "$40M",
    img:"./images/Ashwin.jpg",
    desc:"Talent: Ashwin was finally given an extended Test run and was adjudged the Man of the Series in the Border-Gavaskar Trophy in 2013, starting his journey as India's go-to bowler on subcontinental pitches with impressive tally of 29 wickets in the series. In the process he became the third Indian off-spinner to take 25-plus wickets in a series after Harbhajan Singh (32) & Erapalli Prasanna (26)."
  },
  {
    id:11,
    name:"Mohammad Shami",
    category:"Bowler",
    price: "$40M",
    img:"./images/Shami.jpg",
    desc:"Talent: With his limited-yet-useful ability to move the new ball off the deck and reverse the old ball in the air, Shami has proved to be a master of ball maintenance and performance in unhelpful conditions.He has shown decent control on the Dukes and the Kookaburra ball in addition to his expertise with the SG, and has performed the rather enigmatic task of reversing the Kookaburra in Australia."
  }
]

//Load Players as soon as Page loads
window.addEventListener("DOMContentLoaded", function(){
  displayAllPlayers(Players);
  GetCategoryButtons();
});

function GetCategoryButtons() {
  var categories = Players.reduce(
    function (values, player) {
    if (!values.includes(player.category)) {
      values.push(player.category);
    }
    return values;     //Important as need to return val back to function
  }, ["All"]);
   console.log(categories);
   DynamicButtons(categories);
}

function DynamicButtons(categories) {
  let CategoryButtons = categories.map(function(category) {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  }).join("");
  const btncontainer = document.querySelector(".btn-container");
  btncontainer.innerHTML = CategoryButtons;
  //Filter Players based on their category
  filterPlayers();
}

function filterPlayers(){
  var buttons = document.getElementById("buttonId");
  allbuttons = buttons.querySelectorAll(".filter-btn");
    allbuttons.forEach(function(button) {
      button.addEventListener("click",function(eventObject){
        const category = eventObject.currentTarget.dataset.id;
        const playersTheirCategory = Players.filter(function(player){
            if(player.category === category){
              return player;
            }    
        });
        if(category == "All"){
          displayAllPlayers(Players);
        } else {
          displayAllPlayers(playersTheirCategory);
        }
        console.log(playersTheirCategory);
      });
    });
}

function displayAllPlayers(cricketers){
  let displayPlayers = cricketers.map(function(player){
    
    return ` <article class="menu-item">
    <img src=${player.img} class="photo" alt=${player.name}>
    <div class="item-info">
      <header>
      <h4>${player.name}</h4>
      <h4 class="price">${player.price}</h4>
      </header>  
      <p class="text-item">
        ${player.desc}
      </p>        
    </div>
  </article>`;
 });
displayPlayers = displayPlayers.join(""); 
console.log(displayPlayers);
var sectionCenter = document.getElementById("myDiv");
sectionCenter.querySelector(".section-center").innerHTML = displayPlayers;
}




