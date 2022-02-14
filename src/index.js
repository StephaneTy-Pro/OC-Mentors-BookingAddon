/**
 * Main entry point
 **/
 
import * as C 				from './constants.js';
import App 					from './app.js';
import Core 				from './core.js';

// vendors
import Log					from './vendor/log/log.js';
import { withHookBefore } 	from './vendor/runtime-hooks/hooks.js'


// --------------------- Go

// set global debug level
Log.setFilterLevel(Log.LEVEL_VRB);//Log.setFilterLevel(Log.LEVEL_DBG);

// Extends APP with functions
//const f_App = AppU(App);

const MyApp = Object.assign(
	Object.create(App),
	{},
	// all components
	Core(),
	);
	
function implement_core(oApplication) {
	const LOG_ENTRYPOINT ='ENTRYPOINT';
	/*let fn = oApplication.start;
	oApplication.start = () => {
		Log.dbg(LOG_ENTRYPOINT, "%cDecorated application...start()", f_App.defaultConsole.LogStyle);
		//Log.dbg(LOG_ENTRYPOINT, "%cDecorated application...start()", C.APP_DEBUG_STYLE);
		fn();
  };*/
  
	oApplication.start = withHookBefore(oApplication.start, () => {
		Log.dbg(LOG_ENTRYPOINT, "%cDecorated application...start()", C.APP_DEBUG_STYLE);
		}
	)
}
implement_core( MyApp );

//// Go

// has we could be in a tamperenvironnement

const _APPREF=APPREF; // populated at compilation

window[_APPREF] = MyApp;

// tampermonkey only
if ( typeof unsafeWindow !== 'undefined' ){
	unsafeWindow[_APPREF] = MyApp;
} 

if(MyApp.supports() == true){
	Log.dbg('ENTRYPOINT', `%cApplication ${_APPREF} start()`, C.APP_DEBUG_STYLE);
	MyApp.start();
} else { console.error('browser/environment too old for this application'); }
