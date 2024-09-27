import React from "react";
import { PerCell } from "./PerCell";
import _ from "lodash";

export const PerRow = React.memo((props) => {
    return (
        <div style={{ display: "flex" }}>
            {props.currentRow.map((w, i) => (
                <div key={`${props.y}-${i}`}>
                    <PerCell heightVal={props.heightVal} widthVal={props.widthVal} y={props.y} x={i} cellOnClick={props.cellOnClick} dataArr={props.dataArr} />
                </div>
            ))}
        </div>
    );
},
    (prevProps, nextProps) => {
        if (_.isEqual(prevProps.currentRow, nextProps.currentRow)) {
            return true
        } else {
            return false
        }
    })
