function changeBack(x){
    console.log(x.value)

    var body=document.getElementById("body")
    body.style.backgroundColor=x.value

    // var lyrics=document.getElementById("textIn")
    // lyrics.style.color="white"
}

function calculate(){
    let name=document.getElementById("name").value;
    let note1=parseFloat(document.getElementById("note1").value);
    let note2=parseFloat(document.getElementById("note2").value);

    let note3=(note1+note2)/2;
    let porcNote=note3*0.4;
    let final=((note1*0.3)+(note2*0.3)+porcNote);

    if (final >= 4){
        document.getElementById("result").innerHTML = name+", Ganó la materia y además será parte del cuadro de honor, su promedio fue "+final
        document.getElementById('result').style.color = 'blue';

    }else if (final >= 3.5 && final <= 3.9){
        document.getElementById("result").innerHTML = name+", Ganó la materia con un promedio de "+final
        document.getElementById('result').style.color = 'green';
    
    }else if (final >= 2 && final <= 3.4){
        document.getElementById("result").innerHTML = name+", Perdio la materia pero la puede recuperar, su promedio fue "+final
        document.getElementById('result').style.color = 'black';
    
    }else if (final <= 1.9){
        document.getElementById("result").innerHTML = name+", Muy paila, su promedio fue "+final
        document.getElementById('result').style.color = 'red';
    }

}
function honor(){
    document.getElementById("textTwo").innerHTML="Para ser cuadro de honor tiene que tener un promedio superior a 4"
    // document.getElementById("textTwo").style.fontWeight="700"
}

function win(){
    document.getElementById("textTwo").innerHTML="Para ganar la materia debe tener un promedio superior o igual a 3.5"
    // document.getElementById("textTwo").style.fontWeight="700"
}

function recuperar(){
    document.getElementById("textTwo").innerHTML="Para tener posibilidades de recuperar debe tener un promedio superior o igual a 2"
    // document.getElementById("textTwo").style.fontWeight="700"
}

function lose(){
    document.getElementById("textTwo").innerHTML="Debe de sacar un promedio inferior a 2 para perder la materia"
    // document.getElementById("textTwo").style.fontWeight="700"
}