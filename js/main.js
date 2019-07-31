$('#addSkill').on('click', function() {
    input = document.querySelector('input').value;
    let $li = $(`<li><button>X</button>${input}</li>`); 
    $('ul').append($li);
    $('input').val('');
})

$('ul').on('click', 'button', function() {
    $(this).closest('li').remove();
})