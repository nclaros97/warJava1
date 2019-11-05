/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:9:4.31
*/
gx.evt.autoSkip = false;
gx.define('academia.proveedor', false, function () {
   this.ServerClass =  "academia.proveedor" ;
   this.PackageName =  "com.taankanik" ;
   this.setObjectType("trn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV12ProveedorId=gx.fn.getIntegerValue("vPROVEEDORID",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV8TrnContext=gx.fn.getControlValue("vTRNCONTEXT") ;
   };
   this.Valid_Proveedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROVEEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Proveedoremail=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROVEEDOREMAIL");
         this.AnyError  = 0;
         if ( ! ( gx.util.regExp.isMatch(this.A72ProveedorEmail, "^((\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*)|(\\s*))$") || ((''==this.A72ProveedorEmail)) ) )
         {
            try {
               gxballoon.setError("El valor de Proveedor Email no coincide con el patrón especificado");
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
   this.Valid_Proveedorwebsite=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROVEEDORWEBSITE");
         this.AnyError  = 0;
         if ( ! ( gx.util.regExp.isMatch(this.A73ProveedorWebsite, "^((?:[a-zA-Z]+:(//)?)?((?:(?:[a-zA-Z]([a-zA-Z0-9$\\-_@&+!*\"'(),]|%[0-9a-fA-F]{2})*)(?:\\.(?:([a-zA-Z0-9$\\-_@&+!*\"'(),]|%[0-9a-fA-F]{2})*))*)|(?:(\\d{1,3}\\.){3}\\d{1,3}))(?::\\d+)?(?:/([a-zA-Z0-9$\\-_@.&+!*\"'(),=;: ]|%[0-9a-fA-F]{2})+)*/?(?:[#?](?:[a-zA-Z0-9$\\-_@.&+!*\"'(),=;: /]|%[0-9a-fA-F]{2})*)?)?\\s*$") || ((''==this.A73ProveedorWebsite)) ) )
         {
            try {
               gxballoon.setError("El valor de Proveedor Website no coincide con el patrón especificado");
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
   this.e12082_client=function()
   {
      return this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e13089_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14089_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
   this.GXLastCtrlId =59;
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
   GXValidFnc[25]={ id:25 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Proveedorid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORID",gxz:"Z28ProveedorId",gxold:"O28ProveedorId",gxvar:"A28ProveedorId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A28ProveedorId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z28ProveedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROVEEDORID",gx.O.A28ProveedorId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A28ProveedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROVEEDORID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id:30 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORNOMBRE",gxz:"Z62ProveedorNombre",gxold:"O62ProveedorNombre",gxvar:"A62ProveedorNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A62ProveedorNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z62ProveedorNombre=Value},v2c:function(){gx.fn.setControlValue("PROVEEDORNOMBRE",gx.O.A62ProveedorNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A62ProveedorNombre=this.val()},val:function(){return gx.fn.getControlValue("PROVEEDORNOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id:35 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORTELEFONO",gxz:"Z70ProveedorTelefono",gxold:"O70ProveedorTelefono",gxvar:"A70ProveedorTelefono",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A70ProveedorTelefono=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z70ProveedorTelefono=Value},v2c:function(){gx.fn.setControlValue("PROVEEDORTELEFONO",gx.O.A70ProveedorTelefono,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A70ProveedorTelefono=this.val()},val:function(){return gx.fn.getControlValue("PROVEEDORTELEFONO")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id:40 ,lvl:0,type:"svchar",len:1024,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORDIRECCION",gxz:"Z71ProveedorDireccion",gxold:"O71ProveedorDireccion",gxvar:"A71ProveedorDireccion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A71ProveedorDireccion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z71ProveedorDireccion=Value},v2c:function(){gx.fn.setControlValue("PROVEEDORDIRECCION",gx.O.A71ProveedorDireccion,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A71ProveedorDireccion=this.val()},val:function(){return gx.fn.getControlValue("PROVEEDORDIRECCION")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
      gx.fn.setCtrlProperty("PROVEEDORDIRECCION","Link", (!gx.fn.getCtrlProperty("PROVEEDORDIRECCION","Enabled") ? "http://maps.google.com/maps?q="+encodeURIComponent( this.A71ProveedorDireccion) : "") );
   });
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id:45 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Proveedoremail,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDOREMAIL",gxz:"Z72ProveedorEmail",gxold:"O72ProveedorEmail",gxvar:"A72ProveedorEmail",ucs:[],op:[45],ip:[45],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A72ProveedorEmail=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z72ProveedorEmail=Value},v2c:function(){gx.fn.setControlValue("PROVEEDOREMAIL",gx.O.A72ProveedorEmail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A72ProveedorEmail=this.val()},val:function(){return gx.fn.getControlValue("PROVEEDOREMAIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
      gx.fn.setCtrlProperty("PROVEEDOREMAIL","Link", (!gx.fn.getCtrlProperty("PROVEEDOREMAIL","Enabled") ? "mailto:"+this.A72ProveedorEmail : "") );
   });
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id:50 ,lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Proveedorwebsite,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORWEBSITE",gxz:"Z73ProveedorWebsite",gxold:"O73ProveedorWebsite",gxvar:"A73ProveedorWebsite",ucs:[],op:[50],ip:[50],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A73ProveedorWebsite=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z73ProveedorWebsite=Value},v2c:function(){gx.fn.setControlValue("PROVEEDORWEBSITE",gx.O.A73ProveedorWebsite,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A73ProveedorWebsite=this.val()},val:function(){return gx.fn.getControlValue("PROVEEDORWEBSITE")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"BTNTRN_ENTER",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"BTNTRN_CANCEL",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"BTNTRN_DELETE",grid:0};
   this.A28ProveedorId = 0 ;
   this.Z28ProveedorId = 0 ;
   this.O28ProveedorId = 0 ;
   this.A62ProveedorNombre = "" ;
   this.Z62ProveedorNombre = "" ;
   this.O62ProveedorNombre = "" ;
   this.A70ProveedorTelefono = "" ;
   this.Z70ProveedorTelefono = "" ;
   this.O70ProveedorTelefono = "" ;
   this.A71ProveedorDireccion = "" ;
   this.Z71ProveedorDireccion = "" ;
   this.O71ProveedorDireccion = "" ;
   this.A72ProveedorEmail = "" ;
   this.Z72ProveedorEmail = "" ;
   this.O72ProveedorEmail = "" ;
   this.A73ProveedorWebsite = "" ;
   this.Z73ProveedorWebsite = "" ;
   this.O73ProveedorWebsite = "" ;
   this.AV7WWPContext = {UserId:0,UserName:""} ;
   this.AV8TrnContext = {CallerObject:"",CallerOnDelete:false,CallerURL:"",TransactionName:"",Attributes:[]} ;
   this.AV12ProveedorId = 0 ;
   this.AV9WebSession = {} ;
   this.A28ProveedorId = 0 ;
   this.A62ProveedorNombre = "" ;
   this.A70ProveedorTelefono = "" ;
   this.A71ProveedorDireccion = "" ;
   this.A72ProveedorEmail = "" ;
   this.A73ProveedorWebsite = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12082_client": ["AFTER TRN", true] ,"e13089_client": ["ENTER", true] ,"e14089_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV12ProveedorId',fld:'vPROVEEDORID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["REFRESH"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV12ProveedorId',fld:'vPROVEEDORID',pic:'ZZZ9',hsh:true},{av:'A28ProveedorId',fld:'PROVEEDORID',pic:'ZZZ9'}],[]];
   this.EvtParms["START"] = [[],[{av:'AV7WWPContext',fld:'vWWPCONTEXT',pic:''},{av:'AV8TrnContext',fld:'vTRNCONTEXT',pic:''}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV8TrnContext',fld:'vTRNCONTEXT',pic:''}],[]];
   this.EnterCtrl = ["BTNTRN_ENTER"];
   this.setVCMap("AV12ProveedorId", "vPROVEEDORID", 0, "int", 4, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV8TrnContext", "vTRNCONTEXT", 0, "WWPBaseObjects\WWPTransactionContext", 0, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.proveedor);});
