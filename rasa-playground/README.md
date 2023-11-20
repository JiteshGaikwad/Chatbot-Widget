To install:
- install python 3.10 and pip
- install [rasa](https://rasa.com/docs/rasa/installation/installing-rasa-open-source)
- run `rasa train`

To launch:
- run `rasa run --enable-api --cors "*"`

If you want to add new test cases, add the following:
- in `data/nlu.yml`, add a new intent by specifying an intent name and examples of how to trigger it
- in `domain.yml`, add the intent name to the `intents` list and a new response to the `responses` list
- in `data/stories.yml`, add a new story by specifying the intent name and the response name
- run `rasa train` again