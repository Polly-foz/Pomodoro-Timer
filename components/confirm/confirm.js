// components/confirm/confirm.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder:{
      type:String,
      value:''
    },
    visible:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    message:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    confirm: function(){
      this.triggerEvent("confirm",{message:this.data.message})
    },
    cancel:function(){
      this.triggerEvent("cancel")
    }
  }
})
