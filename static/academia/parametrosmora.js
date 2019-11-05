/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:11:45.36
*/
gx.evt.autoSkip = false;
gx.define('academia.parametrosmora', false, function () {
   this.ServerClass =  "academia.parametrosmora" ;
   this.PackageName =  "com.taankanik" ;
   this.setObjectType("trn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV7ParametroMoraId=gx.fn.getIntegerValue("vPARAMETROMORAID",'.') ;
      this.AV11Insert_PeriodosMoraId=gx.fn.getIntegerValue("vINSERT_PERIODOSMORAID",'.') ;
      this.A67PeriodosMoraDescripcion=gx.fn.getControlValue("PERIODOSMORADESCRIPCION") ;
      this.AV15Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV9TrnContext=gx.fn.getControlValue("vTRNCONTEXT") ;
   };
   this.Valid_Parametromoraid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROMORAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Periodosmoraid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Periodosmoraid",["gx.O.A36PeriodosMoraId", "gx.O.A67PeriodosMoraDescripcion"],["A67PeriodosMoraDescripcion"]);
      return true;
   }
   this.e120e2_client=function()
   {
      return this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e130e15_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e140e15_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54];
   this.GXLastCtrlId =54;
   this.DVPANEL_TABLEATTRIBUTESContainer = gx.uc.getNew(this, 16, 0, "BootstrapPanel", "DVPANEL_TABLEATTRIBUTESContainer", "Dvpanel_tableattributes", "DVPANEL_TABLEATTRIBUTES");
   var DVPANEL_TABLEATTRIBUTESContainer = this.DVPANEL_TABLEATTRIBUTESContainer;
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Class", "Class", "", "char");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Enabled", "Enabled", true, "boolean");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Width", "Width", "100%", "str");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Height", "Height", "100", "str");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("AutoWidth", "Autowidth", false, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("AutoHeight", "Autoheight", true, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Cls", "Cls", "PanelCard_BaseColor", "str");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("ShowHeader", "Showheader", true, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Title", "Title", "Información General", "str");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Collapsible", "Collapsible", false, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Collapsed", "Collapsed", false, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("ShowCollapseIcon", "Showcollapseicon", false, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("IconPosition", "Iconposition", "left", "str");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("AutoScroll", "Autoscroll", false, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Visible", "Visible", true, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(DVPANEL_TABLEATTRIBUTESContainer);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEMAIN",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"TABLECONTENT",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"HTML_DVPANEL_TABLEATTRIBUTES",grid:0};
   GXValidFnc[18]={ id: 18, fld:"LAYOUT_TABLEATTRIBUTES",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"TABLEATTRIBUTES",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id:25 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Parametromoraid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PARAMETROMORAID",gxz:"Z35ParametroMoraId",gxold:"O35ParametroMoraId",gxvar:"A35ParametroMoraId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A35ParametroMoraId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z35ParametroMoraId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PARAMETROMORAID",gx.O.A35ParametroMoraId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A35ParametroMoraId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PARAMETROMORAID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id:30 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PARAMETROMORADESCRIPCION",gxz:"Z65ParametroMoraDescripcion",gxold:"O65ParametroMoraDescripcion",gxvar:"A65ParametroMoraDescripcion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A65ParametroMoraDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z65ParametroMoraDescripcion=Value},v2c:function(){gx.fn.setControlValue("PARAMETROMORADESCRIPCION",gx.O.A65ParametroMoraDescripcion,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A65ParametroMoraDescripcion=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROMORADESCRIPCION")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id:35 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Periodosmoraid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERIODOSMORAID",gxz:"Z36PeriodosMoraId",gxold:"O36PeriodosMoraId",gxvar:"A36PeriodosMoraId",ucs:[],op:[],ip:[35],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A36PeriodosMoraId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z36PeriodosMoraId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PERIODOSMORAID",gx.O.A36PeriodosMoraId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A36PeriodosMoraId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PERIODOSMORAID",'.')},nac:function(){return (this.Gx_mode=="INS")&&!((0==this.AV11Insert_PeriodosMoraId))}};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id:40 ,lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PARAMETROMORAVALOR",gxz:"Z66ParametroMoraValor",gxold:"O66ParametroMoraValor",gxvar:"A66ParametroMoraValor",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A66ParametroMoraValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.Z66ParametroMoraValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PARAMETROMORAVALOR",gx.O.A66ParametroMoraValor,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.A66ParametroMoraValor=this.val()},val:function(){return gx.fn.getDecimalValue("PARAMETROMORAVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id:45 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PARAMETROSMORAACTIVO",gxz:"Z115ParametrosMoraActivo",gxold:"O115ParametrosMoraActivo",gxvar:"A115ParametrosMoraActivo",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.A115ParametrosMoraActivo=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z115ParametrosMoraActivo=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("PARAMETROSMORAACTIVO",gx.O.A115ParametrosMoraActivo,true)},c2v:function(){if(this.val()!==undefined)gx.O.A115ParametrosMoraActivo=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("PARAMETROSMORAACTIVO")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"BTNTRN_ENTER",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"BTNTRN_CANCEL",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"BTNTRN_DELETE",grid:0};
   this.A35ParametroMoraId = 0 ;
   this.Z35ParametroMoraId = 0 ;
   this.O35ParametroMoraId = 0 ;
   this.A65ParametroMoraDescripcion = "" ;
   this.Z65ParametroMoraDescripcion = "" ;
   this.O65ParametroMoraDescripcion = "" ;
   this.A36PeriodosMoraId = 0 ;
   this.Z36PeriodosMoraId = 0 ;
   this.O36PeriodosMoraId = 0 ;
   this.A66ParametroMoraValor = 0 ;
   this.Z66ParametroMoraValor = 0 ;
   this.O66ParametroMoraValor = 0 ;
   this.A115ParametrosMoraActivo = false ;
   this.Z115ParametrosMoraActivo = false ;
   this.O115ParametrosMoraActivo = false ;
   this.AV8WWPContext = {UserId:0,UserName:""} ;
   this.AV9TrnContext = {CallerObject:"",CallerOnDelete:false,CallerURL:"",TransactionName:"",Attributes:[]} ;
   this.AV16GXV1 = 0 ;
   this.AV11Insert_PeriodosMoraId = 0 ;
   this.AV12TrnContextAtt = {AttributeName:"",AttributeValue:""} ;
   this.AV7ParametroMoraId = 0 ;
   this.AV10WebSession = {} ;
   this.A35ParametroMoraId = 0 ;
   this.A36PeriodosMoraId = 0 ;
   this.AV15Pgmname = "" ;
   this.A65ParametroMoraDescripcion = "" ;
   this.A67PeriodosMoraDescripcion = "" ;
   this.A66ParametroMoraValor = 0 ;
   this.A115ParametrosMoraActivo = false ;
   this.Gx_mode = "" ;
   this.Events = {"e120e2_client": ["AFTER TRN", true] ,"e130e15_client": ["ENTER", true] ,"e140e15_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV7ParametroMoraId',fld:'vPARAMETROMORAID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["REFRESH"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV7ParametroMoraId',fld:'vPARAMETROMORAID',pic:'ZZZ9',hsh:true},{av:'A35ParametroMoraId',fld:'PARAMETROMORAID',pic:'ZZZ9'},{av:'AV11Insert_PeriodosMoraId',fld:'vINSERT_PERIODOSMORAID',pic:'ZZZ9'}],[]];
   this.EvtParms["START"] = [[{av:'AV15Pgmname',fld:'vPGMNAME',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true}],[{av:'AV8WWPContext',fld:'vWWPCONTEXT',pic:''},{av:'AV9TrnContext',fld:'vTRNCONTEXT',pic:''},{av:'AV16GXV1',fld:'vGXV1',pic:'99999999'},{av:'AV12TrnContextAtt',fld:'vTRNCONTEXTATT',pic:''},{av:'AV11Insert_PeriodosMoraId',fld:'vINSERT_PERIODOSMORAID',pic:'ZZZ9'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV9TrnContext',fld:'vTRNCONTEXT',pic:''}],[]];
   this.EnterCtrl = ["BTNTRN_ENTER"];
   this.setVCMap("AV7ParametroMoraId", "vPARAMETROMORAID", 0, "int", 4, 0);
   this.setVCMap("AV11Insert_PeriodosMoraId", "vINSERT_PERIODOSMORAID", 0, "int", 4, 0);
   this.setVCMap("A67PeriodosMoraDescripcion", "PERIODOSMORADESCRIPCION", 0, "svchar", 40, 0);
   this.setVCMap("AV15Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV9TrnContext", "vTRNCONTEXT", 0, "WWPBaseObjects\WWPTransactionContext", 0, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.parametrosmora);});
