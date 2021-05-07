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
        username: cc.EditBox,
        login: cc.Button,
        label: cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.listenEvent()
    },

    listenEvent() {
        this.node.on('ans-login', this.onhh, this)
    },
    onhh(evt) {
        let data = evt.getUserData();
        cc.log('ok')
        this.label.string="Welcome to "+data[0];
    },
    start() {

    },

    // update (dt) {},
});
