// difference between let and const >> if const we cannot re-assign a varible
type Points = { x: number, y: number };

const center3: Point = {
    x: 0,
    y: 0
}

/* center3 = { x: 1, y: 1 }; error - value cannot be reassigned */