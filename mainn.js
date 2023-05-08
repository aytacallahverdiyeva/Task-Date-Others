//! ==============Interview question (5 artiqdir ve onu console-a nece cixardaq yeni gorek)=====================

// let x = [1, 2, 3, 4, 5];
// let y = [1, 2, 3, 4];

//* METHOD ONE
// let result = x.reduce ((prev, next) => {
// 	return prev + next
// })
// let result2 = y.reduce ((prev, next) => {
// 	return prev + next
// })
// console.log(result - result2)

//* METHOD TWO
// for (i=x.length; i<=x.length; i++) {
// 	console.log(i)
// }

//* METHOD THREE
// let result = x.reduce ((prev, next) => {
// 	return prev * next
// })
// let result2 = y.reduce ((prev, next) => {
// 	return prev * next
// })
// console.log(result / result2)
//!=======================================================================================
//* Task (Date-de console-a cixan ardiciliq => ay,gun,il. Defislerin yerine slash olmalidir)
const d = new Date ();

function transformDate () {
	let DateForm = d.toLocaleDateString("az-AZ").split("-").reverse()
	let result
	//*Reversed month and day
	[DateForm[0], DateForm[1]] = [DateForm[1], DateForm[0]];
	//*Joined result with slash
	console.log(DateForm.join('/'))
}
transformDate(d)
