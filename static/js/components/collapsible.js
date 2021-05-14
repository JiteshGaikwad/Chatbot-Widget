/**
 *  creates collapsible
 * for more info refer:https://materializecss.com/collapsible.html
 * @param {Array} collapsible_date json array
 */
function createCollapsible(collapsible_data) {
    // sample data format:
    // var collapsible_data=[{"title":"abc","description":"xyz"},{"title":"pqr","description":"jkl"}]
    let collapsible_list = "";
    for (let i = 0; i < collapsible_data.length; i += 1) {
        const collapsible_item = `<li><div class="collapsible-header">${collapsible_data[i].title}</div><div class="collapsible-body">
<span>${collapsible_data[i].description}</span></div></li>`;

        collapsible_list += collapsible_item;
    }
    const collapsible_contents = `<ul class="collapsible">${collapsible_list}</ul>`;
    $(collapsible_contents).appendTo(".chats");

    // initialize the collapsible
    $(".collapsible").collapsible();
    scrollToBottomOfResults();
}
