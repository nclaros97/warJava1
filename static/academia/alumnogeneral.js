/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:8:0.37
*/
gx.evt.autoSkip = false;
gx.define('academia.alumnogeneral', true, function (CmpContext) {
   this.ServerClass =  "academia.alumnogeneral" ;
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
   this.Valid_Alumnoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ALUMNOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e111y1_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.alumno", ["UPD", this.A1AlumnoId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e121y1_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.alumno", ["DLT", this.A1AlumnoId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e151y2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e161y2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,70,71,73,74,75,76,77,78,79,80,81,84,85,87,88,89,90,91,92,93,94];
   this.GXLastCtrlId =94;
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
   GXValidFnc[14]={ id:14 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Alumnoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOID",gxz:"Z1AlumnoId",gxold:"O1AlumnoId",gxvar:"A1AlumnoId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A1AlumnoId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z1AlumnoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ALUMNOID",gx.O.A1AlumnoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A1AlumnoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ALUMNOID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id:19 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOIDENTIDAD",gxz:"Z7AlumnoIdentidad",gxold:"O7AlumnoIdentidad",gxvar:"A7AlumnoIdentidad",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A7AlumnoIdentidad=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z7AlumnoIdentidad=Value},v2c:function(){gx.fn.setControlValue("ALUMNOIDENTIDAD",gx.O.A7AlumnoIdentidad,0)},c2v:function(){if(this.val()!==undefined)gx.O.A7AlumnoIdentidad=this.val()},val:function(){return gx.fn.getControlValue("ALUMNOIDENTIDAD")},nac:gx.falseFn};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id:24 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNONOMBRE",gxz:"Z2AlumnoNombre",gxold:"O2AlumnoNombre",gxvar:"A2AlumnoNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A2AlumnoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z2AlumnoNombre=Value},v2c:function(){gx.fn.setControlValue("ALUMNONOMBRE",gx.O.A2AlumnoNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A2AlumnoNombre=this.val()},val:function(){return gx.fn.getControlValue("ALUMNONOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id:29 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOTELEFONO",gxz:"Z3AlumnoTelefono",gxold:"O3AlumnoTelefono",gxvar:"A3AlumnoTelefono",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A3AlumnoTelefono=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z3AlumnoTelefono=Value},v2c:function(){gx.fn.setControlValue("ALUMNOTELEFONO",gx.O.A3AlumnoTelefono,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A3AlumnoTelefono=this.val()},val:function(){return gx.fn.getControlValue("ALUMNOTELEFONO")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id:34 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOEMAIL",gxz:"Z4AlumnoEmail",gxold:"O4AlumnoEmail",gxvar:"A4AlumnoEmail",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A4AlumnoEmail=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z4AlumnoEmail=Value},v2c:function(){gx.fn.setControlValue("ALUMNOEMAIL",gx.O.A4AlumnoEmail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A4AlumnoEmail=this.val()},val:function(){return gx.fn.getControlValue("ALUMNOEMAIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
      gx.fn.setCtrlProperty("ALUMNOEMAIL","Link", (!gx.fn.getCtrlProperty("ALUMNOEMAIL","Enabled") ? "mailto:"+this.A4AlumnoEmail : "") );
   });
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id:39 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOFECHANACIMIENTO",gxz:"Z5AlumnoFechaNacimiento",gxold:"O5AlumnoFechaNacimiento",gxvar:"A5AlumnoFechaNacimiento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A5AlumnoFechaNacimiento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z5AlumnoFechaNacimiento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ALUMNOFECHANACIMIENTO",gx.O.A5AlumnoFechaNacimiento,0)},c2v:function(){if(this.val()!==undefined)gx.O.A5AlumnoFechaNacimiento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ALUMNOFECHANACIMIENTO")},nac:gx.falseFn};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"char",len:256,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNODIRECCION",gxz:"Z6AlumnoDireccion",gxold:"O6AlumnoDireccion",gxvar:"A6AlumnoDireccion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A6AlumnoDireccion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z6AlumnoDireccion=Value},v2c:function(){gx.fn.setControlValue("ALUMNODIRECCION",gx.O.A6AlumnoDireccion,0)},c2v:function(){if(this.val()!==undefined)gx.O.A6AlumnoDireccion=this.val()},val:function(){return gx.fn.getControlValue("ALUMNODIRECCION")},nac:gx.falseFn};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id:49 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOFACEBOOK",gxz:"Z8AlumnoFacebook",gxold:"O8AlumnoFacebook",gxvar:"A8AlumnoFacebook",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A8AlumnoFacebook=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z8AlumnoFacebook=Value},v2c:function(){gx.fn.setControlValue("ALUMNOFACEBOOK",gx.O.A8AlumnoFacebook,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A8AlumnoFacebook=this.val()},val:function(){return gx.fn.getControlValue("ALUMNOFACEBOOK")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id:54 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOINSTAGRAM",gxz:"Z9AlumnoInstagram",gxold:"O9AlumnoInstagram",gxvar:"A9AlumnoInstagram",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A9AlumnoInstagram=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z9AlumnoInstagram=Value},v2c:function(){gx.fn.setControlValue("ALUMNOINSTAGRAM",gx.O.A9AlumnoInstagram,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A9AlumnoInstagram=this.val()},val:function(){return gx.fn.getControlValue("ALUMNOINSTAGRAM")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id:59 ,lvl:0,type:"char",len:512,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOINFORMACIONADICIONAL",gxz:"Z112AlumnoInformacionAdicional",gxold:"O112AlumnoInformacionAdicional",gxvar:"A112AlumnoInformacionAdicional",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A112AlumnoInformacionAdicional=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z112AlumnoInformacionAdicional=Value},v2c:function(){gx.fn.setControlValue("ALUMNOINFORMACIONADICIONAL",gx.O.A112AlumnoInformacionAdicional,0)},c2v:function(){if(this.val()!==undefined)gx.O.A112AlumnoInformacionAdicional=this.val()},val:function(){return gx.fn.getControlValue("ALUMNOINFORMACIONADICIONAL")},nac:gx.falseFn};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"TABLESPLITTEDALUMNOACTIVO",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id: 65, fld:"TEXTBLOCKALUMNOACTIVO", format:0,grid:0};
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id: 67, fld:"TABLEMERGEDALUMNOACTIVO",grid:0};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id:71 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOACTIVO",gxz:"Z76AlumnoActivo",gxold:"O76AlumnoActivo",gxvar:"A76AlumnoActivo",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.A76AlumnoActivo=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z76AlumnoActivo=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("ALUMNOACTIVO",gx.O.A76AlumnoActivo,true)},c2v:function(){if(this.val()!==undefined)gx.O.A76AlumnoActivo=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("ALUMNOACTIVO")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[73]={ id: 73, fld:"ALUMNOACTIVO_RIGHTTEXT", format:0,grid:0};
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id: 75, fld:"",grid:0};
   GXValidFnc[76]={ id: 76, fld:"TABLESPLITTEDALUMNOACUERDOFOTOGRAFIAS",grid:0};
   GXValidFnc[77]={ id: 77, fld:"",grid:0};
   GXValidFnc[78]={ id: 78, fld:"",grid:0};
   GXValidFnc[79]={ id: 79, fld:"TEXTBLOCKALUMNOACUERDOFOTOGRAFIAS", format:0,grid:0};
   GXValidFnc[80]={ id: 80, fld:"",grid:0};
   GXValidFnc[81]={ id: 81, fld:"TABLEMERGEDALUMNOACUERDOFOTOGRAFIAS",grid:0};
   GXValidFnc[84]={ id: 84, fld:"",grid:0};
   GXValidFnc[85]={ id:85 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOACUERDOFOTOGRAFIAS",gxz:"Z113AlumnoAcuerdoFotografias",gxold:"O113AlumnoAcuerdoFotografias",gxvar:"A113AlumnoAcuerdoFotografias",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.A113AlumnoAcuerdoFotografias=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z113AlumnoAcuerdoFotografias=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("ALUMNOACUERDOFOTOGRAFIAS",gx.O.A113AlumnoAcuerdoFotografias,true)},c2v:function(){if(this.val()!==undefined)gx.O.A113AlumnoAcuerdoFotografias=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("ALUMNOACUERDOFOTOGRAFIAS")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[87]={ id: 87, fld:"ALUMNOACUERDOFOTOGRAFIAS_RIGHTTEXT", format:0,grid:0};
   GXValidFnc[88]={ id: 88, fld:"",grid:0};
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id: 90, fld:"",grid:0};
   GXValidFnc[91]={ id: 91, fld:"",grid:0};
   GXValidFnc[92]={ id: 92, fld:"BTNUPDATE",grid:0};
   GXValidFnc[93]={ id: 93, fld:"",grid:0};
   GXValidFnc[94]={ id: 94, fld:"BTNDELETE",grid:0};
   this.A1AlumnoId = 0 ;
   this.Z1AlumnoId = 0 ;
   this.O1AlumnoId = 0 ;
   this.A7AlumnoIdentidad = "" ;
   this.Z7AlumnoIdentidad = "" ;
   this.O7AlumnoIdentidad = "" ;
   this.A2AlumnoNombre = "" ;
   this.Z2AlumnoNombre = "" ;
   this.O2AlumnoNombre = "" ;
   this.A3AlumnoTelefono = "" ;
   this.Z3AlumnoTelefono = "" ;
   this.O3AlumnoTelefono = "" ;
   this.A4AlumnoEmail = "" ;
   this.Z4AlumnoEmail = "" ;
   this.O4AlumnoEmail = "" ;
   this.A5AlumnoFechaNacimiento = gx.date.nullDate() ;
   this.Z5AlumnoFechaNacimiento = gx.date.nullDate() ;
   this.O5AlumnoFechaNacimiento = gx.date.nullDate() ;
   this.A6AlumnoDireccion = "" ;
   this.Z6AlumnoDireccion = "" ;
   this.O6AlumnoDireccion = "" ;
   this.A8AlumnoFacebook = "" ;
   this.Z8AlumnoFacebook = "" ;
   this.O8AlumnoFacebook = "" ;
   this.A9AlumnoInstagram = "" ;
   this.Z9AlumnoInstagram = "" ;
   this.O9AlumnoInstagram = "" ;
   this.A112AlumnoInformacionAdicional = "" ;
   this.Z112AlumnoInformacionAdicional = "" ;
   this.O112AlumnoInformacionAdicional = "" ;
   this.A76AlumnoActivo = false ;
   this.Z76AlumnoActivo = false ;
   this.O76AlumnoActivo = false ;
   this.A113AlumnoAcuerdoFotografias = false ;
   this.Z113AlumnoAcuerdoFotografias = false ;
   this.O113AlumnoAcuerdoFotografias = false ;
   this.A1AlumnoId = 0 ;
   this.A7AlumnoIdentidad = "" ;
   this.A2AlumnoNombre = "" ;
   this.A3AlumnoTelefono = "" ;
   this.A4AlumnoEmail = "" ;
   this.A5AlumnoFechaNacimiento = gx.date.nullDate() ;
   this.A6AlumnoDireccion = "" ;
   this.A8AlumnoFacebook = "" ;
   this.A9AlumnoInstagram = "" ;
   this.A112AlumnoInformacionAdicional = "" ;
   this.A76AlumnoActivo = false ;
   this.A113AlumnoAcuerdoFotografias = false ;
   this.Events = {"e151y2_client": ["ENTER", true] ,"e161y2_client": ["CANCEL", true] ,"e111y1_client": ["'DOUPDATE'", false] ,"e121y1_client": ["'DODELETE'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["START"] = [[{av:'AV16Pgmname',fld:'vPGMNAME',pic:''},{av:'AV7AlumnoId',fld:'vALUMNOID',pic:'ZZZ9'}],[{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Tooltiptext")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Tooltiptext")',ctrl:'ALUMNOACTIVO',prop:'Tooltiptext'}]];
   this.EvtParms["LOAD"] = [[],[]];
   this.EvtParms["'DOUPDATE'"] = [[{av:'A1AlumnoId',fld:'ALUMNOID',pic:'ZZZ9'}],[]];
   this.EvtParms["'DODELETE'"] = [[{av:'A1AlumnoId',fld:'ALUMNOID',pic:'ZZZ9'}],[]];
   this.Initialize( );
});
