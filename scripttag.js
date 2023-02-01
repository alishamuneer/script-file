console.log('this is me script tag!!!!!!!!')

const form = $('page.contact.rte').parent();
form.prepend('<div>Script Tag Content </div>').css({'background-color':'orange', 'text-align': 'center'})
