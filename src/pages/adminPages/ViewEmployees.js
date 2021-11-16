import React, { useEffect, useState }  from 'react';
import { Col, Container, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import '../../styles/pages/BootstrapTable.css'
import profService from '../../services/employee.service';

function ViewEmployees() {

    const [data, setData] = useState([]);

    useEffect(() => {
        profService.getProfs()
          .then(response => {
            setData(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      }, []);
    

    const colStyle = {
        whiteSpace: 'nowrap',
        width: '50px', 
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    };
    
      const columns = [
        { dataField: 'userID', text: 'Employee ID ', sort: true, style:colStyle },
        { dataField: 'email', text: 'Email', sort: true, style:colStyle },
        { dataField: 'password', text: 'Password', sort: true, style:colStyle },
        { dataField: 'firstName', text: 'First Name', sort: true, style:colStyle },
        { dataField: 'lastName', text: 'Last Name', sort: true, style:colStyle },
        { dataField: 'contactNumber', text: 'Contact Number', sort: true, style:colStyle },
        { dataField: 'gender', text: 'Gender', sort: true, style:colStyle },
        { dataField: 'civilStatus', text: 'Civil Status', sort: true, style:colStyle },
        { dataField: 'birthDate', text: 'Birth Date', sort: true, style:colStyle },
        { dataField: 'departmentID', text: 'Department ID', sort: true, style:colStyle }
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
                         <h1>View Employees</h1>
                </Col>
            </Row> 
            <Row >
                <Col  className="m-0 p-0 table-container">
                    <ToolkitProvider
                        bootstrap4
                        keyField='id'
                        data={data}
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

export default ViewEmployees