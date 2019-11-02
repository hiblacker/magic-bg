set objShell=wscript.createObject("wscript.shell")
Set oExec = objShell.Exec("cmd.exe /k node D:\SP\change-bg\setBg.js")
wscript.quit
Set oExec = Nothing 
Set objShell = Nothing 