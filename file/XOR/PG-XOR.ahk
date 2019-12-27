text:="Test String 1234"
var1:=encrypt(text) ;암호화
var2:=decrypt(var1) ;복호화
msgbox % text "`n`n"var1 "`n`n"var2 ;`n는 엔터

encrypt(text,pw="\/!",en="1")
{ 
    String = 
    Loop, parse, text 
    {
        char := Asc(A_LoopField)
        char:=en="1"?char+100:char
        Loop,parse,pw
            char:=char^Asc(A_LoopField)^Asc(StrLen(text)*StrLen(pw))
        char:=en="1"?char:char-100
        String .= "`" . chr(Char)
    } 
    Return, %String% 
}
decrypt(text,pw="\/!",en="0")
{ 
    String = 
    Loop, parse, text 
    {
        char := Asc(A_LoopField)
        char:=en="1"?char+100:char
        Loop,parse,pw
            char:=char^Asc(A_LoopField)^Asc(StrLen(text)*StrLen(pw))
        char:=en="1"?char:char-100
        String .= "`" . chr(Char)
    } 
    Return, %String% 
}

