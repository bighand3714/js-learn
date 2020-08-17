function myInstanceOf(left,right){
  let prototype = right.prototype;
  let proto = Object.getPrototypeOf(left);
  while(true){
      if(proto === null || proto === undefined){
          return false;
      }
      if(proto === prototype) return true;
      proto = Object.getPrototypeOf(proto);
  }
}