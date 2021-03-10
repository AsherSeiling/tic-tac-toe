
let current_user = "red";
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
    if (boxes["box" + (num + 1).toString()] == "white"){
        $(".container").css("background-color", "black");
    $(".element_con").css("border", "2px solid black")
        console.log(current_user);
        boxes["box" + (num + 1).toString()] = current_user;
        $("#element" + (num + 1).toString()).css("background-color", current_user)
    }
    else{
        alert("This box is ocupied already")
    };
};
function update_margin_color(color){
    $(".container").css("background-color", color);
    $(".element_con").css("border", "2px solid " + color)
};