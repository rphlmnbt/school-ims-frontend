import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

export const StudentSidebarData = [
    {
        mainTitle: 'Dashboard',
        title: 'Dashboard',
        path: '/acadbase/StudentDashboard',
        icon: <AiIcons.AiFillHome />
      },
    {
        mainTitle: 'User Profile',
        title: 'Edit User Profile',
        path: '/acadbase/StudentDashboard/EditUserProfile',
        icon: <FaIcons.FaUserTie />,
    },
    {
        mainTitle: 'Subject',
        title: 'View Subjects',
        path: '/acadbase/StudentDashboard/StudentViewSubjects',
        icon: <FaIcons.FaUserEdit />,
    },
    {
        mainTitle: 'Course',
        title: 'View Courses',
        path: '/acadbase/StudentDashboard/StudentViewCourses',
        icon: <MdIcons.MdTopic />,
    },
    {
        mainTitle: 'Activities',
        title: 'View Activities',
        path: '/acadbase/StudentDashboard/StudentViewActivities',
        icon: <FaIcons.FaGraduationCap />,
    }
    
  
];