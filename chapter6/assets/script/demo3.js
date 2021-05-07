// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

    const EventEmitter = require('events');
    class mEmitter{
        constructor(){
            this._emiter = new EventEmitter();
            //truyen so luong listener
            this._emiter.setMaxListeners(100);
        }
        emit(...args)
        {
            this._emiter.emit(...args);
        }
        //giong node.on
        registerEvent(event, listener) {
            this._emiter.on(event, listener);
        }
        //lang nghe 1 lan roi off
        registerOnce(event, listener){
            this._emiter.once(event, listener);
        }
        //ko nghe nua
        removeEvent(event, listener) {
            this._emiter.removeListener(event, listener);
        }
        //dong scene, khi chuyen tu scene nay sang scene khac
        destroy() {
                this._emiter.removeAllListeners();
                this._emiter = null;
                mEmitter.instance = null;
        } 
    }
    mEmitter.instance = null;
    module.exports = mEmitter;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    

    // update (dt) {},