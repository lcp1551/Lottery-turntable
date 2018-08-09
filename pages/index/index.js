//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    animationData:{},
    hidden:true,       //中奖展示
    disabled:false,    //指针按钮是否可点击
    i:0,                    //第几次抽奖
    prize:'',              //几等奖
    prizes:''             //转盘转完展示
  },
  getDegree:function(){
    return Math.floor(Math.random()*361);
  },  
  onTurnTap:function(e){
    var animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease'
    })
    this.animation = animation;
    var degree = Math.abs(this.getDegree());
    var i = this.data.i +1;
    this.setData({
      disabled:true,
      i:i
    })
    if(degree > 0 && degree<= 30){
      this.setData({
        prize:'10元现金券'
      })
    }else if(degree > 30 && degree <= 90){
      this.setData({
        prize: '5元现金券'
      })
    } else if (degree > 90&& degree <= 150) {
      this.setData({
        prize: '20元现金券'
      })
    } else if (degree > 150 && degree <= 210) {
      this.setData({
        prize: '100元现金券'
      })
    } else if (degree > 210 && degree <= 270) {
      this.setData({
        prize: '1元现金券'
      })
    } else if (degree > 270 && degree <= 330) {
      this.setData({
        prize: '50元现金券'
      })
    } else if (degree > 330 && degree <= 360) {
      this.setData({
        prize: '10元现金券'
      })
    }

    animation.rotate(degree + 3600*(this.data.i)).step();
    this.setData({
      animationData: animation.export()
    })
    setTimeout(function(){
      this.setData({
        disabled: false,
        hidden: false,
        prizes:this.data.prize
      })
    }.bind(this),2000)
    
  }
})
