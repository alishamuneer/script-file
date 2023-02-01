console.log('this is me script tag!!!!!!!!')

const form = $('div.contact-form').parent();
form.prepend('<div>Hello this is coming from the public folder </div>').css({'background-color':'orange', 'text-align': 'center'})
