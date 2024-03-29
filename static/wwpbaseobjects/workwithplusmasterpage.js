/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:13:21.17
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.workwithplusmasterpage', false, function () {
   this.ServerClass =  "wwpbaseobjects.workwithplusmasterpage" ;
   this.PackageName =  "com.taankanik" ;
   this.setObjectType("web");
   this.IsMasterPage=true;
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV8DVelop_Menu=gx.fn.getControlValue("vDVELOP_MENU_MPAGE") ;
      this.AV9Breadcrumb=gx.fn.getControlValue("vBREADCRUMB_MPAGE") ;
   };
   this.e11071_client=function()
   {
      this.clearMessages();
      this.UCMENU_MPAGEContainer.CollapseExpand() ;
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e15072_client=function()
   {
      return this.executeServerEvent("ENTER_MPAGE", true, null, false, false);
   };
   this.e16072_client=function()
   {
      return this.executeServerEvent("CANCEL_MPAGE", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,38,39,40,41,42,43,44,45,47,48,50,51];
   this.GXLastCtrlId =51;
   this.UCMENU_MPAGEContainer = gx.uc.getNew(this, 37, 0, "BootstrapSidebarMenu", "UCMENU_MPAGEContainer", "Ucmenu", "UCMENU_MPAGE");
   var UCMENU_MPAGEContainer = this.UCMENU_MPAGEContainer;
   UCMENU_MPAGEContainer.setProp("Class", "Class", "", "char");
   UCMENU_MPAGEContainer.setProp("Enabled", "Enabled", true, "boolean");
   UCMENU_MPAGEContainer.setProp("SelectedItem", "Selecteditem", "", "char");
   UCMENU_MPAGEContainer.setProp("SearchServiceUrl", "Searchserviceurl", "xxx", "str");
   UCMENU_MPAGEContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   UCMENU_MPAGEContainer.setProp("SearchMinChars", "Searchminchars", 0, "num");
   UCMENU_MPAGEContainer.setProp("SearchHelperDescription", "Searchhelperdescription", "WWP_SearchMenuOption", "str");
   UCMENU_MPAGEContainer.setProp("SidebarMainClass", "Sidebarmainclass", "page-sidebar sidebar-fixed MaterialStyle", "str");
   UCMENU_MPAGEContainer.setProp("HeaderClass", "Headerclass", "sidebar-header-wrapper", "str");
   UCMENU_MPAGEContainer.setProp("SearchInputClass", "Searchinputclass", "searchinput", "str");
   UCMENU_MPAGEContainer.setProp("SearchIconClass", "Searchiconclass", "searchicon fa fa-search", "str");
   UCMENU_MPAGEContainer.setProp("SearchHelperClass", "Searchhelperclass", "searchhelper", "str");
   UCMENU_MPAGEContainer.setProp("SidebarMenuClass", "Sidebarmenuclass", "nav sidebar-menu", "str");
   UCMENU_MPAGEContainer.setProp("ScrollWidth", "Scrollwidth", 5, "num");
   UCMENU_MPAGEContainer.setProp("ScrollAlwaysVisible", "Scrollalwaysvisible", true, "bool");
   UCMENU_MPAGEContainer.setProp("HideScrollInCompactMenu", "Hidescrollincompactmenu", true, "bool");
   UCMENU_MPAGEContainer.setProp("FirstLevelIsGrouping", "Firstlevelisgrouping", true, "bool");
   UCMENU_MPAGEContainer.addV2CFunction('AV8DVelop_Menu', "vDVELOP_MENU_MPAGE", 'SetSidebarMenuOptionsDataOptionsData');
   UCMENU_MPAGEContainer.addC2VFunction(function(UC) { UC.ParentObject.AV8DVelop_Menu=UC.GetSidebarMenuOptionsDataOptionsData();gx.fn.setControlValue("vDVELOP_MENU_MPAGE",UC.ParentObject.AV8DVelop_Menu); });
   UCMENU_MPAGEContainer.setProp("SidebarMenuUserData", "Sidebarmenuuserdata", '', "str");
   UCMENU_MPAGEContainer.setProp("AllMenuItemsVisibleAtLoad", "Allmenuitemsvisibleatload", false, "bool");
   UCMENU_MPAGEContainer.setProp("Visible", "Visible", true, "bool");
   UCMENU_MPAGEContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(UCMENU_MPAGEContainer);
   this.UCMESSAGE_MPAGEContainer = gx.uc.getNew(this, 46, 0, "DVelop_DVMessage", "UCMESSAGE_MPAGEContainer", "Ucmessage", "UCMESSAGE_MPAGE");
   var UCMESSAGE_MPAGEContainer = this.UCMESSAGE_MPAGEContainer;
   UCMESSAGE_MPAGEContainer.setProp("Class", "Class", "", "char");
   UCMESSAGE_MPAGEContainer.setProp("Enabled", "Enabled", true, "boolean");
   UCMESSAGE_MPAGEContainer.setProp("Width", "Width", "300", "str");
   UCMESSAGE_MPAGEContainer.setProp("MinHeight", "Minheight", "16", "str");
   UCMESSAGE_MPAGEContainer.setProp("StylingType", "Stylingtype", "fontawesome", "str");
   UCMESSAGE_MPAGEContainer.setProp("DefaultMessageType", "Defaultmessagetype", "notice", "str");
   UCMESSAGE_MPAGEContainer.setProp("TitleEscape", "Titleescape", false, "bool");
   UCMESSAGE_MPAGEContainer.setProp("TextEscape", "Textescape", false, "bool");
   UCMESSAGE_MPAGEContainer.setProp("ChangeNewLinesToBRs", "Changenewlinestobrs", true, "bool");
   UCMESSAGE_MPAGEContainer.setProp("Hide", "Hide", true, "bool");
   UCMESSAGE_MPAGEContainer.setProp("DelayUntilHide", "Delayuntilhide", 8000, "num");
   UCMESSAGE_MPAGEContainer.setProp("MouseHideReset", "Mousehidereset", true, "bool");
   UCMESSAGE_MPAGEContainer.setProp("MessageAdditionalClasses", "Messageadditionalclasses", "", "str");
   UCMESSAGE_MPAGEContainer.setProp("MessageCornerClass", "Messagecornerclass", "", "str");
   UCMESSAGE_MPAGEContainer.setProp("Shadow", "Shadow", true, "bool");
   UCMESSAGE_MPAGEContainer.setProp("Opacity", "Opacity", "1", "str");
   UCMESSAGE_MPAGEContainer.setProp("StackVerticalFirstPos", "Stackverticalfirstpos", 15, "num");
   UCMESSAGE_MPAGEContainer.setProp("StackHorizontalFirstPos", "Stackhorizontalfirstpos", 15, "num");
   UCMESSAGE_MPAGEContainer.setProp("StackVerticalSpacing", "Stackverticalspacing", 15, "num");
   UCMESSAGE_MPAGEContainer.setProp("StackHorizontalSpacing", "Stackhorizontalspacing", 15, "num");
   UCMESSAGE_MPAGEContainer.setProp("EffectIn", "Effectin", "fade", "str");
   UCMESSAGE_MPAGEContainer.setProp("EffectOut", "Effectout", "fade", "str");
   UCMESSAGE_MPAGEContainer.setProp("AnimationSpeed", "Animationspeed", 600, "num");
   UCMESSAGE_MPAGEContainer.setProp("StartPosition", "Startposition", "TopRight", "str");
   UCMESSAGE_MPAGEContainer.setProp("NextMessagePosition", "Nextmessageposition", "down", "str");
   UCMESSAGE_MPAGEContainer.setProp("Closer", "Closer", true, "bool");
   UCMESSAGE_MPAGEContainer.setProp("CloserHover", "Closerhover", true, "bool");
   UCMESSAGE_MPAGEContainer.setProp("Sticker", "Sticker", false, "bool");
   UCMESSAGE_MPAGEContainer.setProp("StickerHover", "Stickerhover", true, "bool");
   UCMESSAGE_MPAGEContainer.setProp("LabelCloseButton", "Labelclosebutton", "Close", "str");
   UCMESSAGE_MPAGEContainer.setProp("LabelStickButton", "Labelstickbutton", "Stick", "str");
   UCMESSAGE_MPAGEContainer.setProp("showEvenOnNonblock", "Showevenonnonblock", false, "bool");
   UCMESSAGE_MPAGEContainer.setProp("NonBlock", "Nonblock", false, "bool");
   UCMESSAGE_MPAGEContainer.setProp("NonBlockOpacity", "Nonblockopacity", ".2", "str");
   UCMESSAGE_MPAGEContainer.setProp("EnableHistory", "Enablehistory", true, "bool");
   UCMESSAGE_MPAGEContainer.setProp("Menu", "Menu", false, "bool");
   UCMESSAGE_MPAGEContainer.setProp("FixedMenu", "Fixedmenu", true, "bool");
   UCMESSAGE_MPAGEContainer.setProp("MaxOnScreen", "Maxonscreen", "Infinity", "str");
   UCMESSAGE_MPAGEContainer.setProp("LabelRedisplay", "Labelredisplay", "Redisplay", "str");
   UCMESSAGE_MPAGEContainer.setProp("LabelAll", "Labelall", "All", "str");
   UCMESSAGE_MPAGEContainer.setProp("LabelLast", "Labellast", "Last", "str");
   UCMESSAGE_MPAGEContainer.setProp("Visible", "Visible", true, "bool");
   UCMESSAGE_MPAGEContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(UCMESSAGE_MPAGEContainer);
   this.UCTOOLTIP_MPAGEContainer = gx.uc.getNew(this, 49, 0, "BootstrapTooltip", "UCTOOLTIP_MPAGEContainer", "Uctooltip", "UCTOOLTIP_MPAGE");
   var UCTOOLTIP_MPAGEContainer = this.UCTOOLTIP_MPAGEContainer;
   UCTOOLTIP_MPAGEContainer.setProp("Class", "Class", "", "char");
   UCTOOLTIP_MPAGEContainer.setProp("Enabled", "Enabled", true, "boolean");
   UCTOOLTIP_MPAGEContainer.setProp("ClassSelector", "Classselector", "BootstrapTooltip", "str");
   UCTOOLTIP_MPAGEContainer.setProp("DefaultPosition", "Defaultposition", "bottom", "str");
   UCTOOLTIP_MPAGEContainer.setProp("LabelsShowDelay", "Labelsshowdelay", 300, "num");
   UCTOOLTIP_MPAGEContainer.setProp("ButtonsShowDelay", "Buttonsshowdelay", 300, "num");
   UCTOOLTIP_MPAGEContainer.setProp("InputsShowDelay", "Inputsshowdelay", 300, "num");
   UCTOOLTIP_MPAGEContainer.setProp("ImagesShowDelay", "Imagesshowdelay", 0, "num");
   UCTOOLTIP_MPAGEContainer.setProp("HideDelay", "Hidedelay", 0, "num");
   UCTOOLTIP_MPAGEContainer.setProp("Visible", "Visible", true, "bool");
   UCTOOLTIP_MPAGEContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(UCTOOLTIP_MPAGEContainer);
   this.WWPUTILITIES_MPAGEContainer = gx.uc.getNew(this, 52, 0, "DVelop_WorkWithPlusUtilities", "WWPUTILITIES_MPAGEContainer", "Wwputilities", "WWPUTILITIES_MPAGE");
   var WWPUTILITIES_MPAGEContainer = this.WWPUTILITIES_MPAGEContainer;
   WWPUTILITIES_MPAGEContainer.setProp("Class", "Class", "", "char");
   WWPUTILITIES_MPAGEContainer.setProp("Enabled", "Enabled", true, "boolean");
   WWPUTILITIES_MPAGEContainer.setProp("Width", "Width", "100", "str");
   WWPUTILITIES_MPAGEContainer.setProp("Height", "Height", "100", "str");
   WWPUTILITIES_MPAGEContainer.setProp("EnableAutoUpdateFromDocumentTitle", "Enableautoupdatefromdocumenttitle", false, "bool");
   WWPUTILITIES_MPAGEContainer.setProp("EnableFixObjectFitCover", "Enablefixobjectfitcover", true, "bool");
   WWPUTILITIES_MPAGEContainer.setProp("EnableFloatingLabels", "Enablefloatinglabels", true, "bool");
   WWPUTILITIES_MPAGEContainer.setProp("EnableConvertComboToBootstrapSelect", "Enableconvertcombotobootstrapselect", true, "bool");
   WWPUTILITIES_MPAGEContainer.setProp("CurrentTab_ReturnUrl", "Currenttab_returnurl", "", "char");
   WWPUTILITIES_MPAGEContainer.setProp("Visible", "Visible", true, "bool");
   WWPUTILITIES_MPAGEContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(WWPUTILITIES_MPAGEContainer);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEMAIN",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"TABLEHEADER",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"UNNAMEDTABLE1",grid:0};
   GXValidFnc[15]={ id: 15, fld:"HEADER",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id: 19, fld:"SHOWMENU", format:1,grid:0,evt:"e11071_client"};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"TABLECONTENT",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"TABLETITLE",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"TEXTBLOCKTITLE", format:0,grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"SUBTITLE", format:1,grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"TABLEFOOTER",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"TEXTBLOCKFOOTER", format:0,grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   this.AV8DVelop_Menu = [ ] ;
   this.AV9Breadcrumb = "" ;
   this.Events = {"e15072_client": ["ENTER_MPAGE", true] ,"e16072_client": ["CANCEL_MPAGE", true] ,"e11071_client": ["DOSHOWMENU_MPAGE", false]};
   this.EvtParms["REFRESH_MPAGE"] = [[{ctrl:'FORM_MPAGE',prop:'Caption'},{av:'AV8DVelop_Menu',fld:'vDVELOP_MENU_MPAGE',pic:''},{av:'AV9Breadcrumb',fld:'vBREADCRUMB_MPAGE',pic:''}],[{av:'gx.fn.getCtrlProperty("TEXTBLOCKTITLE_MPAGE","Caption")',ctrl:'TEXTBLOCKTITLE_MPAGE',prop:'Caption'},{av:'AV9Breadcrumb',fld:'vBREADCRUMB_MPAGE',pic:''},{av:'gx.fn.getCtrlProperty("SUBTITLE_MPAGE","Caption")',ctrl:'SUBTITLE_MPAGE',prop:'Caption'}]];
   this.EvtParms["START_MPAGE"] = [[],[{ctrl:'FORM_MPAGE',prop:'Headerrawhtml'},{av:'gx.fn.getCtrlProperty("LAYOUTMAINTABLE_MPAGE","Class")',ctrl:'LAYOUTMAINTABLE_MPAGE',prop:'Class'},{av:'AV8DVelop_Menu',fld:'vDVELOP_MENU_MPAGE',pic:''},{av:'gx.fn.getCtrlProperty("UNNAMEDTABLE1_MPAGE","Width")',ctrl:'UNNAMEDTABLE1_MPAGE',prop:'Width'}]];
   this.EvtParms["DOSHOWMENU_MPAGE"] = [[],[]];
   this.setVCMap("AV8DVelop_Menu", "vDVELOP_MENU_MPAGE", 0, "CollWWPBaseObjects\DVelop_Menu.Item", 0, 0);
   this.setVCMap("AV9Breadcrumb", "vBREADCRUMB_MPAGE", 0, "svchar", 1000, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createMasterPage(wwpbaseobjects.workwithplusmasterpage);});
