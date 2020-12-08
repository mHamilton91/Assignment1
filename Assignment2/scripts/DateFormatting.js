var DateFormatter = {
    getShortTime : function(date) {
        return date.toLocaleTimeString('defualt', {timeStyle : 'short'})
    },

    getLongTime : function(date) {
        return date.toLocaleTimeString()
    },

    getShortDate : function(date) {
        return date.toLocaleDateString()
    },

    getLongDate : function(date) {
        return date.toLocaleString('default', {dateStyle : 'long'})
    },

    getShortDateTime : function(date) {
        //Fix date
        var dateLong = date.toLocaleString('defualt', {month : 'numeric', day : '2-digit', year : 'numeric'})
        var timeLong = date.toLocaleString('defualt', {timeStyle : 'short'})
        return `${dateLong} ${timeLong}`
    },

    getLongDateTime : function(date) {
        var dateLong = date.toLocaleString('defualt', {dateStyle : 'long'})
        var timeLong = date.toLocaleString('defualt', {timeStyle : 'short'})
        return `${dateLong} ${timeLong}`
    },

    getExtendedDateTime : function(date) {
        var dateFull = date.toLocaleString('defualt', {dateStyle : 'full'})
        return dateFull
    }
}

window.addEventListener('load', function() {
    var currDateTime = document.getElementById("date")
    currDateTime.innerHTML = DateFormatter.getLongDate(new Date)
    currDateTime.style.fontSize = '0.75em'
    currDateTime.style.fontWeight = 'bold'
});

// Console logs for assignment
console.log(DateFormatter.getShortTime(new Date))
console.log(DateFormatter.getLongTime(new Date))
console.log(DateFormatter.getShortDate(new Date))
console.log(DateFormatter.getLongDate(new Date))
console.log(DateFormatter.getShortDateTime(new Date))
console.log(DateFormatter.getLongDateTime(new Date))
console.log(DateFormatter.getExtendedDateTime(new Date))