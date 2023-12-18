
dailymotion
  .createPlayer('dm-player', {
      video: 'x873541',
      params: {
      //startTime: 1,
      mute: true,
      },
    })
.then((player) => {
  player.on(dailymotion.events.PLAYER_START, callback)
  player.on(dailymotion.events.VIDEO_PAUSE, divAppear)
  player.on(dailymotion.events.VIDEO_PLAY, callback)
})
//.then((player) => player.on(dailymotion.events.VIDEO_PAUSE, divAppear))
.catch((e) => console.error(e));


function callback(state) {
  console.log("%cReceived PLAYER_START event. Current state is:",'color: green; background: yellow; font-size: 20px');
  var overlay = document.querySelector(".info");
  overlay.style.display = "none";

}


/*
dailymotion
  .getPlayer('dm-player')
.then((player) => player.on(dailymotion.events.VIDEO_PAUSE, divAppear))
.catch((e) => console.error(e));
*/

function divAppear(state) {
  console.log("%cReceived VIDEO_PAUSE event. Current state is:", 'color: yellow; background: green; font-size: 15px', state);
  var overlay = document.querySelector(".info");
  overlay.style.display = "inline-block";
}


function playVideo() {
  console.log("on click 1233")
  dailymotion
    .getPlayer()
    .then((player) => {
      player.play()
  })
}
