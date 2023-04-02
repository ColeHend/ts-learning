import React from "react";

function SpellCollapse(props: {desc: string}) {
    const { desc } = props;
    return (
        <div style={{width:'100%'}}>
            {desc}
        </div>
    )
}
export default SpellCollapse;