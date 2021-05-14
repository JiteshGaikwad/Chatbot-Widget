
/**
 *  creates a div that will render the
 *  charts in canvas as required by charts.js
 * for more info. refer: https://www.chartjs.org/docs/latest/getting-started/usage.html
 * @param {String} title chart title
 * @param {Array} labels chart label
 * @param {Array} backgroundColor chart's background color
 * @param {Object} chartsData chart's data
 * @param {String} chartType chart type
 * @param {String} displayLegend chart's legend
 */
function createChart(
    title,
    labels,
    backgroundColor,
    chartsData,
    chartType,
    displayLegend,
) {
    const html = '<div class="chart-container"> <span class="modal-trigger" id="expand" title="expand" href="#modal1"><i class="fa fa-external-link" aria-hidden="true"></i></span> <canvas id="chat-chart" ></canvas> </div> <div class="clearfix"></div>';
    $(html).appendTo(".chats");

    // create the context that will draw the charts over the canvas in the ".chart-container" div
    const ctx = $("#chat-chart");

    // Once you have the element or context, instantiate the chart-type by passing the configuration,
    // for more info. refer: https://www.chartjs.org/docs/latest/configuration/
    const data = {
        labels,
        datasets: [
            {
                label: title,
                backgroundColor,
                data: chartsData,
                fill: false,
            },
        ],
    };
    const options = {
        title: {
            display: true,
            text: title,
        },
        layout: {
            padding: {
                left: 5,
                right: 0,
                top: 0,
                bottom: 0,
            },
        },
        legend: {
            display: displayLegend,
            position: "right",
            labels: {
                boxWidth: 5,
                fontSize: 10,
            },
        },
    };

    // draw the chart by passing the configuration
    // eslint-disable-next-line no-undef
    chatChart = new Chart(ctx, {
        type: chartType,
        data,
        options,
    });

    scrollToBottomOfResults();
}
// function to render the charts in the modal

/**
 *  creates a modal that will render the
 *  charts in canvas as required by charts.js
 * for more info. refer: https://www.chartjs.org/docs/latest/getting-started/usage.html
 *
 * if you want to display the charts in modal,
 *  make sure you have configured the modal in `index.html`
 * @param {String} title chart title
 * @param {Array} labels chart label
 * @param {Array} backgroundColor chart's background color
 * @param {Object} chartsData chart's data
 * @param {String} chartType chart type
 * @param {String} displayLegend chart's legend
 */
function createChartinModal(
    title,
    labels,
    backgroundColor,
    chartsData,
    chartType,
    displayLegend,
) {
    // create the context that will draw the charts
    // over the canvas in the `#modal-chart` div of the modal
    const ctx = $("#modal-chart");

    // Once you have the element or context, instantiate the chart-type by passing the configuration,
    // for more info. refer: https://www.chartjs.org/docs/latest/configuration/
    const data = {
        labels,
        datasets: [
            {
                label: title,
                backgroundColor,
                data: chartsData,
                fill: false,
            },
        ],
    };
    const options = {
        title: {
            display: true,
            text: title,
        },
        layout: {
            padding: {
                left: 5,
                right: 0,
                top: 0,
                bottom: 0,
            },
        },
        legend: {
            display: displayLegend,
            position: "right",
        },
    };

    // eslint-disable-next-line no-undef
    modalChart = new Chart(ctx, {
        type: chartType,
        data,
        options,
    });
}