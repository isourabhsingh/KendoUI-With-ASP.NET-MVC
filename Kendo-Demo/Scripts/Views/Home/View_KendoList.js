var dataSourceGetList = null;

$(document).ready(function () {

    InitializeWidgets();

    InitializeHtmlControls();


});

function InitializeWidgets() {

     

    dataSourceGetList = new kendo.data.DataSource({
        transport: {
            read: {
                url: "/Home/GetKendoList",
                dataType: "json"
            },
        },
        schema: {
            model: {
                id: "ID",
                fields: {
                    ID: { editable: false, validation: { required: false } },
                    language: { type: "String" }
                }
            }
        }
    });

    $("#listView").kendoListView({
        dataSource: dataSourceGetList,
        template: kendo.template($("#ListTemplate").html()),
        height: 450,
        scrollable: "endless",
        dataBound: function () {
            $("#listView").removeClass('k-widget k-listview k-listview-bordered');
        }
    });
}


function InitializeHtmlControls() {


}
