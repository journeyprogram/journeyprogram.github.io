// Initial = 560, refactor target = ~100

console.log('Calcs are running');

// How many questions in the survey?
var questions = 14;

// In each array, [0] is Firefighter, [1] is Gambler, [2] is Policeman,
// [3] is President, [4] is Stuntman.
var leadership = [0,0,0,0,0];
var people     = [0,0,0,0,0];
var systems    = [0,0,0,0,0];

var lead_max   = [46,9.2,55.2,92,73.6];
var peop_max   = [23.1,7.7,38.5,77,53.9];
var syst_max   = [8.4,25.2,67.2,84,58.8];

// Check which option was selected for each question
function getCheckedValue( radioName ){
  var radios = document.getElementsByName( radioName ); // Get radio group by-name
  for(var y = 0; y < radios.length; y++)
    if(radios[y].checked) return radios[y].value; // return the selected value
}

// Return the final score
function returnScore() {

  question1answer();
  question2answer();
  question3answer();
  question4answer();
  question5answer();
  question6answer();
  question7answer();
  question8answer();
  question9answer();
  question10answer();
  question11answer();
  question12answer();
  question13answer();
  question14answer();

  console.log("Leadership = "+ leadership);
  console.log("People = "+ people);
  console.log("Systems = "+ systems);

  // Calculate percentages

  function percentage( orgArea, areaMax, orgAreaName ) { // TODO - Turn this into a for loop
    console.log(orgAreaName + " score is " + orgArea);
    orgArea[0] = orgArea[0] / areaMax[0] * 100;
    orgArea[1] = orgArea[1] / areaMax[1] * 100;
    orgArea[2] = orgArea[2] / areaMax[2] * 100;
    orgArea[3] = orgArea[3] / areaMax[3] * 100;
    orgArea[4] = orgArea[4] / areaMax[4] * 100;
    console.log(orgAreaName + " percentages are " + orgArea);
  }

  percentage( leadership, lead_max, "Leadership" );
  percentage( people, peop_max, "People" );
  percentage( systems, syst_max, "Systems" );


  // Sanity check: When all questions are used each array should add up to 100%
  var sanityCheck = [
    (leadership[0] + leadership[1] + leadership[2] + leadership[3] + leadership[4]),
    (people[0] + people[1] + people[2] + people[3] + people[4]),
    (systems[0] + systems[1] + systems[2] + systems[3] + systems[4])
  ];

  console.log("Sanity check = " + sanityCheck);

  // Find out the winning score (i.e. highest percentage)
  var leadership_profile = Math.max.apply( null, leadership);
  var leadership_blurb;
  var leadership_img;

  var people_profile = Math.max.apply( null, people);
  var people_blurb;

  var systems_profile = Math.max.apply( null, systems);
  var systems_blurb;

  // Set the Leadership org character based on the winning score
  if (leadership_profile === 0) {
    leadership_profile = "You didn't answer any questions yet!";
    leadership_blurb = "";
  } else if (leadership[0] === leadership_profile) {
    leadership_profile = "Firefighter";
    leadership_blurb = "In Firefighter organisations there are often some reasonable leaders, or leaders with potential. Leaders in these organisations may need to be trained to delegate and manage so that they don't get involved in everything. The leadership team or the whole organisation may be under-resourced, and may need additional help to change the way things are done (i.e. the culture).";
  } else if (leadership[1] === leadership_profile) {
    leadership_profile = "Gambler";
    leadership_blurb = "In Gambler organisations, leadership is either absent or ineffective. 'Gambler' leaders want to be one of the lads as that's where they came from, which doesn't help anyone. Frequently over optimistic about their ability, these leaders avoid being a leader and get involed in their teams jobs, leaving their real tasks until 'tomorrow'. These leaders and the organisation that put them there are 'unconciously incompetent' - in other words the world is a wonderful place and nothing can go wrong. These leaders need to be trained in the basics!";
  } else if (leadership[2] === leadership_profile) {
    leadership_profile = "Policeman";
    leadership_blurb = "A Policeman organisation leader takes a strong leadership approach; often without providing coaching or guidance, and frequently applying the penalties. These leaders are often called 'old school' and may not have much knowledge or interest in their impact on the workforce. The may demand respect, rather than earning it from their team members, although senior likeminded leaders may praise them for their productivity. Some one on one coaching from a peer is a good way to help this leader improve management of their team.";
  } else if (leadership[3] === leadership_profile) {
    leadership_profile = "President";
    leadership_blurb = "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.";
  } else if (leadership[4] === leadership_profile) {
    leadership_profile = "Stuntman";
    leadership_blurb = "Stuntman organisation's leaders are inspirational; they have presence, they are loved, their people are followers. They appear to be comfortable and calm, and they are tough. With vision and decision the Stuntman leader has the potential to rise to the heights of the organisation. The problem is managing their Achilles heel; they may decide a path for the organisation which is slightly too high risk, and they can fail dramatically. Stuntmen leaders are defined by their 'considered' risk taking and therefore need a trusted team of advisors to guide them away from arrogance or complacency.";
  } else {
    leadership_profile = "There has been a mistake!";
    leadership_blurb = "Sam, you fool.";
  }

  // Set the People org character based on the winning score
  if (people_profile === 0) {
    people_profile = "You didn't answer any questions yet!";
    people_profile = "";
  } else if (people[0] === people_profile) {
    people_profile = "Firefighter";
    people_blurb = "The people in a firefighting organisation may be a bit on edge or frustrated, possibly feeling like something is about to happen, or amazed at how the organisation keeps going despite all its problems. Some team building and problem solving shared around can make all the difference.";
  } else if (people[1] === people_profile) {
    people_profile = "Gambler";
    people_blurb = "When you ask people if they feel safe they say no. The is an informal approach to work. Sometimes informal teams evolve and work out how to survive, independent of their leader. People wonder what they are doing working for the organisation, realising they may have been conned into their role, so turnover is high as people lose confidence in the leadership team.";
  } else if (people[2] === people_profile) {
    people_profile = "Policeman";
    people_blurb = "The Policeman boss being a stickler for procedure and control may provide some team members with a feeling of security, others may rebel against the prescribed operating style. There is potential for people to do their own thing because they know their leaders are difficult to work with, simply modifying their behaviour when the boss is around. This leads to risk taking, unwritten rules, and often, incidents occurring.";
  } else if (people[3] === people_profile) {
    people_profile = "President";
    people_blurb = "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.";
  } else if (people[4] === people_profile) {
    people_profile = "Stuntman";
    people_blurb = "Stuntman organisations comprise motivated, competent and willing people. If well led a stuntman organisation could overtake others rapidly. Their people are inspired and willing to do high risk work for their leaders, because they know it makes sense for the greater good. Unfortunately despite infections enthusiasm, risk takers operating in a high risk environment often results in a high risk of an incident.";
  } else {
    people_profile = "There has been a mistake!";
    people_blurb = "Sam, you fool.";
  }

  // Set the Systems org character based on the winning score
  if (systems_profile === 0) {
    systems_profile = "You didn't answer any questions yet!";
    systems_profile = "";
  } else if (systems[0] === systems_profile) {
    systems_profile = "Firefighter";
    systems_blurb = "The systems in a Firefighter organisation are probably not worth the paper they are written on: out of date, not what actually happens, rarely reviewed or audited. A review of how the organisation functions is essential.";
  } else if (systems[1] === systems_profile) {
    systems_profile = "Gambler";
    systems_blurb = "This type of organisation downloaded it’s systems from the internet, or obtained them from a mate, changed a few names and left it on the shelf. If there are some systems they are unlikely to be implemented. When asked about his systems, a Gambler leader said - true story - “It’s all in my head mate, I’ve been doing this for 25 years”...";
  } else if (systems[2] === systems_profile) {
    systems_profile = "Policeman";
    systems_blurb = "There are probably lots of procedures in a Policeman organisation which were written when things went wrong before. People are expected to comply with them all, possibly leading to a ‘tick and flick’ (i.e. waste of time) response from the workforce. Some engagement with the workforce to update and roll out the systems will make a positive change.";
  } else if (systems[3] === systems_profile) {
    systems_profile = "President";
    systems_blurb = "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.";
  } else if (systems[4] === systems_profile) {
    systems_profile = "Stuntman";
    systems_blurb = "Stuntman systems may be precise and concise, and may be effective and efficient at controlling risk. The challenge for the systems is their maintenance, as these organisations move so fast that the system can quickly become ineffective, increasing risk.";
  } else {
    systems_profile = "There has been a mistake!";
    systems_blurb = "Sam, you fool.";
  }

  // Display the results
  $("#leadership-score").text(leadership_profile);
  $("#leadership-blurb").text(leadership_blurb);
  $("#leadership-image").attr("src","/img/" + leadership_profile + ".png");
  $("#people-score").text(people_profile);
  $("#people-blurb").text(people_blurb);
  $("#people-image").attr("src","/img/" + people_profile + ".png");
  $("#systems-score").text(systems_profile);
  $("#systems-blurb").text(systems_blurb);
  $("#systems-image").attr("src","/img/" + systems_profile + ".png");

  // Set images

  // Reset the scores
  leadership = [0,0,0,0,0];
  people     = [0,0,0,0,0];
  systems    = [0,0,0,0,0];

}

