// 字面上的解释是“分而治之”，就是把一个复杂的问题分成两个或更多的相同或相似的子问题，直到最后子问题可以简单的直接求解，原问题的解即子问题的解的合并。

// 归并排序
// 时间复杂度O (n log n) [ 不在位，稳定 ]

//归并排序
const merge=(arr,l,r,m)=>{
 let [i,j,k,helpArr]=[l,m+1,l,[]];
 while( i<=m && j<=r){
   if(arr[i]<=arr[j]){
     helpArr[k++]=arr[i++];
   }
   else{
     helpArr[k++]=arr[j++];
   }
 }
 while(i<=m){
   helpArr[k++]=arr[i++];
 }
 while(j<=r){
   helpArr[k++]=arr[j++];
 }
 for(let i=l;i<=r;i++){
   arr[i]=helpArr[i];
 }
 return arr;
}
const mergeSort=(arr,l,r)=>{
 let mid;
 if(l<r){
   mid=Math.floor((l+r)/2);
   mergeSort(arr,l,mid);
   mergeSort(arr,mid+1,r);
   merge(arr,l,r,mid);
 }
 return arr;
}
console.log(mergeSort([8,4,5,7,1,3,6,2],0,7));