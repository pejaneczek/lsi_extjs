/**
 * Klasa uruchmieniowa aplikacji.
 * TODO utrzymanie sesji użytkownika np. Cookies Ext.util.Cookies
 * Po wgaśnięciu sesji, użytkownik zostaje przekierowany na strone logowania
 */
Ext.application({
    views: [
        "ARIMR_VIEWPORT"
    ],
    name: "ARIMR",
    launch: function() {

        ARIMR.utils.Router.home();
    }
});
