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

       saved.innerHTML+='<div class="repeat">'+
                             "<h3>"+name+
                             " </h3>"+
                             "<p>"+number+"</p>"+
                             "<p class='mi'>"+mail+"</p>"+
                             "<button onclick='deleteContact(`"+name+"`)' class='del'>"+Deletecontact+"</button>"
                             " </div>";
   }
}