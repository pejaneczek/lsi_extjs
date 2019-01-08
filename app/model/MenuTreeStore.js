/**
 * Klasa zwracająca na sztywno dane do zbudowania menu kontekstowegoS
 */
Ext.define("ARIMR.model.MenuTreeStore", {
    singleton: true,

    getMenu: function() {
        var navItems = {
            type: "tree",
            root: {
                expanded: true,
                children: [{
                    text: "Pulpit",
                    iconCls: "fa fa-desktop",
                    leaf: true,
                    height: 60
                }, {
                    text: "Wnioski",
                    iconCls: "fa fa-book",
                    expanded: true,
                    children: [{
                        text: "Dodaj nowy wniosek",
                        iconCls: "fa fa-plus-circle",
                        leaf: true
                    }, {
                        text: "Wersje robocze",
                        iconCls: "fa fa-file-o",
                        leaf: true
                    }, {
                        text: "Wersje do poprawy",
                        iconCls: "fa fa-exclamation-triangle",
                        leaf: true
                    }, {
                        text: "Wersje wysłane",
                        iconCls: "fa fa-times",
                        leaf: true
                    }]
                }, {
                    text: "Wiadomości",
                    iconCls: "fa fa-envelope-o",
                    leaf: true
                }, {
                    text: "Profile",
                    iconCls: "fa fa-user",
                    leaf: true
                }, {
                    text: "Umowy",
                    iconCls: "fa fa-lock",
                    leaf: true
                }]
            }
        };

        return navItems;
    },
    /**
     * Funkcja zwracająca menu dla modułu "Beneficjent Projekty"
     *
     * @return Object[]
     */
    getTreeStoreModulBeneficjentProjekty: function() {
        var children = [{
            "id": 310,
            "text": "Projekty wersja robocza",
            "iconCls": "modProjektyZlecenia",
            "qtip": null,
            "qtitle": null,
            "loadComponent": "ApplicationProject.ApplicationProject.List",
            "komponent_config": "{\n    typee: 1\n}",
            "controller": "",
            "action": "",
            "permission": ".",
            "autoload": false,
            "leaf": true,
            "expanded": null
        }, {
            "id": 331,
            "text": "Projekty do poprawy",
            // "iconCls": "modProjektyZlecenia",
            "qtip": "",
            "qtitle": "",
            "loadComponent": "ApplicationProject.ApplicationProject.List",
            "komponent_config": "{\r\n    typee: 5\r\n}",
            "controller": "",
            "action": "",
            "permission": ".",
            "autoload": false,
            "leaf": true,
            "expanded": null
        }, {
            "id": 321,
            "text": "Projekty wys\u0142ane",
            //"iconCls": "modProjektyZlecenia",
            "qtip": null,
            "qtitle": null,
            "loadComponent": "ApplicationProject.ApplicationProject.List",
            "komponent_config": "{\n    typee: 2\n}",
            "controller": "",
            "action": "",
            "permission": ".",
            "autoload": false,
            "leaf": true,
            "expanded": null
        }, {
            "id": 10,
            "text": "Moje konto",
            // "iconCls": null,
            "qtip": null,
            "qtitle": null,
            "loadComponent": "User.MyUser",
            "komponent_config": null,
            "controller": null,
            "action": null,
            "permission": ".",
            "autoload": true,
            "leaf": true,
            "expanded": false
        }];

        return children;

    },
    /**
     * Funkcja zwracająca dane do budowy drzewa menu dla "Moduł Recenzje"
     *
     * @return Object[]
     */
    getTreeStoreRecenzje: function() {
        var children = [{
            "id": 329,
            "text": "Rejestr recenzji",
            "iconCls": null,
            "qtip": null,
            "qtitle": null,
            "loadComponent": "WOPP.WOPP.List",
            "komponent_config": null,
            "controller": "",
            "action": "",
            "permission": ".",
            "autoload": false,
            "leaf": true,
            "expanded": null
        }];

        return children;
    },
    /**
     * Funkcja zwracająca dane do budowy drzewa menu "Moduł Wiadomości"
     *
     * @return Object[]
     */
    getTreeStoreWiadomosci: function() {
        var children = [{
            "id": 329,
            "text": "Rejestr Wiadomości",
            "iconCls": null,
            "qtip": null,
            "qtitle": null,
            "loadComponent": "MessagesB.MessagesB.List",
            "komponent_config": null,
            "controller": "",
            "action": "",
            "permission": ".",
            "autoload": false,
            "leaf": true,
            "expanded": null
        }];

        return children;
    }
});
