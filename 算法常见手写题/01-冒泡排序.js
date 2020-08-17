// 冒泡排序 : 每一次扫描列表都找出一个最大值沉到底部。时间复杂度最好是 O(n) ，最差是O(n^2) [ 在位，稳定 ]

// 思路：双重循环，最外层控制轮数，每轮产生当轮的最大值沉到底部。每经过一轮少一个元素。

//冒泡排序
const bubbleSort=(arr)=>{
 let [temp,n]=[0,arr.length];
 for(let i=0;i<n-1;i++){
   for(let j=0;j<n-1-i;j++){
     if(arr[j]>arr[j+1]){
       temp=arr[j+1];
       arr[j+1]=arr[j];
       arr[j]=temp;
     }
   }
 }
 return arr;
}
console.log(bubbleSort([2,5,6,1,3,0,4]));

//冒泡排序---> 优化,加一个标记didSwap，如果那一趟排序没有交换元素，说明这组数据已经有序，不用再继续下去。
const bubbleSort1=(arr)=>{
  let [temp,n,didSwap]=[0,arr.length,false];
  for(let i=0;i<n-1;i++){
    for(let j=0;j<n-1-i;j++){
      if(arr[j]>arr[j+1]){
        temp=arr[j+1];
        arr[j+1]=arr[j];
        arr[j]=temp;
        didSwap=true
      }
    }
    if(didSwap===false){
      return;
    }
  }
  return arr;
}