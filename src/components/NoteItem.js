import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className="col-md-3 my-3">
            <div class="cardui">
                <h3 class="cardui__title">{note.title}</h3>

                <p class="cardui__content">{note.description}lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, tempora?</p>
                <div class="cardui__date">
                    April 15, 2022
                </div>

            </div>
        </div>
    )
}

export default NoteItem