/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:13:12.92
*/
gx.evt.autoSkip = false;
gx.define('academia.registromoras', false, function () {
   this.ServerClass =  "academia.registromoras" ;
   this.PackageName =  "com.taankanik" ;
   this.setObjectType("trn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV7RegistroMorasId=gx.fn.getIntegerValue("vREGISTROMORASID",'.') ;
      this.AV11Insert_PagoMatriculaId=gx.fn.getIntegerValue("vINSERT_PAGOMATRICULAID",'.') ;
      this.AV12Insert_ParametroMoraId=gx.fn.getIntegerValue("vINSERT_PARAMETROMORAID",'.') ;
      this.AV16Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV9TrnContext=gx.fn.getControlValue("vTRNCONTEXT") ;
   };
   this.Valid_Registromorasid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REGISTROMORASID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pagomatriculaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Pagomatriculaid",["gx.O.A33PagoMatriculaId"],[]);
      return true;
   }
   this.Valid_Parametromoraid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Parametromoraid",["gx.O.A35ParametroMoraId"],[]);
      return true;
   }
   this.Valid_Registromorasfecha=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REGISTROMORASFECHA");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.A117RegistroMorasFecha)==0) || new gx.date.gxdate( this.A117RegistroMorasFecha ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo Registro Moras Fecha fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e120g2_client=function()
   {
      return this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e130g17_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e140g17_client=function()
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
   GXValidFnc[25]={ id:25 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Registromorasid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"REGISTROMORASID",gxz:"Z37RegistroMorasId",gxold:"O37RegistroMorasId",gxvar:"A37RegistroMorasId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A37RegistroMorasId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z37RegistroMorasId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REGISTROMORASID",gx.O.A37RegistroMorasId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A37RegistroMorasId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REGISTROMORASID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id:30 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pagomatriculaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAID",gxz:"Z33PagoMatriculaId",gxold:"O33PagoMatriculaId",gxvar:"A33PagoMatriculaId",ucs:[],op:[],ip:[30],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A33PagoMatriculaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z33PagoMatriculaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGOMATRICULAID",gx.O.A33PagoMatriculaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A33PagoMatriculaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGOMATRICULAID",'.')},nac:function(){return (this.Gx_mode=="INS")&&!((0==this.AV11Insert_PagoMatriculaId))}};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id:35 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametromoraid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PARAMETROMORAID",gxz:"Z35ParametroMoraId",gxold:"O35ParametroMoraId",gxvar:"A35ParametroMoraId",ucs:[],op:[],ip:[35],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A35ParametroMoraId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z35ParametroMoraId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PARAMETROMORAID",gx.O.A35ParametroMoraId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A35ParametroMoraId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PARAMETROMORAID",'.')},nac:function(){return (this.Gx_mode=="INS")&&!((0==this.AV12Insert_ParametroMoraId))}};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id:40 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Registromorasfecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"REGISTROMORASFECHA",gxz:"Z117RegistroMorasFecha",gxold:"O117RegistroMorasFecha",gxvar:"A117RegistroMorasFecha",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[40],ip:[40],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A117RegistroMorasFecha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z117RegistroMorasFecha=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("REGISTROMORASFECHA",gx.O.A117RegistroMorasFecha,0)},c2v:function(){if(this.val()!==undefined)gx.O.A117RegistroMorasFecha=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("REGISTROMORASFECHA")},nac:gx.falseFn};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id:45 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"REGISTROMORASVALOR",gxz:"Z118RegistroMorasValor",gxold:"O118RegistroMorasValor",gxvar:"A118RegistroMorasValor",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A118RegistroMorasValor=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z118RegistroMorasValor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REGISTROMORASVALOR",gx.O.A118RegistroMorasValor,0)},c2v:function(){if(this.val()!==undefined)gx.O.A118RegistroMorasValor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REGISTROMORASVALOR",'.')},nac:gx.falseFn};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"BTNTRN_ENTER",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"BTNTRN_CANCEL",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"BTNTRN_DELETE",grid:0};
   this.A37RegistroMorasId = 0 ;
   this.Z37RegistroMorasId = 0 ;
   this.O37RegistroMorasId = 0 ;
   this.A33PagoMatriculaId = 0 ;
   this.Z33PagoMatriculaId = 0 ;
   this.O33PagoMatriculaId = 0 ;
   this.A35ParametroMoraId = 0 ;
   this.Z35ParametroMoraId = 0 ;
   this.O35ParametroMoraId = 0 ;
   this.A117RegistroMorasFecha = gx.date.nullDate() ;
   this.Z117RegistroMorasFecha = gx.date.nullDate() ;
   this.O117RegistroMorasFecha = gx.date.nullDate() ;
   this.A118RegistroMorasValor = 0 ;
   this.Z118RegistroMorasValor = 0 ;
   this.O118RegistroMorasValor = 0 ;
   this.AV8WWPContext = {UserId:0,UserName:""} ;
   this.AV9TrnContext = {CallerObject:"",CallerOnDelete:false,CallerURL:"",TransactionName:"",Attributes:[]} ;
   this.AV17GXV1 = 0 ;
   this.AV11Insert_PagoMatriculaId = 0 ;
   this.AV12Insert_ParametroMoraId = 0 ;
   this.AV13TrnContextAtt = {AttributeName:"",AttributeValue:""} ;
   this.AV7RegistroMorasId = 0 ;
   this.AV10WebSession = {} ;
   this.A37RegistroMorasId = 0 ;
   this.A33PagoMatriculaId = 0 ;
   this.A35ParametroMoraId = 0 ;
   this.AV16Pgmname = "" ;
   this.A117RegistroMorasFecha = gx.date.nullDate() ;
   this.A118RegistroMorasValor = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e120g2_client": ["AFTER TRN", true] ,"e130g17_client": ["ENTER", true] ,"e140g17_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV7RegistroMorasId',fld:'vREGISTROMORASID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["REFRESH"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV7RegistroMorasId',fld:'vREGISTROMORASID',pic:'ZZZ9',hsh:true},{av:'A37RegistroMorasId',fld:'REGISTROMORASID',pic:'ZZZ9'},{av:'AV11Insert_PagoMatriculaId',fld:'vINSERT_PAGOMATRICULAID',pic:'ZZZ9'},{av:'AV12Insert_ParametroMoraId',fld:'vINSERT_PARAMETROMORAID',pic:'ZZZ9'}],[]];
   this.EvtParms["START"] = [[{av:'AV16Pgmname',fld:'vPGMNAME',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true}],[{av:'AV8WWPContext',fld:'vWWPCONTEXT',pic:''},{av:'AV9TrnContext',fld:'vTRNCONTEXT',pic:''},{av:'AV17GXV1',fld:'vGXV1',pic:'99999999'},{av:'AV13TrnContextAtt',fld:'vTRNCONTEXTATT',pic:''},{av:'AV11Insert_PagoMatriculaId',fld:'vINSERT_PAGOMATRICULAID',pic:'ZZZ9'},{av:'AV12Insert_ParametroMoraId',fld:'vINSERT_PARAMETROMORAID',pic:'ZZZ9'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV9TrnContext',fld:'vTRNCONTEXT',pic:''}],[]];
   this.EnterCtrl = ["BTNTRN_ENTER"];
   this.setVCMap("AV7RegistroMorasId", "vREGISTROMORASID", 0, "int", 4, 0);
   this.setVCMap("AV11Insert_PagoMatriculaId", "vINSERT_PAGOMATRICULAID", 0, "int", 4, 0);
   this.setVCMap("AV12Insert_ParametroMoraId", "vINSERT_PARAMETROMORAID", 0, "int", 4, 0);
   this.setVCMap("AV16Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV9TrnContext", "vTRNCONTEXT", 0, "WWPBaseObjects\WWPTransactionContext", 0, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.registromoras);});
