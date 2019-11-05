/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:11:39.36
*/
gx.evt.autoSkip = false;
gx.define('academia.pagomatricula', false, function () {
   this.ServerClass =  "academia.pagomatricula" ;
   this.PackageName =  "com.taankanik" ;
   this.setObjectType("trn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.A75PagoMatriculaMoraAcumulada=gx.fn.getDecimalValue("PAGOMATRICULAMORAACUMULADA",'.',',') ;
      this.A74PagoMatriculaValorPagar=gx.fn.getDecimalValue("PAGOMATRICULAVALORPAGAR",'.',',') ;
      this.AV14PagoMatriculaId=gx.fn.getIntegerValue("vPAGOMATRICULAID",'.') ;
      this.AV10Insert_MatriculaId=gx.fn.getIntegerValue("vINSERT_MATRICULAID",'.') ;
      this.A116PagoMatriculaFechaUltimoRecarg=gx.fn.getDateValue("PAGOMATRICULAFECHAULTIMORECARG") ;
      this.AV15Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV8TrnContext=gx.fn.getControlValue("vTRNCONTEXT") ;
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
   this.Valid_Pagomatriculafechapago=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGOMATRICULAFECHAPAGO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.A53PagoMatriculaFechaPago)==0) || new gx.date.gxdate( this.A53PagoMatriculaFechaPago ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo Pago Matricula Fecha Pago fuera de rango");
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
   this.Valid_Pagomatriculafechalimite=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGOMATRICULAFECHALIMITE");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.A54PagoMatriculaFechaLimite)==0) || new gx.date.gxdate( this.A54PagoMatriculaFechaLimite ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo Pago Matricula Fecha Limite fuera de rango");
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
   this.Valid_Pagomatriculavalormensual=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGOMATRICULAVALORMENSUAL");
         this.AnyError  = 0;
         try {
            this.A74PagoMatriculaValorPagar =  this.A57PagoMatriculaValorMensual + this.A75PagoMatriculaMoraAcumulada  ;
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Matriculaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Matriculaid",["gx.O.A27MatriculaId"],[]);
      return true;
   }
   this.e120c2_client=function()
   {
      return this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e130c12_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e140c12_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74];
   this.GXLastCtrlId =74;
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
   GXValidFnc[25]={ id:25 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Pagomatriculaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAID",gxz:"Z33PagoMatriculaId",gxold:"O33PagoMatriculaId",gxvar:"A33PagoMatriculaId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A33PagoMatriculaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z33PagoMatriculaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGOMATRICULAID",gx.O.A33PagoMatriculaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A33PagoMatriculaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGOMATRICULAID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id:30 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pagomatriculafechapago,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAFECHAPAGO",gxz:"Z53PagoMatriculaFechaPago",gxold:"O53PagoMatriculaFechaPago",gxvar:"A53PagoMatriculaFechaPago",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[30],ip:[30],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A53PagoMatriculaFechaPago=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z53PagoMatriculaFechaPago=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PAGOMATRICULAFECHAPAGO",gx.O.A53PagoMatriculaFechaPago,0)},c2v:function(){if(this.val()!==undefined)gx.O.A53PagoMatriculaFechaPago=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PAGOMATRICULAFECHAPAGO")},nac:gx.falseFn};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id:35 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pagomatriculafechalimite,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAFECHALIMITE",gxz:"Z54PagoMatriculaFechaLimite",gxold:"O54PagoMatriculaFechaLimite",gxvar:"A54PagoMatriculaFechaLimite",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[35],ip:[35],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A54PagoMatriculaFechaLimite=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z54PagoMatriculaFechaLimite=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PAGOMATRICULAFECHALIMITE",gx.O.A54PagoMatriculaFechaLimite,0)},c2v:function(){if(this.val()!==undefined)gx.O.A54PagoMatriculaFechaLimite=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PAGOMATRICULAFECHALIMITE")},nac:gx.falseFn};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id:40 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAESTADO",gxz:"Z55PagoMatriculaEstado",gxold:"O55PagoMatriculaEstado",gxvar:"A55PagoMatriculaEstado",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A55PagoMatriculaEstado=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z55PagoMatriculaEstado=Value},v2c:function(){gx.fn.setControlValue("PAGOMATRICULAESTADO",gx.O.A55PagoMatriculaEstado,0)},c2v:function(){if(this.val()!==undefined)gx.O.A55PagoMatriculaEstado=this.val()},val:function(){return gx.fn.getControlValue("PAGOMATRICULAESTADO")},nac:gx.falseFn};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id:45 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULADESCRIPCION",gxz:"Z56PagoMatriculaDescripcion",gxold:"O56PagoMatriculaDescripcion",gxvar:"A56PagoMatriculaDescripcion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A56PagoMatriculaDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z56PagoMatriculaDescripcion=Value},v2c:function(){gx.fn.setControlValue("PAGOMATRICULADESCRIPCION",gx.O.A56PagoMatriculaDescripcion,0)},c2v:function(){if(this.val()!==undefined)gx.O.A56PagoMatriculaDescripcion=this.val()},val:function(){return gx.fn.getControlValue("PAGOMATRICULADESCRIPCION")},nac:gx.falseFn};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id:50 ,lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pagomatriculavalormensual,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAVALORMENSUAL",gxz:"Z57PagoMatriculaValorMensual",gxold:"O57PagoMatriculaValorMensual",gxvar:"A57PagoMatriculaValorMensual",ucs:[],op:[],ip:[50],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A57PagoMatriculaValorMensual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.Z57PagoMatriculaValorMensual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PAGOMATRICULAVALORMENSUAL",gx.O.A57PagoMatriculaValorMensual,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.A57PagoMatriculaValorMensual=this.val()},val:function(){return gx.fn.getDecimalValue("PAGOMATRICULAVALORMENSUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id:55 ,lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAVALORTOTAL",gxz:"Z58PagoMatriculaValorTotal",gxold:"O58PagoMatriculaValorTotal",gxvar:"A58PagoMatriculaValorTotal",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A58PagoMatriculaValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.Z58PagoMatriculaValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PAGOMATRICULAVALORTOTAL",gx.O.A58PagoMatriculaValorTotal,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.A58PagoMatriculaValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("PAGOMATRICULAVALORTOTAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id:60 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUARIOID",gxz:"Z59UsuarioId",gxold:"O59UsuarioId",gxvar:"A59UsuarioId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A59UsuarioId=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z59UsuarioId=Value},v2c:function(){gx.fn.setControlValue("USUARIOID",gx.O.A59UsuarioId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A59UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("USUARIOID")},nac:gx.falseFn};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id:65 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Matriculaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MATRICULAID",gxz:"Z27MatriculaId",gxold:"O27MatriculaId",gxvar:"A27MatriculaId",ucs:[],op:[],ip:[65],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A27MatriculaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z27MatriculaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MATRICULAID",gx.O.A27MatriculaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A27MatriculaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MATRICULAID",'.')},nac:function(){return (this.Gx_mode=="INS")&&!((0==this.AV10Insert_MatriculaId))}};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"",grid:0};
   GXValidFnc[70]={ id: 70, fld:"BTNTRN_ENTER",grid:0};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id: 72, fld:"BTNTRN_CANCEL",grid:0};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id: 74, fld:"BTNTRN_DELETE",grid:0};
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
   this.AV7WWPContext = {UserId:0,UserName:""} ;
   this.AV8TrnContext = {CallerObject:"",CallerOnDelete:false,CallerURL:"",TransactionName:"",Attributes:[]} ;
   this.AV16GXV1 = 0 ;
   this.AV10Insert_MatriculaId = 0 ;
   this.AV11TrnContextAtt = {AttributeName:"",AttributeValue:""} ;
   this.AV14PagoMatriculaId = 0 ;
   this.AV9WebSession = {} ;
   this.A33PagoMatriculaId = 0 ;
   this.A27MatriculaId = 0 ;
   this.AV15Pgmname = "" ;
   this.A74PagoMatriculaValorPagar = 0 ;
   this.A53PagoMatriculaFechaPago = gx.date.nullDate() ;
   this.A54PagoMatriculaFechaLimite = gx.date.nullDate() ;
   this.A55PagoMatriculaEstado = "" ;
   this.A56PagoMatriculaDescripcion = "" ;
   this.A57PagoMatriculaValorMensual = 0 ;
   this.A58PagoMatriculaValorTotal = 0 ;
   this.A75PagoMatriculaMoraAcumulada = 0 ;
   this.A116PagoMatriculaFechaUltimoRecarg = gx.date.nullDate() ;
   this.A59UsuarioId = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e120c2_client": ["AFTER TRN", true] ,"e130c12_client": ["ENTER", true] ,"e140c12_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV14PagoMatriculaId',fld:'vPAGOMATRICULAID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["REFRESH"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV14PagoMatriculaId',fld:'vPAGOMATRICULAID',pic:'ZZZ9',hsh:true},{av:'A33PagoMatriculaId',fld:'PAGOMATRICULAID',pic:'ZZZ9'},{av:'AV10Insert_MatriculaId',fld:'vINSERT_MATRICULAID',pic:'ZZZ9'},{av:'A75PagoMatriculaMoraAcumulada',fld:'PAGOMATRICULAMORAACUMULADA',pic:'ZZ9.99'},{av:'A116PagoMatriculaFechaUltimoRecarg',fld:'PAGOMATRICULAFECHAULTIMORECARG',pic:''}],[]];
   this.EvtParms["START"] = [[{av:'AV15Pgmname',fld:'vPGMNAME',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true}],[{av:'AV7WWPContext',fld:'vWWPCONTEXT',pic:''},{av:'AV8TrnContext',fld:'vTRNCONTEXT',pic:''},{av:'AV16GXV1',fld:'vGXV1',pic:'99999999'},{av:'AV11TrnContextAtt',fld:'vTRNCONTEXTATT',pic:''},{av:'AV10Insert_MatriculaId',fld:'vINSERT_MATRICULAID',pic:'ZZZ9'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV8TrnContext',fld:'vTRNCONTEXT',pic:''}],[]];
   this.EnterCtrl = ["BTNTRN_ENTER"];
   this.setVCMap("A75PagoMatriculaMoraAcumulada", "PAGOMATRICULAMORAACUMULADA", 0, "decimal", 6, 2);
   this.setVCMap("A74PagoMatriculaValorPagar", "PAGOMATRICULAVALORPAGAR", 0, "decimal", 6, 2);
   this.setVCMap("AV14PagoMatriculaId", "vPAGOMATRICULAID", 0, "int", 4, 0);
   this.setVCMap("AV10Insert_MatriculaId", "vINSERT_MATRICULAID", 0, "int", 4, 0);
   this.setVCMap("A116PagoMatriculaFechaUltimoRecarg", "PAGOMATRICULAFECHAULTIMORECARG", 0, "date", 8, 0);
   this.setVCMap("AV15Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV8TrnContext", "vTRNCONTEXT", 0, "WWPBaseObjects\WWPTransactionContext", 0, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.pagomatricula);});
