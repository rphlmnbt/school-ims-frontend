import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/AdminDashboard',
        icon: <AiIcons.AiFillHome />
      },
    {
        title: 'Employee',
        path: '/',
        icon: <FaIcons.FaUserTie />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'Create New Employee',
            path: '',
            icon: <FaIcons.FaUserPlus />
        },
        {
            title: 'Modify Employee',
            path: '',
            icon: <FaIcons.FaUserCog />
        }
        ]
    },
    {
        title: 'Student',
        path: '/',
        icon: <FaIcons.FaUserEdit />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'Create New Student',
            path: '',
            icon: <FaIcons.FaUserPlus />
        },
        {
            title: 'Modify Student',
            path: '',
            icon: <FaIcons.FaUserCog />
        }
        ]
    },
    {
        title: 'Subject',
        path: '/',
        icon: <MdIcons.MdTopic />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'Create New Subject',
            path: '',
            icon: <AiIcons.AiFillFileAdd />
        },
        {
            title: 'Modify Subject',
            path: '',
            icon: <AiIcons.AiFillSetting />
        }
        ]
    },
    {
        title: 'Course',
        path: '/',
        icon: <FaIcons.FaGraduationCap />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'Create New Course',
            path: '',
            icon: <AiIcons.AiFillFileAdd />
        },
        {
            title: 'Modify Course',
            path: '',
            icon: <AiIcons.AiFillSetting />
        }
        ]
    }
    
  
];