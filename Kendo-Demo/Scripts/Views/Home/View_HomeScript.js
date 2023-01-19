var dataSourceGetTopics = null;

$(document).ready(function () {

    InitializeWidgets();

    InitializeHtmlControls();


});

function InitializeWidgets() {

    dataSourceGetTopics = new kendo.data.DataSource({
        schema: {
            model: {
                id: "ID",
                fields: {
                    ID: { editable: false, nullable: true },
                    Topic: { type: "string", editable: false }
                }
            }
        },
        transport: {
            read: {
                url: "/Home/GetTopics",
                dataType: "json"
            }
        }
    });

    



    $("#TopicsViewList").kendoListView({
        dataSource: dataSourceGetTopics,
        template: kendo.template($("#topicsTemplate").html()),
        dataBound: function () {

            $(".k-listview-content").addClass('row g-6 g-xl-9').removeClass('k-listview-content');
            $("#TopicsViewList").removeClass('k-widget k-listview k-listview-bordered');
            $(".k-listview-item").removeClass('k-listview-item');
        }
    });

}


function InitializeHtmlControls() {


}


function redirect(id) {
    if (id == 1) {
        window.location.href = '/Home/KendoList'

    }
    else if(id==2) {
        window.location.href = '/Home/KendoGrid'
    }
    else if (id == 3) {
        window.location.href = '/Home/KendoUpload'
    }
}
