import React from "react";

export const PerCell = React.memo((props) => {
    const returnBorder = (x, y) => {        
        let customStyle = {
            width: "5px",
            height: "5px",
        };

        if (y === 0) {
            customStyle["borderTop"] = "1px solid black";

            if (x === 0) {
                customStyle["borderLeft"] = "1px solid black";
            } else if (x === props.widthVal - 1) {
                customStyle["borderRight"] = "1px solid black";
            }
        } else if (y === props.heightVal - 1) {
            customStyle["borderBottom"] = "1px solid black";

            if (x === 0) {
                customStyle["borderLeft"] = "1px solid black";
            } else if (x === props.widthVal - 1) {
                customStyle["borderRight"] = "1px solid black";
            }
        } else if (x === 0) {
            customStyle["borderLeft"] = "1px solid black";
        } else if (x === props.widthVal - 1) {
            customStyle["borderRight"] = "1px solid black";
        }

        if (props.dataArr[y][x]) {
            customStyle["background"] = "black"
        }

        return customStyle;
    };

    return (
        <div
            style={returnBorder(props.x, props.y)}
            onClick={(e) => props.cellOnClick(props.x, props.y, e)}
        ></div>
    );
}, (prevProps, nextProps) => {
    return prevProps.dataArr[prevProps.y][prevProps.x] === nextProps.dataArr[nextProps.y][nextProps.x];
})
