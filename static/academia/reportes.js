/*!   GeneXus Java 16_0_1-129648 on November 3, 2019 16:4:12.2
*/
gx.evt.autoSkip = false;
gx.define('academia.reportes', false, function () {
   this.ServerClass =  "academia.reportes" ;
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
   };
   this.Validv_Fechapagosretrasados=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFECHAPAGOSRETRASADOS");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV5fechaPagosRetrasados)==0) || new gx.date.gxdate( this.AV5fechaPagosRetrasados ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo fecha Pagos Retrasados fuera de rango");
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
   this.Validv_Fechainicio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFECHAINICIO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV6fechaInicio)==0) || new gx.date.gxdate( this.AV6fechaInicio ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo fecha Inicio fuera de rango");
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
   this.Validv_Fechafinal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFECHAFINAL");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV7fechaFinal)==0) || new gx.date.gxdate( this.AV7fechaFinal ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo fecha Final fuera de rango");
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
   this.e122p2_client=function()
   {
      return this.executeServerEvent("'DOREPORTEINGRESOSEGRESOS'", false, null, false, false);
   };
   this.e132p2_client=function()
   {
      return this.executeServerEvent("'DOPAGOSALUMNOSRETRASADOS'", false, null, false, false);
   };
   this.e142p2_client=function()
   {
      return this.executeServerEvent("'DOHOJAMATRICULA'", true, null, false, false);
   };
   this.e152p2_client=function()
   {
      return this.executeServerEvent("'DOPAGOALUMNO'", true, null, false, false);
   };
   this.e162p2_client=function()
   {
      return this.executeServerEvent("'DOPAGODOCENTE'", true, null, false, false);
   };
   this.e182p2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e192p2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,29,32,33,34,35,36,39,40,41,44,45,46,49];
   this.GXLastCtrlId =49;
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
   GXValidFnc[15]={ id: 15, fld:"HTML_UNNAMEDSECTION1",grid:0};
   GXValidFnc[16]={ id: 16, fld:"UNNAMEDSECTION1",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id: 19, fld:"HTML_UNNAMEDSECTION2",grid:0};
   GXValidFnc[20]={ id: 20, fld:"UNNAMEDSECTION2",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"UNNAMEDGROUP4",grid:0};
   GXValidFnc[24]={ id: 24, fld:"UNNAMEDTABLE3",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id:29 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Fechapagosretrasados,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFECHAPAGOSRETRASADOS",gxz:"ZV5fechaPagosRetrasados",gxold:"OV5fechaPagosRetrasados",gxvar:"AV5fechaPagosRetrasados",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[29],ip:[29],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV5fechaPagosRetrasados=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV5fechaPagosRetrasados=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vFECHAPAGOSRETRASADOS",gx.O.AV5fechaPagosRetrasados,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV5fechaPagosRetrasados=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vFECHAPAGOSRETRASADOS")},nac:gx.falseFn};
   GXValidFnc[32]={ id: 32, fld:"BTNPAGOSALUMNOSRETRASADOS",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"UNNAMEDGROUP6",grid:0};
   GXValidFnc[36]={ id: 36, fld:"UNNAMEDTABLE5",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id:41 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Fechainicio,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFECHAINICIO",gxz:"ZV6fechaInicio",gxold:"OV6fechaInicio",gxvar:"AV6fechaInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[41],ip:[41],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV6fechaInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV6fechaInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vFECHAINICIO",gx.O.AV6fechaInicio,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV6fechaInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vFECHAINICIO")},nac:gx.falseFn};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id:46 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Fechafinal,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFECHAFINAL",gxz:"ZV7fechaFinal",gxold:"OV7fechaFinal",gxvar:"AV7fechaFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[46],ip:[46],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV7fechaFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV7fechaFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vFECHAFINAL",gx.O.AV7fechaFinal,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV7fechaFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vFECHAFINAL")},nac:gx.falseFn};
   GXValidFnc[49]={ id: 49, fld:"BTNREPORTEINGRESOSEGRESOS",grid:0};
   this.AV5fechaPagosRetrasados = gx.date.nullDate() ;
   this.ZV5fechaPagosRetrasados = gx.date.nullDate() ;
   this.OV5fechaPagosRetrasados = gx.date.nullDate() ;
   this.AV6fechaInicio = gx.date.nullDate() ;
   this.ZV6fechaInicio = gx.date.nullDate() ;
   this.OV6fechaInicio = gx.date.nullDate() ;
   this.AV7fechaFinal = gx.date.nullDate() ;
   this.ZV7fechaFinal = gx.date.nullDate() ;
   this.OV7fechaFinal = gx.date.nullDate() ;
   this.AV5fechaPagosRetrasados = gx.date.nullDate() ;
   this.AV6fechaInicio = gx.date.nullDate() ;
   this.AV7fechaFinal = gx.date.nullDate() ;
   this.Events = {"e122p2_client": ["'DOREPORTEINGRESOSEGRESOS'", true] ,"e132p2_client": ["'DOPAGOSALUMNOSRETRASADOS'", true] ,"e142p2_client": ["'DOHOJAMATRICULA'", true] ,"e152p2_client": ["'DOPAGOALUMNO'", true] ,"e162p2_client": ["'DOPAGODOCENTE'", true] ,"e182p2_client": ["ENTER", true] ,"e192p2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["START"] = [[],[]];
   this.EvtParms["'DOREPORTEINGRESOSEGRESOS'"] = [[{av:'AV6fechaInicio',fld:'vFECHAINICIO',pic:''},{av:'AV7fechaFinal',fld:'vFECHAFINAL',pic:''}],[]];
   this.EvtParms["'DOPAGOSALUMNOSRETRASADOS'"] = [[{av:'AV5fechaPagosRetrasados',fld:'vFECHAPAGOSRETRASADOS',pic:''}],[]];
   this.EvtParms["'DOHOJAMATRICULA'"] = [[],[]];
   this.EvtParms["'DOPAGOALUMNO'"] = [[],[]];
   this.EvtParms["'DOPAGODOCENTE'"] = [[],[]];
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.reportes);});
