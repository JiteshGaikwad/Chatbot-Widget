# Sending Bot Responses from Rasa

## Text

- sending response from `domain.yml`
    ```
    responses:
    utter_greet:
        - text: "Hello 😀"
    ```

- sending response from custom actions `actions.py`
  ```
     dispatcher.utter_message(text="Hello 😀")
  ```

## Images
- sending response from `domain.yml`
    ```
    responses:
      utter_cheer_up:
      - text: "Here is something to cheer you up 😉 "
        image: "https://i.imgur.com/nGF1K8f.jpg"
    ```

- sending response from custom actions `actions.py`
  ```
     dispatcher.utter_message(text="Here is something to cheer you up 😉", image="https://i.imgur.com/nGF1K8f.jpg")
  ```

## Buttons
- sending response from `domain.yml`
    ```
    responses:
      utter_greet:
      - text: "Hey! How are you?"
        buttons:
        - title: "great"
          payload: "great"
        - title: "super sad"
          payload: "super sad"
    ```

- sending response from custom actions `actions.py`
  ```
     button_resp=[
                    {
                        "title": "great",
                        "payload": "great"
                    },
                    {
                        "title": "super sad",
                        "payload": "super sad"
                    }
                ]

     dispatcher.utter_message(text="Hey! How are you?", buttons=button_resp)
  ```

## Videos
- sending response from `domain.yml`
    ```
    responses:
      utter_greet:
      - text: "Check this video"
        attachment: { "type":"video", "payload":{ "src": "https://youtube.com/embed/9C1Km6xfdMA" } }
    ```

- sending response from custom actions `actions.py` 
    ```
    msg = { "type": "video", "payload": { "title": "Link name", "src": "https://youtube.com/embed/9C1Km6xfdMA" } }

    dispatcher.utter_message(text="Check this video",attachment=msg)
    ```   

## Dropdown
- sending response from `domain.yml`
    ```
    responses:
      utter_menu:
      - text: "Please select a option"
        custom:
          payload: dropDown
          data:
          - label: option1
            value: "/inform{'slot_name':'option1'}"
          - label: option2
            value: "/inform{'slot_name':'option2'}"
          - label: option3
            value: "/inform{'slot_name':'option3'}"
    ```

- sending response from custom actions `actions.py` 
    ```
      data=[{"label":"option1","value":"/inform{'slot_name':'option1'}"},{"label":"option2","value":"/inform{'slot_name':'option2'}"},{"label":"option3","value":"/inform{'slot_name':'option3'}"}]

      message={"payload":"dropDown","data":data}
      
      dispatcher.utter_message(text="Please select a option",json_message=message)

    ```   

## Quick Replies
- sending response from `domain.yml`
    ```
    responses:
      utter_cuisine:
      - text: "Please choose a cuisine"
        custom:
          payload: quickReplies
          data:
          - title: chip1
            payload: chip1_payload
          - title: chip2
            payload: chip2_payload
          - title: chip3
            payload: chip3_payload
    ```

- sending response from custom actions `actions.py` 
    ```
      data= [ { "title":"chip1", "payload":"chip1_payload" }, { "title":"chip2", "payload":"chip2_payload" }, { "title":"chip3", "payload":"chip3_payload" } ]

      message={"payload":"quickReplies","data":data}

      dispatcher.utter_message(text="Please choose a cuisine",json_message=message)

    ```   
    
## Collapsible
- sending response from `domain.yml`
    ```
    responses:
      utter_askLeaveTypes:
      - text: "You can apply for below leaves"
        custom: 
            payload: "collapsible"
            data: 
            - title: Sick Leave
              description: Sick leave is time off from work that workers can use to stay home
                to address their health and safety needs without losing pay.
            - title: Earned Leave
              description: 'Earned Leaves are the leaves which are earned in the previous year
                and enjoyed in the preceding years. '
            - title: Casual Leave
              description: Casual Leave are granted for certain unforeseen situation or were you
                are require to go for one or two days leaves to attend to personal matters and
                not for vacation.
            - title: Flexi Leave
              description: Flexi leave is an optional leave which one can apply directly in system
                at lease a week before.
    ```

