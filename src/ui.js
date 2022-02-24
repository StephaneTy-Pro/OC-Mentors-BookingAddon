/**
 * 
 * @link 
 * 
 * @version 
 * 
 * History
 */
import * as C 				from './constants.js';

// helpers
import {insertAfter} from './helpers/dom.js'
//vendors
import Log					from './vendor/log/log.js';

///////////// Attention a bien importer tout en min ou tout en normal (si les extension et la base sont en format différents, il charge deux fois la base par exemple)
import { jsPanel } from './vendor/jsPanel4/es6module/jspanel.js';
// import extensions as needed
//import './vendor/jsPanel4/es6module/extensions/hint/jspanel.hint.min.js';
//import './vendor/jsPanel4/es6module/extensions/datepicker/jspanel.datepicker.js';
import './vendor/jsPanel4/es6module_p/extensions/datepicker/jspanel.datepicker.js';
import './vendor/jsPanel4/es6module/extensions/modal/jspanel.modal.min.js';
//import './vendor/jsPanel4/es6module/extensions/contextmenu/jspanel.contextmenu.min.js';
//import './vendor/jsPanel4/es6module/extensions/tooltip/jspanel.tooltip.min.js';
//import './vendor/jsPanel4/es6module/extensions/layout/jspanel.layout.min.js';
//import './vendor/jsPanel4/es6module/extensions/dock/jspanel.dock.min.js';

import { Button, Style, render } from "./vendor/object-dom/src/object-dom.ts";



import dayjs 				from './vendor/dayjs/src/index.js';
import dayjs_plugin_localeData 				    from './vendor/dayjs/jsdelivr/plugin/localeData.js';
//import dayjs_plugin_advancedFormat 				from './vendor/dayjs/jsdelivr/plugin/advancedFormat.js';
import dayjs_plugin_customParseFormat 				from './vendor/dayjs/jsdelivr/plugin/customParseFormat.js';
import dayjs_plugin_utc 							from './vendor/dayjs/jsdelivr/plugin/utc.js';

import {
	addListener, removeListener, getListeners
} from './vendor_lib/vanillajs-datepicker/listener-register.js';

// ~~ import CSS as string 

import jspanel_css from './json/jspanel.css.txt';
import datepicker_theme_default_css 
	from './json/datepicker_theme_default.css.txt';
import custom_css from './json/custom.css.txt';

// pour le moment version bourrin
// 

