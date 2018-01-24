# chatweek2
CodeGorilla assignment 2: Chat client with backend. Another Chat client, this time with backend (php and a .txt file, for now). No live version available yet.

# version 1 24.01.2018
First Sort of functional: Messages and usernames are send to php (via javascript), and saved to a text file (chat.txt) as a string. The messages are displayed by dumping the entire txt file into a div. This is done via a GET request function, that repeats every second. 

# issues
At the moment the page sort of refreshes after messages are submitted, it's annoying. The backend is also not working with the group API protocol. 

# to do

Fix refresh issue
attempt to send message data to file as JSON, conform to the group API.
Retrieve data as JSON select messages by ID and Chatroom key.
