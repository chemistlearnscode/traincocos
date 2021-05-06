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
        editbox:cc.EditBox,
        label:cc.Label,
        button:cc.Button,
    },
    showLabel(){
            this.label.string="Please input your phone number";
    },

    // LIFE-CYCLE CALLBACKS:
    checkLength(){
        if(this.editbox.string.length===10){
            this.label.enabled=false;
            // cc.log("abc");
        }
    },

    showButton(){
        this.button.node.active=true;
    },

    onLoad () {
        this.button.node.active=false;
    },

    start () {
        // this.button.active=false;
        // cc.log(this.button);
    },

    // update (dt) {},
});
