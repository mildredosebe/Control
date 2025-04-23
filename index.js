 //Qz 1
const inAttempt = () => {
    let loginAttempt = 0;
  
    while (loginAttempt <= 3) {
       console.log('login failed'); 
      loginAttempt += 1;
     
    }
    if(loginAttempt > 3){
        console.log('Account locked');
    
    }

    else{
     console.log('Account locked');
     

    }

  }
  inAttempt()

  // quiz 2

  const votesUsingDoWhile= (votes) => {
    let i = 0;
    do {
      console.log(`Votes using do...while ${votes[i]}`);
      i++;
    } while (i < votes.length);
   
  }
  let  votes= [1,2,3,4,5,6,7,8,9] ;
  votesUsingDoWhile(votes)
  
  // quiz

  const daysOfTheWeek = (days) => {

    days.forEach(day => { 
    switch(day){
      case 1:
        console.log("Sunday");
        break;
      case 2:
        console.log("Monday");
        break;
      case 3:
        console.log("Tuesday");
        break;
      case 4:
        console.log("Wednesday");
        break;
      case 5:
        console.log("THursday");
        break;
      case 6:
        console.log('FRiday');
        break;
      case 7:
        console.log("sartuday");
        break;
      default:
        console.log('The end');
        break;
      
    }
    })
  }
      
  let days = [1,2,3,4,5,6,7,8]
  daysOfTheWeek(days)

    //quiz 4

  const passwordStrength = (password) => {

    for(let i = 0; i<password.length; i++){
   
      if(password[i].length >=8){
   
        console.log(`Password ${password[i]} is strong`);
        
      }
   
      else if(password[i].length<8){
   
       console.log(`password ${password[i]} is weak`);
   
      }
    }
    }
   
     let password = ["pass123", "mypassword", "12345678", "abc", "securePass!"];
     passwordStrength(password)
      
     //quiz 5

     const greetingsBasesOnLanguage = (greetings) =>{

        greetings.forEach(languages =>{

         switch(languages){
             case 'English':
               console.log("Hello");
          break;
             case 'French':
             console.log("Bonjour");
          break;
             case 'Swahili':
             console.log("Habari");
          break;
          default:
            console.log("Incorrect language");
            break;
            
         }

        })

      }
      let languages =['English','French','Swahili','french']

      greetingsBasesOnLanguage(languages )
      

       // quiz 6
      const weatherDashboard= (temperature) => {

        for(let i = 0; i<temperature.length; i++){
       
          if(temperature[i] >=30){
       
            console.log(`Hight heat alert! ${temperature[i]} `);
            
          }
       
          else if(temperature[i]<=15){
       
           console.log(`Cold alert!${temperature[i]}`);
           
       
          }
            else{

               console.log(`Normal conditions ${temperature[i]}`);
               

            }
        }
        }

        let temperature = [10,20,30,40,50,60,70,80,15]
        weatherDashboard(temperature)

        let Queue = ["Mildred","Ann","Norah","Issabela"]


  //quiz 7
        const emptyQueue = () =>{    

          while (Queue.length > 0){

          let currentQueue = Queue.shift();
          
          console.log(`Registering user ${currentQueue}`);
          }
       
        }   

        emptyQueue()

        // quiz 8
      
        const stimulateAttempt = () => {
            let score = 0;
            let attempt = 1;
          
          
            do {
          
              score +=10
              console.log(`Attempt ${attempt}:score ${score}`);
              attempt ++;
          
          
            }
            while (score < 50);
  
            console.log("Score is more than 50.Test passed!");
  
            
             }
          
          stimulateAttempt ()
          