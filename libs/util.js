import dayjs from 'dayjs'
const app = getApp()
app.dayjs = dayjs
const formatTime = (time)=>{

  //不在今年
  if(!dayjs().isSame(time,'year')){
    return dayjs(time).format('YYYY年M月D日')
  }
  //前天
  if(dayjs(time).isSame(dayjs().subtract(2,'day'),'day')){
    return '前天'
  }
  //昨天
  if(dayjs(time).isSame(dayjs().subtract(1,'day'),'day')){
    return '昨天'
  }
  //今天
  if(dayjs(time).isSame(dayjs(),'day')){
    return '今天'
  }
  //本周
  const day = ['日','一','二','三','四','五','六']
  if(dayjs().isSame(time,'week')){
    return '周'+day[dayjs(time).day()]
  }
  //不是本周
  return dayjs(time).format('M月D日')
}

const groupByCreatedAt = (_list)=>{
  let newArr = [];
  _list.forEach((item,i)=>{
    let index = -1;
    item.time = dayjs(item.updatedAt).format('hh:mm:ss')
    item.hour = dayjs(item.createdAt).hour()
    item.minute = dayjs(item.createdAt).minute()
    item.second = dayjs(item.createdAt).second()
    let isExists = newArr.some((newItem,j)=>{
      if(dayjs(item.createdAt).isSame(dayjs(newItem.createdAt),'date')){
        index = j;
        return true;
      }
    })
    if(!isExists){
      newArr.push({
        createdAt:dayjs(item.createdAt).format('YYYY-MM-DD'),
        timeDay:dayjs(item.createdAt).date(),
        timeMonth:dayjs(item.createdAt).month()+1,
        timeYear:dayjs(item.createdAt).year(),
        formattedTime:formatTime(item.createdAt),
        subList:[item]
      })
    }else{
      newArr[index].subList.push(item);
    }
  })
  return newArr;
}

const groupByUpdatedAt = (_list)=>{
  let newArr = [];
  _list.forEach((item,i)=>{
    let index = -1;
    item.time = dayjs(item.updatedAt).format('hh:mm:ss')
    item.hour = dayjs(item.updatedAt).hour()
    item.minute = dayjs(item.updatedAt).minute()
    item.second = dayjs(item.updatedAt).second()
    let isExists = newArr.some((newItem,j)=>{
      if(dayjs(item.updatedAt).isSame(dayjs(newItem.updatedAt),'date')){
        index = j;
        return true;
      }
    })
    if(!isExists){
      newArr.push({
        updatedAt:dayjs(item.updatedAt).format('YYYY-MM-DD'),
        timeDay:dayjs(item.updatedAt).date(),
        timeMonth:dayjs(item.updatedAt).month()+1,
        timeYear:dayjs(item.updatedAt).year(),
        formattedTime:formatTime(item.updatedAt),
        subList:[item]
      })
    }else{
      newArr[index].subList.push(item);
    }
  })
  return newArr;
}

export {groupByCreatedAt,groupByUpdatedAt}
