var dataSourceGetGrid = null;
var dataSourceGetGridInLine = null;
var dataSourceGetGridFeatures = null;

$(document).ready(function () {

    InitializeWidgets();

    InitializeHtmlControls();


});

function InitializeWidgets() {

    dataSourceGetGrid = new kendo.data.DataSource({
        schema: {
            model: {
                id: "ID",
                fields: {
                    DemoKey: { type: "string", editable: true },
                    DemoValue: { type: "string", editable: true },
                    DemoGroup: { type: "string", editable: true },
                }
            }
        },
        transport: {
            read: {
                url: "/Home/GetGrids",
                dataType: "json"
            },
            update: {
                url: "/Home/updateGrids",
                dataType: "json",
                type: "POST"
            },
            destroy: {
                url: "/Home/DeleteGrids",
                dataType: "json",
                type: "POST"
            },
            create: {
                url: "/Home/AddGrids",
                dataType: "json",
                type: "POST"
            },
            parameterMap: function (options, operation) {
                if (operation !== "read" && options.models) {
                    debugger;
                    return { models: options.models };
                }
            }
        },
        batch: true
    });

    dataSourceGetGridInLine = new kendo.data.DataSource({
        schema: {
            model: {
                id: "ID",
                fields: {
                    DemoKey: { type: "string", editable: true },
                    DemoValue: { type: "string", editable: true },
                    DemoGroup: { type: "string", editable: true },
                }
            }
        },
        transport: {
            read: {
                url: "/Home/GetGrids",
                dataType: "json"
            },
            update: {
                url: "/Home/updateGrids",
                dataType: "json",
                type: "POST"
            },
            parameterMap: function (options, operation) {
                if (operation !== "read" && options.models) {
                    debugger;
                    return { models: options.models };
                }
            }
        },
        batch: true,
        autoSync: true,
    });
    dataSourceGetGridFeatures = new kendo.data.DataSource({
        schema: {
            model: {
                id: "ID",
                fields: {
                    DemoKey: { type: "string", editable: true },
                    DemoValue: { type: "string", editable: true },
                    DemoGroup: { type: "string", editable: true },
                }
            }
        },
        transport: {
            read: {
                url: "/Home/GetGrids",
                dataType: "json"
            },
            update: {
                url: "/Home/updateGrids",
                dataType: "json",
                type: "POST"
            },
            destroy: {
                url: "/Home/DeleteResourceLanguages",
                dataType: "json",
                type: "POST"
            },
            create: {
                url: "/Home/AddGrids",
                dataType: "json",
                type: "POST"
            },
            parameterMap: function (options, operation) {
                if (operation !== "read" && options.models) {
                    debugger;
                    return { models: options.models };
                }
            }
        },
        batch: true,
        group: {
            field: "DemoGroup",
            dir: "desc"
        },
    });

    $("#grid").kendoGrid({
        columns: [
            {
                title: "Demo Key",
                field: "DemoKey"
            },
            {
                title: "Demo Value",
                field: "DemoValue"
            },
            {
                title: "Demo Group",
                field: "DemoGroup"
            },
            { command: ["edit", "destroy"], title: "&nbsp;", width: "350px" }
        ],
        toolbar: [{ name: "create" }],
        editable: "inline",
        dataSource: dataSourceGetGrid,
    });



    $("#gridInLine").kendoGrid({
        columns: [
            {
                title: "Demo Key",
                field: "DemoKey"
            },
            {
                title: "Demo Value",
                field: "DemoValue"
            },
            {
                title: "Demo Group",
                field: "DemoGroup"
            }
        ],
        toolbar: ["search"],
        editable: true,
        dataSource: dataSourceGetGridInLine,
    });

    $("#gridFeatures").kendoGrid({
        groupable: true,
        filterable: true,
        columns: [
            {
                title: "Demo Key",
                field: "DemoKey"
            },
            {
                title: "Demo Value",
                field: "DemoValue"
            },
            {
                title: "Demo Group",
                field: "DemoGroup"
            }
        ],
        toolbar: ["excel","search"],
        excel: {
            fileName: GenerateFileName("Demo", ".xlsx"),
            proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
            filterable: true
        },
        sortable: true,
        editable: "inline",
        dataSource: dataSourceGetGridFeatures,
    });
}


function InitializeHtmlControls() {


}


function GenerateFileName(filename, extension) {

    const d = new Date();
    let text = d.toDateString();

    return filename + "_" + text + extension;
}