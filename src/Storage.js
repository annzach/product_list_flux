const Storage = {

  read(key) {
    console.log("inside read");
    const serializedData = localStorage[key];
    console.log("serializedData",serializedData);
    let localStorageProducts;
    try{
      localStorageProducts = JSON.parse(serializedData);
      console.log("schedules localStorage",localStorageProducts);
      return localStorageProducts;
    }
      catch(err){
        return null;
      }
  },

  write(key,data) {
    const serializedData =  JSON.stringify(data);
    localStorage[key] = serializedData;
  }
}

export default Storage;

