//index.js
//获取应用实例
const app = getApp()
import {Todo, User} from '../../models/index'
let targetTodo = null;
let targetIndex = null;
Page({
  data: {
    visible:false,
    list:[],
    finishedVisible: true,
    updateConfirmVisible: false
  },
  updateTodo: function(event){
    console.log('update todo',event)
    targetTodo = event.currentTarget.dataset.todo
    targetIndex = event.currentTarget.dataset.index
    this.setData({updateConfirmVisible:true})
  },
  confirmUpdate: function(event){
    console.log('confirm update',event)
    wx.showLoading({
      title: '正在创建任务',
    })
    Todo.update({
      id:targetTodo.id,
      description:event.detail.message,
      finished:targetTodo.attributes.finished
    }).then(todo=>{
      console.log('index',targetIndex)
      this.data.list[targetIndex].attributes.description = event.detail.message
      this.setData({
        list: this.data.list
      })
      wx.showToast({
        title: '修改成功!',
        duration: 2000
      })
    }).catch(error=>{
      console.error(error)
      wx.showToast({
        title: '修改失败...',
        icon:'none',
        duration:2000
      })
    }).finally(()=>{
      this.setData({updateConfirmVisible:false})
      wx.hideLoading()
    })
  },
  cancelUpdate: function(event){
    this.setData({updateConfirmVisible:false})
  },
  changeFinishedVisible: function (event){
    console.log(event)
    const finishedVisible = this.data.finishedVisible
    this.setData({
      finishedVisible:!event.detail.value
    })
  },
  destroyTodo: function(event){
    // console.log(event)
    const index = event.currentTarget.dataset.index
    const item = this.data.list[index]
    const finished = item.attributes.finished
    Todo.update({id:item.id,description:item.attributes.description,finished:!finished})
    .then(res=>{
      this.data.list[index].attributes.finished = !finished
      this.setData({list:this.data.list})
    }).catch(error=>{
      console.error
    })
  },
  showConfirm: function(){
    this.setData({visible:true})
  },
  confirm: function(event){
    const description = event.detail.message
    Todo.add(description).then(todo=>{
      const _todo = {
        attributes:{
          description: todo.attributes.description,
          finished: todo.attributes.finished
        },
        id:todo.id
      }
      const _list = [_todo].concat(this.data.list)
      console.log('list',_list)
      this.setData({list:_list,visible:false})
    })
    .catch(error=>{
      console.error
      this.setData({visible:false})
    })
  },
  cancel: function(event){
    // console.log("cancel",event)
    this.setData({visible:false})
  },
  onLoad: function (){
    wx.showLoading({
      title: '正在加载任务...',
    })
    Todo.findAll().then(res=>{
      console.log('res',res)
      this.setData({list:res})
      console.log('data',this.data)
      wx.showToast({
        title: '获取任务列表完成！',
        duration: 2000
      })
    }).catch(error=>{
      wx.showToast({
        title: '获取任务列表失败！',
        icon:"none",
        duration: 2000
      })
    }).finally(()=>{
      wx.hideLoading()
    })
  }
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
