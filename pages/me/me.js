// pages/me/me.js
import {Todo,Tomato} from '../../models/index'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    tab:"tomatoes",
    todos:[],
    tomatoes:[]
  },

  // tabs
  changeTab: function(event){
    // console.log(event.currentTarget.dataset.tab)
    this.setData({tab:event.currentTarget.dataset.tab})
  },
  test: function(event){
    console.log('tap',event)
    const tomato = event.currentTarget.dataset.tomato
    // const time = this.format(tomato.createAt)
    // console.log('time',time)
  },

  fetchTomatoes: function (){
    wx.showLoading({
      title: '正在加载番茄历史',
    })
    console.log('onLoad')
    Tomato.findAll()
    .then(res=>{
      this.setData({tomatoes:res})
    })
    .catch(error=>{
      console.error
    }).finally(()=>{
      wx.hideLoading()
    })
  },
  fetchTodos: function(){
    wx.showLoading({
      title: '正在加载完成的任务',
    })
    console.log('onLoad')
    Todo.findAllFinished()
    .then(res=>{
      this.setData({todos:res})
    })
    .catch(error=>{
      console.error
    }).finally(()=>{
      wx.hideLoading()
    })
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
    this.fetchTomatoes()
    this.fetchTodos()
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