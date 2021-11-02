

import React from 'react';
import { Col, Container, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import '../styles/pages/ViewSubjects.css'

function ViewActivities() {

    const dummyData = [
        {activityId: 1, activityType: 'Experiment', activityName: 'Experiment-1', studentScore: 75, totalScore: 100},
        {activityId: 2, activityType: 'Experiment', activityName: 'Experiment-2', studentScore: 88, totalScore: 100},
        {activityId: 3, activityType: 'Experiment', activityName: 'Experiment-3', studentScore: 100, totalScore: 100},
        {activityId: 4, activityType: 'Experiment', activityName: 'Experiment-4', studentScore: 100, totalScore: 100},
        {activityId: 5, activityType: 'Experiment', activityName: 'Experiment-5', studentScore: 95, totalScore: 100},
        {activityId: 6, activityType: 'Assignment', activityName: 'Assignment-1', studentScore: 45, totalScore: 50},
        {activityId: 7, activityType: 'Assignment', activityName: 'Assignment-2', studentScore: 0, totalScore: 50},
        {activityId: 8, activityType: 'Assignment', activityName: 'Assignment-3', studentScore: 30, totalScore: 50},
        {activityId: 9, activityType: 'Assignment', activityName: 'Assignment-4', studentScore: 50, totalScore: 50},
        {activityId: 10, activityType: 'Assignment', activityName: 'Assignment-5', studentScore: 45, totalScore: 50}
        
    ]
    
      const columns = [
        { dataField: 'activityId', text: 'Activity ID', sort: true },
        { dataField: 'activityType', text: 'Activity Code', sort: true },
        { dataField: 'activityName', text: 'Activity Name', sort: true },
        { dataField: 'studentScore', text: 'Student Score', sort: true },
        { dataField: 'totalScore', text: 'Total Score', sort: true }
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
                         <h1>View Activities</h1>
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

export default ViewActivities