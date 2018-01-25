# chatweek2
CodeGorilla assignment 2: Chat client with backend. 

Another Chat client, this time with backend (php and a .txt file, for now). Live version available at: http://wijzijncodegorilla.nl/julia/Chattext/
 
# version 2.5 (25.01.2018)
Sort of functional: Messages and usernames are send to php (via javascript), and saved to a text file (chat.txt) as a string. 
The messages are displayed by dumping the entire txt file into a div. This is done via a GET request function, repeats every second. 
 
# changes from v1:
Fixed refresh issue,
Updated css (more mobile friendly),
Added timestamp to messages,
API protocol attempt: https://app.swaggerhub.com/apis/JJD/chatweek2/1.0.0

# issues
The backend is not working with the group API protocol (https://app.swaggerhub.com/apis/RJK-Gorilla/GorillaChat1/1.0.0#/). 

# to do
Upgrade backend to include an actual database.
Get backend to work according to the group API protocil