function clearResults() {
  $("#leadership-score").text(" ");
  $("#leadership-blurb").text(" ");
  $("#people-score").text(" ");
  $("#people-blurb").text(" ");
  $("#systems-score").text(" ");
  $("#systems-blurb").text(" ");
  console.log("Results successfully cleared in preparation");
}

function question1answer(){
  if (getCheckedValue( "question1" ) === "a") {
    leadership[0] += 4;
    people[0]     += 0.3;
    systems[0]    += 0.8;
  } else if (getCheckedValue( "question1" ) === "b") {
    leadership[1] += 0.8;
    people[1]     += 0.1;
    systems[1]    += 2.4;
  } else if (getCheckedValue( "question1" ) === "c") {
    leadership[2] += 4.8;
    people[2]     += 0.5;
    systems[2]    += 6.4;
  } else if (getCheckedValue( "question1" ) === "d") {
    leadership[3] += 8;
    people[3]     += 1;
    systems[3]    += 8;
  } else if (getCheckedValue( "question1" ) === "e") {
    leadership[4] += 6.4;
    people[4]     += 0.7;
    systems[4]    += 5.6;
  } else {
    console.log("Question 1 was not answered!");
  }
}

function question2answer(){
  if (getCheckedValue( "question2" ) === "a") {
    leadership[0] += 5;
    people[0]     += 0;
    systems[0]    += 0.4;
  } else if (getCheckedValue( "question2" ) === "b") {
    leadership[1] += 1;
    people[1]     += 0;
    systems[1]    += 1.2;
  } else if (getCheckedValue( "question2" ) === "c") {
    leadership[2] += 6;
    people[2]     += 0;
    systems[2]    += 3.2;
  } else if (getCheckedValue( "question2" ) === "d") {
    leadership[3] += 10;
    people[3]     += 0;
    systems[3]    += 4;
  } else if (getCheckedValue( "question2" ) === "e") {
    leadership[4] += 8;
    people[4]     += 0;
    systems[4]    += 2.8;
  } else {
    console.log("Question 2 was not answered!");
  }
}

