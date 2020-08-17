// 其它
// 找出一个多维数组中，出现次数大于m的项

function findGtM(arr,m){
  arr = arr.flat(Infinity);
  let map=new Map(),count=0,res=[];
  for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
      count=map.get(arr[i]);
      count++;
      map.set(arr[i],count)
    }else {
      map.set(arr[i],1)
    }
  }
  console.log(map)
  map.forEach((value,key)=>{
    if(value>m){
      res.push(key);
    }
  })
  return res;
}
console.log(findGtM([1,2,3,4,1,2,2,7,5,1],2))