//const axios = require('axios');


/*
const form = document.getElementById("awsform")

form.addEventListener("submit",event=>{
    event.preventDefault()
    const emailId= document.getElementById("emailId").value
    
    const data={
        emailId
    }
    
    fetch('/lead',{        
        method:"POST",           
        //data:JSON.stringify(data),
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(res=>console.log)
    .catch(err=>console.error)
})
/*
const axios = require('axios');
const form = document.getElementById("awsform")


form.addEventListener("submit",event=>{
    event.preventDefault()
    const emailId= document.getElementById("emailId").value
    const data={emailId}
    
    fetch('/lead',{        
        method:"POST",           
        data:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(res=>console.log)
    .catch(err=>console.error)
})
/*

const data = {      
    emailId
  };


axios.post('https://5kx0mg69vc.execute-api.sa-east-1.amazonaws.com/digital/lead', data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


/*

form.addEventListener("submit",event=>{
    event.preventDefault()
    const emailId= document.getElementById("emailId").value
    const data={emailId}
    
    fetch('/lead',{        
        method:"POST",           
        data:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(res=>console.log)
    .catch(err=>console.error)
})
/*
formaws.addEventListener("submit",(e)=>{
    const data = {      
        awsinput
      };

      axios
        .post("https://89xudou1d2.execute-api.sa-east-1.amazonaws.com/prod/lead", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        
        
    
    e.preventDefault()
})


*/

/*
  <div class="inputFormat">
                    <form id="awsform" class="formStyle">
                        <input type="email" class="emailInput" name="email" id="awsinput">
                        <button type="submit" id="aws">Enviar</button>
                    </form>
                </div>
*/