function question3answer(){
  if (getCheckedValue( "question3" ) === "a") {
    leadership[0] += 5;
    people[0]     += 0.9;
    systems[0]    += 0;
  } else if (getCheckedValue( "question3" ) === "b") {
    leadership[1] += 1;
    people[1]     += 0.3;
    systems[1]    += 0;
  } else if (getCheckedValue( "question3" ) === "c") {
    leadership[2] += 6;
    people[2]     += 1.5;
    systems[2]    += 0;
  } else if (getCheckedValue( "question3" ) === "d") {
    leadership[3] += 10;
    people[3]     += 3;
    systems[3]    += 0;
  } else if (getCheckedValue( "question3" ) === "e") {
    leadership[4] += 8;
    people[4]     += 2.1;
    systems[4]    += 0;
  } else {
    console.log("Question 3 was not answered!");
  }
}

function question4answer(){
  if (getCheckedValue( "question4" ) === "a") {
    leadership[0] += 3;
    people[0]     += 2.4;
    systems[0]    += 0.5;
  } else if (getCheckedValue( "question4" ) === "b") {
    leadership[1] += 0.6;
    people[1]     += 0.8;
    systems[1]    += 1.5;
  } else if (getCheckedValue( "question4" ) === "c") {
    leadership[2] += 3.6;
    people[2]     += 4;
    systems[2]    += 4;
  } else if (getCheckedValue( "question4" ) === "d") {
    leadership[3] += 6;
    people[3]     += 8;
    systems[3]    += 5;
  } else if (getCheckedValue( "question4" ) === "e") {
    leadership[4] += 4.8;
    people[4]     += 5.6;
    systems[4]    += 3.5;
  } else {
    console.log("Question 4 was not answered!");
  }
}

