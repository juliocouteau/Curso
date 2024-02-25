$(document).ready(function () {
    var $seuCampoCpf = $("#id_profile_field_cpf");
    var $seuCampoTelefone = $("#id_profile_field_telefone");
    var $seuCampoCep = $("#id_profile_field_cep");
    $seuCampoCpf.mask('000.000.000-00', {reverse: true});
    $seuCampoTelefone.mask('(00)00000-0000');
    $seuCampoCep.mask('00000-000');

    $("#myForm").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: {
                required: "O campo nome é obrigatório."
            },
            email: {
                required: "O campo e-mail é obrigatório.",
                email: "Por favor, insira um e-mail válido."
            },
            telefone: {
                required: "O campo telefone é obrigatório."
            },
            cpf: {
                required: "O campo CPF é obrigatório."
            },
            endereco: {
                required: "O campo endereço é obrigatório."
            },
            cep: {
                required: "O campo CEP é obrigatório."
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });

    $('input[type="text"], input[type="email"]').on('change', function () {
        if ($(this).val() === '') {
            $(this).next('.erro').remove();
            $(this).after('<span class="erro">Este campo é obrigatório.</span>');
        } else {
            $(this).next('.erro').remove();
        }
    });
});