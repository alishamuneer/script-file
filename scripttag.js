console.log('this is me script tag!!!!!!!!')

const form = $('div').parent(".contact-form");
form.prepend('<div>Script Tag Content </div>').css({'background-color':'orange', 'text-align': 'center'})
