## Modifying the UI 

If you want to add the bot popup intro, you can edit the below line of code in `index.html`

```W
    <!-- Bot pop-up intro -->
    <div class="tap-target" data-target="profile_div">
        <div class="tap-target-content">
            <h5 class="white-text">Hey there!</h5>
            <p class="white-text">I am Sara, your Rasa assistant?</p>
        </div>
    </div>
```

If you want to modify the UI of the chatbot widget, you can edit the respective classes in the [`style.css`](../static/css/style.css)


| Element      | Class        |
|--------------|--------------|
| Chat Window  | .widget      |
| Chat Header  | .chat_header |
| Chats        | .chats       |
| Bot Message  | .botMsg      |
| User Message | .userMsg     |
| Keypad       | .keypad      | 
| Buttons      | .suggestions | 
| Cards        | .cards       |
| Quick Replies| .quickReplies|
| Collapsible  | .collapsible |
| Video        | .video-container |
| Image        | .imgcard     |
| Dropdown     | .dropDownMsg |
| PDF attachment     | .pdf_attachment  |
| Bot pop-up intro | .tap-target |

