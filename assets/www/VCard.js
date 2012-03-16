/*
 * VCard class file
 * 
 *  Sergei.Emelianov trigodda.com
 */

/**
 * Constructs instance of vCard type
 * @param contact
 * @returns
 */
function VCard(contact) {

	//methods
	/**
	 * Performs conversion of VCard object to a vCard v2.1 string 
	 * @returns {String}
	 */
	function toVCard21() {
		var cardTemplate = "BEGIN:VCARD\n"+
		"VERSION:2.1\n"+
		"N:" + this.N + "\n"+
		"FN:" + this.FN + "\n"+
		/*"ORG:Bubba Gump Shrimp Co.\n"+
	    	//"TITLE:Shrimp Man\n"+
	    	/"TEL;WORK;VOICE:(111) 555-1212\n"+
		 */
		"TEL;HOME;VOICE:" + this.TEL + "\n"+
		/*"ADR;WORK:;;100 Waters Edge;Baytown;LA;30314;United States of America\n"+
	    	//"LABEL;WORK;ENCODING=QUOTED-PRINTABLE:100 Waters Edge=0D=0ABaytown, LA 30314=0D=0AUnited States of America\n"+
	    	//"ADR;HOME:;;42 Plantation St.;Baytown;LA;30314;United States of America\n"+
	    	//"LABEL;HOME;ENCODING=QUOTED-PRINTABLE:42 Plantation St.=0D=0ABaytown, LA 30314=0D=0AUnited States of America\n"+
		 */
		"EMAIL;PREF;INTERNET:" + (this.EMAIL ? this.EMAIL : '') + "\n"+
		"REV:" + this.REV + "\n"+
		"END:VCARD\n";

		return cardTemplate;
	}
	
	//fields

	this.UID = contact.id;

	if ( contact.phoneNumbers != null && contact.phoneNumbers.length == 1 )
		this.TEL = phoneFormatter( contact.phoneNumbers[0].value ); //format phone number

	if ( contact.emails != null)
		this.EMAIL = contact.emails.length;
		
	this.FN = contact.displayName;
	this.N = this.FN.replace(/\s/g,";") ;

	//some javascript date manipulations
	var d = new Date();
	var yyyy = d.getUTCFullYear();
	var mm = (d.getUTCMonth()+1);
	var dd = d.getUTCDate();
	var HH = d.getUTCHours();
	var MM = d.getUTCMinutes();
	var SS = d.getUTCSeconds();
	this.REV = "".concat(yyyy,mm,dd,'T',HH,MM,SS,'Z');

	this.toVCard21 = toVCard21;

}