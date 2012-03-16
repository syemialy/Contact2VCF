/*
 * Utility methods
 * 
 * Sergei.Emelianov trigodda.com
 */
/**
 * Performs set of regex comparisions to unify format of the phone number for  international use
 * 
 * @param phoneStr
 * @returns
 */
function phoneFormatter(phoneStr) {
	
	var US10_FORMAT = new RegExp("^.?1?\D?(\\d{3})\D?(\\d{3})\D?(\\d{4})$","i" );
	var formattedNumber;
	if ( US10_FORMAT.test(phoneStr) == true ) {
		//formattedNumber = "match" + phoneStr;
		formattedNumber = phoneStr.replace( US10_FORMAT ,"+1$1$2$3");
	} else {
		formattedNumber = phoneStr.replace (/[^\+\d]/gi,'');

	}
	return formattedNumber;
}