- sending response from custom actions `actions.py` 
    ```
      data= [ { "title": "Sick Leave", "description": "Sick leave is time off from work that workers can use to stay home to address their health and safety needs without losing pay." }, { "title": "Earned Leave", "description": "Earned Leaves are the leaves which are earned in the previous year and enjoyed in the preceding years. " }, { "title": "Casual Leave", "description": "Casual Leave are granted for certain unforeseen situation or were you are require to go for one or two days leaves to attend to personal matters and not for vacation." }, { "title": "Flexi Leave", "description": "Flexi leave is an optional leave which one can apply directly in system at lease a week before." } ]

      message={ "payload": "collapsible", "data": data }

      dispatcher.utter_message(text="You can apply for below leaves",json_message=message)

    ```   

## Charts
- sending response from `domain.yml`
    ```
    responses:
      utter_askLeaveBalance:
      - text: "Here are your leave balance details"
        custom:
          payload: chart
          data:
            title: Leaves
            labels:
            - Sick Leave
            - Casual Leave
            - Earned Leave
            - Flexi Leave
            backgroundColor:
            - "#36a2eb"
            - "#ffcd56"
            - "#ff6384"
            - "#009688"
            - "#c45850"
            chartsData:
            - 5
            - 10
            - 22
            - 3
            chartType: pie
            displayLegend: 'true'
    ```

- sending response from custom actions `actions.py` 
    ```
      data={ "title": "Leaves", "labels": [ "Sick Leave", "Casual Leave", "Earned Leave", "Flexi Leave" ], "backgroundColor": [ "#36a2eb", "#ffcd56", "#ff6384", "#009688", "#c45850" ], "chartsData": [ 5, 10, 22, 3 ], "chartType": "pie", "displayLegend": "true" }

      message={ "payload": "chart", "data": data }

      dispatcher.utter_message(text="Here are your leave balance details",json_message=message)

    ```   

## Location access

- sending response from `domain.yml`
    ```
    responses:
      utter_ask_location::
        - text: "Sure, please allow me to access your location 🧐"
          custom: 
            payload: location
    ```

- sending response from custom actions `actions.py`
  ```
  message={"payload":"location"}

  dispatcher.utter_message("Sure, please allow me to access your location 🧐",json_message=message)
  ```


  
## Card Carousel
- sending response from `domain.yml`
    ```
    responses:
      utter_cards_carousel:
        custom:
          payload: cardsCarousel
          data:
          - image: https://b.zmtcdn.com/data/pictures/1/17428541/da50010b1a953dfbb109306fba5a6c06.jpg
            name: abc
            ratings: '4.0'
            title: pqr
          - image: https://b.zmtcdn.com/data/pictures/1/17428541/da50010b1a953dfbb109306fba5a6c06.jpg
            name: abc
            ratings: '4.0'
            title: pqr
          - image: https://b.zmtcdn.com/data/pictures/1/17428541/da50010b1a953dfbb109306fba5a6c06.jpg
            name: abc
            ratings: '4.0'
            title: pqr
          - image: https://b.zmtcdn.com/data/pictures/1/17428541/da50010b1a953dfbb109306fba5a6c06.jpg
            name: abc
            ratings: '4.0'
            title: pqr
    ```
- sending response from custom actions `actions.py`
    ```

      data = {
            "payload": 'cardsCarousel',
            "data": [
                {
                    "image": "https://b.zmtcdn.com/data/pictures/1/18602861/bd2825ec26c21ebdc945edb7df3b0d99.jpg",
                    "title": "Taftoon Bar & Kitchen",
                    "ratings": "4.5",
                },
                {
                    "image": "https://b.zmtcdn.com/data/pictures/4/18357374/661d0edd484343c669da600a272e2256.jpg",

                    "ratings": "4.0",
                    "title": "Veranda"
                },
                {
                    "image": "https://b.zmtcdn.com/data/pictures/4/18902194/e92e2a3d4b5c6e25fd4211d06b9a909e.jpg",

                    "ratings": "4.0",
                    "title": "145 The Mill"
                },
                {
                    "image": "https://b.zmtcdn.com/data/pictures/3/17871363/c53db6ba261c3e2d4db1afc47ec3eeb0.jpg",

                    "ratings": "4.0",
                    "title": "The Fatty Bao"
                },
            ]
        }

      dispatcher.utter_message(json_message=data)
    ```

## PDF Attachment
- sending response from `domain.yml`
    ```
    responses:
      utter_pdf:
        - text: "Here is the PDF."
          custom: 
            payload: pdf_attachment
            title: "PDF Title"
            url: "URL to PDF file"
    ```
- sending response from `actions.py`
    ```
      data = {
        payload:"pdf_attachment",
        title: "PDF Title",
        url: "URL to PDF file"
      }
    ```