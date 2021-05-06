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
        password:cc.EditBox,
        labelusername:cc.Label,
        labelpassword:cc.Label
    },

    // LIFE-CYCLE CALLBACKS:
    showInstruction(){
        this.labelusername.string="Username chi nhan A-Z,a-z,0-9. Username ko qua 10 ky tu";
        this.labelpassword.string="Password min 6 ky tu, max 10 ky tu,can it nhat 1 chu thuong 1 chu hoa va 1 so";
    },

    throwError(){
        var us=/[A-Za-z0-9]+/;
        var pw="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$";

    },

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
