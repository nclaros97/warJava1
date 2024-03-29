/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:13:21.23
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.home', false, function () {
   this.ServerClass =  "wwpbaseobjects.home" ;
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
      this.AV5HomeModulesSDT=gx.fn.getControlValue("vHOMEMODULESSDT") ;
   };
   this.e14082_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e15082_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29,30,31,32];
   this.GXLastCtrlId =32;
   this.BannerContainer = new gx.grid.grid(this, 2,"WbpLvl2",12,"Banner","Banner","BannerContainer",this.CmpContext,this.IsMasterPage,"wwpbaseobjects.home",[],true,1,true,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",false,false,false,gx.uc.HorizontalGrid,null,false,"",true,[1,1,1,1],false,0,false,false);
   var BannerContainer = this.BannerContainer;
   BannerContainer.startDiv(13,"Unnamedtablefsbanner","0px","0px");
   BannerContainer.startDiv(14,"","0px","0px");
   BannerContainer.startDiv(15,"","0px","0px");
   BannerContainer.startDiv(16,"","0px","0px");
   BannerContainer.addLabel();
   BannerContainer.addBitmap("&Imagebanner","vIMAGEBANNER",17,0,"",0,"",null,"","","AttributeBannerModules ObjectFitCover","");
   BannerContainer.endDiv();
   BannerContainer.endDiv();
   BannerContainer.endDiv();
   BannerContainer.endDiv();
   this.BannerContainer.emptyText = "";
   BannerContainer.setRenderProp("Class", "Class", "FreeStyleGrid", "str");
   BannerContainer.setRenderProp("Enabled", "Enabled", true, "boolean");
   BannerContainer.setRenderProp("Paged", "Paged", true, "bool");
   BannerContainer.setRenderProp("ShowPageController", "Showpagecontroller", true, "bool");
   BannerContainer.setRenderProp("PageControllerClass", "Pagecontrollerclass", "GridPageController", "str");
   BannerContainer.setRenderDynProp("ShowArrows", "Showarrows", true, "bool");
   BannerContainer.setRenderProp("Infinite", "Infinite", false, "bool");
   BannerContainer.setRenderDynProp("AutoPlay", "Autoplay", false, "bool");
   BannerContainer.setRenderProp("AutoPlaySpeed", "Autoplayspeed", 3000, "num");
   BannerContainer.setRenderProp("VariableWidth", "Variablewidth", false, "bool");
   BannerContainer.setRenderProp("MultiRowsExtraSmall", "Multi_rows_xs", 1, "num");
   BannerContainer.setRenderProp("MultiRowsSmall", "Multi_rows_sm", 1, "num");
   BannerContainer.setRenderProp("MultiRowsMedium", "Multi_rows_md", 1, "num");
   BannerContainer.setRenderProp("MultiRowsLarge", "Multi_rows_lg", 1, "num");
   BannerContainer.setRenderProp("CurrentPage", "Currentpage", '', "int");
   BannerContainer.setRenderProp("Visible", "Visible", true, "boolean");
   this.setGrid(BannerContainer);
   this.GridhomemodulessdtsContainer = new gx.grid.grid(this, 3,"WbpLvl3",20,"Gridhomemodulessdts","Gridhomemodulessdts","GridhomemodulessdtsContainer",this.CmpContext,this.IsMasterPage,"wwpbaseobjects.home",[],true,1,true,true,0,false,false,false,"CollWWPBaseObjects\HomeModulesSDT.HomeModulesSDTItem",0,"px",0,"px","Nueva fila",false,false,false,gx.grid.flexGrid,null,false,"AV5HomeModulesSDT",true,[2,3,3,3],false,0,false,false);
   var GridhomemodulessdtsContainer = this.GridhomemodulessdtsContainer;
   GridhomemodulessdtsContainer.startDiv(21,"Unnamedtablefsgridhomemodulessdts","0px","0px");
   GridhomemodulessdtsContainer.startDiv(22,"","0px","0px");
   GridhomemodulessdtsContainer.startDiv(23,"","0px","0px");
   GridhomemodulessdtsContainer.addTextBlock('OPTIONICON',null,24);
   GridhomemodulessdtsContainer.endDiv();
   GridhomemodulessdtsContainer.endDiv();
   GridhomemodulessdtsContainer.startDiv(25,"","0px","0px");
   GridhomemodulessdtsContainer.startDiv(26,"","0px","0px");
   GridhomemodulessdtsContainer.startDiv(27,"","0px","0px");
   GridhomemodulessdtsContainer.addLabel();
   GridhomemodulessdtsContainer.addSingleLineEdit("GXV2",28,"HOMEMODULESSDT__OPTIONTITLE","","","OptionTitle","svchar",80,"chr",100,80,"left",null,[],"GXV2","GXV2",true,0,false,false,"AttributeHomeModulesBigTitle",1,"");
   GridhomemodulessdtsContainer.endDiv();
   GridhomemodulessdtsContainer.endDiv();
   GridhomemodulessdtsContainer.endDiv();
   GridhomemodulessdtsContainer.startDiv(29,"","0px","0px");
   GridhomemodulessdtsContainer.startDiv(30,"","0px","0px");
   GridhomemodulessdtsContainer.startDiv(31,"","0px","0px");
   GridhomemodulessdtsContainer.addLabel();
   GridhomemodulessdtsContainer.addSingleLineEdit("GXV3",32,"HOMEMODULESSDT__OPTIONDESCRIPTION","","","OptionDescription","svchar",80,"chr",100,80,"left",null,[],"GXV3","GXV3",true,0,false,false,"AttributeHomeModulesBigDescription",1,"");
   GridhomemodulessdtsContainer.endDiv();
   GridhomemodulessdtsContainer.endDiv();
   GridhomemodulessdtsContainer.endDiv();
   GridhomemodulessdtsContainer.endDiv();
   this.GridhomemodulessdtsContainer.emptyText = "";
   GridhomemodulessdtsContainer.setRenderProp("Class", "Class", "FreeStyleHomeModulesBig", "str");
   GridhomemodulessdtsContainer.setRenderProp("Enabled", "Enabled", true, "boolean");
   GridhomemodulessdtsContainer.setRenderProp("FlexDirection", "Flexdirection", "row", "str");
   GridhomemodulessdtsContainer.setRenderProp("FlexWrap", "Flexwrap", "wrap", "str");
   GridhomemodulessdtsContainer.setRenderProp("JustifyContent", "Justifycontent", "center", "str");
   GridhomemodulessdtsContainer.setRenderProp("AlignItems", "Alignitems", "stretch", "str");
   GridhomemodulessdtsContainer.setRenderProp("AlignContent", "Aligncontent", "stretch", "str");
   GridhomemodulessdtsContainer.setRenderProp("Visible", "Visible", true, "boolean");
   this.setGrid(GridhomemodulessdtsContainer);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEMAIN",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"TABLECONTENT",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[13]={ id: 13, fld:"UNNAMEDTABLEFSBANNER",grid:12};
   GXValidFnc[14]={ id: 14, fld:"",grid:12};
   GXValidFnc[15]={ id: 15, fld:"",grid:12};
   GXValidFnc[16]={ id: 16, fld:"",grid:12};
   GXValidFnc[17]={ id:17 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:12,gxgrid:this.BannerContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vIMAGEBANNER",gxz:"ZV6ImageBanner",gxold:"OV6ImageBanner",gxvar:"AV6ImageBanner",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV6ImageBanner=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV6ImageBanner=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vIMAGEBANNER",row || gx.fn.currentGridRowImpl(12),gx.O.AV6ImageBanner,gx.O.AV13Imagebanner_GXI)},c2v:function(){gx.O.AV13Imagebanner_GXI=this.val_GXI();if(this.val()!==undefined)gx.O.AV6ImageBanner=this.val()},val:function(row){return gx.fn.getGridControlValue("vIMAGEBANNER",row || gx.fn.currentGridRowImpl(12))},val_GXI:function(row){return gx.fn.getGridControlValue("vIMAGEBANNER_GXI",row || gx.fn.currentGridRowImpl(12))}, gxvar_GXI:'AV13Imagebanner_GXI',nac:gx.falseFn};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"UNNAMEDTABLEFSGRIDHOMEMODULESSDTS",grid:20};
   GXValidFnc[22]={ id: 22, fld:"",grid:20};
   GXValidFnc[23]={ id: 23, fld:"",grid:20};
   GXValidFnc[24]={ id: 24, fld:"OPTIONICON", format:2,grid:20};
   GXValidFnc[25]={ id: 25, fld:"",grid:20};
   GXValidFnc[26]={ id: 26, fld:"",grid:20};
   GXValidFnc[27]={ id: 27, fld:"",grid:20};
   GXValidFnc[28]={ id:28 ,lvl:3,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:20,gxgrid:this.GridhomemodulessdtsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HOMEMODULESSDT__OPTIONTITLE",gxz:"ZV11GXV2",gxold:"OV11GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.GXV2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV11GXV2=Value},v2c:function(row){gx.fn.setGridControlValue("HOMEMODULESSDT__OPTIONTITLE",row || gx.fn.currentGridRowImpl(20),gx.O.GXV2,0)},c2v:function(){if(this.val()!==undefined)gx.O.GXV2=this.val()},val:function(row){return gx.fn.getGridControlValue("HOMEMODULESSDT__OPTIONTITLE",row || gx.fn.currentGridRowImpl(20))},nac:gx.falseFn};
   GXValidFnc[29]={ id: 29, fld:"",grid:20};
   GXValidFnc[30]={ id: 30, fld:"",grid:20};
   GXValidFnc[31]={ id: 31, fld:"",grid:20};
   GXValidFnc[32]={ id:32 ,lvl:3,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:20,gxgrid:this.GridhomemodulessdtsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HOMEMODULESSDT__OPTIONDESCRIPTION",gxz:"ZV12GXV3",gxold:"OV12GXV3",gxvar:"GXV3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.GXV3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV12GXV3=Value},v2c:function(row){gx.fn.setGridControlValue("HOMEMODULESSDT__OPTIONDESCRIPTION",row || gx.fn.currentGridRowImpl(20),gx.O.GXV3,0)},c2v:function(){if(this.val()!==undefined)gx.O.GXV3=this.val()},val:function(row){return gx.fn.getGridControlValue("HOMEMODULESSDT__OPTIONDESCRIPTION",row || gx.fn.currentGridRowImpl(20))},nac:gx.falseFn};
   this.ZV6ImageBanner = "" ;
   this.OV6ImageBanner = "" ;
   this.ZV11GXV2 = "" ;
   this.OV11GXV2 = "" ;
   this.ZV12GXV3 = "" ;
   this.OV12GXV3 = "" ;
   this.AV6ImageBanner = "" ;
   this.GXV2 = "" ;
   this.GXV3 = "" ;
   this.AV5HomeModulesSDT = [ ] ;
   this.Events = {"e14082_client": ["ENTER", true] ,"e15082_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'BANNER_nFirstRecordOnPage'},{av:'BANNER_nEOF'},{av:'GRIDHOMEMODULESSDTS_nFirstRecordOnPage'},{av:'GRIDHOMEMODULESSDTS_nEOF'},{av:'AV5HomeModulesSDT',fld:'vHOMEMODULESSDT',grid:20,pic:''},{av:'nRC_GXsfl_20',ctrl:'GRIDHOMEMODULESSDTS',prop:'GridRC'}],[]];
   this.EvtParms["START"] = [[],[{ctrl:'BANNER',prop:'Showarrows'},{ctrl:'BANNER',prop:'Autoplay'}]];
   this.EvtParms["BANNER.LOAD"] = [[],[{av:'AV6ImageBanner',fld:'vIMAGEBANNER',pic:''}]];
   this.EvtParms["GRIDHOMEMODULESSDTS.LOAD"] = [[{av:'AV5HomeModulesSDT',fld:'vHOMEMODULESSDT',grid:20,pic:''},{av:'GRIDHOMEMODULESSDTS_nFirstRecordOnPage'},{av:'nRC_GXsfl_20',ctrl:'GRIDHOMEMODULESSDTS',prop:'GridRC'}],[{av:'gx.fn.getCtrlProperty("OPTIONICON","Caption")',ctrl:'OPTIONICON',prop:'Caption'}]];
   this.setVCMap("AV5HomeModulesSDT", "vHOMEMODULESSDT", 0, "CollWWPBaseObjects\HomeModulesSDT.HomeModulesSDTItem", 0, 0);
   GridhomemodulessdtsContainer.addRefreshingVar({rfrVar:"AV5HomeModulesSDT"});
   this.addGridBCProperty("Homemodulessdt", ["OptionTitle"], this.GXValidFnc[28], "AV5HomeModulesSDT");
   this.addGridBCProperty("Homemodulessdt", ["OptionDescription"], this.GXValidFnc[32], "AV5HomeModulesSDT");
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.home);});
