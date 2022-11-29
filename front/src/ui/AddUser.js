import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useHttp } from '../hooks/http.hook'
import { useParams } from 'react-router-dom';
const config = require('../congif.json');

const SuccessModal = ({ handleClose, show }) => {

    return <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton>
            <Modal.Title>Успіх!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
                Закрити
            </Button>
        </Modal.Footer>
    </Modal>
}
const FileUploader = ({ stateSetter, image }) => {
    const [file, setFile] = React.useState(image);
    function handleChange(e) {
        const reader = new FileReader();
        let baseString;

        reader.onloadend = function () {
            baseString = reader.result;
            stateSetter(baseString);

        };
        reader.readAsDataURL(e.target.files[0]);
        setFile(URL.createObjectURL(e.target.files[0]));
    }


    return (
        <div className="imgUploader">
            <input type="file" onChange={handleChange} />
            <img src={file} />
        </div>
    );
}

const Comments = ({ comments, setComments }) => {
    const changeComments = (e, id) => {
        let newComments = comments
        newComments[id] = e.target.value
        setComments([...newComments])
    }
    return <>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Відгук 1</Form.Label>
            <Form.Control as="textarea" placeholder="" value={comments[0]} onChange={e => changeComments(e, 0)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Відгук 2</Form.Label>
            <Form.Control as="textarea" placeholder="" value={comments[1]} onChange={e => changeComments(e, 1)} />
        </Form.Group>
    </>
}

const AddUser = () => {

    const { request, loading } = useHttp()

    const [fullName, setFullName] = React.useState('')
    const [position, setPosition] = React.useState('')
    const [originalImg, setOriginalImg] = React.useState(null);
    const [previewImg, setPreviewImg] = React.useState(null);
    const [mobPreviewImg, setMobPreviewImg] = React.useState(null);

    const [sortPriority, setSortPriority] = React.useState(5);
    const [imgPosition, setImgPosition] = React.useState('center');
    const [comments, setComments] = React.useState(['', '']);

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const params = useParams()

    const getUserById = async (id) => {
        try {
            const res = await request(`${config.API_URL}/api/employe/${id}`)
            console.log(res)
            if (res?.status === 200) {
                setFullName(res.user.full_name);
                setPosition(res.user.position)
                setOriginalImg(res.user.original_img)
                setPreviewImg(res.user.preview_img)
                setSortPriority(res.user.sort_priority)
                setImgPosition(res.user.img_position)
                setMobPreviewImg(res.user.mob_preview_img)
                setComments([res?.comments[0].comment ?? '', res?.comments[1].comment ?? ''])
            }
        } catch (error) {
            console.log(error)

        }
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        const endpoint = params.id ? 'employe/edit' : 'employe'
        try {
            const res = await request(`${config.API_URL}/api/${endpoint}`, 'POST', { fullName, position, sortPriority, originalImg, previewImg, id: params.id || -1, imgPosition, mobPreviewImg, comments })

            if (res?.status === 200) {
                handleShow()

                if (params.id)
                    return true

                setFullName('')
                setPosition('')
                setOriginalImg(null)
                setPreviewImg(null)
                setMobPreviewImg(null)

            }
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        if (params.id)
            getUserById(params.id)
    }, [])

    return !loading ? <div>
        <Container>
            <Row>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>І'мя та прізвище</Form.Label>
                        <Form.Control type="text" placeholder="" value={fullName} onChange={e => setFullName(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Посада</Form.Label>
                        <Form.Control type="text" placeholder="" value={position} onChange={e => setPosition(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Пріорітет сортування</Form.Label>
                        <Form.Control type="number" minLength={1} maxLength={9} defaultValue={5} value={sortPriority} onChange={e => setSortPriority(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Розташування фото</Form.Label>
                        <Form.Select aria-label="Floating label select example" value={imgPosition} onChange={e => setImgPosition(e.target.value)}>
                            <option value="left">Ліворуч</option>
                            <option value="center">Посередині</option>
                            <option value="right">Праворуч</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Фото співробітника</Form.Label>
                        <FileUploader stateSetter={setOriginalImg} image={originalImg} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Фон співробітника</Form.Label>
                        <FileUploader stateSetter={setPreviewImg} image={previewImg} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Роки роботи моб версія</Form.Label>
                        <FileUploader stateSetter={setMobPreviewImg} image={mobPreviewImg} />
                    </Form.Group>

                    <Comments setComments={setComments} comments={comments} />
                    <Button type='submit'>{params.id ? "Зберегти" : "Додати"}</Button>
                </Form>
            </Row>
        </Container>
        <SuccessModal handleClose={handleClose} show={show} />
    </div> : null
}

export default AddUser