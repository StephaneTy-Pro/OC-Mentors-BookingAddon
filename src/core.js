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
// voir : https://github.com/iamkun/dayjs/blob/dev/src/locale/fr.js je pense qu'il faudra externaliser dayjs dans la compilation ... 
// ou alors le réecrire à la main car pour le moment je ne peux pas l'intégrer comme cela
import dayjs_locale_fr 				from './vendor/dayjs/src_p/locale/fr.js';



import mitt 				from './vendor/mitt/mitt.js';

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
import cssPopup_menu from './popup_menu.css';

// on va tenter d'intégrer le css

//import objectStyle from './vendor/object-style/src_p/index.js';
//import { styles, updateStylesheet, classes } from './vendor/stylemap/jsdelivr/index.js';
// les deux versions qui suivent fonctionnent ... je prend la première tant qu'a faire
//import { style, updateStylesheet, classes } from './vendor/stylemap/src/index.ts'; 
//import { style, updateStylesheet, classes } from './vendor/stylemap/dist/stylemap.neutral.js';
import {converted} from './views/oCSS/test1.js';

import myStyle from './json/style_1.json';
import myStyleTxt from './json/style_1.txt';
//import { .card } from './json/style_1.json';
import { Style, render } from "./vendor/object-dom/src/object-dom.ts";

// stockage de donnée
import { clear, persistKey, read, update, write } from './vendor/stoxy/core/stoxy.js';



