function rem(arr1,arr2){
    let results = [];
    let j =0;
    function mapfunc1(data){
      let result={};
      result.userId = data.id;
      result.name = data.name;
      result.orders = [];
      for(let i =0;i<arr2.length;i++){
        if(data.id === arr2[i].userId){
          let order={}
          order.orderId = arr2[i].orderId;
          order.productName = arr2[i].productName;
          result.orders.push(order);
        }
      }
      console.log({result})
      return result;
      
    }
    
    results = arr1.map(mapfunc1);
    console.log(results);
    
    
  }
  const users = [
      {
        id: 1,
        name: "Aman",
        city: "Pune",
      },
      {
        id: 2,
        name: "Rahul",
        city: "Delhi",
      },
      {
        id: 3,
        name: "Abhinav",
        city: "Dehradun",
      },
    ];
  
    const orders = [
      {
        orderId: 101,
        userId: 1,
        productName: "iPhone 12 Pro",
      },
      {
        orderId: 102,
        userId: 1,
        productName: "iPhone 13 Pro",
      },
      {
        orderId: 103,
        userId: 1,
        productName: "iPhone 14 Pro",
      },
      {
        orderId: 104,
        userId: 2,
        productName: "Samsung S23",
      },
    ];
  rem(users,orders);