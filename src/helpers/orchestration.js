/**
 * Des fonction qui gère l'orchestration de tâches
 */

//const wait = ms => new Promise(r => setTimeout(r, ms));

// attente de la définition d'un élement
// tres intéressant https://codereview.stackexchange.com/questions/217199/retry-a-promise-resolution-n-times-with-a-delay-between-the-attempts
// references annexes
//  https://stackoverflow.com/questions/38213668/promise-retry-design-patterns/38225011
//  https://stackoverflow.com/questions/7307983/while-variable-is-not-defined-wait
//  https://codepen.io/eanbowman/pen/jxqKjJ
const MAX_TRYS = 10;
const TRY_TIMEOUT = 500;

export async function tryNTimes(toTry, count = MAX_TRYS) {
	if (count > 0) {
		const result = await toTry().catch(e => e);
		// note STT améliorer la récuperation des erreurs avec un objet result
		if (result === "Error") { return await tryNTimes(toTry, count - 1) }
		return result
	}
	return `Tried ${count} times and failed`;
}
//NOTESTT cette fonction est mal classée
/* sample to check a variable
export function ensureVarIsSet(mVar) {
	return new Promise((ok, fail) => {
		setTimeout(() => {
			window.hasOwnProperty(mVar) ? ok("OK!") : fail("Error");
		}, TRY_TIMEOUT);
	});
}
*/
