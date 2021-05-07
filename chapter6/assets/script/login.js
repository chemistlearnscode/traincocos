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
        username:cc.EditBox,

    },

    // LIFE-CYCLE CALLBACKS:

    getData(){
        var data = [];
        data.push(this.username.string);
        let evt = new cc.Event.EventCustom('ans-login',true);
        evt.setUserData(data);
        this.node.dispatchEvent(evt);
        cc.log(data);
    },

    onLoad () {
        // this.node.on('')
        cc.Event.EventCustom
    },

    start () {

    },

    // update (dt) {},
});
