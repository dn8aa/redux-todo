import React from 'react'

function ChildrenC() {
    console.log('ChildrenC');
    return (
        <div>ChildrenC</div>
    )
}

export default React.memo(ChildrenC);