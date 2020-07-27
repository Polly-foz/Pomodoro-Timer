// pages/tomato/tomato.js

const initialSeconds = 3
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
    console.log('confirm finished',event)
    this.setData({isFinishedConfirmVisible:false})
    // wx.navigateBack({
    //   delta: 1,
    // })
  },
  newGroup: function(){
    this.reset('resumed')
  },
  confirmAbandon:function(event){
    // console.log('abandon',event)
    this.reset()
    this.setData({
      isAbandonConfirmVisible:false
    })
    console.log(this.data)
    wx.navigateBack({
      delta: 1,
    })
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
          state:'finished'
        })
        this.setData({isFinishedConfirmVisible:true})
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

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('on ready',this.data)
    this.resume()
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