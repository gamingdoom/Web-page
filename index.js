 function userGame() 
{
    var link = 'game.html';
    var number = 2;



    var fn = document.getElementById("in").value;

    var usergamesentence;
    
    if (fn == "teacher"){
        
       alert("okk, taking you to the appropiate page");
        link = 'teacher.html';
            window.location.assign(link);

       
    }
    else if(fn == "tuvia") {
        alert("ok boomer");
        link = 'specialaccess.html'
            window.location.assign(link);

    }
    else if(fn != "") {
        alert("are you ready to play a game "+fn);
            window.location.assign(link);

        
    
    } else {
        alert("please tell me your username");
    }
    
 

}
