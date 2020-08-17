// 插入排序
// 类似于扑克牌摸牌整牌。时间复杂度最好是O(n) 最差是O(n^2) [ 在位，稳定 ]

// 思路：假设第一张牌已经插好，从第二张牌开始依次插入，每张牌都与前面已经排序好的牌进行比较，找到自己应该插入的位置

const insertSort=(arr)=>{
 let [index,item,n]=[0,0,arr.length];
 for(let i=1;i<n;i++){
   index=i-1;
   item=arr[i];
   while(index>=0 && arr[index]>item){
     arr[index+1]=arr[index];
     index--;
   }
   arr[index+1]=item;
 }
 return arr;
}
console.log(insertSort([3,1,2,5,4,7,1,3,5]));