import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useHttp } from '../hooks/http.hook'


const UserCard = ({ id, full_name, original_img, position, handleShow, setDeleteId }) => {
    return <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={original_img} />
        {/* <Card.Img variant="bottom" src={preview_img} /> */}
        <Card.Body>
            <Card.Title>{full_name}</Card.Title>
            <Card.Text>
                {position}
            </Card.Text>
            <Card.Link href={`/user/${id}`}><Button variant="primary">
                Редагувати
            </Button></Card.Link>
            <Card.Link style={{ color: "red", cursor: 'pointer' }}><Button variant="danger" onClick={e => {setDeleteId(id); handleShow() }}>
                Видалити
            </Button></Card.Link>
        </Card.Body>
    </Card>
}

const RemoveModal = ({ show, handleClose, removeUsers }) => {

    return <>


        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Видалення картки</Modal.Title>
            </Modal.Header>
            <Modal.Body>Ви впевнені, що хочете видалити картку ?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Відмінити
                </Button>
                <Button variant="danger" onClick={e => {removeUsers(); handleClose()}}>
                    Видалити
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}
const UsersList = () => {

    const { request, loading } = useHttp()
    const [users, setUsers] = React.useState(null)
    const [show, setShow] = React.useState(false);
    const [deleteId, setDeleteId] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getUsers = async (id) => {
        try {
            const res = await request(`http://localhost:5000/api/employes`)
            if (res?.status === 200) {
                setUsers(res.users)
            }
        } catch (error) {
            console.log(error)

        }
    }

    const removeUsers = async () => {
        try {
            const res = await request(`http://localhost:5000/api/employe/remove/${deleteId}`)
            if (res?.status === 200) {
                setDeleteId(0)
                getUsers()
            }
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getUsers()
    }, [])

    console.log(users)
    return !loading && users ? <div>
        <Container>
            <Row style={{ gap: "10px" }}>
                {users.map(user => <Col><UserCard setDeleteId={setDeleteId} handleShow={handleShow} full_name={user.full_name} original_img={user.original_img} preview_img={user.preview_img} position={user.position} id={user.id} /></Col>)}
            </Row>
        </Container>
        <RemoveModal show={show} handleClose={handleClose} handleShow={handleShow} removeUsers={removeUsers}/>
    </div> : null
}

export default UsersList