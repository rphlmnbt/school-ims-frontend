import React from 'react'
import { useState } from 'react'
import { Col, Container, Row, Table, InputGroup, FormControl  } from 'react-bootstrap'


function ViewSubjects() {

    const dummyData = [
        {id: 1, subjectCode: 1, subjectName: 'math1', units: 3, lectureHours: 3, labHours: 0 },
        {id: 2, subjectCode: 2, subjectName: 'math2', units: 3, lectureHours: 3, labHours: 3 },
        {id: 3, subjectCode: 3, subjectName: 'math3', units: 3, lectureHours: 0, labHours: 4 },
        {id: 4, subjectCode: 4, subjectName: 'math4', units: 3, lectureHours: 3, labHours: 0 },
        {id: 5, subjectCode: 5, subjectName: 'science1', units: 3, lectureHours: 3, labHours: 0 },
        {id: 6, subjectCode: 6, subjectName: 'science2', units: 3, lectureHours: 1, labHours: 4 },
        {id: 7, subjectCode: 7, subjectName: 'science3', units: 3, lectureHours: 4, labHours: 0 },
        {id: 8, subjectCode: 8, subjectName: 'science4', units: 3, lectureHours: 3, labHours: 3 },
        {id: 9, subjectCode: 9, subjectName: 'english1', units: 3, lectureHours: 3, labHours: 2 },
        {id: 10, subjectCode: 10, subjectName: 'english2', units: 3, lectureHours: 2, labHours: 4 },
        {id: 11, subjectCode: 11, subjectName: 'english3', units: 3, lectureHours: 0, labHours: 4 },
        {id: 12, subjectCode: 12, subjectName: 'english4', units: 3, lectureHours: 3, labHours: 0 },
        
    ]

    const [value, setValue] = useState('');
    const [dataSource, setDataSource] = useState(dummyData);
    const [tableFilter, setTableFilter] = useState([]);


    const filterData = (e) =>{
        if(e.target.value != ""){
         setValue(e.target.value);
            const filterTable = dataSource.filter(o=>Object.keys(o).some(k =>
                    String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
                ));
                setTableFilter([...filterTable])
        }else {
         setValue(e.target.value);
         setDataSource([...dataSource]);
        }
    }

    return (
        <>
           
            <Container className="mt-5">
                <Row>
                    <Col className="box-title">
                     <h1>View Subjects</h1>
                    </Col>
                </Row> 
                <Row >
                    <Col  className="m-0 p-0">
                        <InputGroup className=""> 
                            <FormControl
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                                value={value}
                                onChange = {filterData}
                            />
                        </InputGroup>
                        <Table striped bordered hover className="m-0 p-0 box-info">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Subject COde</th>
                                    <th>Subject Name</th>
                                    <th>Units</th>
                                    <th>Lec Hours</th>
                                    <th>Lab Hour</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    value.length > 0 ? tableFilter.map((info) =>{
                                        return(
                                            <tr>
                                                <td>{info.id}</td>
                                                <td>{info.subjectCode}</td>
                                                <td>{info.subjectName}</td>
                                                <td>{info.units}</td>
                                                <td>{info.lectureHours}</td>
                                                <td>{info.labHours}</td>
                                            </tr>

                                        )

                                    })
                                    : dataSource.map((info) =>{
                                        return(
                                            <tr>
                                                <td>{info.id}</td>
                                                <td>{info.subjectCode}</td>
                                                <td>{info.subjectName}</td>
                                                <td>{info.units}</td>
                                                <td>{info.lectureHours}</td>
                                                <td>{info.labHours}</td>
                                            </tr>

                                        )

                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ViewSubjects