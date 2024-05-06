// // creat a function that takes as an argumnets and returns any item name,
// // example obj={100:"6 eggs","200:bread",300:"milk"}

interface shop{
    one: string,
    two:string,
    three:string
    };


    function superMart(): shop {

    const shop={
        one:"100",
        two:"200",
        three:"300"
    }
    return  shop;
    }

    
    
    let shop=superMart();
    console.log(shop);


   