/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:8:51.13
*/
gx.evt.autoSkip = false;
gx.define('academia.proveedorgeneral', true, function (CmpContext) {
   this.ServerClass =  "academia.proveedorgeneral" ;
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
   this.e11181_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.proveedor", ["UPD", this.A28ProveedorId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e12181_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.proveedor", ["DLT", this.A28ProveedorId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e15182_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16182_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46];
   this.GXLastCtrlId =46;
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
   GXValidFnc[14]={ id:14 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Proveedorid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORID",gxz:"Z28ProveedorId",gxold:"O28ProveedorId",gxvar:"A28ProveedorId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A28ProveedorId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z28ProveedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROVEEDORID",gx.O.A28ProveedorId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A28ProveedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROVEEDORID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id:19 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORNOMBRE",gxz:"Z62ProveedorNombre",gxold:"O62ProveedorNombre",gxvar:"A62ProveedorNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A62ProveedorNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z62ProveedorNombre=Value},v2c:function(){gx.fn.setControlValue("PROVEEDORNOMBRE",gx.O.A62ProveedorNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A62ProveedorNombre=this.val()},val:function(){return gx.fn.getControlValue("PROVEEDORNOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id:24 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORTELEFONO",gxz:"Z70ProveedorTelefono",gxold:"O70ProveedorTelefono",gxvar:"A70ProveedorTelefono",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A70ProveedorTelefono=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z70ProveedorTelefono=Value},v2c:function(){gx.fn.setControlValue("PROVEEDORTELEFONO",gx.O.A70ProveedorTelefono,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A70ProveedorTelefono=this.val()},val:function(){return gx.fn.getControlValue("PROVEEDORTELEFONO")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id:29 ,lvl:0,type:"svchar",len:1024,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORDIRECCION",gxz:"Z71ProveedorDireccion",gxold:"O71ProveedorDireccion",gxvar:"A71ProveedorDireccion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A71ProveedorDireccion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z71ProveedorDireccion=Value},v2c:function(){gx.fn.setControlValue("PROVEEDORDIRECCION",gx.O.A71ProveedorDireccion,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A71ProveedorDireccion=this.val()},val:function(){return gx.fn.getControlValue("PROVEEDORDIRECCION")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
      gx.fn.setCtrlProperty("PROVEEDORDIRECCION","Link", (!gx.fn.getCtrlProperty("PROVEEDORDIRECCION","Enabled") ? "http://maps.google.com/maps?q="+encodeURIComponent( this.A71ProveedorDireccion) : "") );
   });
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id:34 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDOREMAIL",gxz:"Z72ProveedorEmail",gxold:"O72ProveedorEmail",gxvar:"A72ProveedorEmail",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A72ProveedorEmail=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z72ProveedorEmail=Value},v2c:function(){gx.fn.setControlValue("PROVEEDOREMAIL",gx.O.A72ProveedorEmail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A72ProveedorEmail=this.val()},val:function(){return gx.fn.getControlValue("PROVEEDOREMAIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
      gx.fn.setCtrlProperty("PROVEEDOREMAIL","Link", (!gx.fn.getCtrlProperty("PROVEEDOREMAIL","Enabled") ? "mailto:"+this.A72ProveedorEmail : "") );
   });
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id:39 ,lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORWEBSITE",gxz:"Z73ProveedorWebsite",gxold:"O73ProveedorWebsite",gxvar:"A73ProveedorWebsite",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A73ProveedorWebsite=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z73ProveedorWebsite=Value},v2c:function(){gx.fn.setControlValue("PROVEEDORWEBSITE",gx.O.A73ProveedorWebsite,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A73ProveedorWebsite=this.val()},val:function(){return gx.fn.getControlValue("PROVEEDORWEBSITE")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"BTNUPDATE",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"BTNDELETE",grid:0};
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
   this.A28ProveedorId = 0 ;
   this.A62ProveedorNombre = "" ;
   this.A70ProveedorTelefono = "" ;
   this.A71ProveedorDireccion = "" ;
   this.A72ProveedorEmail = "" ;
   this.A73ProveedorWebsite = "" ;
   this.Events = {"e15182_client": ["ENTER", true] ,"e16182_client": ["CANCEL", true] ,"e11181_client": ["'DOUPDATE'", false] ,"e12181_client": ["'DODELETE'", false]};
   this.EvtParms["REFRESH"] = [[{av:'A73ProveedorWebsite',fld:'PROVEEDORWEBSITE',pic:''}],[]];
   this.EvtParms["START"] = [[{av:'AV16Pgmname',fld:'vPGMNAME',pic:''},{av:'AV7ProveedorId',fld:'vPROVEEDORID',pic:'ZZZ9'}],[]];
   this.EvtParms["LOAD"] = [[{av:'A73ProveedorWebsite',fld:'PROVEEDORWEBSITE',pic:''}],[{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Linktarget")',ctrl:'PROVEEDORWEBSITE',prop:'Linktarget'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Link")',ctrl:'PROVEEDORWEBSITE',prop:'Link'}]];
   this.EvtParms["'DOUPDATE'"] = [[{av:'A28ProveedorId',fld:'PROVEEDORID',pic:'ZZZ9'}],[]];
   this.EvtParms["'DODELETE'"] = [[{av:'A28ProveedorId',fld:'PROVEEDORID',pic:'ZZZ9'}],[]];
   this.Initialize( );
});
