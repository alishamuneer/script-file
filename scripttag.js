console.log('this is me script tag!!!!!!!!')

const form = $('.script-tag');
form.prepend('<div>Script Tag div</div>').css({'background-color':'orange', 'text-align': 'center'})

$('#submit').click(function()
{
    $.ajax({
        url: 'https://f596-110-93-205-130.ap.ngrok.io/send',
        type:'POST',
        data:
        {
            name: name,
  company: company,
  email: email,
  phone: phone,
  message: message
        },
        success: function(msg)
        {
            alert('UserName Sent');
        }               
    });
}
