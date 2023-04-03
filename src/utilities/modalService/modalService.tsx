import React from 'react';

interface modalServiceProps {
    modal: React.ReactNode;
    setModal: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

function ModalService(props:modalServiceProps) {
    
    return (
        <div>
            <h1>Modal Service</h1>
        </div>
    )
}
export default ModalService;