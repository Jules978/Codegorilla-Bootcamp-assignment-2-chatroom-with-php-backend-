# chatweek2
CodeGorilla assignment 2: Chat client with backend. Another Chat client, this time with backend (php and a .txt file, for now). No live version available yet.
 
# version 2 (25.01.2018)
Sort of functional: Messages and usernames are send to php (via javascript), and saved to a text file (chat.txt) as a string. 
The messages are displayed by dumping the entire txt file into a div. This is done via a GET request function, that repeats every second. 
 
# changes from v1:
Fixed refresh issue
Updated css (maybe works with mobile now?)
Added timestamp to messages
API protocol attempt: https://app.swaggerhub.com/apis/JJD/chatweek2/1.0.0

# issues
The backend is also not working with the group API protocol. 

# to do
Attempt to send message data to file as JSON, conform to the group API.
Retrieve data as JSON select messages by ID and Chatroom key.
Upgrade backend to include an actual database.
