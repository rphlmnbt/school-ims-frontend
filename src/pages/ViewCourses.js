

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
        {courseId: 1, courseCode: 1010, courseName: 'Computer Engineering', departmentId: 1, chairperson: 'Juan Dela Cruz'},
        {courseId: 2, courseCode: 2020, courseName: 'Civil Engineering', departmentId: 1, chairperson: 'Juan Dela Cruz'},
        {courseId: 3, courseCode: 3030, courseName: 'Industrial Engineering', departmentId: 1, chairperson: 'Juan Dela Cruz'},
        {courseId: 4, courseCode: 4040, courseName: 'Electrical Engineering', departmentId: 1, chairperson: 'Juan Dela Cruz'},
        {courseId: 5, courseCode: 5040, courseName: 'Business Management', departmentId: 2, chairperson: 'Andres Bonifacio'},
        {courseId: 6, courseCode: 6060, courseName: 'Education', departmentId: 3, chairperson: 'Gregoria Del Pilar'},
        {courseId: 7, courseCode: 7070, courseName: 'Psychology', departmentId: 3, chairperson: 'Gregoria Del Pilar'},
        {courseId: 8, courseCode: 8080, courseName: 'Architecture', departmentId: 1, chairperson: 'Juan Dela Cruz'},
        {courseId: 9, courseCode: 9090, courseName: 'Accountancy', departmentId: 2, chairperson: 'Andres Bonifacio'},
        {courseId: 10, courseCode: 1100, courseName: 'Computer Science', departmentId: 4, chairperson: 'Apolinario Mabini'},
        {courseId: 11, courseCode: 1111, courseName: 'Information Technology', departmentId: 4, chairperson: 'Apolinario Mabini'},
        {courseId: 12, courseCode: 1200, courseName: 'Nursing', departmentId: 5, chairperson: 'Satoru Gojo'},
        
    ]
    
      const columns = [
        { dataField: 'courseId', text: 'Course ID', sort: true },
        { dataField: 'courseCode', text: 'Course Code', sort: true },
        { dataField: 'courseName', text: 'Course Name', sort: true },
        { dataField: 'departmentId', text: 'Department ID', sort: true },
        { dataField: 'chairperson', text: 'Chairperson', sort: true }
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
        
        <Container className="mt-5 border shadow">
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
                                        <div className="ml-2 my-2" style={{float:'left'}}>
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
                                        <div className="mx-2">
                                        <BootstrapTable 
                                            defaultSorted={defaultSorted}
                                            pagination={pagination}
                                            {...props.baseProps}
                                        />
                                        </div>
                                        
                                    </>
                                )
                            }
                    </ToolkitProvider>
                </Col>
            </Row>
        </Container>
       
      );

}

export default ViewCourses