function Numbertype(num) 
{
    let result;
    if (num>0) {
        result = "positive";    
    }
     
    else if (num<0) {
        result = "negative";   
    } 
    else 
    {
        result = "zero";    
    }
     return result;
   }
    // Numbertype(0);
    // console.log(Numbertype(0));
    //  Numbertype(10);
    // console.log(Numbertype(10));
    Numbertype(-4);
    console.log(Numbertype(-4));


