//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    visible:false,
    list:[
      {id:8,title:"背诵课文1",finished:true},
      {id:7,title:"练习1",finished:false},
      {id:6,title:"背诵课文2",finished:true},
      {id:5,title:"练习222222",finished:false},
      {id:4,title:"背诵课文3，阅读课文4，预习课文5",finished:true},
      {id:3,title:"练习3",finished:false},
      {id:2,title:"背诵课文4444444444",finished:true},
      {id:1,title:"练习4",finished:false}
    ]
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  destroyTodo: function(event){
    // console.log(event)
    // this.data.list.splice(event.currentTarget.dataset.index,1)
    this.data.list[event.currentTarget.dataset.index].finished = true
    this.setData({list:this.data.list})
  },
  showConfirm: function(){
    this.setData({visible:true})
  },
  confirm: function(event){
    // console.log("confirm",event)
    this.setData({visible:false})
    const message = event.detail.message
    const todo = {
      id:this.data.list.length+1,
      title: message,
      finished: false
    }
    this.setData({list:[todo].concat(this.data.list)})
  },
  cancel: function(event){
    // console.log("cancel",event)
    this.setData({visible:false})
  },
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
