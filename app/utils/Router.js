/**
 * Klasa routingu aplikacji
 * Na podstawie przekazanych danych do funkcji 'ARIMR.utils.Router.open()' otwiera
 * odpowiednią formatkę
 */
Ext.define("ARIMR.utils.Router", {
    /**
     * Zob. [Ext.Class.singleton]
     */
    singleton: true,
    /**
     * Funkcja otwierająca głowny widok aplikacji
     */
    home: function() {
        var Router = this;

        Router.open({
            formName: "LOGIN_PANEL",
            contextForm: null,
            home: true
        });
    },
    /**
     * Główny viewport aplikacji
     */
    ARIMR_VIEWPORT: null,
    /**
     * Aktualnie otwarta formatka
     */
    currentForm: null,
    /**
     * Główna funkcja routingu aplikacji.
     * Otwiera konkretną formatkę wg przekazanych parametrów
     *
     * @param Object params parametry formatki która ma zostać dodana do głównego viewPortu apliacji
     */
    open: function(params) {
        var Router = this,
            contentContainer;

        if (!Router.ARIMR_VIEWPORT) {
            Router.ARIMR_VIEWPORT = Ext.create("ARIMR.view.ARIMR_VIEWPORT");
        }
        if(params.contextForm) {
            Router.ARIMR_VIEWPORT.leftContextMenu.setHidden(false);
            Router.ARIMR_VIEWPORT.topPanel.setHidden(true);
        }
        if(params.home) {
            Router.ARIMR_VIEWPORT.leftContextMenu.setHidden(true);
        }

        Router.currentParams = params;
        contentContainer = Router.ARIMR_VIEWPORT.contentContainer;
        contentContainer.removeAll();
        Router.currentForm = Ext.create("ARIMR.view." + params.formName, Ext.merge({
            viewModel: new Ext.app.ViewModel()
        }));
        contentContainer.add(Router.currentForm);
    }
});
