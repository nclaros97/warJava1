/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:11:42.69
*/
gx.evt.autoSkip = false;
gx.define('academia.pagoproveedorgeneral', true, function (CmpContext) {
   this.ServerClass =  "academia.pagoproveedorgeneral" ;
   this.PackageName =  "com.taankanik" ;
   this.setObjectType("web");
   this.setCmpContext(CmpContext);
   this.ReadonlyForm = true;
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
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
   this.e111f1_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.pagoproveedor", ["UPD", this.A34PagoProveedorId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e121f1_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.pagoproveedor", ["DLT", this.A34PagoProveedorId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e151f2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e161f2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];
   this.GXLastCtrlId =51;
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLE",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id:14 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Pagoproveedorid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOPROVEEDORID",gxz:"Z34PagoProveedorId",gxold:"O34PagoProveedorId",gxvar:"A34PagoProveedorId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A34PagoProveedorId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z34PagoProveedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGOPROVEEDORID",gx.O.A34PagoProveedorId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A34PagoProveedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGOPROVEEDORID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id:19 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOPROVEEDORFECHA",gxz:"Z60PagoProveedorFecha",gxold:"O60PagoProveedorFecha",gxvar:"A60PagoProveedorFecha",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A60PagoProveedorFecha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z60PagoProveedorFecha=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PAGOPROVEEDORFECHA",gx.O.A60PagoProveedorFecha,0)},c2v:function(){if(this.val()!==undefined)gx.O.A60PagoProveedorFecha=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PAGOPROVEEDORFECHA")},nac:gx.falseFn};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id:24 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOPROVEEDORFACTURA",gxz:"Z61PagoProveedorFactura",gxold:"O61PagoProveedorFactura",gxvar:"A61PagoProveedorFactura",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A61PagoProveedorFactura=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z61PagoProveedorFactura=Value},v2c:function(){gx.fn.setControlValue("PAGOPROVEEDORFACTURA",gx.O.A61PagoProveedorFactura,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A61PagoProveedorFactura=this.val()},val:function(){return gx.fn.getControlValue("PAGOPROVEEDORFACTURA")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id:29 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Proveedorid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORID",gxz:"Z28ProveedorId",gxold:"O28ProveedorId",gxvar:"A28ProveedorId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A28ProveedorId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z28ProveedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROVEEDORID",gx.O.A28ProveedorId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A28ProveedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROVEEDORID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id:34 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORNOMBRE",gxz:"Z62ProveedorNombre",gxold:"O62ProveedorNombre",gxvar:"A62ProveedorNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A62ProveedorNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z62ProveedorNombre=Value},v2c:function(){gx.fn.setControlValue("PROVEEDORNOMBRE",gx.O.A62ProveedorNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A62ProveedorNombre=this.val()},val:function(){return gx.fn.getControlValue("PROVEEDORNOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id:39 ,lvl:0,type:"char",len:256,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOPROVEEDORDESCRIPCION",gxz:"Z63PagoProveedorDescripcion",gxold:"O63PagoProveedorDescripcion",gxvar:"A63PagoProveedorDescripcion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A63PagoProveedorDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z63PagoProveedorDescripcion=Value},v2c:function(){gx.fn.setControlValue("PAGOPROVEEDORDESCRIPCION",gx.O.A63PagoProveedorDescripcion,0)},c2v:function(){if(this.val()!==undefined)gx.O.A63PagoProveedorDescripcion=this.val()},val:function(){return gx.fn.getControlValue("PAGOPROVEEDORDESCRIPCION")},nac:gx.falseFn};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"decimal",len:10,dec:2,sign:false,pic:"ZZZZZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOPROVEEDORVALOR",gxz:"Z64PagoProveedorValor",gxold:"O64PagoProveedorValor",gxvar:"A64PagoProveedorValor",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A64PagoProveedorValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.Z64PagoProveedorValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PAGOPROVEEDORVALOR",gx.O.A64PagoProveedorValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A64PagoProveedorValor=this.val()},val:function(){return gx.fn.getDecimalValue("PAGOPROVEEDORVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"BTNUPDATE",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"BTNDELETE",grid:0};
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
   this.A34PagoProveedorId = 0 ;
   this.A60PagoProveedorFecha = gx.date.nullDate() ;
   this.A61PagoProveedorFactura = "" ;
   this.A28ProveedorId = 0 ;
   this.A62ProveedorNombre = "" ;
   this.A63PagoProveedorDescripcion = "" ;
   this.A64PagoProveedorValor = 0 ;
   this.Events = {"e151f2_client": ["ENTER", true] ,"e161f2_client": ["CANCEL", true] ,"e111f1_client": ["'DOUPDATE'", false] ,"e121f1_client": ["'DODELETE'", false]};
   this.EvtParms["REFRESH"] = [[{av:'A28ProveedorId',fld:'PROVEEDORID',pic:'ZZZ9'}],[]];
   this.EvtParms["START"] = [[{av:'AV16Pgmname',fld:'vPGMNAME',pic:''},{av:'AV7PagoProveedorId',fld:'vPAGOPROVEEDORID',pic:'ZZZ9'}],[]];
   this.EvtParms["LOAD"] = [[{av:'A28ProveedorId',fld:'PROVEEDORID',pic:'ZZZ9'}],[{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Link")',ctrl:'PROVEEDORNOMBRE',prop:'Link'}]];
   this.EvtParms["'DOUPDATE'"] = [[{av:'A34PagoProveedorId',fld:'PAGOPROVEEDORID',pic:'ZZZ9'}],[]];
   this.EvtParms["'DODELETE'"] = [[{av:'A34PagoProveedorId',fld:'PAGOPROVEEDORID',pic:'ZZZ9'}],[]];
   this.Initialize( );
});
