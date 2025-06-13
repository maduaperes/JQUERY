$("#botaoTexto").click(function () {
        $("#mensagem").text("Texto alterado!");
    });
       
    $("#esconderImg").click(function () {
        $("#foto").hide();
    });
 
    $("#mostrarImg").click(function () {
        $("#foto").show();
    });
     
    $("#textoHover").mouseenter(function () {
        $("#textoHover").css("background-color", "purple");
    });
     
    $("#textoHover").mouseleave(function () {
        $("#textoHover").css("background-color", "grey");
    });
     
    $("#adicionarltem").click(function () {
        $("#lista").append("<li>Novo item</li>");
    });
     
    $("#formulario").submit(function (event) {
        event.preventDefault();
        var nome = $("#nome").val().trim();
        if (nome === ""){
            $("#erro").show();
        } else {
            $("#erro").hide();
            alert("Formulario enviado com sucesso!");
        }
     
    });
    $("#carregarUsuario").click(function() {
      $.get("https://jsonplaceholder.typicode.com/users/1", function(dados) {
        $("#usuarioNome").text(dados.name);
      });
    });
 
   
    $("#carregarPosts").click(function() {
      $.get("https://jsonplaceholder.typicode.com/posts", function(posts) {
        $("#listaPosts").empty();
        for (let i = 0; i < 5; i++) {
          $("#listaPosts").append("<li>" + posts[i].title + "</li>");
        }
      });
    });
 
   
    $("#formComentario").submit(function(event) {
      event.preventDefault();
      const nome = $("#nomeComentario").val().trim();
      const comentario = $("#textoComentario").val().trim();
 
      if (nome === "" || comentario === "") {
        $("#status").text("Por favor, preencha todos os campos.").css("color", "red");
        return;
      }
 
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/comments",
        type: "POST",
        data: JSON.stringify({
          name: nome,
          body: comentario
        }),
        contentType: "application/json; charset=UTF-8",
        success: function() {
          $("#status").text("Comentário enviado com sucesso!").css("color", "green");
        },
        error: function() {
          $("#status").text("Erro ao enviar comentário.").css("color", "red");
        }
      });
    })
 