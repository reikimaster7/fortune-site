function fortune(){

const fortunes=[
"大吉✨今日は最高の一日！",
"中吉😊良いことが起きそう",
"小吉🌱努力が実る日",
"吉🍀平和な一日",
"末吉💭焦らず行こう",
"凶⚠慎重に行動しよう"
];

const random=Math.floor(Math.random()*fortunes.length);

document.getElementById("result").innerText=fortunes[random];

}