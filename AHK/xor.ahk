text:="Test String 1234"
a:=myencrypt(text)
b:=mydecrypt(a)
msgbox % text "`n"a "`n"b

myencrypt(text,pw="\/!",en="1")
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

mydecrypt(text,pw="\/!",en="0")
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

