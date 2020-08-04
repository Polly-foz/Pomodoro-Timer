// pages/tomato/tomato.js
import {Tomato} from '../../models/index'
const initialSeconds = 5
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seconds: initialSeconds,
    time: '',
    timer: null,
    state:'resumed',
    isAbandonConfirmVisible: false,
    isFinishedConfirmVisible: false
  },
  confirmFinished: function(event){
    console.log('confirm finish',event)
    Tomato.add(event.detail.message,false)
    .then(tomato=>{
      wx.showToast({
        title: '恭喜，成功完成一个番茄！',
        icon: 'success',
        duration: 2000
      })
    })
    .catch(error=>{
      wx.showToast({
        title: '出错了，添加番茄失败TAT...',
        icon:'none',
        duration: 2000
      })
    })
    .finally(()=>{
      this.setData({isFinishedConfirmVisible:false})
    })
  },
  newGroup: function(){
    this.reset('resumed')
  },
  confirmAbandon:function(event){
    // console.log('abandon',event)
    console.log("description",event.detail)
    Tomato.add(event.detail.message,true)
    .then(tomato=>{
      wx.showToast({
        title: '你放弃了这个番茄...',
        icon: "none",
        duration: 2000
      })
    }).catch(error=>{
      wx.showToast({
        title: '出错了，放弃番茄失败TAT...',
        icon: "none",
        duration: 2000
      })
    }).finally(()=>{
      this.setData({
        isAbandonConfirmVisible:false
      })
      this.reset('finished')
      // wx.navigateBack({
      //   delta: 1,
      // })
    })
    // console.log(this.data)
  },
  cancelAbandon: function(event){
    this.setData({isAbandonConfirmVisible:false})
    this.resume()
  },
  showAbandonConfirm: function(){
    this.pause()
    this.setData({
      isAbandonConfirmVisible: true
    })
  },
  reset: function(state='paused'){
    console.log('reset',state)
    clearInterval(this.data.timer)
    this.setData({
      state:state,
      seconds:initialSeconds,
      time: this.formatTime(initialSeconds)
    })
    if(state==='resumed'){
      this.resume()
    }
  },
  pause:function (){
    clearInterval(this.data.timer)
    this.setData({state:'paused'})
  },
  resume:function(){
    this.startTimer()
    this.setData({state:'resumed'})
  },
  startTimer:function(){
    clearInterval(this.data.timer)
    this.data.timer = setInterval(()=>{
      this.data.seconds -= 1
      this.setData({
        seconds: this.data.seconds,
        time: this.formatTime(this.data.seconds)
      })
      if(this.data.seconds===0){
        clearInterval(this.data.timer)
        this.setData({
          seconds:this.data.seconds,
          state:'finished',
          isFinishedConfirmVisible:true
        })
      }
      console.log(this.data.timer,this.data.time)
    },1000)
  },
  formatTime: function(seconds){
    let m = Math.floor(seconds/60)
    let s = seconds%60
    if((s+'').length===1){
      s = '0' + s
    }
    return m + ':' + s
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('on load',this.data)
    this.resume()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(this.data.timer)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})