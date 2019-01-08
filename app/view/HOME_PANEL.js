
Ext.define("ARIMR.view.HOME_PANEL", {
  alias: "widget.HOME_PANEL",
  extend: "Ext.form.Panel",
  requires: [
    "ARIMR.view.DETAIL_GRID",
    "ARIMR.widget.WIDGET_SEARCH"
  ],
  layout: {
    type: "vbox",
    align: "stretch"
  },
  cls: "arimr-menu-item-panel",
  flex: 100,
  initComponent: function (){
    var HOME_PANEL = this, viewModel = HOME_PANEL.getViewModel();

    HOME_PANEL.wizytowka = Ext.create({
      xtype: "window",
      width: 700,
      height: 400,
      closable: false,
      title: "Wizytówka pracownika",
      listeners: {
        afterrender: function (self) {
          var selfEl = self.getEl();

          selfEl.on("click", function(){
            self.hide("wizytowkaBtn");
          })
        }
      }
    });

    HOME_PANEL.detailGrid = Ext.create({
      xtype: "DETAIL_GRID",
      viewModel: viewModel
    });

    HOME_PANEL.widgetSearch = Ext.create({
        xtype: "WIDGET_SEARCH",
        viewModel: viewModel
    });

    HOME_PANEL.wyloguj = Ext.create({
        xtype: "button",
        scale: "large",
        iconCls: "fa fa-share-square-o",
        tooltip: "Wyloguj",
        handler: function () {
            // TODO wylogowanie
            ARIMR.utils.Router.home();
        }
    });
    //TESTOWE DANE => potem do usuniecia
    Ext.create('Ext.data.Store', {
      storeId: 'testDataStore',
      fields:[ 'lp', 'nazwa', 'dotyczy', 'dataOd', 'dataDo'],
      data: [
        { lp: '1', nazwa: 'test 1', dotyczy: 'admin', dataOd: '09-05-2020', dataDo: '09-05-2020'},
        { lp: '2', nazwa: 'test 2', dotyczy: 'admin', dataOd: '09-05-2020', dataDo: '09-05-2020'},
        { lp: '3', nazwa: 'test 3', dotyczy: 'admin', dataOd: '09-05-2020', dataDo: '09-05-2020' },
        { lp: '4', nazwa: 'test 4', dotyczy: 'admin', dataOd: '09-05-2020', dataDo: '09-05-2020' },
        { lp: '5', nazwa: 'test 5', dotyczy: 'admin', dataOd: '09-05-2020', dataDo: '09-05-2020' },
        { lp: '6', nazwa: 'test 5', dotyczy: 'admin', dataOd: '09-05-2020', dataDo: '09-05-2020' },
        { lp: '7', nazwa: 'test 5', dotyczy: 'admin', dataOd: '09-05-2020', dataDo: '09-05-2020' }
      ]
    });

    HOME_PANEL.home = Ext.create({
      xtype: "panel",
      flex: 100,
      scrollable: true,
      items: [{
        xtype: "panel",
        flex: 100,
        layout: {
          type: "vbox",
          align: "stretch"
        },
        items: [{
          xtype: "panel",
          flex: 100,
          border: false,
          layout: {
            type: "hbox",
            align: "stretch"
          },
          items: [{
            xtype: "panel",
            title: "TODO",
            iconCls: "fa fa-list-alt",
            iconAlign: "right",
            flex: 100,
            height: 300,
            bodyStyle: {
              "padding": "15 15 15 15"
            },
            items: [{
              xtype: "grid",
              store: Ext.data.StoreManager.lookup('testDataStore'),
              flex: 100,
              height: "100%",
              columns: [{
                text: "Lp",
                flex: 3,
                dataIndex: "lp"
              }, {
                text: "Nazwa",
                flex: 5,
                dataIndex: "nazwa"
              }, {
                text: "Dotyczy",
                flex: 5,
                dataIndex: "dotyczy"
              }, {
                text: "Data od",
                flex: 5,
                dataIndex: "dataOd"
              }, {
                text: "Data do",
                flex: 5,
                dataIndex: "dataDo"
              }]
            }],
            bbar: [{
              xtype: "button",
              iconCls: "fa fa-plus"
            }, {
              xtype: "button",
              iconCls: "fa fa-minus"
            }, {
              xtype: "label",
              flex: 100
            }, {
              xtype: "button",
              iconCls: "fa fa-share",
              tooltip: "Przejdź do formularza"
            }],
            listeners: {
              afterrender: function (self) {
                self.header.on("click", function () {
                  if (!HOME_PANEL.detailGrid.isVisible()) {
                    // TODO wywołanie serwisu i załadowanie
                    // zwróconych danych do viewmodelu wywoływanej formatki
                    // podobnie w innych wywołaniach tego okna
                    viewModel.set("grid.title", "Lista");
                    viewModel.set("grid.iconCls", "fa fa-list-alt");
                    HOME_PANEL.detailGrid.show(self);
                  } else {
                    HOME_PANEL.detailGrid.hide(self);
                  }
                });
              }
            }
          }, {
            xtype: "label",
            flex: 1
          }, {
            xtype: "panel",
            title: "Projekty wersja robocza",
            iconCls: "fa fa-folder-open",
            iconAlign: "right",
            flex: 100,
            height: 300,
            bodyStyle: {
              "padding": "15 15 15 15"
            },
            items: [{
              xtype: "grid",
              store: Ext.data.StoreManager.lookup('testDataStore'),
              flex: 100,
              columns: [{
                text: "Lp",
                flex: 3,
                dataIndex: "lp"
              }, {
                text: "Nazwa",
                flex: 5,
                dataIndex: "nazwa"
              }, {
                text: "Dotyczy",
                flex: 5,
                dataIndex: "dotyczy"
              }, {
                text: "Data od",
                flex: 5,
                dataIndex: "dataOd"
              }, {
                text: "Data do",
                flex: 5,
                dataIndex: "dataDo"
              }]
            }],
            bbar: [{
              xtype: "button",
              iconCls: "fa fa-plus"
            }, {
              xtype: "button",
              iconCls: "fa fa-minus"
            }, {
              xtype: "label",
              flex: 100
            }, {
              xtype: "button",
              iconCls: "fa fa-share",
              tooltip: "Przejdź do formularza"
            }],
            listeners: {
              afterrender: function (self) {
                self.header.on("click", function () {
                  if (!HOME_PANEL.detailGrid.isVisible()) {
                    // TODO wywołanie serwisu i załadowanie
                    // zwróconych danych do viewmodelu wywoływanej formatki
                    // podobnie w innych wywołaniach tego okna
                    viewModel.set("grid.title", "Projekty wersja robocza");
                    viewModel.set("grid.iconCls", "fa fa-folder-open");
                    HOME_PANEL.detailGrid.show(self);
                  } else {
                    HOME_PANEL.detailGrid.hide(self);
                  }
                });
              }
            }
          }]
        }, {
          xtype: "label",
          height: 7
        }, {
          xtype: "panel",
          flex: 100,
          border: false,
          layout: {
            type: "hbox",
            align: "stretch"
          },
          items: [{
            xtype: "panel",
            title: "Projekty do poprawy",
            iconCls: "fa fa-folder-open",
            iconAlign: "right",
            flex: 100,
            height: 300,
            bodyStyle: {
              "padding": "15 15 15 15"
            },
            items: [{
              xtype: "grid",
              store: Ext.data.StoreManager.lookup('testDataStore'),
              flex: 100,
              columns: [{
                text: "Lp",
                flex: 3,
                dataIndex: "lp"
              }, {
                text: "Nazwa",
                flex: 5,
                dataIndex: "nazwa"
              }, {
                text: "Dotyczy",
                flex: 5,
                dataIndex: "dotyczy"
              }, {
                text: "Data od",
                flex: 5,
                dataIndex: "dataOd"
              }, {
                text: "Data do",
                flex: 5,
                Data: "dataDo"
              }]
            }],
            bbar: [{
              xtype: "button",
              iconCls: "fa fa-plus"
            }, {
              xtype: "button",
              iconCls: "fa fa-minus"
            }, {
              xtype: "label",
              flex: 100
            }, {
              xtype: "button",
              iconCls: "fa fa-share",
              tooltip: "Przejdź do formularza"
            }],
            listeners: {
              afterrender: function (self) {
                self.header.on("click", function () {
                  if (!HOME_PANEL.detailGrid.isVisible()) {
                    // TODO wywołanie serwisu i załadowanie
                    // zwróconych danych do viewmodelu wywoływanej formatki
                    // podobnie w innych wywołaniach tego okna
                    viewModel.set("grid.title", "Projekty do poprawy");
                    viewModel.set("grid.iconCls", "fa fa-folder-open");
                    HOME_PANEL.detailGrid.show(self);
                  } else {
                    HOME_PANEL.detailGrid.hide(self);
                  }
                });
              }
            }
          }, {
            xtype: "label",
            flex: 1
          }, {
            xtype: "panel",
            title: "Projekty wysłane",
            iconCls: "fa fa-folder-open",
            iconAlign: "right",
            flex: 100,
            height: 300,
            bodyStyle: {
              "padding": "15 15 15 15"
            },
            items: [{
              xtype: "grid",
              store: Ext.data.StoreManager.lookup('testDataStore'),
              flex: 100,
              columns: [{
                text: "Lp",
                flex: 3,
                dataIndex: "lp"
              }, {
                text: "Nazwa",
                flex: 5,
                dataIndex: "nazwa"
              }, {
                text: "Dotyczy",
                flex: 5,
                dataIndex: "dotyczy"
              }, {
                text: "Data od",
                flex: 5,
                dataIndex: "dataOd"
              }, {
                text: "Data do",
                flex: 5,
                dataIndex: "dataDo"
              }]
            }],
            bbar: [{
              xtype: "button",
              iconCls: "fa fa-plus"
            }, {
              xtype: "button",
              iconCls: "fa fa-minus"
            }, {
              xtype: "label",
              flex: 100
            }, {
              xtype: "button",
              iconCls: "fa fa-share",
              tooltip: "Przejdź do formularza"
            }],
            listeners: {
              afterrender: function (self) {
                self.header.on("click", function () {
                  if (!HOME_PANEL.detailGrid.isVisible()) {
                    // TODO wywołanie serwisu i załadowanie
                    // zwróconych danych do viewmodelu wywoływanej formatki
                    // podobnie w innych wywołaniach tego okna
                    viewModel.set("grid.title", "Projekty wysłane");
                    viewModel.set("grid.iconCls", "fa fa-folder-open");
                    HOME_PANEL.detailGrid.show(self);
                  } else {
                    HOME_PANEL.detailGrid.hide(self);
                  }
                });
              }
            }
          }]
        }, {
          xtype: "label",
          height: 7
        }, {
          xtype: "panel",
          flex: 100,
          border: false,
          layout: {
            type: "hbox",
            align: "stretch"
          },
          items: [{
            xtype: "panel",
            title: "TODO",
            iconCls: "fa fa-folder-open",
            iconAlign: "right",
            flex: 100,
            height: 300,
            bodyStyle: {
              "padding": "15 15 15 15"
            },
            items: [{
              xtype: "grid",
              store: Ext.data.StoreManager.lookup('testDataStore'),
              flex: 100,
              columns: [{
                text: "Lp",
                flex: 3,
                dataIndex: "lp"
              }, {
                text: "Nazwa",
                flex: 5,
                dataIndex: "nazwa"
              }, {
                text: "Dotyczy",
                flex: 5,
                dataIndex: "dotyczy"
              }, {
                text: "Data od",
                flex: 5,
                dataIndex: "dataOd"
              }, {
                text: "Data do",
                flex: 5,
                dataIndex: "dataDo"
              }]
            }],
            bbar: [{
              xtype: "button",
              iconCls: "fa fa-plus"
            }, {
              xtype: "button",
              iconCls: "fa fa-minus"
            }, {
              xtype: "label",
              flex: 100
            }, {
              xtype: "button",
              iconCls: "fa fa-share",
              tooltip: "Przejdź do formularza"
            }],
            listeners: {
              afterrender: function (self) {
                self.header.on("click", function () {
                  if (!HOME_PANEL.detailGrid.isVisible()) {
                    // TODO wywołanie serwisu i załadowanie
                    // zwróconych danych do viewmodelu wywoływanej formatki
                    // podobnie w innych wywołaniach tego okna
                    viewModel.set("grid.title", "TODO");
                    viewModel.set("grid.iconCls", "fa fa-folder-open");
                    HOME_PANEL.detailGrid.show(self);
                  } else {
                    HOME_PANEL.detailGrid.hide(self);
                  }
                });
              }
            }
          }, {
            xtype: "label",
            flex: 1
          }, {
            xtype: "panel",
            title: "TODO",
            iconCls: "fa fa-folder-open",
            iconAlign: "right",
            flex: 100,
            height: 300,
            bodyStyle: {
              "padding": "15 15 15 15"
            },
            items: [{
              xtype: "grid",
              store: Ext.data.StoreManager.lookup('testDataStore'),
              flex: 100,
              columns: [{
                text: "Lp",
                flex: 3,
                dataIndex: "lp"
              }, {
                text: "Nazwa",
                flex: 5,
                dataIndex: "nazwa"
              }, {
                text: "Dotyczy",
                flex: 5,
                dataIndex: "dotyczy"
              }, {
                text: "Data od",
                flex: 5,
                dataIndex: "dataOd"
              }, {
                text: "Data do",
                flex: 5,
                dataIndex: "dataDo"
              }]
            }],
            bbar: [{
              xtype: "button",
              iconCls: "fa fa-plus"
            }, {
              xtype: "button",
              iconCls: "fa fa-minus"
            }, {
              xtype: "label",
              flex: 100
            }, {
              xtype: "button",
              iconCls: "fa fa-share",
              tooltip: "Przejdź do formularza"
            }],
            listeners: {
              afterrender: function (self) {
                self.header.on("click", function () {
                  if (!HOME_PANEL.detailGrid.isVisible()) {
                    // TODO wywołanie serwisu i załadowanie
                    // zwróconych danych do viewmodelu wywoływanej formatki
                    // podobnie w innych wywołaniach tego okna
                    viewModel.set("grid.title", "TODO");
                    viewModel.set("grid.iconCls", "fa fa-folder-open");
                    HOME_PANEL.detailGrid.show(self);
                  } else {
                    HOME_PANEL.detailGrid.hide(self);
                  }
                });
              }
            }
          }]
        }]
      }],
      dockedItems: [{
        xtype: "toolbar",
        dock: "top",
        ui: "footer",
        height: 50,
        items: [{
          xtype: "label",
          flex: 100
        }, {
          xtype: "button",
          iconCls: "fa fa-search",
          tooltip: "Wyszukaj",
          handler: function (self) {
              if (!HOME_PANEL.widgetSearch.isVisible()) {
                  HOME_PANEL.widgetSearch.show(self);
              } else {
                  HOME_PANEL.widgetSearch.hide(self);
              }
          }
        }, {
          xtype: "button",
          tooltip: "Wiadomości",
          iconCls: "fa fa-envelope-o"
        }, {
          xtype: "button",
          tooltip: "Powiadomienia",
          iconCls: "fa fa-bell"
        }, {
          xtype: "button",
          tooltip: "Statystyki",
          iconCls: "fa fa-bars"
        }, {
          xtype: "panel",
          width: 200,
          height: 40,
          layout: {
            type: "hbox",
            align: "stretch"
          },
          items: [{
            xtype: "label",
            flex: 7,
            text: "UserName",
            style: {
              "padding-left": "30px",
              "padding-top": "10px"
            }
          }, {
            xtype: "button",
            id: "wizytowkaBtn",
            scale: "large",
            tooltip: "Pokaż wizytówkę",
            iconCls: "fa fa-user fa-2x",
            flex: 3,
            handler: function (self) {
              if (!HOME_PANEL.wizytowka.isVisible()) {
                HOME_PANEL.wizytowka.show(self);
              } else {
                HOME_PANEL.wizytowka.hide(self);
              }
            }
          }, HOME_PANEL.wyloguj]
        }]
      }]
    });

    HOME_PANEL.items = [HOME_PANEL.home];

    HOME_PANEL.callParent(arguments);
  }
});
