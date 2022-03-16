/**
 *  renders the dropdown message and
 *  handles the user selection
 * @param {Array} drop_down_data json array
 */
function renderDropDwon(drop_down_data) {

    let drop_down_options = "";

    for (let i = 0; i < drop_down_data.length; i += 1) {

        drop_down_options += `<option value="${drop_down_data[i].value}">${drop_down_data[i].label}</option>`;

    }
    const drop_down_select = `<div class="dropDownMsg"><select class="browser-default dropDownSelect"> <option value="" disabled selected>Choose your option</option>${drop_down_options}</select></div>`;


    $(".chats").append(drop_down_select);
    scrollToBottomOfResults();
    // add event handler if user selects a option.
    // eslint-disable-next-line func-names
    $("select").on("change", function () {

        let value = "";

        $("select option:selected").each(() => {

            value += $(this).val();

        });

        let intent = payload.split("{")[0]

        let slot = payload.split("{")[1].split(":")[0]

        let id = payload.split("{")[1].split(":")[1].split("}")[0]

        let result = intent + "{" + '"' + slot + '"' + ':' + '"' + id + '"' + '}'

        // eslint-disable-next-line no-use-before-define
        send(result);
        $(".dropDownMsg").remove();
        showBotTyping();
    });

}

