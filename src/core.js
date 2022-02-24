/**
 * 
 */

import * as C 				from './constants.js';

// helpers
import {tryNTimes} 			from './helpers/orchestration.js';
import {insertAfter} 		from './helpers/dom.js'
import {assert} 			from './helpers/test.js';
//vendors
import Feature 				from './vendor/featurejs/feature.js';
import Log					from './vendor/log/log.js';
import dayjs 				from './vendor/dayjs/src/index.js';
import dayjs_plugin_localeData 				    from './vendor/dayjs/jsdelivr/plugin/localeData.js';
//import dayjs_plugin_advancedFormat 				from './vendor/dayjs/jsdelivr/plugin/advancedFormat.js';
import dayjs_plugin_customParseFormat 				from './vendor/dayjs/jsdelivr/plugin/customParseFormat.js';
import dayjs_plugin_utc 							from './vendor/dayjs/jsdelivr/plugin/utc.js';
// get the locale
//import dayjs_locale_fr 				from './vendor/dayjs/jsdelivr/locale/fr.js';
// use : https://unminify.com/
import dayjs_locale_fr 				from './vendor/dayjs/src_p/locale/fr.js';



import mitt 				from './vendor/mitt/mitt.neutral.js';

import { default as sheetrock} from './vendor/sheetrock/sheetrock.neutral.tampermonkey.js'

import UI					from './ui.js';

import Popup 				from './vendor/popup-simple/dist/popup-simple.neutral.js';
import {default as __JSFrame} from './vendor/JSFrame/dist/JSFrame.neutral.js'; // pas tout à fait comme dans la documentation
//import JSFrame from './vendor/JSFrame/dist/JSFrame.neutral.js'; // ne fonctionne pas 
//import { JSFrame } from './vendor/JSFrame/dist/JSFrame.neutral.js'; // ne fonctionne pas, pas tout à fait comme dans la documentation


///////////// Attention a bien importer tout en min ou tout en normal (si les extension et la base sont en format différents, il charge deux fois la base par exemple)
import { jsPanel } from './vendor/jsPanel4/es6module/jspanel.js';
// import extensions as needed
//import './vendor/jsPanel4/es6module/extensions/hint/jspanel.hint.min.js';
//import './vendor/jsPanel4/es6module/extensions/datepicker/jspanel.datepicker.js';
import './vendor/jsPanel4/es6module_p/extensions/datepicker/jspanel.datepicker.js';
//import './vendor/jsPanel4/es6module/extensions/modal/jspanel.modal.min.js';
//import './vendor/jsPanel4/es6module/extensions/contextmenu/jspanel.contextmenu.min.js';
//import './vendor/jsPanel4/es6module/extensions/tooltip/jspanel.tooltip.min.js';
//import './vendor/jsPanel4/es6module/extensions/layout/jspanel.layout.min.js';
//import './vendor/jsPanel4/es6module/extensions/dock/jspanel.dock.min.js';

// SS
//import cssPopup_menu from './popup_menu.css';

// on va tenter d'intégrer le css

//import objectStyle from './vendor/object-style/src_p/index.js';
//import { styles, updateStylesheet, classes } from './vendor/stylemap/jsdelivr/index.js';
// les deux versions qui suivent fonctionnent ... je prend la première tant qu'a faire
//import { style, updateStylesheet, classes } from './vendor/stylemap/src/index.ts'; 
//import { style, updateStylesheet, classes } from './vendor/stylemap/dist/stylemap.neutral.js';
//import {converted} from './views/oCSS/test1.js';

//import myStyle from './json/style_1.json';
//import myStyleTxt from './json/style_1.txt';
//import { .card } from './json/style_1.json';
import { Style, render } from "./vendor/object-dom/src/object-dom.ts";

// stockage de donnée
import { clear, persistKey, read, update, write } from './vendor/stoxy/core/stoxy.js';

// pool d'object
import { create as createObjectPool } from './vendor/deePool/deePool.js';

// gestion globale des evenements
/*
import {
	registerListeners,
	unregisterListeners,
	findElementInEventPath
	
} from './vendor_lib/vanillajs-datepicker/event.js';
*/
import {
	addListener, removeListener, getListeners
} from './vendor_lib/vanillajs-datepicker/listener-register.js';



