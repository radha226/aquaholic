
let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    console.log('color', color)
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
hydratedList=[
  {name:'Did you drink enough water today?'},
  {name:'Use a straw to drink water and you will drink more and faster'},
  {name:'Keep Calm & Drink Water.'},
  {name:'Water is Your Best Friend for Life.'},
  {name:'Drink your way to better health. Drink water!'},
  {name:'Drinking water is like taking a shower on the inside of your body.'},
  {name:'hiskey is for drinking; water is for fighting over.'},
  {name:'In time and with water, everything changes'},
  {name:'Drink more water. Your skin, your hair, your mind and body will thank you..'},
  {name:'Thousands have lived without love, not one without water.'},
  {name:'When the well is dry, we’ll know the worth of water.'},
  {name:'You are not hungry, you are bored. Drink some water and learn the difference.'}
  
]
// console.log(div);
// console.log(hydratedList)
notification();
setInterval(() => {
  console.log("set interval")
  notification();
}, 1000*60*60);
function notification(){
  console.log("hello notifications")
  var randomValue=Math.floor(Math.random() * hydratedList.length);
var messageName=this.hydratedList[randomValue]?.name
console.log(messageName);
  if(messageName){
    chrome.notifications.create({
      title:"Keep CODING",
      message:messageName,
      iconUrl:"images/get_started16.png",
      type: 'basic',
      silent:false,
      
    })
  }

  
}

// items: [{ title: 'Item1', message: 'This is item 1.'},
    //       { title: 'Item2', message: 'This is item 2.'},
    //         { title: 'Item3', message: 'This is item 3.'}]