function one()
{
  document.querySelector("footer").addEventListener("click", function(){ 
    console.log("clique")
  })
}

function oneBis()
{
  let count = 0
  document.querySelector("footer").addEventListener("click", function(){ 
    count++
    console.log("clique " + count)
  })
}

function two()
{
  toggler = document.getElementById("navbarHeader")
  document.querySelector("button.navbar-toggler").addEventListener("click", function(){
      toggler.classList.toggle("collapse")
  })
}

function tree()
{
  edit_first_card = document.querySelector(".card > .card-body > div > .btn-group > button.btn-outline-secondary")
  edit_first_card.addEventListener("click", function()
  {
    document.querySelector(".card > .card-body > .card-text").classList.add("text-danger")
  })
}

function four()
{
  edit_second_card = document.querySelector(".col-md-4:nth-of-type(2) > .card > .card-body > div > .btn-group > button.btn-outline-secondary")
  edit_second_card.addEventListener("click", function(){
    card_text = document.querySelector(".col-md-4:nth-of-type(2) > .card > .card-body > .card-text")
    card_text.style.color = card_text.style.color === 'green' ? '' : 'green'
  })
}

function five()
{
  header = document.querySelector("header")
  link_cdn_bootstrap_to_delete = document.head.querySelector("link")
  header.addEventListener("dblclick", function(){
    link_cdn_bootstrap_to_delete.disabled = link_cdn_bootstrap_to_delete.disabled === false ?  true : false
  })
}

function six()
{
  document.querySelectorAll(".card").forEach(card => {
    card.querySelector(".card-body > div > .btn-group > button.btn-outline-secondary").addEventListener('pointerenter', function(){
      setTimeout(function(){ 
        card_text = card.querySelector(".card-text")
        card_text.style.visibility = card_text.style.visibility === "hidden" ? "visible" : "hidden"
        card_img = card.querySelector("img")
        card_img.style.width = card_img.style.width == "" ? "20%" : ""
         }, 1000);
    });
  })

}

function seven()
{
  document.querySelector("section.jumbotron > .container > p > a:last-of-type").addEventListener("click", function(){

    last_card_to_move = document.querySelector(".col-md-4:last-of-type")
    first_card_reference = document.querySelector(".col-md-4")
    document.querySelector(".album > .container > .row").insertBefore(last_card_to_move, first_card_reference)
  })
}

function eight()
{
  link = document.querySelector("section.jumbotron > .container > p > a")
  link.addEventListener("click", function(e){
    e.preventDefault()
    first_card_to_move = document.querySelector(".col-md-4")
    document.querySelector(".album > .container > .row").appendChild(first_card_to_move)
  })
}

function nine()
{
  let str = "initialize"
  album = document.querySelector(".album > .container")
  album_row = album.querySelector(".row")
  document.querySelector(".navbar ").addEventListener('mouseup', function(ev){
      selection = window.getSelection().toString()
      if (selection.localeCompare("JS & Events\n") == 0)
      {
        console.log(selection)
        document.addEventListener("keydown", _listener = function(e){
          switch(e.isComposing || e.key) {
            case 'a' :
              album.classList.add("d-flex")
              album.classList.remove(str)
              album.classList.add("justify-content-start")
              str = "justify-content-start"
              console.log(str)
              album_row.classList.add("col-md-4")
              break
            case 'y' :
              album.classList.add("d-flex")
              album = document.querySelector(".album > .container")
              album.classList.remove(str)
              album.classList.add("justify-content-center")
              str = "justify-content-center"
              console.log(str)
              album_row.classList.add("col-md-4")
              break
            case 'p' :
              album.classList.add("d-flex")
              album = document.querySelector(".album > .container")
              album.classList.remove(str)
              album.classList.add("justify-content-end")
              str = "justify-content-end"
              console.log(str)
              album_row.classList.add("col-md-4")
              break;
            case 'b' :
              album.classList.add("d-flex")
              album.classList.remove(str)
              album.classList.remove("d-flex")
              album_row.classList.remove("col-md-4")
              break;
          }
          document.removeEventListener("keydown", _listener)
        })
      }
    })
}

oneBis()
two()
tree()
four()
five()
six()
seven()
eight()
nine()