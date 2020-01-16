SetWorkingDir %A_ScriptDir%
ListLines, Off
Process, Priority,, High
SetBatchLines, -1
SetDefaultMouseSpeed,0 
SetKeyDelay,-1
SetControlDelay,-1
SetBatchLines -1 
SetWinDelay,-1
SetMouseDelay,-1
FileEncoding UTF-8
MyPID := DllCall("GetCurrentProcessId")
Process, Priority, %MyPID%, High
#KeyHistory 0
#singleinstance force


Gui Add, Text, x10 y22 w80 h24 +0x200 +Center, 비트코인
Gui Add, Text, x13 y62 w74 h24 +0x200 +Center, 비트코인캐시
Gui Add, Text, x15 y102 w74 h24 +0x200 +Center, 이더리움
Gui Add, Text, x15 y142 w74 h24 +0x200 +Center, 라이트코인
Gui Add, Text, x16 y182 w74 h24 +0x200 +Center, 리플
Gui Add, Text, x14 y222 w74 h24 +0x200 +Center, 없음
Gui Add, Text, x13 y262 w74 h24 +0x200 +Center, 없음
Gui Add, Text, x15 y302 w74 h24 +0x200 +Center, 없음
Gui Add, Edit, vv비트코인 x100 y22 w120 h24 +ReadOnly -VScroll
Gui Add, Edit, vv비트코인캐시 x100 y62 w120 h24 +ReadOnly -VScroll
Gui Add, Edit, vv이더리움 x100 y102 w120 h24 +ReadOnly -VScroll
Gui Add, Edit, vv라이트코인 x100 y142 w120 h24 +ReadOnly -VScroll
Gui Add, Edit, vv리플 x100 y182 w120 h24 +ReadOnly -VScroll
Gui Add, Edit, vvx1 x100 y222 w120 h24 +ReadOnly -VScroll
Gui Add, Edit, vvx2 x100 y262 w120 h24 +ReadOnly -VScroll
Gui Add, Edit, vvx3 x100 y302 w120 h24 +ReadOnly -VScroll
Gui Add, Text, x65 y335 w120 h23 +0x200, Made By PGping
Gui, Submit, Nohide

gosub, reloadprice
settimer, reloadprice, 60000

GuiControl,,v비트코인, %비트코인%원
GuiControl,,v비트코인캐시, %비트코인캐시%원
GuiControl,,v이더리움, %이더리움%원
GuiControl,,v라이트코인, %라이트코인%원
GuiControl,,v리플, %리플%원

Gui Show, w233 h360, 블록체인-PGping
Return

GuiEscape:
GuiClose:
    ExitApp

reloadprice:
URLDownloadToVar, *P65001 https://api.bithumb.com/public/ticker/BTC , Data
RegExMatch(Data, "closing_price"":""(.*?)""", Result)
비트코인:=rounded(Result1,0)
URLDownloadToVar, *P65001 https://api.bithumb.com/public/ticker/BCH , Data
RegExMatch(Data, "closing_price"":""(.*?)""", Result)
비트코인캐시:=rounded(Result1,0)
URLDownloadToVar, *P65001 https://api.bithumb.com/public/ticker/ETH , Data
RegExMatch(Data, "closing_price"":""(.*?)""", Result)
이더리움:=rounded(Result1,0)
URLDownloadToVar, *P65001 https://api.bithumb.com/public/ticker/LTC , Data
RegExMatch(Data, "closing_price"":""(.*?)""", Result)
라이트코인:=rounded(Result1,0)
URLDownloadToVar, *P65001 https://api.bithumb.com/public/ticker/XRP , Data
RegExMatch(Data, "closing_price"":""(.*?)""", Result)
리플:=rounded(Result1,0)
Gui, Submit, Nohide
GuiControl,,v비트코인, %비트코인%원
GuiControl,,v비트코인캐시, %비트코인캐시%원
GuiControl,,v이더리움, %이더리움%원
GuiControl,,v라이트코인, %라이트코인%원
GuiControl,,v리플, %리플%원
return
	rounded(number, count) {
		if(count>=0){
			return Round(number, count)
		}
		return -1
	}