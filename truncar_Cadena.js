function truncateString(str, num) {

    if (str.length > num) {
        //Agrega el código que hace falta
        str += "...";
    }
    return str;
}

module.exports = truncateString;


