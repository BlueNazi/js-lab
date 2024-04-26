

function closestElevator(Floor) {
    const leftEl = 1;
    const rightEl = 3;

    const disleft = (Floor - leftEl);
    const disright = (Floor - rightEl);


    if (disright < disleft) {
        return "right elevator is closer";
    } else {
        return "Left elevator is closer";
    }
}