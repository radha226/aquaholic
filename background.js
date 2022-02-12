
let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    console.log('color', color)
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

notification();
hydratedList=[
  {name:'No Water. No Life. No Blue. No Green.'},
  {name:'Water is Life. Don’t Waste It.'},
  {name:'Keep Calm & Drink Water.'},
  {name:'Water is Your Best Friend for Life.'},
  {name:'Pure Water is the World’s First and Foremost Medicine. – Slovakian Proverb.'},
  {name:'Clean Water Should be a Necessity.'}
  
]
// console.log(div);
console.log(hydratedList)
const randomValue=Math.floor(Math.random() * hydratedList.length);
console.log(this.hydratedList[randomValue]?.name);
setInterval(() => {
  console.log("set interval")
  notification();
}, 1000*60)*60;
function notification(){
  console.log("hello notifications")
  chrome.notifications.create({
    title:"Keep CODING",
    message:"Keep Calm & Drink Water.",
    iconUrl:"images/get_started16.png",
    type: 'basic',
    silent:false,
    
  })
}

// items: [{ title: 'Item1', message: 'This is item 1.'},
    //       { title: 'Item2', message: 'This is item 2.'},
    //         { title: 'Item3', message: 'This is item 3.'}]