const Core = function(o={}){
	
	const LOG_CORE = 'CORE';
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
		
		console.log('defined mData as %o', mData);
		
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
		
		_emitter.on('clickMenu:bookSession', (type, ...args) => {
			Log.inf(LOG_CORE,"%cclickMenu:bookSession listener of _emitter:", C.APP_INFO_STYLE, `event(${type}): `, ...args);
			UI.windowInit();
		
			// afficher le lien gsheet
			read("userData").then( _data => {
				document.querySelector('#g_sheet_location').value = _data.g_sheet_location;
			});
			
			document.querySelector('#g_sheet_location').addEventListener('change', (e) => {
				console.log(e);
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
			
			actionBook(type.data.date.value);
		});
		
		// preparer le stockage
		/* j'aurais pu utiliser
		 * function GM_setValue(key, value);
		 * function GM_getValue(key, defaultValue);
		 * 
		 * en ajoutant ce script pour gérer les données complexes : https://userscripts-mirror.org/scripts/review/107941
		 * */
		 
		// si souci
		//clear(userData); 
		 
		persistKey("userData");
		
		read("userData").then( _data => {
			
			if(typeof _data === 'undefined'){ 
				_createData();
			} else {
				console.log("Data alreay defined, get it and find : %o" , _data);
			}
		});
		
		/* @__PURE__ */console.log('test object style');
		///const { className, css } = objectStyle({converted})
		//const { className, css } = objectStyle({converted})
		///* @__PURE__ */ console.log('className %O', className);
		///* @__PURE__ */ console.log('css %O', css);
		
		///*@__PURE__ */ console.log('className %O', style(converted));
		
		console.log(myStyle)
		
		render(new Style({attributes: {type:"text/css"},text: `${myStyleTxt}`}), document.body.querySelector("#sttPlaceHolder"));
		
		return;
		
		
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
					const sLigneToText = `[Ligne ${i+1}]`
					// NOTESTTje devrais plutot continuer le traitement ?
					if(typeof oStudent === 'undefined'){
						//throw new Error(`Error student ${sNeedle} not found`);
						Log.err(LOG_CORE, "%c[sheetrock.myCallback()] Error student %s not found", C.APP_ERROR_STYLE, sNeedle);
						aErrors.push({
							code: 'STUDENT_NOT_FOUND',
							description: `${sLigneToText}:Etudiant non trouvé`,
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
					/*
					for (h = 0; h < response.raw.table.rows[i].c.length; h++){
						if(response.raw.table.rows[i].c[h] == null){ val = ""; }else{ val = response.raw.table.rows[i].c[h].v}
						datos += "'"+ val +"'";
						if(h < response.raw.table.rows[i].c.length-1){ datos += ","; }
					}
					
					//aData.push(
					
					// search Student in db
					
					insert += datos;
					insert += ");";
					console.log(insert);
					*/
				}
				///* @__PURE__ */console.log(aData);
				await _bookList(sDate, aData, aErrors);
			}
		};

		// lien sheetrock
		// voici le lien du document en mode partagé https://docs.google.com/spreadsheets/d/17EwuJnc1VYoQen40Z1DIzId9bsXEUORimqro2EVKIvk/edit?usp=sharing
		//const sGoogleSheetURL = 'https://docs.google.com/spreadsheets/d/17EwuJnc1VYoQen40Z1DIzId9bsXEUORimqro2EVKIvk/edit#gid=0';
		
		const sGoogleSheetURL = document.querySelector('#g_sheet_location').value;
		
		console.log(sGoogleSheetURL);
		
		console.log( document.querySelector('#g_sheet_location').value === "https://docs.google.com/spreadsheets/d/17EwuJnc1VYoQen40Z1DIzId9bsXEUORimqro2EVKIvk/edit#gid=0");
		console.log( sGoogleSheetURL === "https://docs.google.com/spreadsheets/d/17EwuJnc1VYoQen40Z1DIzId9bsXEUORimqro2EVKIvk/edit#gid=0");
		
		//debugger;
	
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
		
		if(sDate.length===0){
			Log.err(LOG_CORE, "%c[_bookList] not date selected", C.APP_ERROR_STYLE);
			throw new Error('IRRECOVERABLE ERROR: no date selected');
			return;	
		}
		
		//document.forms['sample-date']['inlineFormDate'].value = dayjs(date).format('dddd, DD. MMMM YYYY');
		let _r = dayjs(sDate, "DD-MM-YYYY");
		
		//let _r = dayjs(sDate, "DD-MM-YYYY");
		
		
		if(_r.format('d') !== "1"){ // NOTESTT mode international donc le lundi reste quand meme le jour 1
			Log.err(LOG_CORE, "%c[_bookList] the selected date don't start on monday but on %s", C.APP_ERROR_STYLE, _r.format('dddd, DD-MM-YYYY'));
			throw new Error(`IRRECOVERABLE ERROR: you select ${_r.format('dddd, DD-MM-YYYY')} as the date but selected  day of date have to be a monday`);
			return;
		}
		Log.dbg(LOG_CORE, "%c[_bookList] selected date is  %s", C.APP_DEBUG_STYLE, _r.format('dddd, DD-MM-YYYY'));	
		let _r2;
		for(student of aStudents){
			Log.dbg(LOG_CORE, "%c[_bookList] wanna process student: %o", C.APP_DEBUG_STYLE, student);			

			_r2 = _r.add(student.date, 'day')
					.add(student.time.h, 'hour')
					.add(student.time.m, 'minute');
			///* @__PURE__ */console.log(`have to plan a rdv from ${sDate} which become ${_r.format('DD-MM-YYYYTHH:mm:ssZ[Z]') }`);
			///* @__PURE__ */console.log(`for OC (conveted to UTC) ${_r.utc().format()}`);
			Log.dbg(LOG_CORE, "%c[_bookList] wanna book a session for student: %s at date %s", C.APP_DEBUG_STYLE, student.fullname, _r2.format('DD-MM-YYYYTHH:mm:ssZ[Z]'));
			
			
			// temp for testing purpose
			
			let _res = await _bookStudent(student.pid, student.id, _r2);
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
				console.error('IRRECOVERABLE ERROR:%O in _booklist for student:%s', e, student.fullname);
				aErrors.push({
					code: 'API_BOOK_ERROR',
					description: `Impossible de réserver une session pour ${student.fullname} à ${_r.format('DD-MM-YYYYTHH:mm:ssZ[Z]')} `,
					value: e,
				});	
			}
		}
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
