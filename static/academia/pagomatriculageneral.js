/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:11:35.12
*/
gx.evt.autoSkip = false;
gx.define('academia.pagomatriculageneral', true, function (CmpContext) {
   this.ServerClass =  "academia.pagomatriculageneral" ;
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
   this.Valid_Pagomatriculaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGOMATRICULAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11221_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.pagomatricula", ["UPD", this.A33PagoMatriculaId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e12221_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.pagomatricula", ["DLT", this.A33PagoMatriculaId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e15222_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16222_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61];
   this.GXLastCtrlId =61;
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
   GXValidFnc[14]={ id:14 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Pagomatriculaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAID",gxz:"Z33PagoMatriculaId",gxold:"O33PagoMatriculaId",gxvar:"A33PagoMatriculaId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A33PagoMatriculaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z33PagoMatriculaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGOMATRICULAID",gx.O.A33PagoMatriculaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A33PagoMatriculaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGOMATRICULAID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id:19 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAFECHAPAGO",gxz:"Z53PagoMatriculaFechaPago",gxold:"O53PagoMatriculaFechaPago",gxvar:"A53PagoMatriculaFechaPago",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A53PagoMatriculaFechaPago=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z53PagoMatriculaFechaPago=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PAGOMATRICULAFECHAPAGO",gx.O.A53PagoMatriculaFechaPago,0)},c2v:function(){if(this.val()!==undefined)gx.O.A53PagoMatriculaFechaPago=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PAGOMATRICULAFECHAPAGO")},nac:gx.falseFn};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id:24 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAFECHALIMITE",gxz:"Z54PagoMatriculaFechaLimite",gxold:"O54PagoMatriculaFechaLimite",gxvar:"A54PagoMatriculaFechaLimite",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A54PagoMatriculaFechaLimite=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z54PagoMatriculaFechaLimite=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PAGOMATRICULAFECHALIMITE",gx.O.A54PagoMatriculaFechaLimite,0)},c2v:function(){if(this.val()!==undefined)gx.O.A54PagoMatriculaFechaLimite=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PAGOMATRICULAFECHALIMITE")},nac:gx.falseFn};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id:29 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAESTADO",gxz:"Z55PagoMatriculaEstado",gxold:"O55PagoMatriculaEstado",gxvar:"A55PagoMatriculaEstado",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A55PagoMatriculaEstado=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z55PagoMatriculaEstado=Value},v2c:function(){gx.fn.setControlValue("PAGOMATRICULAESTADO",gx.O.A55PagoMatriculaEstado,0)},c2v:function(){if(this.val()!==undefined)gx.O.A55PagoMatriculaEstado=this.val()},val:function(){return gx.fn.getControlValue("PAGOMATRICULAESTADO")},nac:gx.falseFn};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id:34 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULADESCRIPCION",gxz:"Z56PagoMatriculaDescripcion",gxold:"O56PagoMatriculaDescripcion",gxvar:"A56PagoMatriculaDescripcion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A56PagoMatriculaDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z56PagoMatriculaDescripcion=Value},v2c:function(){gx.fn.setControlValue("PAGOMATRICULADESCRIPCION",gx.O.A56PagoMatriculaDescripcion,0)},c2v:function(){if(this.val()!==undefined)gx.O.A56PagoMatriculaDescripcion=this.val()},val:function(){return gx.fn.getControlValue("PAGOMATRICULADESCRIPCION")},nac:gx.falseFn};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id:39 ,lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAVALORMENSUAL",gxz:"Z57PagoMatriculaValorMensual",gxold:"O57PagoMatriculaValorMensual",gxvar:"A57PagoMatriculaValorMensual",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A57PagoMatriculaValorMensual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.Z57PagoMatriculaValorMensual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PAGOMATRICULAVALORMENSUAL",gx.O.A57PagoMatriculaValorMensual,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.A57PagoMatriculaValorMensual=this.val()},val:function(){return gx.fn.getDecimalValue("PAGOMATRICULAVALORMENSUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAVALORTOTAL",gxz:"Z58PagoMatriculaValorTotal",gxold:"O58PagoMatriculaValorTotal",gxvar:"A58PagoMatriculaValorTotal",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A58PagoMatriculaValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.Z58PagoMatriculaValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PAGOMATRICULAVALORTOTAL",gx.O.A58PagoMatriculaValorTotal,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.A58PagoMatriculaValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("PAGOMATRICULAVALORTOTAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id:49 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUARIOID",gxz:"Z59UsuarioId",gxold:"O59UsuarioId",gxvar:"A59UsuarioId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A59UsuarioId=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z59UsuarioId=Value},v2c:function(){gx.fn.setControlValue("USUARIOID",gx.O.A59UsuarioId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A59UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("USUARIOID")},nac:gx.falseFn};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id:54 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MATRICULAID",gxz:"Z27MatriculaId",gxold:"O27MatriculaId",gxvar:"A27MatriculaId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A27MatriculaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z27MatriculaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MATRICULAID",gx.O.A27MatriculaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A27MatriculaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MATRICULAID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"BTNUPDATE",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"BTNDELETE",grid:0};
   this.A33PagoMatriculaId = 0 ;
   this.Z33PagoMatriculaId = 0 ;
   this.O33PagoMatriculaId = 0 ;
   this.A53PagoMatriculaFechaPago = gx.date.nullDate() ;
   this.Z53PagoMatriculaFechaPago = gx.date.nullDate() ;
   this.O53PagoMatriculaFechaPago = gx.date.nullDate() ;
   this.A54PagoMatriculaFechaLimite = gx.date.nullDate() ;
   this.Z54PagoMatriculaFechaLimite = gx.date.nullDate() ;
   this.O54PagoMatriculaFechaLimite = gx.date.nullDate() ;
   this.A55PagoMatriculaEstado = "" ;
   this.Z55PagoMatriculaEstado = "" ;
   this.O55PagoMatriculaEstado = "" ;
   this.A56PagoMatriculaDescripcion = "" ;
   this.Z56PagoMatriculaDescripcion = "" ;
   this.O56PagoMatriculaDescripcion = "" ;
   this.A57PagoMatriculaValorMensual = 0 ;
   this.Z57PagoMatriculaValorMensual = 0 ;
   this.O57PagoMatriculaValorMensual = 0 ;
   this.A58PagoMatriculaValorTotal = 0 ;
   this.Z58PagoMatriculaValorTotal = 0 ;
   this.O58PagoMatriculaValorTotal = 0 ;
   this.A59UsuarioId = "" ;
   this.Z59UsuarioId = "" ;
   this.O59UsuarioId = "" ;
   this.A27MatriculaId = 0 ;
   this.Z27MatriculaId = 0 ;
   this.O27MatriculaId = 0 ;
   this.A33PagoMatriculaId = 0 ;
   this.A53PagoMatriculaFechaPago = gx.date.nullDate() ;
   this.A54PagoMatriculaFechaLimite = gx.date.nullDate() ;
   this.A55PagoMatriculaEstado = "" ;
   this.A56PagoMatriculaDescripcion = "" ;
   this.A57PagoMatriculaValorMensual = 0 ;
   this.A58PagoMatriculaValorTotal = 0 ;
   this.A59UsuarioId = "" ;
   this.A27MatriculaId = 0 ;
   this.Events = {"e15222_client": ["ENTER", true] ,"e16222_client": ["CANCEL", true] ,"e11221_client": ["'DOUPDATE'", false] ,"e12221_client": ["'DODELETE'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["START"] = [[{av:'AV16Pgmname',fld:'vPGMNAME',pic:''},{av:'AV7PagoMatriculaId',fld:'vPAGOMATRICULAID',pic:'ZZZ9'}],[]];
   this.EvtParms["LOAD"] = [[],[]];
   this.EvtParms["'DOUPDATE'"] = [[{av:'A33PagoMatriculaId',fld:'PAGOMATRICULAID',pic:'ZZZ9'}],[]];
   this.EvtParms["'DODELETE'"] = [[{av:'A33PagoMatriculaId',fld:'PAGOMATRICULAID',pic:'ZZZ9'}],[]];
   this.Initialize( );
});
