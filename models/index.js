const AV = require('./libs/av-core-min.js');
const adapters = require('./libs/leancloud-adapters-weapp.js');

AV.setAdapters(adapters);
AV.init({
  appId: 'Fj5MWyHSQWVm9qAmFg46BUsS-gzGzoHsz',
  appKey: 'h3KIzH1urOwntYwC41N5TIo5',
  // 请将 xxx.example.com 替换为你的应用绑定的自定义 API 域名
  serverURLs: "https://fj5mwyhs.lc-cn-n1-shared.com",
});

console.log('AV init!!!!!')

const User = {
  login(){
    return new Promise((resolve,reject)=>{
      AV.User.loginWithMiniApp().then(user => {
        this.globalData.user = user;
        resolve(user)
      }).catch(error=>{
        console.error(error)
        reject(error)
      });
    })

  },
}

export {User};