$(document).ready(function(){
    

    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const addTarefaNova = $('#nova-tarefa').val();
        const novoIntem = $('<li></li>');

        $(`${addTarefaNova}`).appendTo(novoIntem);
        $(` <p>${addTarefaNova}</p>
         `).appendTo(novoIntem);

        $(novoIntem).appendTo('ul');
        $('#nova-tarefa').val('');
        $('li').click(function(){
            $("li").css('text-decoration', 'line-through');
        })
       
        
    })

})

