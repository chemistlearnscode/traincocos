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
        btnA: cc.Button,
        btnB: cc.Button,
        label:cc.Label,
        sprite:cc.Sprite,
        newFrame:cc.SpriteFrame,
        _timer:0,
        _isChangeFrame:false,
        _isclicked:false
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.btnA.node.on('click',this.operateA,this);
        // this.btnB.node.on('click',this.operateB,this);
    },
    operateA(){
        this.label.string = "Hello Day 3";
    },

    isClickbtnB(){
        this._isclicked=true;
    },

    operateB(dt){
        if(this._isChangeFrame==false){
            this._timer += dt;
            if(this._timer>=3){
                cc.error(this.sprite);
                this.sprite.spriteFrame = this.newFrame;
                this._isChangeFrame = true;
                for(let i=3;i>=0;i--){
                    this.label.string = i;
                }
            }
        }
    },

    start () {

    },

    update (dt) {
        if(this._isclicked===true){
            this.btnA.Interactable=false;
            this.operateB(dt);
        }
    },
});