const UI = {
	
	LOG_UI: 'UI',
	LISTENER_PREFIX: 'OCRESA', // dans l'idéal sera recuperé dans les pref de l'application
	UI_PREFIX: 'OCRESA', // dans l'idéal sera recuperé dans les pref de l'application
	UI_MAINPAN:'OCRESA-mainPan',
	
	// mince en mode const je ne peux pas protéger mes private !!!!!
	_bootstrap: function(){
		
		let sEl;
				
		render(new Button(
			{attributes: {
				class:"button--primary button",
				"data-action":"menu__BookSession"
			}
			,text: 'R. Session'}), 
			document.querySelector('.menuBar')
		);
		
		var lastInserted = document.querySelector('.menuBar').lastChild;
		var whereToInsert = document.querySelector('.menuBar')
			.children[
				document.querySelector('.menuBar').children.length-3
			];
		
		
		insertAfter(lastInserted, whereToInsert);

	},
	/**
	 * return the application main panel
	 *  @param bThrowError default false
	 * @return paned.id or undefinded
	 * 
	 */
	
	_getPanelId: function(bThrowError=false){
		let self = this;
		let panelIDs = jsPanel.getPanels(function() {
			///* @__PURE__ */ console.log("this.options.data:%s === this.UI_MAINPAN:%s", this.options.data, self.UI_MAINPAN);
			return this.options.data === self.UI_MAINPAN;
		}).map(panel => panel.id);
		if (Array.isArray(panelIDs) === true && panelIDs.length === 1){
			///* @__PURE__ */ console.log("panel was %o", panelIDs);
			return 	panelIDs[0];	
		}
		if (Array.isArray(panelIDs) === true && panelIDs.length > 1){
			Log.err(this.LOG_UI, "%cMore than one main panel found %o", C.APP_ERROR_STYLE, panelIDs);
			return undefined;	
		} 		
		if (bThrowError === true){
			Log.err(this.LOG_UI, "%cNo panel main panel:%s was found in this panel list %o", C.APP_ERROR_STYLE, this.UI_MAINPAN, panelIDs);
			throw new Error(`No main panel ${this.UI_MAINPAN} was found `);
			}
			
		return undefined;	
		
	},
	
	/**
	 *  Remove all listener
	 */
	
	clean: function(){
		// clean all registredEvents
		aEvents = getListeners(document);
		//console.log("Liste des évenement écoutés %o", aEvents);
		for (let event of aEvents) {
			if(typeof event.name !== 'undefined'){
			var sName = event.name
			var iStartPosition = sName.indexOf('.') || 0; 
			if (sName.includes(this.LISTENER_PREFIX, iStartPosition)){
				removeListener(document, `.${sName}`); // remove all listerner regardless of type ... only don't forget the .
				Log.dbg(this.LOG_UI, "%cListener: %s was removed", C.APP_DEBUG_STYLE, sName);
				}
			}
		}
	},
	
	/**
	 * Display an error in the window panel
	 * 
	 * @params object list of error
	 * @return void
	 */
	
	displayErrors: function(args){
		
		// NOTE STT pas encore génial parce que je ne gère pas les options dans displayErrors : text, partie apres est ce un probleme ???
		
		// default empty
		
		//let {errors} = args;
		
		// deux solution errors est un tableau de valeur 1 ou plus
		// si c'est un tableau de valeur 1 il faut inscrire ça dans le footer
		// si c'est plus grand il faut mettre un popup
		
		if( Array.isArray(args) ){
			// i have more than one error
			
			/*
				aErrors.push({
					code: 'API_BOOK_ERROR',
					description: `Impossible de réserver une session pour ${student.fullname} à ${_r.format('DD-MM-YYYYTHH:mm:ssZ[Z]')} `,
					value: e,
				});	 
			 */
			
			this._setMultiMsgOnFooter({msg:args,btnTxt:'log'});
			return;
		}
		
		
		let { error } = Object.assign({
			error: '&nbsp;'
		}, args);
		
		this._setMsgOnFooter({msg:error});
		return;
		
		
	},
	
	displayMessages: function(args){
		
		// NOTE STT pas encore génial parce que je ne gère pas les options dans displayErrors : text, partie apres est ce un probleme ???
		
		// default empty
		
		//let {errors} = args;
		
		// deux solution errors est un tableau de valeur 1 ou plus
		// si c'est un tableau de valeur 1 il faut inscrire ça dans le footer
		// si c'est plus grand il faut mettre un popup
		
		if( Array.isArray(args) ){
			// i have more than one error
			
			/*
				aErrors.push({
					code: 'API_BOOK_ERROR',
					description: `Impossible de réserver une session pour ${student.fullname} à ${_r.format('DD-MM-YYYYTHH:mm:ssZ[Z]')} `,
					value: e,
				});	 
			 */
			
			this._setMultiMsgOnFooter({msg:args,btnTxt:'log'});
			return;
		}
		
		
		let { type, value } = Object.assign({
			type: 'html',
			value: '&nbsp;'
		}, args);
		
		this._setMsgOnFooter({msg:value});
		return;
		
		
	},
	
	_setMsgOnFooter: function(args){
		
		let {msg, zone } = Object.assign({
			msg: '&nbsp;',
			zone: 1
		}, args);	
		
		// search activePanel
		let sId = this._getPanelId();
		if( typeof sId === 'undefined'){
			Log.err(this.LOG_UI, "%c no id found for panel", C.APP_ERROR_STYLE, panelIDs);
			return;
		}
		let panel = document.getElementById(sId);
		Log.dbg(this.LOG_UI, "%cPanel founded was", C.APP_DEBUG_STYLE, panel);
		
		
		let sSelector = '';
		
		if(zone === 1){
			sSelector = '.jsPanel-ftr-section__item--start';
		}
		if(zone === 2){
			sSelector = '.jsPanel-ftr-section__item--end';
		}
		
		if(sSelector.length === 0){
			Log.err(this.LOG_UI, "%c_setMsgOnFooter impossible to send text: %s to zone: %i", C.APP_ERROR_STYLE, msg, zone);
			return;
		}
		
		panel.footer.querySelector(sSelector).innerHTML = msg;
			
		
	},
	
	_setMultiMsgOnFooter: function(args){
		
		let {msg, btnTxt, zone } = Object.assign({
			msg: [{code:'',description:''}],
			btnTxt: 'Afficher le log',
			zone: 1
		}, args);	
		
		// search activePanel
		let sId = this._getPanelId();
		if( typeof sId === 'undefined'){
			Log.err(this.LOG_UI, "%c no id found for panel", C.APP_ERROR_STYLE, panelIDs);
			return;
		}
		let panel = document.getElementById(sId);
		Log.dbg(this.LOG_UI, "%cPanel founded was", C.APP_DEBUG_STYLE, panel);
		
		
		let sSelector = '';
		
		if (zone === 1){
			sSelector = '.jsPanel-ftr-section__item--start';
		}
		if (zone === 2){
			sSelector = '.jsPanel-ftr-section__item--end';
		}
		
		if (sSelector.length === 0){
			Log.err(this.LOG_UI, "%c_setMultiMsgOnFooter impossible to send text: %s to zone: %i", C.APP_ERROR_STYLE, msg, zone);
			return;
		}
		
		Log.dbg(this.LOG_UI, "%c_setMultiMsgOnFooter ajout du bouton: %s", C.APP_DEBUG_STYLE, btnTxt);
		
		panel.footer.querySelector(sSelector).innerHTML = `<span>Voir les notifications</span><button data-action="displayErrors">${btnTxt}</button>`;
		const self = this;
		let _sTxt='';
		for(_v in msg){
			if(typeof msg[_v].value === 'undefined'){
				_sTxt += `<div>${msg[_v].description} raison: ${msg[_v].value}</div>`;
			}else{
				_sTxt += `<div>${msg[_v].description}</div>`;
			}			
		}
		addListener(document, `click.${this.LISTENER_PREFIX}:footerErrorList`, function (event) {
			
			//Log.dbg(self.LOG_UI, "%cWe are on Listener Named %s, User click on %o", C.APP_DEBUG_STYLE, `${self.LISTENER_PREFIX}:footerErrorList`, event);
			
			if(event.target.dataset && event.target.dataset.action === 'displayErrors'){
				
				//Log.dbg(self.LOG_UI, "%c_setMultiMsgOnFooter ajout d'une modale pour gérer l'erreur sur event:%o", C.APP_DEBUG_STYLE, event);
				//event.preventDefault();
				//event.stopPropagation();console.warn(">>>>> Propagation halted <<<<<");
				
				jsPanel.modal.create({
					theme: 'warning filleddark',
					headerTitle: '<i class="fad fa-exclamation-triangle"></i>Attention',
					content:`<section>${_sTxt}</section>`,
					position: '60 60',
					closeOnBackdrop: false
				});		
			}
		});
			

		
		
	
		
	},
	
	/**
	 * progressSet: update progressbar
	 * 	@param iValue
	 *  @return void
	 * 
	 * note STT if progress was -1 set inactive
	 */

	progressSet: function(iValue){
		const sProgressBarColor = '#7451eb';
		// search activePanel
		let sId = this._getPanelId();
		if( typeof sId === 'undefined'){
			Log.err(this.LOG_UI, "%c no id found for panel", C.APP_ERROR_STYLE, panelIDs);
			return;
		}
		let panel = document.getElementById(sId);
		Log.dbg(this.LOG_UI, "%cPanel founded was", C.APP_DEBUG_STYLE, panel);	
		// if value = -1 reset
		if(iValue == -1){
			panel.progressbar.classList.remove('active');
			panel.progressbar.querySelector('.jsPanel-progressbar-slider').style.width = '0%';
			return;
		}
		// check if active
		if(	panel.progressbar.classList.contains('active') === false){
			panel.progressbar.classList.add('active');
		}
        panel.progressbar.style.background = sProgressBarColor;
        Log.dbg(this.LOG_UI, "%cProgressbar updated to %i\%", C.APP_DEBUG_STYLE, iValue);	
        /* NOTESTT:
        on joue sur la dimension de la barre qui masque le fond donc il 
        faut reduire les 100% de la valeur de progression */
        if(iValue >= 100){
			window.setTimeout(() => {
				panel.progressbar.classList.remove('active');
				panel.progressbar.querySelector('.jsPanel-progressbar-slider').style.width = '0%';
			}, 250);
			return;
		}
		
		panel.progressbar.querySelector('.jsPanel-progressbar-slider').style.width = `${100-iValue}%`;
		
	},
	
	start: function(){
		
		this._bootstrap();
		
		//Event Listeners
		const self = this;
		document.addEventListener('click', function (event) {

			if(event.target.dataset && event.target.dataset.action === 'menu__BookSession'){
					// fire event book session
					Log.dbg(self.LOG_UI, "%cUser click on the menu to book a session", C.APP_DEBUG_STYLE);
					window[APPREF].getEventBroker().emit("clickMenu:bookSession", {});
			}

		});


		
	},
	
	/**
	 * just to avoid repetition
	 * 
	 * 	@param string selector
	 *  @param string id
	 *  @param string css to write
	 * 
	 *  @return void
	 * 
	 * dependencies : render
	 **/
	
	helper_css: function(sSelector,sId,sCss){
		if( document.body.querySelector(`${sSelector} [id="${sId}"]`) === null){ // pas de css
			render(new Style({
				attributes: {type:"text/css", id:sId},
				text: `${sCss}`}),
			 document.body.querySelector(sSelector));
		}	
	},
	
	/*
	 * Launch the js panel component
	 */
	
	windowInit: function(){
		const sAnchor = '#sttPlaceHolder';
		this.helper_css(sAnchor, 'jspanel/default.css', jspanel_css);
		this.helper_css(sAnchor, 'datepicker/theme/default.css', datepicker_theme_default_css);
		this.helper_css(sAnchor, 'ocresa/custom.css', custom_css);
		
		// are we have an panel open ?
		let sPanelID = this._getPanelId();
		Log.dbg(this.LOG_UI,"%cpanelIDs is %o", C.APP_DEBUG_STYLE, sPanelID);
		if (typeof sPanelID !== 'undefined'){
			// render full size if minimized
			if( document.getElementById(sPanelID).status === 'minimized' ){
				Log.dbg(this.LOG_UI,"%cpanelIDs %o is minimized have to normalize it", C.APP_DEBUG_STYLE, sPanelID);
				window.setTimeout(() => {
					document.getElementById(sPanelID).normalize();
				}, 50);	
			}
			return;
		}
		// no panel already open
		Log.dbg(this.LOG_UI,"%cNo panel we have to create one",C.APP_DEBUG_STYLE);
		const self = this;
		jsPanel.create({
			data: this.UI_MAINPAN,
			theme: 'dark',
			headerLogo: '<i class="fad fa-home-heart ml-2"></i>',
			headerTitle: 'OC RESA',
			headerToolbar: '<span class="text-sm">Just some text in optional header toolbar ...</span>',
			/*footerToolbar: '<span class="flex flex-grow">You can have a footer toolbar too</span>'+
						   '<i class="fal fa-clock mr-2"></i><span class="clock">loading ...</span>',*/
					   
			footerToolbar: 
			`
				<section class="jsPanel-ftr-section">
					<div class="jsPanel-ftr-section__item jsPanel-ftr-section__item--start">
						<!-- Content -->&nbsp;
					</div>
				  
					<div class="jsPanel-ftr-section__item jsPanel-ftr-section__item--end">
						<!-- Content --> v 1.0
					</div>
				</section>
			
			`,
			   
			/*
			 note STT
			 * dans l'idéal je mets un flexbox section avec deux sections au moins qui divisent la barre du bas en deux
			 * https://ishadeed.com/article/flexbox-separator/
			 * 
			 */			   
						   
						   
						   
			panelSize: {
				width: () => { return Math.min(800, window.innerWidth*0.9);},
				height: () => { return Math.min(500, window.innerHeight*0.6);}
			},
			animateIn: 'jsPanelFadeIn',
			content: `
			<div class="wrapper">
				<aside class="contacts">Petit message sympa</aside>
				<form id="sample-date">
				<label class="hidden" for="inlineFormDate">Select date</label>
				<svg class="label" width="24" height="24" 
					stroke-width="1.5" viewBox="0 0 24 24" 
					fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M3 10V6C3 4.89543 3.89543 4 5 4H7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M7 2V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				<label style="background-image: --icon-calendar">Test label</label>
				<input type="text"  data-action="chooseDateFrom" id="inlineFormDate" value="" placeholder="selection de la date">
				<div id="form-container" class="manual-width" style="--col: 2 / 3"><!--DATEPICKERCONTAINER--></div>
				<label for="g_sheet_location" class="formbuilder-text-label">Lien Google sheet</label>
				<input type="text" class="form-control" name="g_sheet_location" access="false" id="g_sheet_location">
				<button class="full-width" data-action="bookSession">Réserver</button>
				</form>
			</div>
			`,
			onwindowresize: true,
			callback: function(panel) {
				this.content.style.padding = '10px';
				
			},
			onbeforeclose: [ // utiliser self
				function(panel){self.clean(panel);return true},   // close when any of the function return true ; if nothing was true, never close
			],
			onclosed: function(panel, closedByUser) {
				Log.dbg(self.LOG_UI,"%cPanel with id: %s closed! Check if panel close control was clicked to close the panel: %o",C.APP_DEBUG_STYLE, panel.id, closedByUser );
    }
		});
		
		
		// prise en charge de l'affichage du calendrier
		addListener(document, `click.${this.LISTENER_PREFIX}:mainPan`, function (event) {	
			
			Log.dbg(self.LOG_UI, "%cWe are on Listener Named %s, User click on %o", C.APP_DEBUG_STYLE, `${self.LISTENER_PREFIX}:mainPan`, event);
			
			if(event.target.dataset && event.target.dataset.action === 'chooseDateFrom'){
				
				//event.stopPropagation();console.warn(">>>>> Propagation halted <<<<<");
				
				const oPanelDtPicker = jsPanel.create({
					container: '#form-container',
					//container: '#inlineFormDate',
					contentSize: {
						width: () => {
							//return getComputedStyle(document.forms['sample-date']).width;
							return getComputedStyle(document.querySelector('form [data-action="chooseDateFrom"]')).width;
						},
						height: 225
					},
					headerTitle: 'choisissez une date',
					headerControls: 'closeonly xs',
					theme: 'dark',
					borderRadius: 3,
					position: 'left-top left-bottom 0 2 #form-container',
					callback: (panel) => {
						    jsPanel.datepicker.create(panel.content, {
							// permettra de choisir uniquement à partir de lundi prochain startdate:
							locale: 'fr',
							ondateselect: (container, date, e) => {
								//document.forms['sample-date']['inlineFormDate'].value = moment(date).format('dddd, DD. MMMM YYYY');
								document.querySelector('form [data-action="chooseDateFrom"]').value = dayjs(date).format('DD-MM-YYYY');
								window[APPREF].getEventBroker().emit("changeValue:date", {data:{url:{format:'raw',
									value:document.querySelector('form [data-action="chooseDateFrom"]').value }}});
								oPanelDtPicker.close(); // detruit le panel ... voir si on ne doit rien notifier pour supprimer des events
							}
						});
					}
				});				
			}
			
			if(event.target.dataset && event.target.dataset.action === 'bookSession'){
				event.preventDefault();
				//event.stopPropagation();console.warn(">>>>> Propagation halted <<<<<");
				// fire event book session
				Log.dbg(self.LOG_UI, "%cUser click on a button to book a session", C.APP_DEBUG_STYLE);
				const sValue = document.querySelector('form [data-action="chooseDateFrom"]').value;
				window[APPREF].getEventBroker().emit("clickBtn:bookSession", {data:{date:{format:'raw',value:sValue}}});
			}
			
			//event.stopPropagation();console.warn(">>>>> Propagation halted <<<<<");
			
		});
		
		addListener(document, `change.${this.LISTENER_PREFIX}:mainPan`, function (event) {	
			
			Log.dbg(self.LOG_UI, "%cWe are on Listener Named %s, User change some values on %o", C.APP_DEBUG_STYLE, `${self.LISTENER_PREFIX}:mainPan`, event);
			
			if(event.target.id === 'g_sheet_location'){
				const sValue = event.target.value;
				window[APPREF].getEventBroker().emit("changeValue:dataURL", {data:{url:{format:'raw',value:sValue}}});				
			}
			
		});
		
	}
	
}

export default UI;
