/**
 * Główny  viewport aplikacji
 */
Ext.define("ARIMR.view.ARIMR_VIEWPORT", {
    alias: "widget.ARIMR_VIEWPORT",
    requires: [
        "ARIMR.utils.Router",
        "ARIMR.model.MenuTreeStore",
        "ARIMR.view.HOME_PANEL",
        "ARIMR.view.MSG_PANEL"
    ],
    extend: "Ext.container.Viewport",
    layout: "fit",
    plugins: "viewport",
    viewModel: {},
    initComponent: function() {
        var ARIMR_VIEWPORT = this, viewModel = ARIMR_VIEWPORT.getViewModel();

        //To powinien zwracac jakis serwis
        viewModel.set("navItems", ARIMR.model.MenuTreeStore.getMenu());

        /**
         * Górna belka
         *
         * @type Ext.panel.Panel
         */
        ARIMR_VIEWPORT.topPanel = Ext.create({
            xtype: "panel",
            title: _("Lokalny System Informatyczny LSI2020"),
            titleAlign: "center",
            cls: "arimr-topbar-login",
            bodyStyle: {
                "background-image": "url(public/startBG.jpg) !important",
                "background-repeat": "no-repeat"
            },
        });

        /**
         * Store dla dla drzewa menu modułu beneficjenta
         *
         * @type Ext.data.Store
         */
        ARIMR_VIEWPORT.storeModBeneficjent = Ext.create("Ext.data.TreeStore", {
            proxy: {
                type: "memory",
                reader: {
                    typeProperty: "mtype"
                }
            },
            root: {
                text: "Root",
                expanded: true,
                children: ARIMR.model.MenuTreeStore.getTreeStoreModulBeneficjentProjekty()
            },
            autoLoad: true,
            model: ARIMR.model.ModelMenu
        });

        ARIMR_VIEWPORT.leftContextMenu = Ext.create({
            xtype: "panel",
            region: "west",
            iconCls: "fa fa-fire",
            collapsible: false,
            collapseMode: "header",
            collapseDirection: "left",
            title: "LSI2020",
            width: 250,
            split: true,
            reference: "treelistContainer",
            layout: {
              type: "vbox",
              align: "stretch"
            },
            cls: "arimr-menu-panel",
            collapisible: true,
            border: false,
            scrollable: "y",
            items: [{
              xtype: "treelist",
              reference: "treelist",
              bind: "{navItems}"
            }]
          });

        /**
         * Główny kontener aplikacji do którego będą wrzucane kolejne widoki aplikacji
         *
         * @type Ext.panel.Panel
         */
        ARIMR_VIEWPORT.contentContainer = Ext.create({
            xtype: "panel",
            layout: {
                type: "vbox",
                align: "stretch"
            },
            flex: 100
        });

        ARIMR_VIEWPORT.items = [{
            xtype: "panel",
            layout: {
                type: "vbox",
                align: "stretch"
            },
            items: [ARIMR_VIEWPORT.topPanel, {
                xtype: "panel",
                flex: 100,
                layout: {
                    type: "hbox",
                    align: "stretch"
                },
                items: [
                    ARIMR_VIEWPORT.leftContextMenu,
                    ARIMR_VIEWPORT.contentContainer
                ]
            }]
        }];

        ARIMR_VIEWPORT.callParent(arguments);
    },

});
