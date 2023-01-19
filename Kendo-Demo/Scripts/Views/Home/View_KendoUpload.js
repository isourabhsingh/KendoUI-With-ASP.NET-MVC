$(document).ready(function () {

    InitializeWidgets();
});

function InitializeWidgets() {

    // for file upload
    $("#files").kendoUpload({
        async: {
            saveUrl: "/Home/UploadImage",
            removeUrl: "remove",
            autoUpload: false
        }
    }).data("kendoUpload");
}
