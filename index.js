function isEqual(first ,second){
   if(typeof(first) === typeof(second)){
        return first === second;
   }else{
    return false;
   }
}

module.exports = isEqual;