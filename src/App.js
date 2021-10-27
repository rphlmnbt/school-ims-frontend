import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import LogIn from './pages/LogIn';
import AdminDashboard from './pages/adminPages/AdminDashboard'
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css'
import AddEmployee from './pages/adminPages/AddEmployee';
import ModifyEmployee from './pages/adminPages/ModifyEmployee';
import AddStudent from './pages/adminPages/AddStudent';
import ModifyStudent from './pages/adminPages/ModifyStudent';
import AddCourses from './pages/adminPages/AddCourses';
import ModifyCourse from './pages/adminPages/ModifyCourse';
import AddSubject from './pages/adminPages/AddSubject';
import ModifySubject from './pages/adminPages/ModifySubject';
import Course from './pages/adminPages/Course'
import Employee from './pages/adminPages/Employee';
import Student from './pages/adminPages/Student';
import Subject from './pages/adminPages/Subject';
import StudentDashboardHome from './pages/studentPages/StudentDashboardHome'
import EditUserProfile from './pages/EditUserProfile'
import ViewCourses from './pages/ViewCourses'
import StudentViewSubject from './pages/studentPages/StudentViewSubject'
import StudentViewCourses from './pages/studentPages/StudentViewCourses'
import StudentViewActivities from './pages/studentPages/StudentViewActivities'
import ProfDashboardHome from './pages/profPages/ProfDashboardHome'
import ProfViewSubjects from './pages/profPages/ProfViewSubjects'
import ProfViewCourses from './pages/profPages/ProfViewCourses'
import ProfViewActivities from './pages/profPages/ProfViewActivities'
import AddActivity from './pages/profPages/AddActivity'
import ModifyActivity from './pages/profPages/ModifyActivity'


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/acadbase/logIn" component={LogIn} />

          <Route exact path="/acadbase/AdminDashboard" component={AdminDashboard} />
          <Route exact path="/acadbase/AdminDashboard/EditUserProfile" component={EditUserProfile} />
          <Route exact path="/acadbase/AdminDashboard/ViewCourses" component={ViewCourses} />
          <Route exact path="/acadbase/AdminDashboard/Employee" component={Employee} />
          <Route exact path="/acadbase/AdminDashboard/Student" component={Student} />
          <Route exact path="/acadbase/AdminDashboard/Subject" component={Subject} />
          <Route exact path="/acadbase/AdminDashboard/Employee/AddEmployee" component={AddEmployee} />
          <Route exact path="/acadbase/AdminDashboard/Employee/ModifyEmployee" component={ModifyEmployee} />
          <Route exact path="/acadbase/AdminDashboard/Student/AddStudent" component={AddStudent} />
          <Route exact path="/acadbase/AdminDashboard/Student/ModifyStudent" component={ModifyStudent} />
          <Route exact path="/acadbase/AdminDashboard/Course/AddCourse" component={AddCourses} />
          <Route exact path="/acadbase/AdminDashboard/Course/ModifyCourse" component={ModifyCourse} />
          <Route exact path="/acadbase/AdminDashboard/Subject/AddSubject" component={AddSubject} />
          <Route exact path="/acadbase/AdminDashboard/Subject/ModifySubject" component={ModifySubject} />

          <Route exact path="/acadbase/StudentDashboard" component={StudentDashboardHome} />
          <Route exact path="/acadbase/StudentDashboard/EditUserProfile" component={EditUserProfile} />
          <Route exact path="/acadbase/StudentDashboard/StudentViewSubjects" component={StudentViewSubject} />
          <Route exact path="/acadbase/StudentDashboard/StudentViewCourses" component={StudentViewCourses} />
          <Route exact path="/acadbase/StudentDashboard/StudentViewActivities" component={StudentViewActivities} />
          
          <Route exact path="/acadbase/ProfessorDashboard" component={ProfDashboardHome} />
          <Route exact path="/acadbase/ProfessorDashboard/EditUserProfile" component={EditUserProfile} />
          <Route exact path="/acadbase/ProfessorDashboard/ProfViewSubject" component={ProfViewSubjects} />
          <Route exact path="/acadbase/ProfessorDashboard/ProfViewCourses" component={ProfViewCourses} />
          <Route exact path="/acadbase/ProfessorDashboard/ProfViewActivities" component={ProfViewActivities} />
          <Route exact path="/acadbase/ProfessorDashboard/ProfViewActivities/AddActivity" component={AddActivity} />
          <Route exact path="/acadbase/ProfessorDashboard/ProfViewActivities/ModifyActivity" component={ModifyActivity} />

          <Redirect from="" to="/acadbase/logIn"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
