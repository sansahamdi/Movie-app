import React, { useState } from 'react'
import Modal from 'react-modal'


Modal.setAppElement('#root')
const AddMovie = (props) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')
    const [rating, setRating] = useState()

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const {addMovie}=props
    const customStyles = {
        content: {
          zIndex: "99"
        }
      };

    return (
        <div>
            <div className='right'>
                <button className='btn-primary btn-right' onClick={() => setModalIsOpen(true)} >Add movie</button>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
                <form className='myform'>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Title of movie</label>
                        <input value={name} required onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">description of movie</label>
                        <input value={description} required onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">image url</label>
                        <input value={url} required onChange={(e) => setUrl(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Rate</label>
                        <input value={rating} required onChange={(e) => setRating(e.target.value)} type="number" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                    </div>
                    <button className='btn-primary btn-block mb-3' onClick={(e) => {
                        e.preventDefault();
                        addMovie({ title: name, description: description, image: url, rate: rating })
                        alert('your movie has been added successfully')
                        setModalIsOpen(false)
                    }} type='submit'>Add</button>
                </form>
            </Modal>
        </div>
    )
}

export default AddMovie