function question5answer(){
  if (getCheckedValue( "question5" ) === "a") {
    leadership[0] += 3.5;
    people[0]     += 0.6;
    systems[0]    += 1;
  } else if (getCheckedValue( "question5" ) === "b") {
    leadership[1] += 0.7;
    people[1]     += 0.2;
    systems[1]    += 3;
  } else if (getCheckedValue( "question5" ) === "c") {
    leadership[2] += 4.2;
    people[2]     += 1;
    systems[2]    += 8;
  } else if (getCheckedValue( "question5" ) === "d") {
    leadership[3] += 7;
    people[3]     += 2;
    systems[3]    += 10;
  } else if (getCheckedValue( "question5" ) === "e") {
    leadership[4] += 5.6;
    people[4]     += 1.4;
    systems[4]    += 7;
  } else {
    console.log("Question 5 was not answered!");
  }
}

function question6answer(){
  if (getCheckedValue( "question6" ) === "a") {
    leadership[0] += 4;
    people[0]     += 1.5;
    systems[0]    += 0.5;
  } else if (getCheckedValue( "question6" ) === "b") {
    leadership[1] += 0.8;
    people[1]     += 0.5;
    systems[1]    += 1.5;
  } else if (getCheckedValue( "question6" ) === "c") {
    leadership[2] += 4.8;
    people[2]     += 2.5;
    systems[2]    += 4;
  } else if (getCheckedValue( "question6" ) === "d") {
    leadership[3] += 8;
    people[3]     += 5;
    systems[3]    += 5;
  } else if (getCheckedValue( "question6" ) === "e") {
    leadership[4] += 6.4;
    people[4]     += 3.5;
    systems[4]    += 3.5;
  } else {
    console.log("Question 6 was not answered!");
  }
}

function question7answer(){
  var leadership_rating = [2, 0.4, 2.4, 4, 3.2];
  var people_rating     = [1.2, 0.4, 2, 4, 2.8];
  var systems_rating    = [1, 3, 8, 10, 7];
  if (getCheckedValue( "question7" ) === "a") {
    leadership[0] += leadership_rating[0];
    people[0]     += people_rating[0];
    systems[0]    += systems_rating[0];
  } else if (getCheckedValue( "question7" ) === "b") {
    leadership[1] += leadership_rating[1];
    people[1]     += people_rating[1];
    systems[1]    += systems_rating[1];
  } else if (getCheckedValue( "question7" ) === "c") {
    leadership[2] += leadership_rating[2];
    people[2]     += people_rating[2];
    systems[2]    += systems_rating[2];
  } else if (getCheckedValue( "question7" ) === "d") {
    leadership[3] += leadership_rating[3];
    people[3]     += people_rating[3];
    systems[3]    += systems_rating[3];
  } else if (getCheckedValue( "question7" ) === "e") {
    leadership[4] += leadership_rating[4];
    people[4]     += people_rating[4];
    systems[4]    += systems_rating[4];
  } else {
    console.log("Question 7 was not answered!");
  }
}

