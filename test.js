//郭郭写测试的文件
// 能不删嘛
// 昨天写的方法都没有了
// 我脑子记性不好
// 昨天写的  今天就忘了1
// 别删了 求求了
// 要不你删你的时候叫我一声  我保存一下 卑微😱

//测试 时间数组封装
var arr=[
    { name: "张奇", Time: "2019-08-06 17:24:11", "charge": "800", "totaltime": "7599000", "reachTime": "2017-01-04"  },
    { name: "张奇", Time: "2019-08-03 17:22:22", "charge": "100", "totaltime": "922635", "reachTime": "2017-01-03"  },
    { name: "张奇", Time: "2019-08-02 19:36:33", "charge": "200", "totaltime": "", "reachTime": "2017-01-02"  },
    { name: "张奇", Time: "2019-08-01 16:20:07", "charge": "100", "totaltime": "1457076", "reachTime": "2017-01-01"  }
];
//改良版
const zList =[];
const gList = [];
var d = new Date();
var years = d.getFullYear();
var month = d.getMonth() + 1;
var days =  d.getDate()-5;
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();
var time = years + "-0" + month + "-0" + days +' '+hours + ":" + minutes + ":" + seconds;
console.log(33,time)
const con ="2019-08-02 21:37:33"
// if(time > arr[2].Time){
//
// }
arr.forEach(v=>{
    console.log(v.Time)
    if( con < v.Time){
        zList.push(v);
    }else{

        gList.push(v)
    }
})
console.log(11,zList)
console.log(22,gList)











//自己的想法
// var map = new Object();
// for(var i = 0; i< arr.length;i++){
//     var item = arr[i];
//     var time = item.Time.split(' ');
//     if(!map[time]){
//         var array = new Array();
//         array.push(item);
//         map[time] = {time:time,money: parseInt(item.charge),file:array};
//     }else{
//         var  temp = map[time];
//         temp.money  += parseInt(item.charge);
//         temp.file.push(item);
//         map[time] = temp;
//     }
// }
//
// var resultArray = new Array();
// for(var key in map){
//     resultArray.push(map[key]);
// }
// console.log(JSON.stringify(resultArray));

