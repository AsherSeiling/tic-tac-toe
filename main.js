let possible_wins = [[1, 2, 3], [2, 5, 8], [3, 6, 9], [1, 4, 7], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7]];
let current_user = "red";
let winer = false;
let pevious_user = "";
let boxes = {
    box1:"white",
    box2:"white",
    box3: "white",
    box4: "white",
    box5: "white",
    box6: "white",
    box7: "white",
    box8: "white",
    box9: "white"
};
function update(num){
    if (boxes["box" + (num + 1).toString()] == "white" || winer == false){
        if (current_user != pevious_user){
            pevious_user = current_user;
            $(".container").css("background-color", "black");
            $(".element_con").css("border", "2px solid black");
            boxes["box" + (num + 1).toString()] = current_user;
            $("#element" + (num + 1).toString()).css("background-color", current_user);
        }
        else{
            alert("This user cannot take two turns in a row")
        };
    }
    else if (winer == true){
        alert("You cannot use this page there is already a winner");
        window.location.reload();
    }
    else{
        alert("This box is ocupied already")
    };
    check_win(num);

};
function update_margin_color(color){
    $(".container").css("background-color", color);
    $(".element_con").css("border", "2px solid " + color);
};

function check_win(num){
    let winner_name = "";
    for (i in possible_wins){
        i = possible_wins[i];
        let x = i[0];
        let y = i[1];
        let z = i[2];
        x = boxes["box" + x.toString()];
        y = boxes["box" + y.toString()];
        z = boxes["box" + z.toString()];
        if (x == y){
            if (y == z){
                if (x != "white"){
                    winner_name = x;
                    if (winner_name == "rgb(85, 255, 0)"){
                        winner_name = "Green";
                    };
                    winer = true;
                    $("#element" + (num + 1).toString()).css("background-color", winner_name);
                    alert(winner_name + " has won!");
                };
            };
        };
    };
};