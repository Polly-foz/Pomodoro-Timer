// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:"history",
    lists:{
      '本周四':[
        {id:1,time:'14:00',title:'书法练习完成一页fahfjdfshfkadshfkjldashfjkdshjfsdhajkfhadsklhfadkshf搞快点'},
        {id:2,time:'15:00',title:'书法练习完成二页书法练习完成二页书法练习完成二页书法练习完成二页书法练习完成二页书法练习完成二页书法练习完成二页'}
      ],
      '本周五':[
        {id:3,time:'14:00',title:'书法练习完成一页'},
        {id:4,time:'15:00',title:'书法练习完成二页'},
        {id:5,time:'14:00',title:'书地方撒的范德萨'},
        {id:6,time:'15:00',title:'书法练阿凡达二页'},
        {id:7,time:'14:00',title:'书法练习完成一页'},
        {id:8 ,time:'15:00',title:'书法练习完成二页'}
      ],
      '本周六':[
        {id:9,time:'14:00',title:'书法练习完成一页'},
        {id:10,time:'15:00',title:'书法练习完成二页'},
        {id:11,time:'15:00',title:'书法练阿凡达二页'},
        {id:12,time:'14:00',title:'书法练习完成一页'},
        {id:13,time:'15:00',title:'书法练习完成二页'}
      ]
    }
  },

  // tabs
  changeTab: function(event){
    // console.log(event.currentTarget.dataset.tab)
    this.setData({tab:event.currentTarget.dataset.tab})
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