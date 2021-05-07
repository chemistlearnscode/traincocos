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
        enable:true,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // this.node.on('mousedown',this.funcconsole.bind(this));
        this.node.on('sayhello',function(evt){
            cc.log(evt);
            let data = evt.getUserData();
            cc.log(data);
        })
    },
    // funcconsole(event){
    //     console.log('hello');
    //     // this.enable=false;
    //     // cc.log(this.enable);
    // },
    // onclick(){
    //     // cc.log('hi');
    //     // this.enable=false;
    //     // this.node.off('mousedown',this.funcconsole.bind(this));
    //     // cc.log(this.enable);
    //     this.node.emit('sayhello','hello Minh','1','2','3','4','5');
    // },

    start () {

    },

    // update (dt) {},
});
