

import React from 'react';
import { Col, Container, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import '../styles/pages/ViewSubjects.css'

function ViewCourses() {

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
    
      const columns = [
        { dataField: 'id', text: 'Id', sort: true },
        { dataField: 'subjectCode', text: 'Subject Code', sort: true },
        { dataField: 'subjectName', text: 'Subject Name', sort: true },
        { dataField: 'units', text: 'Units', sort: true },
        { dataField: 'lectureHours', text: 'Lecture Hours', sort: true },
        { dataField: 'labHours', text: 'Lab Hours', sort: true }
      ];
    
      const defaultSorted = [{
        dataField: 'name',
        order: 'desc'
      }];
    
      const pagination = paginationFactory({
        page: 1,
        sizePerPage: 5,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
      });
    
      const { SearchBar, ClearSearchButton } = Search;
    
      return (
        
        <Container className="mt-5 ">
            <Row>
                <Col className="box-title">
                         <h1>View Subjects</h1>
                </Col>
            </Row> 
            <Row >
                <Col  className="m-0 p-0 table-container">
                    <ToolkitProvider
                        bootstrap4
                        keyField='id'
                        data={dummyData}
                        columns={columns}
                        search
                            >
                            {
                                props => (
                                    <>
                                        <div className=" my-2" style={{float:'left'}}>
                                            < Row>
                                                <Col lg={10} sm={12} >
                                                    <SearchBar  
                                                        {...props.searchProps} 
                                                        style={{ width: "450px", height: "40px" }}
                                                        
                                                    />
                                                </Col>
                                                <Col lg={2} sm={12}>
                                                    <ClearSearchButton 
                                                        {...props.searchProps} 
                                                        className="border"
                                                    />
                                                </Col>
                                            </Row> 
                                        </div>
                                        <BootstrapTable 
                                            defaultSorted={defaultSorted}
                                            pagination={pagination}
                                            {...props.baseProps}
                                        />
                                    </>
                                )
                            }
                    </ToolkitProvider>
                </Col>
            </Row>
        </Container>
       
      );

}

export default function ViewCourses() {
