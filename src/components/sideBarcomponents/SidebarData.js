import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        mainTitle: 'Dashboard',
        title: 'Dashboard',
        path: '/acadbase/AdminDashboard',
        icon: <AiIcons.AiFillHome />
      },
    {
        mainTitle: 'Employee Database',
        title: 'Employee',
        path: '#',
        icon: <FaIcons.FaUserTie />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'View List of Employees',
            path: '/acadbase/AdminDashboard/ViewEmployees',
            icon: <FaIcons.FaRegListAlt />
        },
        {
            title: 'Create New Employee',
            path: '/acadbase/AdminDashboard/AddEmployee',
            icon: <FaIcons.FaUserPlus />
        },
        {
            title: 'Modify Employee',
            path: '/acadbase/AdminDashboard/ModifyEmployee',
            icon: <FaIcons.FaUserCog />
        }
        ]
    },
    {
        mainTitle: 'Student Database',
        title: 'Student',
        path: '#',
        icon: <FaIcons.FaUserEdit />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'View List of Students',
            path: '/acadbase/AdminDashboard/ViewStudents',
            icon: <FaIcons.FaRegListAlt />
        },
        {
            title: 'Create New Student',
            path: '/acadbase/AdminDashboard/AddStudent',
            icon: <FaIcons.FaUserPlus />
        },
        {
            title: 'Modify Student',
            path: '/acadbase/AdminDashboard/ModifyStudent',
            icon: <FaIcons.FaUserCog />
        }
        ]
    },
    {
        mainTitle: 'Subject Database',
        title: 'Subject',
        path: '#',
        icon: <MdIcons.MdTopic />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'View List of Subjects',
            path: '/acadbase/AdminDashboard/ViewSubjects',
            icon: <FaIcons.FaRegListAlt />
        },
        {
            title: 'Create New Subject',
            path: '/acadbase/AdminDashboard/AddSubject',
            icon: <AiIcons.AiFillFileAdd />
        },
        {
            title: 'Modify Subject',
            path: '/acadbase/AdminDashboard/ModifySubject',
            icon: <AiIcons.AiFillSetting />
        }
        ]
    },
    {
        mainTitle: 'Course Database',
        title: 'Course',
        path: '#',
        icon: <FaIcons.FaGraduationCap />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'View List of Courses',
            path: '/acadbase/AdminDashboard/ViewCourses',
            icon: <FaIcons.FaRegListAlt />
        },
        {
            title: 'Create New Course',
            path: '/acadbase/AdminDashboard/AddCourse',
            icon: <AiIcons.AiFillFileAdd />
        },
        {
            title: 'Modify Course',
            path: '/acadbase/AdminDashboard/ModifyCourse',
            icon: <AiIcons.AiFillSetting />
        }
        ]
    }
    
  
];