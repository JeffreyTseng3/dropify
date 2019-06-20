import React from 'react';

class OptionsModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = { x: '200px', y: '350px' };

    }

    componentDidMount() {

    }

    
    
    render() {

        let { modal, closeModal, openModal } = this.props;

        
        if (modal === null) {
            return null;
        } else if ( modal.split(',')[0] !== 'options') {
            return null;
        }

        let addPlaylistModal = modal ? 'addSongToPlaylist,' + modal.split(',')[1] : null;

        let buttons = (
            <>
                <button 
                    onClick={() => closeModal()}
                    className="options-lib">
                    Save to Your Library
                </button>
                <button 
                    
                    onClick={() => closeModal()}
                    className="options-queue">
                    Add to Queue
                </button>
                <button 
                    // onClick={() => closeModal()}
                    onClick={() => openModal(addPlaylistModal)}
                    className="options-add-playlist">
                    Add to Playlist
                </button>
            </>
        );

        const { x, y } = this.state; 
        const optionsModalStyle = {
            top: y,
            right: x,
        }

        return ( <> 
            <div className="options-modal-background" onClick={this.props.closeModal}>
                <div 
                    className="options-modal-mod" 
                    onClick={e => e.stopPropagation()}
                    style={optionsModalStyle}
                    >
                    {buttons}
                </div>
            </div>
        </>)
    }

}

export default OptionsModal;