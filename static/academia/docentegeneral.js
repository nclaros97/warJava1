/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:7:1.57
*/
gx.evt.autoSkip = false;
gx.define('academia.docentegeneral', true, function (CmpContext) {
   this.ServerClass =  "academia.docentegeneral" ;
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
   this.Valid_Docenteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DOCENTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e111v1_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.docente", ["UPD", this.A12DocenteId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e121v1_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.docente", ["DLT", this.A12DocenteId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e151v2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e161v2_client=function()
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
   GXValidFnc[14]={ id:14 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Docenteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTEID",gxz:"Z12DocenteId",gxold:"O12DocenteId",gxvar:"A12DocenteId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A12DocenteId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z12DocenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DOCENTEID",gx.O.A12DocenteId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A12DocenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DOCENTEID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id:19 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTENUMEROIDENTIDAD",gxz:"Z13DocenteNumeroIdentidad",gxold:"O13DocenteNumeroIdentidad",gxvar:"A13DocenteNumeroIdentidad",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A13DocenteNumeroIdentidad=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z13DocenteNumeroIdentidad=Value},v2c:function(){gx.fn.setControlValue("DOCENTENUMEROIDENTIDAD",gx.O.A13DocenteNumeroIdentidad,0)},c2v:function(){if(this.val()!==undefined)gx.O.A13DocenteNumeroIdentidad=this.val()},val:function(){return gx.fn.getControlValue("DOCENTENUMEROIDENTIDAD")},nac:gx.falseFn};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id:24 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTENOMBRE",gxz:"Z14DocenteNombre",gxold:"O14DocenteNombre",gxvar:"A14DocenteNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A14DocenteNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z14DocenteNombre=Value},v2c:function(){gx.fn.setControlValue("DOCENTENOMBRE",gx.O.A14DocenteNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A14DocenteNombre=this.val()},val:function(){return gx.fn.getControlValue("DOCENTENOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id:29 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTEEMAIL",gxz:"Z15DocenteEmail",gxold:"O15DocenteEmail",gxvar:"A15DocenteEmail",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A15DocenteEmail=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z15DocenteEmail=Value},v2c:function(){gx.fn.setControlValue("DOCENTEEMAIL",gx.O.A15DocenteEmail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A15DocenteEmail=this.val()},val:function(){return gx.fn.getControlValue("DOCENTEEMAIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
      gx.fn.setCtrlProperty("DOCENTEEMAIL","Link", (!gx.fn.getCtrlProperty("DOCENTEEMAIL","Enabled") ? "mailto:"+this.A15DocenteEmail : "") );
   });
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id:34 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTETELEFONO",gxz:"Z16DocenteTelefono",gxold:"O16DocenteTelefono",gxvar:"A16DocenteTelefono",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A16DocenteTelefono=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z16DocenteTelefono=Value},v2c:function(){gx.fn.setControlValue("DOCENTETELEFONO",gx.O.A16DocenteTelefono,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A16DocenteTelefono=this.val()},val:function(){return gx.fn.getControlValue("DOCENTETELEFONO")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id:39 ,lvl:0,type:"svchar",len:1024,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTEDIRECCION",gxz:"Z17DocenteDireccion",gxold:"O17DocenteDireccion",gxvar:"A17DocenteDireccion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A17DocenteDireccion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z17DocenteDireccion=Value},v2c:function(){gx.fn.setControlValue("DOCENTEDIRECCION",gx.O.A17DocenteDireccion,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A17DocenteDireccion=this.val()},val:function(){return gx.fn.getControlValue("DOCENTEDIRECCION")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
      gx.fn.setCtrlProperty("DOCENTEDIRECCION","Link", (!gx.fn.getCtrlProperty("DOCENTEDIRECCION","Enabled") ? "http://maps.google.com/maps?q="+encodeURIComponent( this.A17DocenteDireccion) : "") );
   });
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"BTNUPDATE",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"BTNDELETE",grid:0};
   this.A12DocenteId = 0 ;
   this.Z12DocenteId = 0 ;
   this.O12DocenteId = 0 ;
   this.A13DocenteNumeroIdentidad = "" ;
   this.Z13DocenteNumeroIdentidad = "" ;
   this.O13DocenteNumeroIdentidad = "" ;
   this.A14DocenteNombre = "" ;
   this.Z14DocenteNombre = "" ;
   this.O14DocenteNombre = "" ;
   this.A15DocenteEmail = "" ;
   this.Z15DocenteEmail = "" ;
   this.O15DocenteEmail = "" ;
   this.A16DocenteTelefono = "" ;
   this.Z16DocenteTelefono = "" ;
   this.O16DocenteTelefono = "" ;
   this.A17DocenteDireccion = "" ;
   this.Z17DocenteDireccion = "" ;
   this.O17DocenteDireccion = "" ;
   this.A12DocenteId = 0 ;
   this.A13DocenteNumeroIdentidad = "" ;
   this.A14DocenteNombre = "" ;
   this.A15DocenteEmail = "" ;
   this.A16DocenteTelefono = "" ;
   this.A17DocenteDireccion = "" ;
   this.Events = {"e151v2_client": ["ENTER", true] ,"e161v2_client": ["CANCEL", true] ,"e111v1_client": ["'DOUPDATE'", false] ,"e121v1_client": ["'DODELETE'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["START"] = [[{av:'AV16Pgmname',fld:'vPGMNAME',pic:''},{av:'AV7DocenteId',fld:'vDOCENTEID',pic:'ZZZ9'}],[]];
   this.EvtParms["LOAD"] = [[],[]];
   this.EvtParms["'DOUPDATE'"] = [[{av:'A12DocenteId',fld:'DOCENTEID',pic:'ZZZ9'}],[]];
   this.EvtParms["'DODELETE'"] = [[{av:'A12DocenteId',fld:'DOCENTEID',pic:'ZZZ9'}],[]];
   this.Initialize( );
});
