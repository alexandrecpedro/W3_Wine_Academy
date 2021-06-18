$(document).ready(function() {

    function limpa_formulário_cep() {        
        $("#endereco").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
        //$("#logradouro").val("");
    }
        
    $("#cep").blur(function() {        
        var cep = $(this).val().replace(/\D/g, '');
        
        if (cep != "") {            
            var validacep = /^[0-9]{8}$/;            
            if(validacep.test(cep)) {                
                $("#endereco").val("...");
                $("#bairro").val("...");
                $("#cidade").val("...");
                $("#uf").val("...");
                //$("#logradouro").val("...");
                                
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
                    if (!("erro" in dados)) {                        
                        $("#endereco").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                        //$("#logradouro").val(dados.ibge);
                    } 
                    else {                        
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } 
            else {                
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } 
        else {            
            limpa_formulário_cep();
        }
    });
});

