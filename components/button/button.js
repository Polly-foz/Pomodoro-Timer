Component({
  options: {
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  properties: { 
      size:{
        type:String,
        value:''
      },
      color:{
        type:String,
        value:'default'
      }
   },
  methods: { /* ... */ }
})