function question8answer(){
  var leadership_rating = [1, 0.2, 1.2, 2, 1.6];
  var people_rating     = [3,	1, 5, 10, 7];
  var systems_rating    = [0.2,	0.6, 1.6, 2, 1.4];
  if (getCheckedValue( "question8" ) === "a") {
    leadership[0] += leadership_rating[0];
    people[0]     += people_rating[0];
    systems[0]    += systems_rating[0];
  } else if (getCheckedValue( "question8" ) === "b") {
    leadership[1] += leadership_rating[1];
    people[1]     += people_rating[1];
    systems[1]    += systems_rating[1];
  } else if (getCheckedValue( "question8" ) === "c") {
    leadership[2] += leadership_rating[2];
    people[2]     += people_rating[2];
    systems[2]    += systems_rating[2];
  } else if (getCheckedValue( "question8" ) === "d") {
    leadership[3] += leadership_rating[3];
    people[3]     += people_rating[3];
    systems[3]    += systems_rating[3];
  } else if (getCheckedValue( "question8" ) === "e") {
    leadership[4] += leadership_rating[4];
    people[4]     += people_rating[4];
    systems[4]    += systems_rating[4];
  } else {
    console.log("Question 8 was not answered!");
  }
}

function question9answer(){
  var leadership_rating = [2,	0.4, 2.4, 4, 3.2];
  var people_rating     = [3,	1, 5, 10, 7];
  var systems_rating    = [0.2,	0.6, 1.6, 2, 1.4];
  if (getCheckedValue( "question9" ) === "a") {
    leadership[0] += leadership_rating[0];
    people[0]     += people_rating[0];
    systems[0]    += systems_rating[0];
  } else if (getCheckedValue( "question9" ) === "b") {
    leadership[1] += leadership_rating[1];
    people[1]     += people_rating[1];
    systems[1]    += systems_rating[1];
  } else if (getCheckedValue( "question9" ) === "c") {
    leadership[2] += leadership_rating[2];
    people[2]     += people_rating[2];
    systems[2]    += systems_rating[2];
  } else if (getCheckedValue( "question9" ) === "d") {
    leadership[3] += leadership_rating[3];
    people[3]     += people_rating[3];
    systems[3]    += systems_rating[3];
  } else if (getCheckedValue( "question9" ) === "e") {
    leadership[4] += leadership_rating[4];
    people[4]     += people_rating[4];
    systems[4]    += systems_rating[4];
  } else {
    console.log("Question 9 was not answered!");
  }
}

function question10answer(){
  var leadership_rating = [2.5,	0.5, 3,	5, 4];
  var people_rating     = [1.5,	0.5, 2.5,	5, 3.5];
  var systems_rating    = [0.5,	1.5, 4,	5, 3.5];
  if (getCheckedValue( "question10" ) === "a") {
    leadership[0] += leadership_rating[0];
    people[0]     += people_rating[0];
    systems[0]    += systems_rating[0];
  } else if (getCheckedValue( "question10" ) === "b") {
    leadership[1] += leadership_rating[1];
    people[1]     += people_rating[1];
    systems[1]    += systems_rating[1];
  } else if (getCheckedValue( "question10" ) === "c") {
    leadership[2] += leadership_rating[2];
    people[2]     += people_rating[2];
    systems[2]    += systems_rating[2];
  } else if (getCheckedValue( "question10" ) === "d") {
    leadership[3] += leadership_rating[3];
    people[3]     += people_rating[3];
    systems[3]    += systems_rating[3];
  } else if (getCheckedValue( "question10" ) === "e") {
    leadership[4] += leadership_rating[4];
    people[4]     += people_rating[4];
    systems[4]    += systems_rating[4];
  } else {
    console.log("Question 10 was not answered!");
  }
}

function question11answer(){
  var leadership_rating = [2.5,	0.5, 3,	5, 4];
  var people_rating     = [1.5,	0.5, 2.5,	5, 3.5];
  var systems_rating    = [1,	3, 8, 10,	7];
  if (getCheckedValue( "question11" ) === "a") {
    leadership[0] += leadership_rating[0];
    people[0]     += people_rating[0];
    systems[0]    += systems_rating[0];
  } else if (getCheckedValue( "question11" ) === "b") {
    leadership[1] += leadership_rating[1];
    people[1]     += people_rating[1];
    systems[1]    += systems_rating[1];
  } else if (getCheckedValue( "question11" ) === "c") {
    leadership[2] += leadership_rating[2];
    people[2]     += people_rating[2];
    systems[2]    += systems_rating[2];
  } else if (getCheckedValue( "question11" ) === "d") {
    leadership[3] += leadership_rating[3];
    people[3]     += people_rating[3];
    systems[3]    += systems_rating[3];
  } else if (getCheckedValue( "question11" ) === "e") {
    leadership[4] += leadership_rating[4];
    people[4]     += people_rating[4];
    systems[4]    += systems_rating[4];
  } else {
    console.log("Question 11 was not answered!");
  }
}

