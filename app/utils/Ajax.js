/**
 * Klasa rozszerzająca Ext.Ajax
 */
Ext.define("ARIMR.utils.Ajax", {
    singleton: true,
    /**
     * Główna ścieżka do API, do niej doklejane będzie reszta url-a
     */
    apiPath: "https://generatorwnioskow.1t1.pl/web/index.php?r=",
    /**
     * [function description]
     * @param Object requestParams parametry otwieranej formatki
     * @return
     */
    request: function(requestParams) {
        var Ajax = this;

        if (!Ext.String.startsWith(requestParams.url, "http") &&
            !Ext.String.startsWith(requestParams.url, Ajax.apiPath) &&
            !Ext.String.startsWith(requestParams.url, "public")) {
            requestParams.url = Ajax.apiPath + requestParams.url;
        }

        requestParams.cors = true;
        requestParams.useDefaultXhrHeader = false;
        return Ext.Ajax.request(requestParams);
    },
    /**
     * TODO
     */
    getJWToken: function(task) {

    }
});
