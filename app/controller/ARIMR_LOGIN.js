/**
 * Kontroler obsługujący logowanie sesji użytkownia
 */
Ext.define("ARIMR.controller.ARIMR_LOGIN", {
    singleton: true,
    requires: ["ARIMR.utils.Ajax"],
    login: function(params, successCalback, failureCallback) {
        ARIMR.utils.Ajax.request({
            url: "api/get-token",
            method: "POST",
            params: params,
            success: successCalback,
            failure: failureCallback
        });
    }
});
