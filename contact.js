function addContact() {
    const add= document.getElementById("add");
    add.addEventListener("click", function() {
        document.querySelector('.bg-modal').style.display="block";
    })

}

addContact();

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".bg-modal").style.display="none";
})

const form= document.getElementById("contactform");
form.addEventListener("submit",saveContact)

function saveContact (e) {

    
    console.log("e");
var name= document.getElementById("name").value;
var number= document.getElementById("num").value;
var mail= document.getElementById("mail").value;

var contacts= {
    contactname:name,
    phonenumber: number,
    Email: mail
}



if(localStorage.getItem("contact")=== null)
{
    var contact=[]
contact.push(contacts);
    localStorage.setItem("contact", JSON.stringify(contact))
}

else{
 var contact= JSON.parse(localStorage.getItem("contact"));
 contact.push(contacts);
 localStorage.setItem("contact", JSON.stringify(contact));
 
}


e.preventDefault();

}

function deleteContact (contactname) {
    console.log('rec');

    var contact= JSON.parse(localStorage.getItem("contact"));

    for(let i=0; i<contact.length; i++){
        if (contact[i].contactname===contactname){
            contact.splice(i,1);
        }
    }
    localStorage.setItem("contact", JSON.stringify(contact));
}

function editContact (contactname) {

    var contact= JSON.parse(localStorage.getItem("contact"));

    for (let i=0; i<contact.length; i++) {
    document.getElementById("name1").value= contact[i].contactname;
    document.getElementById("num1").value=contact[i].phonenumber;
    document.getElementById("mail1").value=contact[i].Email;
    }

  document.getElementById("subedit").addEventListener("submit",function (contactname) 
  
  {
    var econtact = {
        contactname:document.getElementById("name1").value,
        phonenumber:  document.getElementById("num1").value,
        Email: document.getElementById("mail1").value



       }

       for(let i=0; i<contact.length; i++){
        if (contact[i].contactname===contactname){
            contact.splice(i,1[econtact]);
        }}
  })

   

  localStorage.setItem("contact", JSON.stringify(contact)); 

}

function displayContacts() {
    
    var contact= JSON.parse(localStorage.getItem("contact"));
    console.log(contact);
    const saved= document.getElementById("receive");
   saved.innerHTML="";
   for (let i=0; i<contact.length; i++) {
       var name= contact[i].contactname;
      var number= contact[i].phonenumber;
      var mail= contact[i].Email;
      var Deletecontact="-";
      var Editcontact="edit"

       saved.innerHTML+='<div class="repeat">'+
                             "<h3>"+name+
                             " </h3>"+
                             "<p>"+number+"</p>"+
                             "<p class='mi'>"+mail+"</p>"+
                             "<button onclick='editContact(`"+name+"`)' class='del'>"+Editcontact+"</button>"
                             +'<br>'+
                             "<button onclick='deleteContact(`"+name+"`)' class='del'>"+Deletecontact+"</button>"
                             " </div>";
   }
}

