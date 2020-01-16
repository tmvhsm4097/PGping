ListLines, Off
SetBatchLines, -1
Process, Priority,, High
SetDefaultMouseSpeed,0 
SetKeyDelay,-1
SetControlDelay,-1
SetBatchLines -1 
SetWinDelay,-1
SetMouseDelay,-1
#KeyHistory 0
#NoEnv



URLDownloadToVar, *P65001 https://www.youtube.com/channel/UC18qvsR_ycfLl15xbaNNglQ, html
StringReplace, resultnamehtml, namehtml, >,  ,all
구독자 := RegExMatch(html,"구독자 (.*)명",var)

msgbox,% var1 . "명"




