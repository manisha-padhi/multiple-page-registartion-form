let registerElems = document.querySelectorAll('.inp');
let btnText = document.querySelector('.btnText');
btnText.addEventListener('click',e=>{
        if(localStorage.getItem('currUser')){
            let currUser = localStorage.getItem('currUser')
            e.target.href = e.target.href+`?id=${Math.ceil(currUser)}`
            let x ={};
            for(let items of registerElems){
                if(items.value.trim ==='' || items.value === 'none' || items.value.trim().length!==items.value.length){
                    e.preventDefault();
                    alert('Some Fields are missing');
                    return;
                }
                x[items.classList[1]]=items.value;
            }
            localStorage.setItem(currUser,JSON.stringify(x))
        }
        else{
            
            let currUser = Math.random()*10000;
            let x ={};
            for(let items of registerElems){
                if(items.value.trim ==='' || items.value === 'none' || items.value.trim().length!==items.value.length){
                    e.preventDefault();
                    alert('Some Fields are missing');
                    return;
                }
                console.log("Hi")
                x[items.classList[1]]=items.value;
                items.value = '';
            }
            currUser = Math.ceil(currUser).toString();
            localStorage.setItem(currUser,JSON.stringify(x))
            e.target.href = e.target.href+`?id=${Math.ceil(currUser)}`
        }

    
})
function validate(){
    var returnval = true;
    var email = document.forms['myFrom']["email"].value;
    if(email.length>15){
        seterror("email", "*Email length is too long");
        returnval = false;
    }
    var number = document.forms['myForm']["mobile"].value;
    if(number.length != 10){
        seterror("number", "*phone number should be of 10 digits");
        returnval = false;
    }


    return returnval;

} 
Filevalidation = () => {
    const fi = document.getElementById('file');
    if(fi.files.length>0){
        for(const i = 0; i<= fi.files.length - 1; i++){
            const fsize = fi.files.item(i).size;
            const file = Math.round((fsize/ 1024));
            if(file >= 4096){
                alert("file is too big,please select a file less than 4mb");
            }else if(file<2048){
                alert("file is too small,please select a file greater than 2mb");
            }else{
                document.getElementById('size').innerHTML = '<b>' + file+ '</b> KB';
            }
        }
    }
} 