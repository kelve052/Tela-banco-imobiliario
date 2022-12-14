const botao_adicionar = document.getElementById('botao')
const foto = document.getElementsByClassName('div_perfils')
const nome = document.getElementById('nome')
let foto_escolhida = 9
const section = document.getElementById('section')
const icone_config =document.getElementById('icone_config')
let contador = 0
const maim = document.getElementById('principal')
let lista_nomes = []

const p_participantes = document.createElement('p')
p_participantes.id = 'participantes'

function apagar(p){
    alert(p)
}

function tirar_borda(){
    foto[0].style.border = ''
    foto[1].style.border = ''
    foto[2].style.border = ''
    foto[3].style.border = ''
    foto[4].style.border = ''
    foto[5].style.border = ''
}


function escolher(p){
    foto_escolhida = p
     tirar_borda()
     foto[p].style.border = '3px solid #fff'
}
function resetar(){
    section.innerHTML = ''
    section.innerHTML = '<input type="button" class="btn1" id="botao_resetar_sumido" value="Resetar" onclick="resetar()">'
    const botao_resetar = document.getElementsByClassName('btn1')[0]
    contador = 0
    icone_config.src = 'imgs/icone_setings.png'
    p_participantes.innerText = ''
    lista_nomes = []
}
function apagar(p) {
    const p_nome_apagar = document.getElementById(`p_nome${p}`)
    for (c=0;c<=lista_nomes.length;c++){
        if (p_nome_apagar.textContent == lista_nomes[c]){
            lista_nomes.splice(lista_nomes[c], 1)
        }
    }
    document.getElementById(`div_add${p}`).remove()
}
section.innerHTML = '<input type="button" class="btn1" id="botao_resetar_sumido" value="Resetar" onclick="resetar()">'
const botao_resetar = document.getElementsByClassName('btn1')[0]
maim.insertAdjacentElement("beforeend", p_participantes)

botao_adicionar.addEventListener('click', adicionar)
function adicionar(){
    const botao_resetar = document.getElementsByClassName('btn1')[0]
    p_participantes.id = 'participantes'
    const div_add = document.createElement('div')
    div_add.className = 'div_add'
    const p_nome = document.createElement('p')
    p_nome.innerText = `${nome.value}`
    p_nome.className = 'p_nome'
    const trash = document.createElement('img')
    trash.src = 'imgs/icone_trash.png'

    let existe_nome = false
    for (c=0;c<=lista_nomes.length;c++){
        if (nome.value == lista_nomes[c]){
            existe_nome = true
            console.log('nome repetido')
            p_participantes.innerText = `O nome ${nome.value} ja existe!`
            p_participantes.id = 'participantes_vermelho'
        }
    }






    if (nome.value != '' && foto_escolhida != 9 && existe_nome != true){
        icone_config.src = 'imgs/icone_play.png'
        switch (foto_escolhida){
            case 0:
                p_participantes.innerText = 'Participantes'
                div_add.id = `div_add${contador}`
                p_nome.id = `p_nome${contador}`
                section.insertAdjacentElement('afterbegin', div_add)
                div_add.innerHTML = '<div class="div_perfils" id="div_perfils1"><img id="perfil1" class="perfils_imgs" src="imgs/perfils/dinosssauro_pescosso_longo.png" alt=""></div>'
                div_add.insertAdjacentElement('beforeend', p_nome)
                div_add.innerHTML += `<img src="imgs/icone_trash.png" class="trash" onclick="apagar(${contador})" alt="">`
                contador += 1
                lista_nomes.push(nome.value)
        }
        switch (foto_escolhida){
            case 1:
                p_participantes.innerText = 'Participantes'
                div_add.id = `div_add${contador}`
                p_nome.id = `p_nome${contador}`
                section.insertAdjacentElement('afterbegin', div_add)
                div_add.innerHTML = '<div class="div_perfils" id="div_perfils2"><img id="perfil2" class="perfils_imgs" src="imgs/perfils/jacaré.png" alt=""></div>'
                div_add.insertAdjacentElement('beforeend', p_nome)
                div_add.innerHTML += `<img src="imgs/icone_trash.png" class="trash" onclick="apagar(${contador})" alt="">`
                contador += 1
                lista_nomes.push(nome.value)
        }
        switch (foto_escolhida){
            case 2:
                p_participantes.innerText = 'Participantes'
                div_add.id = `div_add${contador}`
                p_nome.id = `p_nome${contador}`
                section.insertAdjacentElement('afterbegin', div_add)
                div_add.innerHTML = '<div class="div_perfils" id="div_perfils3"><img id="perfil3" class="perfils_imgs" src="imgs/perfils/dino.png" alt=""></div>'
                div_add.insertAdjacentElement('beforeend', p_nome)
                div_add.innerHTML += `<img src="imgs/icone_trash.png" class="trash" onclick="apagar(${contador})" alt="">`
                contador += 1
                lista_nomes.push(nome.value)
        }
        switch (foto_escolhida){
            case 3:
                p_participantes.innerText = 'Participantes'
                div_add.id = `div_add${contador}`
                p_nome.id = `p_nome${contador}`
                section.insertAdjacentElement('afterbegin', div_add)
                div_add.innerHTML = '<div class="div_perfils" id="div_perfils4"><img id="perfil4" class="perfils_imgs" src="imgs/perfils/gato.png" alt=""></div>'
                div_add.insertAdjacentElement('beforeend', p_nome)
                div_add.innerHTML += `<img src="imgs/icone_trash.png" class="trash" onclick="apagar(${contador})" alt="">`
                contador += 1
                lista_nomes.push(nome.value)
        }
        switch (foto_escolhida){
            case 4:
                p_participantes.innerText = 'Participantes'
                div_add.id = `div_add${contador}`
                p_nome.id = `p_nome${contador}`
                section.insertAdjacentElement('afterbegin', div_add)
                div_add.innerHTML = '<div class="div_perfils" id="div_perfils5"><img id="perfil5" class="perfils_imgs" src="imgs/perfils/golfinho.png" alt=""></div>'
                div_add.insertAdjacentElement('beforeend', p_nome)
                div_add.innerHTML += `<img src="imgs/icone_trash.png" class="trash" onclick="apagar(${contador})" alt="">`
                contador += 1
                lista_nomes.push(nome.value)
        }
        switch (foto_escolhida){
            case 5:
                p_participantes.innerText = 'Participantes'
                div_add.id = `div_add${contador}`
                p_nome.id = `p_nome${contador}`
                section.insertAdjacentElement('afterbegin', div_add)
                div_add.innerHTML = '<div class="div_perfils" id="div_perfils6"><img id="perfil6" class="perfils_imgs" src="imgs/perfils/coelho.png" alt=""></div>'
                div_add.insertAdjacentElement('beforeend', p_nome)
                div_add.innerHTML += `<img src="imgs/icone_trash.png" class="trash" onclick="apagar(${contador})" alt="">`
                contador += 1
                lista_nomes.push(nome.value)
        }
        botao_resetar.id = 'botao_resetar'
    }else{
        if (existe_nome != true){
            p_participantes.innerText = 'Para adicionar é nessesario um nome e uma foto!'
        p_participantes.id = 'participantes_vermelho'
        }
    }
    nome.focus()
}