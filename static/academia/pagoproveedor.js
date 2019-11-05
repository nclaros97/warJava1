/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:11:41.50
*/
gx.evt.autoSkip = false;
gx.define('academia.pagoproveedor', false, function () {
   this.ServerClass =  "academia.pagoproveedor" ;
   this.PackageName =  "com.taankanik" ;
   this.setObjectType("trn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV7PagoProveedorId=gx.fn.getIntegerValue("vPAGOPROVEEDORID",'.') ;
      this.AV11Insert_ProveedorId=gx.fn.getIntegerValue("vINSERT_PROVEEDORID",'.') ;
      this.Gx_date=gx.fn.getDateValue("vTODAY") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV17Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV9TrnContext=gx.fn.getControlValue("vTRNCONTEXT") ;
   };
   this.Valid_Pagoproveedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGOPROVEEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pagoproveedorfecha=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGOPROVEEDORFECHA");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.A60PagoProveedorFecha)==0) || new gx.date.gxdate( this.A60PagoProveedorFecha ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo Pago Proveedor Fecha fuera de rango");
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
   this.Valid_Proveedorid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Proveedorid",["gx.O.A28ProveedorId", "gx.O.A62ProveedorNombre"],["A62ProveedorNombre"]);
      return true;
   }
   this.e120d2_client=function()
   {
      return this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e130d14_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e140d14_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65];
   this.GXLastCtrlId =65;
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
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Title", "Title", "Pago Proveedor", "str");
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
   GXValidFnc[25]={ id:25 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Pagoproveedorid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOPROVEEDORID",gxz:"Z34PagoProveedorId",gxold:"O34PagoProveedorId",gxvar:"A34PagoProveedorId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A34PagoProveedorId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z34PagoProveedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGOPROVEEDORID",gx.O.A34PagoProveedorId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A34PagoProveedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGOPROVEEDORID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id:30 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pagoproveedorfecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOPROVEEDORFECHA",gxz:"Z60PagoProveedorFecha",gxold:"O60PagoProveedorFecha",gxvar:"A60PagoProveedorFecha",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[30],ip:[30],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A60PagoProveedorFecha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z60PagoProveedorFecha=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PAGOPROVEEDORFECHA",gx.O.A60PagoProveedorFecha,0)},c2v:function(){if(this.val()!==undefined)gx.O.A60PagoProveedorFecha=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PAGOPROVEEDORFECHA")},nac:gx.falseFn};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id:35 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOPROVEEDORFACTURA",gxz:"Z61PagoProveedorFactura",gxold:"O61PagoProveedorFactura",gxvar:"A61PagoProveedorFactura",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A61PagoProveedorFactura=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z61PagoProveedorFactura=Value},v2c:function(){gx.fn.setControlValue("PAGOPROVEEDORFACTURA",gx.O.A61PagoProveedorFactura,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A61PagoProveedorFactura=this.val()},val:function(){return gx.fn.getControlValue("PAGOPROVEEDORFACTURA")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id:40 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Proveedorid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORID",gxz:"Z28ProveedorId",gxold:"O28ProveedorId",gxvar:"A28ProveedorId",ucs:[],op:[45],ip:[45,40],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A28ProveedorId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z28ProveedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROVEEDORID",gx.O.A28ProveedorId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A28ProveedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROVEEDORID",'.')},nac:function(){return (this.Gx_mode=="INS")&&!((0==this.AV11Insert_ProveedorId))}};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id:45 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORNOMBRE",gxz:"Z62ProveedorNombre",gxold:"O62ProveedorNombre",gxvar:"A62ProveedorNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A62ProveedorNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z62ProveedorNombre=Value},v2c:function(){gx.fn.setControlValue("PROVEEDORNOMBRE",gx.O.A62ProveedorNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A62ProveedorNombre=this.val()},val:function(){return gx.fn.getControlValue("PROVEEDORNOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id:50 ,lvl:0,type:"char",len:256,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOPROVEEDORDESCRIPCION",gxz:"Z63PagoProveedorDescripcion",gxold:"O63PagoProveedorDescripcion",gxvar:"A63PagoProveedorDescripcion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A63PagoProveedorDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z63PagoProveedorDescripcion=Value},v2c:function(){gx.fn.setControlValue("PAGOPROVEEDORDESCRIPCION",gx.O.A63PagoProveedorDescripcion,0)},c2v:function(){if(this.val()!==undefined)gx.O.A63PagoProveedorDescripcion=this.val()},val:function(){return gx.fn.getControlValue("PAGOPROVEEDORDESCRIPCION")},nac:gx.falseFn};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id:55 ,lvl:0,type:"decimal",len:10,dec:2,sign:false,pic:"ZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOPROVEEDORVALOR",gxz:"Z64PagoProveedorValor",gxold:"O64PagoProveedorValor",gxvar:"A64PagoProveedorValor",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A64PagoProveedorValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.Z64PagoProveedorValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PAGOPROVEEDORVALOR",gx.O.A64PagoProveedorValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A64PagoProveedorValor=this.val()},val:function(){return gx.fn.getDecimalValue("PAGOPROVEEDORVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id: 60, fld:"BTNTRN_ENTER",grid:0};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"BTNTRN_CANCEL",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"BTNTRN_DELETE",grid:0};
   GXValidFnc[65]={ id: 65, fld:"PROMPT_28",grid:14};
   this.A34PagoProveedorId = 0 ;
   this.Z34PagoProveedorId = 0 ;
   this.O34PagoProveedorId = 0 ;
   this.A60PagoProveedorFecha = gx.date.nullDate() ;
   this.Z60PagoProveedorFecha = gx.date.nullDate() ;
   this.O60PagoProveedorFecha = gx.date.nullDate() ;
   this.A61PagoProveedorFactura = "" ;
   this.Z61PagoProveedorFactura = "" ;
   this.O61PagoProveedorFactura = "" ;
   this.A28ProveedorId = 0 ;
   this.Z28ProveedorId = 0 ;
   this.O28ProveedorId = 0 ;
   this.A62ProveedorNombre = "" ;
   this.Z62ProveedorNombre = "" ;
   this.O62ProveedorNombre = "" ;
   this.A63PagoProveedorDescripcion = "" ;
   this.Z63PagoProveedorDescripcion = "" ;
   this.O63PagoProveedorDescripcion = "" ;
   this.A64PagoProveedorValor = 0 ;
   this.Z64PagoProveedorValor = 0 ;
   this.O64PagoProveedorValor = 0 ;
   this.AV8WWPContext = {UserId:0,UserName:""} ;
   this.AV9TrnContext = {CallerObject:"",CallerOnDelete:false,CallerURL:"",TransactionName:"",Attributes:[]} ;
   this.AV18GXV1 = 0 ;
   this.AV11Insert_ProveedorId = 0 ;
   this.AV12TrnContextAtt = {AttributeName:"",AttributeValue:""} ;
   this.AV7PagoProveedorId = 0 ;
   this.AV10WebSession = {} ;
   this.A34PagoProveedorId = 0 ;
   this.A28ProveedorId = 0 ;
   this.AV17Pgmname = "" ;
   this.Gx_BScreen = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.A60PagoProveedorFecha = gx.date.nullDate() ;
   this.A61PagoProveedorFactura = "" ;
   this.A62ProveedorNombre = "" ;
   this.A63PagoProveedorDescripcion = "" ;
   this.A64PagoProveedorValor = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e120d2_client": ["AFTER TRN", true] ,"e130d14_client": ["ENTER", true] ,"e140d14_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV7PagoProveedorId',fld:'vPAGOPROVEEDORID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["REFRESH"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV7PagoProveedorId',fld:'vPAGOPROVEEDORID',pic:'ZZZ9',hsh:true},{av:'A34PagoProveedorId',fld:'PAGOPROVEEDORID',pic:'ZZZ9'},{av:'AV11Insert_ProveedorId',fld:'vINSERT_PROVEEDORID',pic:'ZZZ9'}],[]];
   this.EvtParms["START"] = [[{av:'AV17Pgmname',fld:'vPGMNAME',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true}],[{av:'AV8WWPContext',fld:'vWWPCONTEXT',pic:''},{av:'AV9TrnContext',fld:'vTRNCONTEXT',pic:''},{av:'AV18GXV1',fld:'vGXV1',pic:'99999999'},{av:'AV12TrnContextAtt',fld:'vTRNCONTEXTATT',pic:''},{av:'AV11Insert_ProveedorId',fld:'vINSERT_PROVEEDORID',pic:'ZZZ9'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV9TrnContext',fld:'vTRNCONTEXT',pic:''}],[]];
   this.setPrompt("PROMPT_28", [40]);
   this.EnterCtrl = ["BTNTRN_ENTER"];
   this.setVCMap("AV7PagoProveedorId", "vPAGOPROVEEDORID", 0, "int", 4, 0);
   this.setVCMap("AV11Insert_ProveedorId", "vINSERT_PROVEEDORID", 0, "int", 4, 0);
   this.setVCMap("Gx_date", "vTODAY", 0, "date", 8, 0);
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int", 1, 0);
   this.setVCMap("AV17Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV9TrnContext", "vTRNCONTEXT", 0, "WWPBaseObjects\WWPTransactionContext", 0, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.pagoproveedor);});
