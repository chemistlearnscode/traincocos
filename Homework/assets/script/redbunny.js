// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var bunnyDad = require("bunny");

cc.Class({
    extends: bunnyDad,

    properties: {
        redname:"Red",
        _timer:0,
    },

    // tiltleft(dt){
    //     this.node.rotation += 45*dt;
    // },

    // tiltright(dt){
    //     this.node.rotation += 135*dt;
    // },

    tilt(){
        if(this._timer<=30){
            this.node.skewX -= 1.5;
        }else if (this._timer<=60){
            this.node.skewX += 2.5;
        } else{
            this.node.skewX -= 1;
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        // this.tiltright(dt);
        // this.tilt();
        this._timer++;
        if(this._timer<=90){
            this.tilt(dt);
        }else if(this._timer>=150){
            this._timer=0;
        }
        

    },
});
