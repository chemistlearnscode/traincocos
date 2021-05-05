// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        progressbar:cc.ProgressBar,
        _timer:0
    },

    // LIFE-CYCLE CALLBACKS:
    adjustprogress(dt){
        this._timer +=dt;
        let speed = 100/180;
        let progress = this.progressbar.progress;
        if (progress<1){
            progress += this._timer*speed;
        } else{
            //progress = this._timer*speed;
        }
        this.progressbar.progress = progress;    
    },

    // onLoad () {},

    start () {

    },

    update (dt) {
        this.adjustprogress(dt);
    },
});
