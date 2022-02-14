/**
 * Main module for any application
 * 
 * 
 * NOTESTT
 *  importe des variables par défaut, les mélange à l'objet courant, et les récupère dans la création de l'objet
 *  crée lors de l'export par défaut
 */
 
import { Defaults, Globals } from './services/settings.js'

var App = options => {
	
	const {
		globalVersion,
		globalLocale
	} = App
	
	return {
		getVersion() { return this.version || globalVersion }, 
		getLocale() { return this.locale || globalLocale }
	}
}

//export default Object.assign(App, Defaults, Globals, Static);
export default Object.assign(App, Defaults, Globals);