const Core = function(o={}){
	
	const LOG_CORE = 'CORE';
	const LISTENER_PREFIX = 'OCRESA';
	
	//---- Store some ref to Facturier Object
	let Api;
	let Student;
	//---- private functions
	const _emitter = new mitt();
	
	let userData = {};
	
	const _createData = function(){
		const mData = {
			version: 20220505,
			g_sheet_location: 'google',
		}
		
		write("userData", mData);
		
		//console.log('defined mData as %o', mData);
		Log.inf(LOG_CORE,"%cDefault data created", C.APP_INFO_STYLE);
		
		/*write("userData").then(_data => {
			console.log("Logged in as " + _data.name);
		});	*/	
	}
	
	const _bootstrap = function(){
		Api = unsafeWindow.Facturier.klass.find(o => o.id == 'Api').ptr
		Student = unsafeWindow.Facturier.klass.find(o => o.id == 'Student').ptr
		if(typeof Api === "undefined"){ throw new Error('Irrecoverable Error: Impossible to get Api module from context') };
		if(typeof Student === "undefined"){ throw new Error('Irrecoverable Error: Impossible to get Student module from context') };
		// mettre en français
		dayjs.extend(dayjs_plugin_localeData);
		dayjs.extend(dayjs_plugin_customParseFormat);
		dayjs.locale('fr');
		
		
		
		
		// mitt send on param if not * 
		_emitter.on('clickMenu:bookSession', (type, ...args) => {
			Log.inf(LOG_CORE,"%cclickMenu:bookSession listener of _emitter:", C.APP_INFO_STYLE, `event(${type}): `, ...args);
			UI.windowInit();
		
			// afficher le lien gsheet ça c'est pas terrible mais je ne vois pas comment faire autrement sans le passer en parametre
			read("userData").then( _data => {
				document.querySelector('#g_sheet_location').value = _data.g_sheet_location;
			});
			
			/* normalement j'en ai plus besoin */
			document.querySelector('#g_sheet_location').addEventListener('change', (e) => {
				console.log("#g_sheet_location change %o",e);
				update('userData.g_sheet_location', () => e.target.value);
			});		
			
			//note il faudra virer l'event listener avant la fermeture de la fenetre
			
			
			document.querySelector('#sample-date').addEventListener('submit', (e) => {
			  e.preventDefault();
			  return false;
			});			
			
		});
		
		_emitter.on('clickBtn:bookSession', (type, ...args) => {
			Log.inf(LOG_CORE,"%cclickBtn:bookSession listener of _emitter:", C.APP_INFO_STYLE, `event(${type}): `, ...args);
			///* @__PURE__ */ console.log('type %O',type);
			///* @__PURE__ */ console.log('args %O', args);
			assert(
				typeof type.data.date.value === 'string',
				'selected date must be a string.',
				TypeError
				);				
			
			///* @__PURE__ */ console.log('type.data.date.value %O', type.data.date.value);
			// reset errors
			UI.displayErrors();
			// go
			checkRequirements({date:type.data.date.value});
			actionBook(type.data.date.value);
		});
		
		_emitter.on('error:bookSession', (args) => {
			Log.inf(LOG_CORE,"%cerror:bookSession: %o", C.APP_INFO_STYLE, args);
			// ajouter l'erreur au bas du panneau
			// mieux mettre un icone rouge erreur dans le panneau et pouvoir appeller un nouveau panneau de scroll avec les erreurs
			/*{data: {error: {format:"", value:""}}}*/
			// deux possibilités :
			// 1 erreur : afficher directement
			UI.displayErrors({error:args.data.error.value});
			// +1 erreur mettre un lien pour un popup erreur
			
		});
		
		_emitter.on('error:noDataSrc', (args) => {
			Log.inf(LOG_CORE,"%cerror:noDataSrc: %o", C.APP_INFO_STYLE, args);
			// ajouter l'erreur au bas du panneau
			// mieux mettre un icone rouge erreur dans le panneau et pouvoir appeller un nouveau panneau de scroll avec les erreurs
			/*{data: {error: {format:"", value:""}}}*/
			// deux possibilités :
			// 1 erreur : afficher directement
			UI.displayErrors({error:args.data.error.value});
			// +1 erreur mettre un lien pour un popup erreur
			
		});
		
		_emitter.on('changeValue:date', (args) => {	
			Log.inf(LOG_CORE,"%cchangeValue:date: %o", C.APP_INFO_STYLE, args);
			
		});
		_emitter.on('changeValue:dataURL', (args) => {
			Log.inf(LOG_CORE,"%cchangeValue::dataURL: %o", C.APP_INFO_STYLE, args);
			//write("userData.g_sheet_location", args.data.url.value);
			update('userData.g_sheet_location', args.data.url.value);
		});
		
		// preparer le stockage
		/* j'aurais pu utiliser
		 * function GM_setValue(key, value);
		 * function GM_getValue(key, defaultValue);
		 * 
		 * en ajoutant ce script pour gérer les données complexes : https://userscripts-mirror.org/scripts/review/107941
		 * */
		 
		//clear(userData); // à utiliser pour faire une remise à zéro des données stockées
		persistKey("userData");
		read("userData").then( _data => {
			// si les données sont absente, définir un lot initial
			if(typeof _data === 'undefined'){ 
				_createData();
			}// else { /*@__PURE__ */console.log("Data alreay defined, get it and find : %o" , _data);}
		});
			
		return;
		
		// !!!!! deconnecté suite au return, déconnexion volontaire a réactiver pour test
		
		// tres pratique pour test rapide Api.getMe().then( console.dir );
		//global event emitter broker 
		_emitter.on('*', (type, ...args) => {
			
			/* fonctionne pas tres bien sous tampermonkey
			Log.inf(LOG_CORE,"%cStack trace :%o", C.APP_INFO_STYLE, (new Error()).stack.split("\n") );
			var callback = function(stackframes) {
				var stringifiedStack = stackframes.map(function(sf) {
					return sf.toString();
				}).join('\n');
				//console.log(stringifiedStack);
				Log.inf(LOG_CORE,"%cStack trace \n%s", C.APP_INFO_STYLE, stringifiedStack);
			};
			var errback = function(err) { console.log(err.message); };
			StackTrace.get().then(callback).catch(errback);
			*/
			Log.inf(LOG_CORE,"%ccatchAll listener of _emitter:", C.APP_INFO_STYLE, `event(${type}): `, ...args);
		});
		

	}
	

	//---- public functions
	
	//---- //---- Actions
	
	/**
	 *  Check date is set, google sheet is set and date is in future
	 */
	
	const checkRequirements = function(args){
		
		let { date } = Object.assign({
			date: dayjs()
		}, args);	
		
		// par contre dans l'idéal toutes ses valeurs devraient être dans un element de variable et pas dans une ui
		// donc je ne devrais pas avoir à questionner ui.js
		
		if(date.length === 0){
			_emitter.emit("error:bookSession", {data:{error:{format:'text',value:"Erreur majeure, pas de date définie"}}});
			throw new Error("No date selected");
		}

/*		
		let last_week = dayjs().weekday(-1);
		dayjs().isSameOrBefore(dayjs('2011-01-01')) 
		dayjs().add(1, 'week')
		
		Log.err(LOG_CORE, "%cDate is last week", C.APP_ERROR_STYLE);
		
		Log.err(LOG_CORE, "%cDate is not a monday", C.APP_ERROR_STYLE);
	
*/




		read("userData.g_sheet_location").then( _data => {
			if(_data.length === 0){
				Log.err(LOG_CORE, "%cThere is no google sheet defined", C.APP_ERROR_STYLE);
				_emitter.emit("error:noDataSrc", {data:{error:{format:'text',value:"Erreur majeure, pas de feuille google definie"}}});
				throw new Error("No google sheet set");
			}
		})
		
		
		
		
	}
	
	const actionBook = async function(sDate){
		Log.dbg(LOG_CORE, "%cWanna book sessions since %s", C.APP_DEBUG_STYLE, sDate);
		// selectionner une date
		
		// recupération du placeholder
		
		const sAnchor = document.getElementById('sttPlaceHolder');

		
		// insert HTML in anchor
		// https://gomakethings.com/html-templates-with-vanilla-javascript/
		// injecter le css
		// https://web.dev/css-module-scripts/
		// https://developers.google.com/web/updates/2019/02/constructable-stylesheets
		// https://css-tricks.com/the-many-ways-to-include-css-in-javascript-applications/ (moins intéressant)
		// ne fonctionne pas encore document.adoptedStyleSheets = [...document.adoptedStyleSheets, cssPopup_menu];
		  
    
		var myCallback = async function (error, options, response) {
			dayjs.extend(dayjs_plugin_localeData);
			dayjs.extend(dayjs_plugin_customParseFormat);
			dayjs.extend(dayjs_plugin_utc);
			dayjs.locale('fr');
			
			// par sécurité je devrais toujours verifer la locale comme ça je sais si les paramètres de date sont bons
			
			
			if (error) {
				Log.err(LOG_CORE, "%c[sheetrock.myCallback()] error is: %o", C.APP_ERROR_STYLE, error);
			}
			if (!error) {

				Log.dbg(LOG_CORE, "%c[sheetrock.myCallback()] response is: %o", C.APP_DEBUG_STYLE, response);
				const sJson = await Api.getUserStudents();
				if(typeof sJson !== 'string'){throw new Error('PB returning students list from myCallback');}
				var aStudents = JSON.parse(sJson);
				Log.dbg(LOG_CORE, "%c[sheetrock.myCallback()] students list is: %o", C.APP_DEBUG_STYLE, aStudents);
				
				const iColFN = response.attributes.labels.findIndex( (e) => e.toUpperCase()==='FULLNAME');
				if(iColFN == -1){
					throw new Error('Irrecoverable Error: no column "FULLNAME" found on linked google calc content');
				}
				const iColD = response.attributes.labels.findIndex( (e) => e.toUpperCase()==='DAY');
				if(iColD == -1){
					throw new Error('Irrecoverable Error: no column "DAY" found on linked google calc content');
				}
				
				const iColT = response.attributes.labels.findIndex( (e) => e.toUpperCase()==='TIME');
				if(iColT == -1){
					throw new Error('Irrecoverable Error: no column "TIME" found on linked google calc content');
				}
				
				let aErrors = [];
				let aData = [];
				
				for (i = 0; i < response.raw.table.rows.length; i++) {
					insert = "insert into data (`Team`,`Pos`,`First`,`Last`,`Bats`,`AB`,`R`,`H`,`HR`,`RBI`,`SB`,`BA`) values (";
					const sNeedle = response.raw.table.rows[i].c[iColFN] == null ? '' : response.raw.table.rows[i].c[iColFN].v;
					const oStudent = aStudents.find( o => o.displayName===sNeedle);
					const sLigneToText = `Google Sheet (Ligne ${i+1})`
					// NOTESTTje devrais plutot continuer le traitement ?
					if(typeof oStudent === 'undefined'){
						//throw new Error(`Error student ${sNeedle} not found`);
						Log.err(LOG_CORE, "%c[sheetrock.myCallback()] Error student %s not found", C.APP_ERROR_STYLE, sNeedle);
						aErrors.push({
							code: 'STUDENT_NOT_FOUND',
							description: `${sLigneToText}:Etudiant ${sNeedle} non trouvé parmi vos étudiants`,
							value: sNeedle,
						});
						continue;
					}
					Log.dbg(LOG_CORE, "%c[sheetrock.myCallback()] working on student with FULLNAME:%s which is %o", C.APP_DEBUG_STYLE, sNeedle, oStudent);
					
					// calcul de la date
					
					// trouver le jour
					//console.log('check current locale', dayjs.locale());
					//dayjs.locale('fr')
					//console.log('check current locale', dayjs.locale());
					const aWeek = dayjs.weekdays(); // tient compte de la locale
					const sDay = response.raw.table.rows[i].c[iColD] == null ? '' : response.raw.table.rows[i].c[iColD].v;
					// en france le premier jour de la semaine est un lundi mais par défaut la semaine commence un dimanche ... chercher lundi renverra un et je veux 1
					const iDay = aWeek.findIndex( (e) => e.toLowerCase()===sDay.toLowerCase()) - 1 ;
					
					///* @__PURE__ */ console.log(sDay);
					///* @__PURE__ */console.log(iDay);
					
					// trouver l'heure
					
					const sTime = response.raw.table.rows[i].c[iColT] == null ? '' : response.raw.table.rows[i].c[iColT].v;
					let _aTime, iH, iM;
					// il est possible que la chaine retournée soit "Date(1899,11,30,9,0,0)"
					// conversion d'une date stipulée 09:00 
					
					if (sTime.match(/^Date\(/) !== null){ // sTime.includes("Date(")===true
						_aTime = sTime.split(','); 
						// NOTESTT eviter Date( et ) dans les chaines découpées
						
						_aTime[0].replace('Date(','')
						_aTime[_aTime.length-1].replace(')','')

						if (_aTime.length != 6){
							Log.err(LOG_CORE, "%c[sheetrock.myCallback()] Error on time field %s not found", C.APP_ERROR_STYLE, sTime);
							aErrors.push({
								code: 'FORMAT_ERROR',
								description: `${sLigneToText}:Le format de l'heure HH:MM n'est pas respecté (mode objet).`,
								value: sTime,
							});
							continue;	
						}
					///* @__PURE__ */console.log(_aTime);
					iH = _aTime[3]*1;
					iM = _aTime[4]*1;
					///* @__PURE__ */console.log(iH);
					///* @__PURE__ */console.log(iM);
					}else{
						_aTime = sTime.split(':');
						if (_aTime.length != 2){
							Log.err(LOG_CORE, "%c[sheetrock.myCallback()] Error on time field %s not found", C.APP_ERROR_STYLE, sTime);
							aErrors.push({
								code: 'FORMAT_ERROR',
								description: `${sLigneToText}:Le format de l'heure HH:MM n'est pas respecté.`,
								value: sTime,
							});
							continue;	
						}
					iH = _aTime[0]*1
					iM = _aTime[1]*1
					}
					
					if (iH < 0 || iH > 23){
						Log.err(LOG_CORE, "%c[sheetrock.myCallback()] Error on time field HH", C.APP_ERROR_STYLE);
						aErrors.push({
							code: 'FORMAT_ERROR',
							description: `${sLigneToText}: l'heure doit être entre [0 et 23].`,
							value: iH,
						});
						continue;	
					}
					
					if (iM < 0 || iM > 59){
						Log.err(LOG_CORE, "%c[sheetrock.myCallback()] Error on time field %s not found", C.APP_ERROR_STYLE, sTime);
						aErrors.push({
							code: 'FORMAT_ERROR',
							description: `${sLigneToText}: les minutes doivent être entre [0 et 59].`,
							value: iM,
						});
						continue;	
					}
					
					// stocker
					aData.push({
						id:  oStudent.id,
						pid: oStudent.followedProject.projectId,
						fullname: oStudent.displayName,
						date: iDay,
						time: {h:iH,m:iM}
					});

				}
				///* @__PURE__ */console.log(aData);
				await _bookList(sDate, aData, aErrors);
			}
		};

		// lien sheetrock
		// voici le lien du document en mode partagé https://docs.google.com/spreadsheets/d/17EwuJnc1VYoQen40Z1DIzId9bsXEUORimqro2EVKIvk/edit?usp=sharing
		//const sGoogleSheetURL = 'https://docs.google.com/spreadsheets/d/17EwuJnc1VYoQen40Z1DIzId9bsXEUORimqro2EVKIvk/edit#gid=0';
		
		const sGoogleSheetURL = document.querySelector('#g_sheet_location').value;
		
		///* @__PURE__ */ console.log(sGoogleSheetURL);
		
		///* @__PURE__ */ console.log( document.querySelector('#g_sheet_location').value === "https://docs.google.com/spreadsheets/d/17EwuJnc1VYoQen40Z1DIzId9bsXEUORimqro2EVKIvk/edit#gid=0");
		///* @__PURE__ */ console.log( sGoogleSheetURL === "https://docs.google.com/spreadsheets/d/17EwuJnc1VYoQen40Z1DIzId9bsXEUORimqro2EVKIvk/edit#gid=0");
		
	
		sheetrock({
			url: sGoogleSheetURL,
			query: "select A,B,C,D,E",
			callback: myCallback,
			reset: true, // NOTESTT: remise à zéro du pseudo cache de lecture cf. documentation, sinon une erreur sera généré si on relis le meme document 
		},null);

		return;		
	}
	
	const _bookList= async function(sDate, aStudents, aErrors ){
		
		///* @__PURE__ */ console.log('sDate :%s', sDate);
		///* @__PURE__ */ console.log('sDate :%o', sDate);
		///* @__PURE__ */ console.log('sDate :%d', sDate.length);
		
		/* already checked
		if(sDate.length===0){
			Log.err(LOG_CORE, "%c[_bookList] not date selected", C.APP_ERROR_STYLE);
			_emitter.emit("error:bookSession", {data:{error:{format:'text',value:"IRRECOVERABLE ERROR: no date selected"}}});
			throw new Error('IRRECOVERABLE ERROR: no date selected');
			return;	
		}
		*/

		let _r = dayjs(sDate, "DD-MM-YYYY");
		
		if(_r.format('d') !== "1"){ // NOTESTT mode international donc le lundi reste quand meme le jour 1
			Log.err(LOG_CORE, "%c[_bookList] the selected date don't start on monday but on %s", C.APP_ERROR_STYLE, _r.format('dddd, DD-MM-YYYY'));
			const sError = `IRRECOVERABLE ERROR: you select ${_r.format('dddd, DD-MM-YYYY')} as the date but selected  day of date have to be a monday`;
			_emitter.emit("error:bookSession", {data:{error:{format:'text',value:sError}}});
			throw new Error(sError);
			return;
		}
		Log.dbg(LOG_CORE, "%c[_bookList] selected date is  %s", C.APP_DEBUG_STYLE, _r.format('dddd, DD-MM-YYYY'));	
		let _r2;
		let _i=0, _j = aStudents.length;
		for(student of aStudents){
			Log.dbg(LOG_CORE, "%c[_bookList] wanna process student: %o", C.APP_DEBUG_STYLE, student);			

			_r2 = _r.add(student.date, 'day')
					.add(student.time.h, 'hour')
					.add(student.time.m, 'minute');
			///* @__PURE__ */console.log(`have to plan a rdv from ${sDate} which become ${_r.format('DD-MM-YYYYTHH:mm:ssZ[Z]') }`);
			///* @__PURE__ */console.log(`for OC (conveted to UTC) ${_r.utc().format()}`);
			Log.dbg(LOG_CORE, "%c[_bookList] wanna book a session for student: %s at date %s", C.APP_DEBUG_STYLE, student.fullname, _r2.format('DD-MM-YYYYTHH:mm:ssZ[Z]'));
			
			
			// update ui progressbar
			_i++;
			Log.dbg(LOG_CORE, "%c[_bookList] treat student %i on %i students = (%i)\%",C.APP_DEBUG_STYLE,_i,_j,(_i/_j)*100);
			UI.progressSet((_i/_j)*100);
			
			UI.displayMessages({type:'html', value:`<span>Traite l'étudiant: ${student.fullname}</span>`});
			
			let _res = await _bookStudent(student.pid, student.id, _r2);
			//let _res = {sessionDate:'', id:'', recipient:{displayableName:''}}; // dummy one for testing purpose
			if ( typeof _res === 'object' && 
			     'errors' in _res ){
					 
				// Gestion des erreurs	 
					 
				if ( _res.errors.length == 1 &&
					_res.errors[0].code === 'SESSION_ALREADY_EXISTS'){
					const e = _res.errors[0];
					Log.err(LOG_CORE, "%c[_bookList] call Api.bookStudent error[%s] :%s ", C.APP_ERROR_STYLE, e.code, e.message);
					aErrors.push({
						code: 'API_BOOK_ERROR',
						description: `Une session existe déjà pour ${student.fullname} le ${_r2.format('DD/MM/YYYY à HH:mm')}`,
						value: '',
					});
					continue;
				} 
				
				if ( _res.errors.length == 1 &&
					_res.errors[0].code === 'TOO_LOW_ERROR' &&
					_res.errors[0].field === 'sessionDate'
					){
					const e = _res.errors[0];
					Log.err(LOG_CORE, "%c[_bookList] call Api.bookStudent error[%s] :%s ", C.APP_ERROR_STYLE, e.code, e.message);
					aErrors.push({
						code: 'API_BOOK_ERROR',
						description: `La date de session doit être postérieure au ${_r2.format('DD/MM/YYYY à HH:mm')} pour ${student.fullname}`,
						value: '',
					});
					continue;
				} 				
				
				// default	
				const e = _t.errors.reduce( (acc,v) => `${acc}{v.message}`);	
				Log.err(LOG_CORE, "%c[_bookList] call Api.bookStudent UNKNOWN error[%s] :%s ", C.APP_ERROR_STYLE, e.code, e.message);
				aErrors.push({
					code: 'API_BOOK_ERROR',
					description: `Impossible de réserver une session pour ${student.fullname} à ${_r2.format('DD/MM/YYYY à HH:mm')}`,
					value: e.message,
				});
				continue;
			}
			
			try {
				Log.dbg(LOG_CORE, "%c[_bookList] we have successful created a session for %s at date %s (UTC), session id is %i",
				 C.APP_DEBUG_STYLE,
				 _res.recipient.displayableName,
				 _res.sessionDate,
				 _res.id
				 );
			}
			catch(e){
				// attention si l'étudiant n'est plus premium il sera capturé en erreur,il faut que je gère ça autrement.
				// attention oc à la désagréable habitude de mettre des espaces en premiere place dans son message d'erreur 
				// comm dans le cas du non premium
				
				Log.err(LOG_CORE, "%c[_bookList] IRRECOVERABLE ERROR:%o in _booklist for student:%s", C.APP_ERROR_STYLE, e, student.fullname);
				
				aErrors.push({
					code: 'API_BOOK_ERROR',
					description: `Impossible de réserver une session pour ${student.fullname} à ${_r2.format('DD-MM-YYYYTHH:mm:ssZ[Z]')} `,
					value: e,
				});	
			}	
		}
		UI.displayErrors(aErrors);
		return
	}
	const _bookStudent= async function(pid, id, dtDate){
		assert(
			dtDate instanceof dayjs,
			'dtDate must be a dayjs instance.',
			TypeError
			);		
		let _r;
		try {
			_r = await Api.bookStudent(null, pid, id, dtDate.utc().format());
		}
		catch(e){
			/* @__PURE__ */ console.error('IRRECOVERABLE ERROR : %O student in _bookStudent',e);
			}
		finally{return _r;}
		
	}
	
	const getEventBroker = () => _emitter;
	
	/*
	 * 
	 * name: start
	 * @param
	 * @return
	 * 
	 */
	const start = function(){
		const TRY_TIMEOUT = 500; // a la base 500 mais sur OC ça passe moyen
		// ctx permet de passer window or unsafeWindow
		const ensureVarIsSet = function(mVar,ctx=window) {
			return new Promise((ok, fail) => {
				setTimeout(() => {
					// debug: console.log('test', ctx.hasOwnProperty(mVar));
					ctx.hasOwnProperty(mVar) ? ok("OK!") : fail("Error");
				}, TRY_TIMEOUT);
			});
		}
	// ne se lance qui si la variable:facturier est connue	
	//tryNTimes(ensureVarIsSet.bind(null, "Facturier"),10).then( () => {		
	tryNTimes(ensureVarIsSet.bind(null, "Facturier", unsafeWindow),50).then( (e) => {	
		if (e !== 'OK!'){	
			Log.dbg(LOG_CORE, "%cReturn value is %o", C.APP_DEBUG_STYLE,e );
			throw new Error(e);
		}
        Log.dbg(LOG_CORE, "%cContext is able to manage app, we could start", C.APP_DEBUG_STYLE);
        _bootstrap();
        test();
        
        // utiliser googlesheet pour définir les étudiants et horaires
        // A | B | C | D
		// JOUR (Lu, ma, ) | heure de début | Projet (si vide on prend le projet par défaut)
		
		UI.start()
        
		}).catch( (e) => Log.err(LOG_CORE, "%cIrrecoverable error, waiting Facturier but it was'nt usable:%o", C.APP_ERROR_STYLE, e) );
	};	
	/*
	 * 
	 * name: supports
	 * @param
	 * @return
	 * 
	 * NOTESTT: Grosse dépendance à feature.js
	 */
	var supports = function () {
		if (!feature.async ) {
			throw new Error("async isn’t supported");
			return false;
		}
		
		return true; // all is alright
	}
	// permet juste de faire quelques tests, pour le bien devrait apparaitre dans une autre partie
	var test = async function(){
		console.log('%cModule de test chargé...................', "background-color:green;color:white");
		console.log('%cTest getMe()', "color:green");
		// tres pratique pour test rapide Api.getMe().then( console.dir );
		console.dir( await Api.getMe());
		console.log('%cModule de test terminé...................', "background-color:green;color:white");	
	}
	
	/*
	 * 
	 * must be public to be decorated
	 */
	const warmup = function(){}
	
	
	//https://medium.com/javascript-scene/functional-mixins-composing-software-ffb66d5e731c
	return Object.assign({}, o, {
		actionBook, // for testing purpopse
		getEventBroker,
		start,
		supports,
		warmup,
	});
	
}	
//// EXPORTS
export default Core;
