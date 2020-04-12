import {Component, h, Prop, State, Event, EventEmitter, Element} from '@stencil/core';

@Component({
  tag: 'psk-ss-app',
  shadow: false
})

export class PskSelfSovereignApp {

  @Prop() iframeSrc: string;
  @Prop() swPath: string;
  @Prop() appName: string;
  @Prop() csbSeed: string;
  @State() digestSeedHex;
  @State() seed;
  @Element() element;

  @Event({
    eventName: 'giveMeSeed',
    composed: true,
    cancelable: true,
  }) giveMeSeed: EventEmitter;





  componentDidLoad(){
    let iframe = this.element.querySelector("iframe");

    window.addEventListener("message",(event)=>{
      if(event.data.appIdentity){
        if(event.data.appIdentity === this.digestSeedHex){
          iframe.contentWindow.postMessage({seed:this.seed},iframe.src);
        }
      }

      if (event.data.status === "completed") {
        iframe.contentWindow.location.reload();
      }

      if (event.data.status === "error") {
        //handle error;
      }
    });

  }


  componentWillLoad() {


    return new Promise((resolve)=>{
      this.giveMeSeed.emit({appName:this.appName, callback:(err, seed)=>{
        if(err){
          throw err;
        }
        this.seed = seed;
        this.digestSeedHex = this.digestMessage(seed);
        resolve();
      }})
    });
  }

  // componentDidLoad() {
  //   //let newIframe = this.element.querySelector("iframe");
  //
  //   //TODO: this code should be moved to a separate controller
  //   // @ts-ignore
  //   // const BootLoader = require("boot-host").getBootScriptLoader();
  //   // BootLoader.createPowerCord(this.digestSeedHex, this.csbSeed, newIframe);
  //   // //TODO remove this test
  //   // setTimeout(() => {
  //   //   this.sendMessageToIframe(this.digestSeedHex, "Hi there " + this.digestSeedHex);
  //   // }, 1000);
  // }

  sendMessageToIframe(identity, message) {

    let sayEcho =  (message)=>{
      // @ts-ignore
      $$.interactions.startSwarmAs(identity, "echo", "say", message)
        .onReturn(function (err, result) {
          if (!err) {
            console.log("Iframe received: ", result);
            //ping-pong
            setTimeout(()=>{
              //sayEcho(result+"!");
            },10000)
          } else {
            console.log(err);
          }
        });
    };

    sayEcho(message);


    }

   digestMessage(message) {
    // @ts-ignore
    const PskCrypto = require("pskcrypto");
    const hexDigest = PskCrypto.pskHash(message, "hex");
    return hexDigest;
  }


  render() {
    let iframeSrc = window.parent.location + "iframe/" + this.digestSeedHex;
    return (
      <iframe sandbox="allow-scripts allow-same-origin allow-forms"
        frameborder="0"
        style={{
          overflow: "hidden",
          height: "700px",
          width: "100%"
        }}
        src={iframeSrc}/>
    )
  }
}
