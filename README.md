# chatweek2
CodeGorilla assignment 2: Chat client with backend. 

Another chat client, this time with backend (SQL). Live version available at: http://wijzijncodegorilla.nl/julia/chat/

Enter your username, and a chatroom (e.g. "chat"). 


 
# version 3 (26.01.2018)
Sort of functional: Messages and usernames are send to php (via javascript), and saved to a text file (chat.txt) as a string. 
The messages are displayed by dumping the entire txt file into a div. This is done via a GET request function, repeats every second. 

 
# changes from v2:
Updated css (more mobile friendly).
working with database!
API protocol attempt: https://app.swaggerhub.com/apis/JJD/chatweek2/1.0.0 no longer valid. will update asap.

# issues
The backend is not working with the group API protocol (https://app.swaggerhub.com/apis/RJK-Gorilla/GorillaChat1/1.0.0#/). uses POST instead of PUT. 

# to do
Get backend to work according to the group API protocol.
