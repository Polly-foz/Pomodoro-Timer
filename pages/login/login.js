// pages/login/login.js
import {User} from "../../models/index"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoggedIn:false
  },
  login: function(event){
    User.login().then(user=>{
      console.log('user',user)
      // User.getUserInfo().then(res=>{
      //   console.log('res',res)
      // })
    }).catch(error=>console.log('error',error))
    wx.reLaunch({
      url:"/pages/index/index"
    })
  },
  navToHome: function (event){
    wx.reLaunch({
      url:"/pages/index/index"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('data1',this.data)
    // User.isLoggedIn().then(res=>{
    //   this.setData({
    //     isLoggedIn: true
    //   })
    // }).catch(res=>{
    //   this.setData({
    //     isLoggedIn: false
    //   })
    // })
    // console.log('data2',this.data)
    // console.log("ogged in?",User.isLoggedIn())
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