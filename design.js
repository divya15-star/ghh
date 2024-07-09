var bulb =0;

function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src = "bulb off.jpeg";
        bulb=1;
    
    }
    else{
        document.getElementById("image").src = "bulb onn.jpeg";
        bulb=0;
    }
}
