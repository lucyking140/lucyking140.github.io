(self.webpackChunklk_portfolio=self.webpackChunklk_portfolio||[]).push([[216],{741:(e,t,r)=>{var a,l=Object.create,s=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,h=(e,t,r,a)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let l of o(t))p.call(e,l)||l===r||s(e,l,{get:()=>t[l],enumerable:!(a=n(t,l))||a.enumerable});return e},c=(e,t,r)=>(((e,t,r)=>{t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>P}),e.exports=(a=d,h(s({},"__esModule",{value:!0}),a));var y=((e,t,r)=>(r=null!=e?l(i(e)):{},h(!t&&e&&e.__esModule?r:s(r,"default",{value:e,enumerable:!0}),e)))(r(791)),u=r(135),m=r(365);class P extends y.Component{constructor(){super(...arguments),c(this,"callPlayer",u.callPlayer),c(this,"playerID",this.props.config.playerId||"".concat("twitch-player-").concat((0,u.randomString)())),c(this,"mute",(()=>{this.callPlayer("setMuted",!0)})),c(this,"unmute",(()=>{this.callPlayer("setMuted",!1)}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){const{playsinline:r,onError:a,config:l,controls:s}=this.props,n=m.MATCH_URL_TWITCH_CHANNEL.test(e),o=n?e.match(m.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(m.MATCH_URL_TWITCH_VIDEO)[1];t?n?this.player.setChannel(o):this.player.setVideo("v"+o):(0,u.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then((t=>{this.player=new t.Player(this.playerID,{video:n?"":o,channel:n?o:"",height:"100%",width:"100%",playsinline:r,autoplay:this.props.playing,muted:this.props.muted,controls:!!n||s,time:(0,u.parseStartTime)(e),...l.options});const{READY:a,PLAYING:i,PAUSE:p,ENDED:h,ONLINE:c,OFFLINE:d,SEEK:y}=t.Player;this.player.addEventListener(a,this.props.onReady),this.player.addEventListener(i,this.props.onPlay),this.player.addEventListener(p,this.props.onPause),this.player.addEventListener(h,this.props.onEnded),this.player.addEventListener(y,this.props.onSeek),this.player.addEventListener(c,this.props.onLoaded),this.player.addEventListener(d,this.props.onLoaded)}),a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.callPlayer("pause")}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return null}render(){return y.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}c(P,"displayName","Twitch"),c(P,"canPlay",m.canPlay.twitch),c(P,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerTwitch.62001cb0.chunk.js.map