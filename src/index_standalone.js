/**
 * Main entry point
 **/
 
import * as C 	from './constants.js';
import App 		from './app.js';
import Core 	from './core.js';
// vendors
import Log		from './vendor/log/log.js';

// --------------------- Go

// set global debug level
Log.setFilterLevel(Log.LEVEL_VRB);//Log.setFilterLevel(Log.LEVEL_DBG);


// Extends APP with functions
//const f_App = AppU(App);

// extension
var libraryExt = {
	_libs: [],
	_addLib: function _addLib(sLibraryName, oPointer){
		this._libs.push({id:sLibraryName,ptr:oPointer});
	},
	getLib: function getLib(sLibraryName){
		var _o = this._libs.find(o => o.id == sLibraryName);
		if (_o === undefined){ throw `Library ${sLibraryName} not found.`; }
		return _o.ptr;
	}
}

const MyApp = Object.assign(Object.create(App), {},
	Core(), // core must be instancied
	libraryExt,
);

//// Go
const _APPREF=APPREF; // populated at compilation
window[_APPREF] = MyApp;
if(MyApp.supports() == true){
	Log.dbg('ENTRYPOINT', `%cApplication ${_APPREF} start()`, C.APP_DEBUG_STYLE);
	MyApp.start();
} else { console.error('browser/environment too old for this application'); }


