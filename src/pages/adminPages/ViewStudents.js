import React from 'react';
import { Col, Container, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import '../../styles/pages/BootstrapTable.css'

function ViewStudents() {

    const dummyData = [
        {studentId: 1, email: 'yen@gmail.com', password: '******', firstName: 'yen', lastName: 'samson', contactNumber: '099999999', gender: 'male', 
            civilStatus: 'complicated', birthDate: '01/01/01', homeAddress: 'house', courseId: '1311', yearLevel: 4, section: 'CpE-401'},
        {studentId: 2, email: 'yen@gmail.com', password: '******', firstName: 'glenn', lastName: 'uy cana', contactNumber: '099999999', gender: 'male', 
            civilStatus: 'complicated', birthDate: '01/01/01', homeAddress: 'house', courseId: '1311', yearLevel: 4, section: 'CpE-401'},
        {studentId: 3, email: 'yen@gmail.com', password: '******', firstName: 'raph', lastName: 'manabat', contactNumber: '099999999', gender: 'male', 
            civilStatus: 'complicated', birthDate: '01/01/01', homeAddress: 'house', courseId: '1311', yearLevel: 4, section: 'CpE-401'},
        {studentId: 4, email: 'yen@gmail.com', password: '******', firstName: 'me', lastName: 'you', contactNumber: '099999999', gender: 'male', 
            civilStatus: 'complicated', birthDate: '01/01/01', homeAddress: 'house', courseId: '1311', yearLevel: 4, section: 'CpE-401'}

        
    ]
    
      const columns = [
        { dataField: 'studentId', text: 'Student ID ', sort: true },
        { dataField: 'email', text: 'Email', sort: true },
        { dataField: 'password', text: 'Password', sort: true },
        { dataField: 'firstName', text: 'First Name', sort: true },
        { dataField: 'lastName', text: 'Last Name', sort: true },
        { dataField: 'contactNumber', text: 'Contact Number', sort: true },
        { dataField: 'gender', text: 'Gender', sort: true },
        { dataField: 'civilStatus', text: 'Civil Status', sort: true },
        { dataField: 'birthDate', text: 'Birth Date', sort: true },
        { dataField: 'courseId', text: 'Course ID', sort: true },
        { dataField: 'yearLevel', text: 'Year Level', sort: true },
        { dataField: 'section', text: 'Section', sort: true }
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
        
        <Container className="mt-5 border shadow extend-table-container">
            <Row>
                <Col className="box-title">
                         <h1>View Students</h1>
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

export default ViewStudents