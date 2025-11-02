
document.addEventListener('DOMContentLoaded',function(){

  const searchButton = document.getElementById('search-button');
  const usernameInput = document.getElementById('input-fild');
  const  StackCon = document.querySelector('.stack-container');

  const easyProgressCircle = document.querySelector('.easy-progress Circle1');
  const mediumProgressCircle = document.querySelector('.Medium-progress Circle2');
  const HardProgressCircle = document.querySelector('.Hard-progress Circle3');

  const EasyLabel = document.getElementById('Easy');
  const MediumLabel = document.getElementById('Medium');
  const HardLabel = document.getElementById('Hard');
  const CardStackCon = document.querySelector('.Stack-Card');


  // check User Name Validate
  function Validate(Name){
              if(Name.trim() === ""){
                 alert("User Name Should not be empty");
                 return false;
              }
    const Regex = '^(?=.{1,15}$)[a-zA-Z0-9](?:[a-zA-Z0-9_-]*[a-zA-Z0-9])?$'
    const isMatching = Regex.test(Name);
    if(!isMatching){
      alert('Invalid User name ');
    }
    return isMatching;
  }

  async function CheckID(Name){
    const Url = `https://leetcode-stats-api.herokuapp.com/${Name}`
    try{

          searchButton.textContent = "Seaching Details....";
          searchButton.disabled = true;

          const Reponce = await fetch(Url);
          if(!Reponce.ok){
                 throw new Error("Unable To fetch a Data ")        
          }

          const Data = await Reponce.json();
          console.log("Logging Details " , Data);
    }catch(error){
    }
    finally{
       
    }
  }


  searchButton.addEventListener('click',function(){
         const Name=usernameInput.value;
         console.log("LeetCode User Name => ",Name);
         if(Validate(Name)){
                CheckID(Name);
         }


  });

});