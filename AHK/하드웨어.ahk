MsgBox,% GetHddPh(1)
return
GetHddPh(Number){
for objItem in ComObjGet("winmgmts:\\.\root\cimv2").ExecQuery("SELECT * FROM Win32_PhysicalMedia WHERE Tag = '\\\\.\\PHYSICALDRIVE" Number "'", "WQL", 0x10 + 0x20)
return objItem.SerialNumber
}
