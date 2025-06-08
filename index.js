const express = require("express")
const app = express()
app.use(express.json())

app.post("/prime",function(req,res){
    const number = req.body.number 
    
      if(typeof(number) !== "number"){
       return  res.status(400).json({
            message: "Please give a data of number type"
        })
    }

    
    function Isprime(number){
        if(number <=0){
            return false
        }else if(number==1){
            return false
        }else{
            for(let i=2 ; i<number;i++){
                if (number%i == 0){
                    return false
                }
             
            }
         return true
            
        }
    }
  
    if(Isprime(number)){
       return  res.status(200).json({
            message : `Yes ${number}  is a prime number`
        })
 
    }else if (number <= 0){
        return res.status(200).json({
            message :  "Please Provide a number greater than 1"
        })
    }else if (number == 1){
        return res.status(200).json({
            message :  "1 is neither Prime nor composite"
        })
    }else if (!Isprime(number)){
        return res.status(200).json({
            message :  `No ${number} is not a Prime Number`
        })
    }
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});