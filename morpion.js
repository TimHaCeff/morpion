var win = false;

$(function (){
    let i = 0;
    var first_ligne;
    var middle_ligne;
    var last_ligne;
    var vertical_first_Ligne;
    var vertical_middle_ligne;
    var vertical_last_ligne;
    var first_diagonal;
    var second_diagonal;
    
    $("td").addClass("bases");
    
    //Ajout et parametrage d bouton pour reload la page
    
    var button = document.createElement("button");
    button.textContent="Restart";
    document.body.append(button);
    
    $("td").mouseover(function(){       //Si la souris est dessus(hover)
        if(i % 2 == 0){
           $(this).css({"background-color":"green","opacity":"0.5"}) 
        }else{
            $(this).css({"background-color":"red","opacity":"0.5"})
        }
        
        $(this).mouseleave(function(){  //si souris n'est pas hover
            $(this).css({"background-color":"transparent", "opacity":"1"})
        })
        if(win == true && $(this).attr("class") == "bases") //si la classe n'est pas X 0
        {
            $(this).css({"background-image":"url(\"./no.png\")", "opacity":"100%"});
            
            $(this).mouseleave(function(){
               $(this).css({"background-image":"none"})  
            })
        }
    })
    
    $("button").click(function(){
        location.reload(true);
    })
    $("td").click(function(){
        if (win == false)//if win
        {
            if($(this).attr("class") == "bases")    //si class de td est egal a base
            {
                i++;    //Commence a 1 donc cercle
                if(i % 2 == 0)
                {
                    $(this).toggleClass("symbole_0").removeClass("bases");
                }
                else
                {
                    $(this).toggleClass("symbole_1").removeClass("bases");
                }

                if(i >= 5)  //Vérifie si joueur a gagner
                {
                    var ligne = "";
                    $("td").each(function(key_colonne, value_colonne){  //parcour les td a l'aide d'une each

                        if($(value_colonne).attr("class") == "symbole_0")
                        {
                            ligne = ligne + "O";
                        }else if($(value_colonne).attr("class") == "symbole_1")
                        {
                            ligne = ligne + "X";
                        }else
                        {
                            ligne = ligne + "R"
                        }

                        //Récupère la valeur des ligne

                        first_ligne = ligne.substring(0,3); 
                        middle_ligne = ligne.substring(3,6);
                        last_ligne = ligne.substring(6,9);

                        //Récupère la valeur des colonnes

                        vertical_first_Ligne = ligne.substring(0,1) + ligne.substring(3,4) + ligne.substring(6,7);
                        vertical_middle_ligne = ligne.substring(1,2) + ligne.substring(4,5) + ligne.substring(7,8);
                        vertical_last_ligne = ligne.substring(2,3) + ligne.substring(5,6) + ligne.substring(8,9);

                        //Récupère la valeur des diagonales

                        first_diagonal = ligne.substring(0,1) + ligne.substring(4,5) + ligne.substring(8,9);
                        second_diagonal = ligne.substring(2,3) + ligne.substring(4,5) + ligne.substring(6,7);

                    })

                    //Test si il'y a une vistoire

                    if(first_ligne == "XXX" || first_ligne == "OOO")
                    {
                        alert("Le joueuer "+first_ligne.substring(0,1)+" a gagner");
                        win = true;
                    }else if(middle_ligne == "XXX" || middle_ligne == "OOO")
                    {
                        alert("Le joueuer "+middle_ligne.substring(0,1)+" a gagner");
                        win = true;
                    }else if(last_ligne == "XXX" || last_ligne == "OOO")
                    {
                        alert("Le joueuer "+last_ligne.substring(0,1)+" a gagner");
                        win = true;
                    }else if(vertical_first_Ligne == "XXX" || vertical_first_Ligne == "OOO")
                    {
                        alert("Le joueuer "+vertical_first_Ligne.substring(0,1)+" a gagner");
                        win = true;
                    }else if(vertical_middle_ligne == "XXX" || vertical_middle_ligne == "OOO")
                    {
                        alert("Le joueuer "+vertical_middle_ligne.substring(0,1)+" a gagner");
                        win = true;
                    }else if(vertical_last_ligne == "XXX" || vertical_last_ligne == "OOO")
                    {
                        alert("Le joueuer "+vertical_last_ligne.substring(0,1)+" a gagner");         
                    }else if(first_diagonal == "XXX" || first_diagonal == "OOO")
                    {
                        alert("Le joueuer "+first_diagonal.substring(0,1)+" a gagner");
                        win = true;
                    }else if(second_diagonal == "XXX" || second_diagonal == "OOO")
                    {
                        alert("Le joueuer "+second_diagonal.substring(0,1)+" a gagner");
                        win = true;
                    }
                    else if(i == 9)
                    {
                        alert("Draw")
                    }
                }
            }  
        }//if win
    })

})