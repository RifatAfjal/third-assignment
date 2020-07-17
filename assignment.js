 // convert feet to mile start 
       // 1 mile = 5280 feet;
       function feetToMile(feet){
        const invalidMassege = "Please input valid number.";
        const validOutput = `${(feet/5280).toFixed(2)} miles`;
       // use conditional ternary operator 
        return (feet <= 0)? invalidMassege : validOutput;
   }

   let mile = feetToMile(10560);
   console.log(mile);
   // convert feet to mile end





   // Wood Calculator start 
   function woodCalculator(chair,table,bed){
        const invalidMassege = "Please input valid number.";
        const validOutput = `Total wood needed : ${chair*1 + table*3 + bed*5} cubic feet.`;
        //return the value
        return (chair < 0 || table < 0 || bed < 0) ? invalidMassege : validOutput;
   }
   // input valid number for a correct result
   let totalWoodNeeded = woodCalculator(2,5,3);
   console.log(totalWoodNeeded);
    // Wood Calculator End 




  // brick calculator  start 
  function brickCalculator(floor){
      // for every feet brick needed = 1000
      // less than or equal to ten, floor = 15 feet
      // greater than ten and less or equal to twenty, floor = 12 feet
      // greater than twenty, floor = 10feet
      const invalidMassege = "Please input a valid number"
      const firtstRange = 10*15*1000;
      const secondRange = 10*12*1000;
      // according to conditons, gives them their suitable value
      const oneToTen = `Total bricks required: ${floor*15*1000}`;
      const oneToTwenty = `Total bricks required: ${firtstRange + (floor-10)*12*1000}`;
      const aboveTwenty = `Total bricks required: ${firtstRange + secondRange + (floor-20)*10*1000}`;
 
      if(floor <= 0){
           return  invalidMassege;
      }
      else if(floor <= 10){
           return oneToTen;
      }
      else if(floor <= 20){
          return elevenToTwenty;
      }
      else{
          return aboveTwenty;
      }
  }
  
  const TotalBric = brickCalculator(9);
  console.log(TotalBric);
  // brick calculator end 


  

  //tinyFriend  function start
  function tinyFriend(nameArr){
    /*sometimes array gives me more than one items which may have equal length for being the minimum one.
     for this reason i want to sort the array and Output the first one.........*/
    const sortedArr = nameArr.sort();
    let minName = sortedArr[0];

    //test all the name which one is greater
    for(let i = 0; i < sortedArr.length; i++) {
        if(minName.length > sortedArr[i].length){
            minName = sortedArr[i];
        }
    }
    return minName;
  }

  let smallestName = tinyFriend(["Roki", "Adnan", "Mamun", "Sahriyer", "Rakib", "Amir", "Sumon", "Mahmudul", "xahidull"]);
  console.log(smallestName);
  //tinyFriend  function end