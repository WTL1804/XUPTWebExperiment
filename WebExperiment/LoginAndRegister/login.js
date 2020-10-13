window.onload = function(){
    var peoplename = document.getElementById("peoplename");
    var Password = document.getElementById("Password");
    var submit = document.getElementById("submit");
    var name;
    var password;
    var flag=0;
    var sign=0;
    var Flag=0;
    localStorage.setItem("Flag",Flag);
    var message=localStorage.getItem("message") ? JSON.parse(localStorage.getItem("message")) : [];


    function setCookie(cname,cvalue,exdays)
    {
        console.log(cname);
        console.log(cvalue);
        console.log(exdays);
        var d = new Date();
        d.setTime(d.getTime()+(exdays*24*60*60*1000));
        var expires = "expires="+d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
        console.log(document.cookie);
    }


    peoplename.addEventListener("blur",function(){
        name=peoplename.value;
       
    });
    Password.addEventListener("blur",function(){
        password=Password.value;
    });
    submit.addEventListener("click",function(){
        for(var k in message){
            if (message[k].tel === name){
                if(password===message[k].mima){
                    alert("登录成功");
                    flag=1;
                    
                    setCookie("name",message[k].name,1);
                
                    location.href="main.html";
                    break;
                }
            }
        }
        if(flag===0){
            alert("用户名或密码错误");
            peoplename.value="";
            Password.value="";
        }
    },false)


};