function question12answer(){
  var leadership_rating = [3,	0.6, 3.6, 6, 4.8];
  var people_rating     = [2.7, 0.9, 4.5, 9, 6.3];
  var systems_rating    = [0.5,	1.5, 4, 5, 3.5];
  if (getCheckedValue( "question12" ) === "a") {
    leadership[0] += leadership_rating[0];
    people[0]     += people_rating[0];
    systems[0]    += systems_rating[0];
  } else if (getCheckedValue( "question12" ) === "b") {
    leadership[1] += leadership_rating[1];
    people[1]     += people_rating[1];
    systems[1]    += systems_rating[1];
  } else if (getCheckedValue( "question12" ) === "c") {
    leadership[2] += leadership_rating[2];
    people[2]     += people_rating[2];
    systems[2]    += systems_rating[2];
  } else if (getCheckedValue( "question12" ) === "d") {
    leadership[3] += leadership_rating[3];
    people[3]     += people_rating[3];
    systems[3]    += systems_rating[3];
  } else if (getCheckedValue( "question12" ) === "e") {
    leadership[4] += leadership_rating[4];
    people[4]     += people_rating[4];
    systems[4]    += systems_rating[4];
  } else {
    console.log("Question 12 was not answered!");
  }
}

function question13answer(){
  var leadership_rating = [5,	1, 6, 10, 8];
  var people_rating     = [3,	1, 5,	10,	7];
  var systems_rating    = [0.8,	2.4, 6.4,	8, 5.6];
  if (getCheckedValue( "question13" ) === "a") {
    leadership[0] += leadership_rating[0];
    people[0]     += people_rating[0];
    systems[0]    += systems_rating[0];
  } else if (getCheckedValue( "question13" ) === "b") {
    leadership[1] += leadership_rating[1];
    people[1]     += people_rating[1];
    systems[1]    += systems_rating[1];
  } else if (getCheckedValue( "question13" ) === "c") {
    leadership[2] += leadership_rating[2];
    people[2]     += people_rating[2];
    systems[2]    += systems_rating[2];
  } else if (getCheckedValue( "question13" ) === "d") {
    leadership[3] += leadership_rating[3];
    people[3]     += people_rating[3];
    systems[3]    += systems_rating[3];
  } else if (getCheckedValue( "question13" ) === "e") {
    leadership[4] += leadership_rating[4];
    people[4]     += people_rating[4];
    systems[4]    += systems_rating[4];
  } else {
    console.log("Question 13 was not answered!");
  }
}

function question14answer(){
  var leadership_rating = [3.5,	0.7, 4.2,	7, 5.6];
  var people_rating     = [1.5,	0.5, 2.5,	5, 3.5];
  var systems_rating    = [1,	3, 8,	10,	7];
  if (getCheckedValue( "question14" ) === "a") {
    leadership[0] += leadership_rating[0];
    people[0]     += people_rating[0];
    systems[0]    += systems_rating[0];
  } else if (getCheckedValue( "question14" ) === "b") {
    leadership[1] += leadership_rating[1];
    people[1]     += people_rating[1];
    systems[1]    += systems_rating[1];
  } else if (getCheckedValue( "question14" ) === "c") {
    leadership[2] += leadership_rating[2];
    people[2]     += people_rating[2];
    systems[2]    += systems_rating[2];
  } else if (getCheckedValue( "question14" ) === "d") {
    leadership[3] += leadership_rating[3];
    people[3]     += people_rating[3];
    systems[3]    += systems_rating[3];
  } else if (getCheckedValue( "question14" ) === "e") {
    leadership[4] += leadership_rating[4];
    people[4]     += people_rating[4];
    systems[4]    += systems_rating[4];
  } else {
    console.log("Question 14 was not answered!");
  }
}

console.log('Calcs have finished');
