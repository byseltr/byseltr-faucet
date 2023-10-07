var time = new Date()
console.log(Date.parse(time))

// const timestamp = '1696288154000'
// var time = timeAgo(timestamp)
// console.log(time)


// function timeAgo(timestamp) {
// 	// let ago = Date.parse(timestamp)
// 	let now = new Date()
// 	let difference = Date.parse(now) - timestamp
// 	var seconds = difference / 1000
// 	var minutes = Math.round(seconds / 60)
// 	var hours = Math.round(seconds / 3600)
// 	var days = Math.round(seconds / 86400)
// 	var weeks = Math.round(seconds / 604800)
// 	var months = Math.round(seconds / 2629440)
// 	var years = Math.round(seconds / 31553280)

// 	const ago = (s, w) => {
// 		if (s == 1) {
// 			return `a ${w} ago`
// 		} else {
// 			return `${s} ${w} ago`
// 		}
// 	}

// 	// logical
// 	if (seconds <= 60) {
// 		return 'a seconds ago'
// 	} else if (minutes <= 60) {
// 		return ago(minutes, 'minute')
// 	} else if (hours <= 24) {
// 		return ago(hours, 'hour')
// 	} else if (days <= 7) {
// 		return ago(days, 'day')
// 	} else if (weeks <= 4.3) {
// 		return ago(weeks, 'week')
// 	} else if (months <= 12) {
// 		return ago(months, 'month')
// 	} else if (years <= 1) {
// 		return ago(years, 'year')
// 	}
// }