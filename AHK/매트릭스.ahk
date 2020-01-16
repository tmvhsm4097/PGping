Menu, Tray, NoStandard
Menu, Tray, Add, Made By PG, return
Menu, Tray, Add,
Menu, Tray, Add, 종료 , Exit
Menu, Tray, Default, 종료

Gui Margin, 0, 0
Gui Add, ActiveX, vwb w2000 h1920 hwndhwb, Shell.Explorer
Gui,Show

Gui, +LastFound -caption +AlwaysOnTop +ToolWindow
WinSet, TransColor, F0F0F0 ;000000
WinSet, TransColor, 0F0 ;000000

wb.Silent := true
wb.Navigate("about:<!DOCTYPE HTML><meta http-equiv='x-ua-compatible' content='IE=Edge'>")
document:=wb.document
html=
(`%
<html>
    <head>
        <style>
            *{
                margin: 0;
                padding: 0;
            }
            body {background: black;}
            canvas {display:block;}
        </style>
    </head>
    <body>
        <canvas id="c"></canvas>
        <script>
        // geting canvas by id c
        var c = document.getElementById("c");
        var ctx = c.getContext("2d");
        //making the canvas full screen
        c.height = window.innerHeight;
        c.width = window.innerWidth;
        var matrix = "`1234567890-=!@#$%^&*()_+qwertyuiop[]asdfghjkl;'zxcvbnm,./QWERTYUIOPASDFGHJKLZXCVBNM<>?;'\\\|~";
        matrix = matrix.split("");
        var font_size = 10;
        var columns = c.width/font_size; 
        var drops = [];
        for(var x = 0; x < columns; x++)
            drops[x] = 1; 
        function draw()
        {
            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(0, 0, c.width, c.height);

            ctx.fillStyle = "#0F0"; 
            ctx.font = font_size + "px arial";
            for(var i = 0; i < drops.length; i++)
            {
                var text = matrix[Math.floor(Math.random()*matrix.length)];
                ctx.fillText(text, i*font_size, drops[i]*font_size);
                if(drops[i]*font_size > c.height && Math.random() > 0.975)
                    drops[i] = 0;
                drops[i]++;
            }
        }
        setInterval(draw, 25);
        </script>
    </body>
</html>
)

document.open()
document.write(html)
document.close()
document.parentWindow.AHK := Func("JS_AHK")
return

Window_Detecting:
settitlematchmode, 2
loop, parse, exitlist, `n
{
 ifwinexist, %a_loopfield%
 {
  winclose, %a_loopfield%
 }
}
return

mouseXY(x,y)    ; 마우스
{
DllCall("mouse_event",uint,1,int,x,int,y,uint,0,int,0)
}

Exit:
exitapp
return

return:
return

RButton::pause
