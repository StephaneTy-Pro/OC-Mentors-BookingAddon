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
//import './vendor/jsPanel4/es6module/extensions/modal/jspanel.modal.min.js';
//import './vendor/jsPanel4/es6module/extensions/contextmenu/jspanel.contextmenu.min.js';
//import './vendor/jsPanel4/es6module/extensions/tooltip/jspanel.tooltip.min.js';
//import './vendor/jsPanel4/es6module/extensions/layout/jspanel.layout.min.js';
//import './vendor/jsPanel4/es6module/extensions/dock/jspanel.dock.min.js';

import { Button, Style, render } from "./vendor/object-dom/src/object-dom.ts";

import jspanel_css from './json/jspanel.css.txt';
import datepicker_theme_default_css from './json/datepicker_theme_default.css.txt';

import dayjs 				from './vendor/dayjs/src/index.js';
import dayjs_plugin_localeData 				    from './vendor/dayjs/jsdelivr/plugin/localeData.js';
//import dayjs_plugin_advancedFormat 				from './vendor/dayjs/jsdelivr/plugin/advancedFormat.js';
import dayjs_plugin_customParseFormat 				from './vendor/dayjs/jsdelivr/plugin/customParseFormat.js';
import dayjs_plugin_utc 							from './vendor/dayjs/jsdelivr/plugin/utc.js';



// pour le moment version bourrin
// 

const UI = {
	
	LOG_UI: 'UI',
	
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
		
		
		
		
		
		// injecter le css
		const sCss = `
.reset {
  display: flex;
  justify-content: center;
}

.reset > .btn {
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 10px;
  background-color: cadetblue;
  font-size: 1rem;
  font-weight: bold;
}

.menu {
  background-color: rgb(214, 210, 210);
  width: 7rem;
  z-index:1000;
}

.menu > ul {
  text-align: center;
  list-style: none;
}

.menu > ul > li {
  padding: 0.2rem;
  margin-top: 0.2rem;
}

.menu > ul > li:hover {
  background-color: gainsboro;
  font-weight: bold;
}

.menu-off {
  display: none;
}		
		`;
		var oSS = document.createElement("style")
		oSS.type = "text/css"
		oSS.innerText = sCss;
		insertAfter(oSS, document.querySelector('body').lastChild);		
		sEl = 
		`
    <div id="menu-div" class="menu">
      <ul>
        <li data-action="menu__BookSession">Book Session</li>
        <li>Blue</li>
        <li>Orange</li>
        <li>Pink</li>
        <li>Purple</li>
        <li>Green</li>
      </ul>
    </div>		
		`;
		const fragment = document.createRange().createContextualFragment(sEl);
		// injecter le dom
		insertAfter(fragment, document.querySelector('body').lastChild);
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
	
	/*
	 * Launch the js panel component
	 */
	
	windowInit: function(){
		const sAnchor = document.getElementById('sttPlaceHolder');
		
		if( document.body.querySelector('#sttPlaceHolder [id="jspanel/default.css"]') === null){ // pas de css
			render(new Style({
				attributes: {type:"text/css", id:'jspaneldefault.css'},
				text: `${jspanel_css}`})
			, document.body.querySelector("#sttPlaceHolder"));
		}	
		
		if( document.body.querySelector('#sttPlaceHolder [id="datepicker/theme/default.css"]') === null){ // pas de css
			render(new Style({
				attributes: {type:"text/css", id:'datepicker/theme/default.css'},
				text: `${datepicker_theme_default_css}`}),
			 document.body.querySelector("#sttPlaceHolder"));
		}
		jsPanel.create({
			theme: 'dark',
			headerLogo: '<i class="fad fa-home-heart ml-2"></i>',
			headerTitle: 'OC RESA',
			headerToolbar: '<span class="text-sm">Just some text in optional header toolbar ...</span>',
			footerToolbar: '<span class="flex flex-grow">You can have a footer toolbar too</span>'+
						   '<i class="fal fa-clock mr-2"></i><span class="clock">loading ...</span>',
			panelSize: {
				width: () => { return Math.min(800, window.innerWidth*0.9);},
				height: () => { return Math.min(500, window.innerHeight*0.6);}
			},
			animateIn: 'jsPanelFadeIn',
			content: `
			<div class="wrapper">
			<div class="contacts">Petit message sympa</div>
			<div class="form">
			<div id="form-container" class="flex mt-4 relative">
			<form id="sample-date" class="mx-4 form-inline">
				<div class="flex items-center border rounded bg-white">
					<label class="hidden" for="inlineFormDate">Select date</label>
					<div class="px-2 py-1 bg-gray-200">
					<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M3 10V6C3 4.89543 3.89543 4 5 4H7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M7 2V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
					</div>
					<input type="text" class="ml-0 px-2 py-1 leading-normal rounded-r required" data-action="chooseDateFrom" id="inlineFormDate" value="" placeholder="select date">

		<div class="formbuilder-text form-group field-text-1644246938537">
			<label for="text-1644246938537" class="formbuilder-text-label">Lien Google sheet</label>
			<input type="text" class="form-control" name="g_sheet_location" access="false" id="g_sheet_location">
		</div>
				</div>
			
			<p class="full-width"><button data-action="bookSession">Réserver</button></p>
			</form>
		</div>
		</div>
		</div>
			`,
			onwindowresize: true,
			callback: function(panel) {
				this.content.style.padding = '10px';
				
			}
		});
		
		
 		
		
		const self = this;
		document.addEventListener('click', function (event) {
			
			Log.dbg(self.LOG_UI, "%cUser click on %o", C.APP_DEBUG_STYLE, event);
			
			if(event.target.dataset && event.target.dataset.action === 'chooseDateFrom'){
				jsPanel.create({
					container: '#form-container',
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
					position: 'left-top left-bottom 0 2 #sample-date',
					callback: (panel) => {
						jsPanel.datepicker.create(panel.content, {
							// permettra de choisir uniquement à partir de lundi prochain startdate:
							locale: 'fr',
							ondateselect: (container, date, e) => {
								//document.forms['sample-date']['inlineFormDate'].value = moment(date).format('dddd, DD. MMMM YYYY');
								document.querySelector('form [data-action="chooseDateFrom"]').value = dayjs(date).format('DD-MM-YYYY');
							}
						});
					}
				});				
			}
			
			if(event.target.dataset && event.target.dataset.action === 'bookSession'){
				event.preventDefault();
				// fire event book session
				Log.dbg(self.LOG_UI, "%cUser click on a button to book a session", C.APP_DEBUG_STYLE);
				const sValue = document.querySelector('form [data-action="chooseDateFrom"]').value;
				window[APPREF].getEventBroker().emit("clickBtn:bookSession", {data:{date:{format:'raw',value:sValue}}});
				
			}
			
		});
		
	}
	
}

export default UI;
