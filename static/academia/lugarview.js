/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:26:17.59
*/
gx.evt.autoSkip = false;
gx.define('academia.lugarview', false, function () {
   this.ServerClass =  "academia.lugarview" ;
   this.PackageName =  "com.taankanik" ;
   this.setObjectType("web");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV10LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS") ;
      this.AV11SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE") ;
      this.AV9LugarId=gx.fn.getIntegerValue("vLUGARID",'.') ;
      this.AV7TabCode=gx.fn.getControlValue("vTABCODE") ;
      this.AV9LugarId=gx.fn.getIntegerValue("vLUGARID",'.') ;
      this.AV10LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS") ;
      this.AV11SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE") ;
   };
   this.s112_client=function()
   {
      gx.fn.setCtrlProperty("CELL_GENERAL","Visible", true );
      if ( this.AV10LoadAllTabs || ( this.AV11SelectedTabCode == "" ) || ( this.AV11SelectedTabCode == "General" ) )
      {
         this.createWebComponent('Generalwc','Academia.LugarGeneral',[this.AV9LugarId]);
         gx.fn.setCtrlProperty("TXTTABTITLE","Caption", "General" );
         if ( ( this.AV11SelectedTabCode == "" ) || ( this.AV11SelectedTabCode == "General" ) )
         {
            gx.fn.setCtrlProperty("CELL_GENERAL","Visible", false );
         }
      }
      gx.fn.setCtrlProperty("CELL_HORARIO","Visible", true );
      if ( this.AV10LoadAllTabs || ( this.AV11SelectedTabCode == "Horario" ) )
      {
         this.createWebComponent('Horariowc','Academia.LugarHorarioWC',[this.AV9LugarId]);
         gx.fn.setCtrlProperty("TXTTABTITLE","Caption", "Horario" );
         if ( this.AV11SelectedTabCode == "Horario" )
         {
            gx.fn.setCtrlProperty("CELL_HORARIO","Visible", false );
         }
      }
   };
   this.e151j1_client=function()
   {
      this.clearMessages();
      this.AV11SelectedTabCode =  this.TABSContainer.ActivePageControlName  ;
      this.AV10LoadAllTabs =  false  ;
      this.s112_client();
      this.refreshOutputs([{av:'AV11SelectedTabCode',fld:'vSELECTEDTABCODE',pic:''},{av:'AV10LoadAllTabs',fld:'vLOADALLTABS',pic:''},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:'CELL_GENERAL',prop:'Visible'},{ctrl:'GENERALWC'},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:'TXTTABTITLE',prop:'Caption'},{av:'gx.fn.getCtrlProperty("CELL_HORARIO","Visible")',ctrl:'CELL_HORARIO',prop:'Visible'},{ctrl:'HORARIOWC'}]);
      return gx.$.Deferred().resolve();
   };
   this.e111j1_client=function()
   {
      this.clearMessages();
      this.TABSContainer.SelectTab(1) ;
      this.AV11SelectedTabCode =  "General"  ;
      this.AV10LoadAllTabs =  false  ;
      this.s112_client();
      this.refreshOutputs([{av:'AV11SelectedTabCode',fld:'vSELECTEDTABCODE',pic:''},{av:'AV10LoadAllTabs',fld:'vLOADALLTABS',pic:''},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:'CELL_GENERAL',prop:'Visible'},{ctrl:'GENERALWC'},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:'TXTTABTITLE',prop:'Caption'},{av:'gx.fn.getCtrlProperty("CELL_HORARIO","Visible")',ctrl:'CELL_HORARIO',prop:'Visible'},{ctrl:'HORARIOWC'}]);
      return gx.$.Deferred().resolve();
   };
   this.e121j1_client=function()
   {
      this.clearMessages();
      this.TABSContainer.SelectTab(2) ;
      this.AV11SelectedTabCode =  "Horario"  ;
      this.AV10LoadAllTabs =  false  ;
      this.s112_client();
      this.refreshOutputs([{av:'AV11SelectedTabCode',fld:'vSELECTEDTABCODE',pic:''},{av:'AV10LoadAllTabs',fld:'vLOADALLTABS',pic:''},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:'CELL_GENERAL',prop:'Visible'},{ctrl:'GENERALWC'},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:'TXTTABTITLE',prop:'Caption'},{av:'gx.fn.getCtrlProperty("CELL_HORARIO","Visible")',ctrl:'CELL_HORARIO',prop:'Visible'},{ctrl:'HORARIOWC'}]);
      return gx.$.Deferred().resolve();
   };
   this.e161j2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e171j2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20,21,23,24,25,28,29,31,32,33,35,36,37,38,39,40,41,42,43];
   this.GXLastCtrlId =43;
   this.TABSContainer = gx.uc.getNew(this, 18, 0, "gx.ui.controls.Tab", "TABSContainer", "Tabs", "TABS");
   var TABSContainer = this.TABSContainer;
   TABSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABSContainer.setProp("ActivePage", "Activepage", '', "int");
   TABSContainer.setDynProp("ActivePageControlName", "Activepagecontrolname", "", "char");
   TABSContainer.setProp("PageCount", "Pagecount", 2, "num");
   TABSContainer.setProp("Class", "Class", "ViewTab Tab", "str");
   TABSContainer.setProp("HistoryManagement", "Historymanagement", true, "bool");
   TABSContainer.setProp("Visible", "Visible", true, "bool");
   TABSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   TABSContainer.addEventHandler("TabChanged", this.e151j1_client);
   this.setUserControl(TABSContainer);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEMAIN",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"WORKWITHLINK", format:0,grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"UNNAMEDTABLEVIEWCONTAINER",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"TXTTABTITLE", format:0,grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"GENERAL_TITLE", format:0,grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"UNNAMEDTABLEGENERAL",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"HORARIO_TITLE", format:0,grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"UNNAMEDTABLEHORARIO",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"UNNAMEDTABLETABSCONTAINER",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"CELL_GENERAL",grid:0};
   GXValidFnc[40]={ id: 40, fld:"BTNGENERAL",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"CELL_HORARIO",grid:0};
   GXValidFnc[43]={ id: 43, fld:"BTNHORARIO",grid:0};
   this.AV9LugarId = 0 ;
   this.AV7TabCode = "" ;
   this.A25LugarId = 0 ;
   this.A39LugarNombre = "" ;
   this.AV10LoadAllTabs = false ;
   this.AV11SelectedTabCode = "" ;
   this.Events = {"e161j2_client": ["ENTER", true] ,"e171j2_client": ["CANCEL", true] ,"e151j1_client": ["TABS.TABCHANGED", false] ,"e111j1_client": ["'GENERAL'", false] ,"e121j1_client": ["'HORARIO'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV9LugarId',fld:'vLUGARID',pic:'ZZZ9',hsh:true},{av:'AV7TabCode',fld:'vTABCODE',pic:'',hsh:true}],[]];
   this.EvtParms["START"] = [[{av:'A25LugarId',fld:'LUGARID',pic:'ZZZ9'},{av:'AV9LugarId',fld:'vLUGARID',pic:'ZZZ9',hsh:true},{av:'A39LugarNombre',fld:'LUGARNOMBRE',pic:''},{av:'AV7TabCode',fld:'vTABCODE',pic:'',hsh:true},{av:'AV10LoadAllTabs',fld:'vLOADALLTABS',pic:''},{av:'AV11SelectedTabCode',fld:'vSELECTEDTABCODE',pic:''}],[{av:'gx.fn.getCtrlProperty("WORKWITHLINK","Link")',ctrl:'WORKWITHLINK',prop:'Link'},{ctrl:'FORM',prop:'Caption'},{av:'AV11SelectedTabCode',fld:'vSELECTEDTABCODE',pic:''},{av:'this.TABSContainer.ActivePageControlName',ctrl:'TABS',prop:'ActivePageControlName'},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:'CELL_GENERAL',prop:'Visible'},{ctrl:'GENERALWC'},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:'TXTTABTITLE',prop:'Caption'},{av:'gx.fn.getCtrlProperty("CELL_HORARIO","Visible")',ctrl:'CELL_HORARIO',prop:'Visible'},{ctrl:'HORARIOWC'}]];
   this.EvtParms["LOAD"] = [[],[]];
   this.EvtParms["TABS.TABCHANGED"] = [[{av:'this.TABSContainer.ActivePageControlName',ctrl:'TABS',prop:'ActivePageControlName'},{av:'AV10LoadAllTabs',fld:'vLOADALLTABS',pic:''},{av:'AV11SelectedTabCode',fld:'vSELECTEDTABCODE',pic:''},{av:'AV9LugarId',fld:'vLUGARID',pic:'ZZZ9',hsh:true}],[{av:'AV11SelectedTabCode',fld:'vSELECTEDTABCODE',pic:''},{av:'AV10LoadAllTabs',fld:'vLOADALLTABS',pic:''},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:'CELL_GENERAL',prop:'Visible'},{ctrl:'GENERALWC'},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:'TXTTABTITLE',prop:'Caption'},{av:'gx.fn.getCtrlProperty("CELL_HORARIO","Visible")',ctrl:'CELL_HORARIO',prop:'Visible'},{ctrl:'HORARIOWC'}]];
   this.EvtParms["'GENERAL'"] = [[{av:'AV10LoadAllTabs',fld:'vLOADALLTABS',pic:''},{av:'AV11SelectedTabCode',fld:'vSELECTEDTABCODE',pic:''},{av:'AV9LugarId',fld:'vLUGARID',pic:'ZZZ9',hsh:true}],[{av:'AV11SelectedTabCode',fld:'vSELECTEDTABCODE',pic:''},{av:'AV10LoadAllTabs',fld:'vLOADALLTABS',pic:''},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:'CELL_GENERAL',prop:'Visible'},{ctrl:'GENERALWC'},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:'TXTTABTITLE',prop:'Caption'},{av:'gx.fn.getCtrlProperty("CELL_HORARIO","Visible")',ctrl:'CELL_HORARIO',prop:'Visible'},{ctrl:'HORARIOWC'}]];
   this.EvtParms["'HORARIO'"] = [[{av:'AV10LoadAllTabs',fld:'vLOADALLTABS',pic:''},{av:'AV11SelectedTabCode',fld:'vSELECTEDTABCODE',pic:''},{av:'AV9LugarId',fld:'vLUGARID',pic:'ZZZ9',hsh:true}],[{av:'AV11SelectedTabCode',fld:'vSELECTEDTABCODE',pic:''},{av:'AV10LoadAllTabs',fld:'vLOADALLTABS',pic:''},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:'CELL_GENERAL',prop:'Visible'},{ctrl:'GENERALWC'},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:'TXTTABTITLE',prop:'Caption'},{av:'gx.fn.getCtrlProperty("CELL_HORARIO","Visible")',ctrl:'CELL_HORARIO',prop:'Visible'},{ctrl:'HORARIOWC'}]];
   this.setVCMap("AV10LoadAllTabs", "vLOADALLTABS", 0, "boolean", 4, 0);
   this.setVCMap("AV11SelectedTabCode", "vSELECTEDTABCODE", 0, "char", 50, 0);
   this.setVCMap("AV9LugarId", "vLUGARID", 0, "int", 4, 0);
   this.setVCMap("AV7TabCode", "vTABCODE", 0, "char", 50, 0);
   this.setVCMap("AV9LugarId", "vLUGARID", 0, "int", 4, 0);
   this.setVCMap("AV10LoadAllTabs", "vLOADALLTABS", 0, "boolean", 4, 0);
   this.setVCMap("AV11SelectedTabCode", "vSELECTEDTABCODE", 0, "char", 50, 0);
   this.Initialize( );
   this.setComponent({id: "GENERALWC" ,GXClass: null , Prefix: "W0026" , lvl: 1 });
   this.setComponent({id: "HORARIOWC" ,GXClass: null , Prefix: "W0034" , lvl: 1 });
});
gx.wi( function() { gx.createParentObj(academia.lugarview);});
