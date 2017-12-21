/* isNumberKey
   Only allows NUMBERS to be keyed into a text field.
   @environment ALL
   @param evt - The specified EVENT that happens on the element.
   @return True if number, false otherwise.
*/
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    
    /*
        https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

    
    Key    |Code 
    ------------
    delete | 46
    0 	   | 48     
    9 	   | 57
     */

    if (charCode > 46 && (charCode < 48 || charCode > 57))
        return false;

    return true;
} // isNumberKey
