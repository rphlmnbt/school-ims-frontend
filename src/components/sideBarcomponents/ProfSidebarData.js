import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

export const ProfSidebarData = [
    {
        mainTitle: 'Dashboard',
        title: 'Dashboard',
        path: '/acadbase/ProfessorDashboard',
        icon: <AiIcons.AiFillHome />
      },
    {
        mainTitle: 'User Profile',
        title: 'Edit User Profile',
        path: '/acadbase/ProfessorDashboard/EditUserProfile',
        icon: <FaIcons.FaUserTie />,
    },
    {
        mainTitle: 'Subject',
        title: 'View Subjects',
        path: '/acadbase/ProfessorDashboard/ProfViewSubject',
        icon: <FaIcons.FaUserEdit />,
    },
    {
        mainTitle: 'Course',
        title: 'View Courses',
        path: '/acadbase/ProfessorDashboard/ProfViewCourses',
        icon: <MdIcons.MdTopic />,
    },
    {
        mainTitle: 'Activities',
        title: 'View Activities',
        path: '/acadbase/ProfessorDashboard/ProfViewActivities',
        icon: <FaIcons.FaGraduationCap />,
        icon: <FaIcons.FaGraduationCap />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Add Activity',
                path: '/acadbase/ProfessorDashboard/ProfViewActivities/AddActivity',
                icon: <FaIcons.FaUserPlus />
            },
            {
                title: 'Modify Activity',
                path: '/acadbase/ProfessorDashboard/ProfViewActivities/ModifyActivity',
                icon: <FaIcons.FaUserCog />
            }
            ]


    }
    
    
  
];