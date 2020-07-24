// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: (new Date()).toString(),
    id: 123,
    names:['小红','小李','小王'],
    arr:[1,2,3],
    color:"blue",
    active:false,
    like:true
  },

  pushArr(){
    // console.log('data',this.data)
    const arr = this.data.arr
    const last = arr[arr.length-1]
    this.setData({arr:this.data.arr.concat([last+1])})
    // console.log('new data',this.data)
  },
  changeColor(){
    this.setData({
      color:this.data.color==='blue'?'green':'blue',
      active:!this.data.active
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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