import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import { LightbulbOutlined, RememberMeOutlined, ArchiveOutlined, DeleteOutlineOutlined } from '@mui/icons-material';

import { styled } from '@mui/material/styles';

// Styled components using the newer approach
const StyledNavItem = styled(ListItem)(({ theme }) => ({
    '&.active': {
      backgroundColor: '#feefc3',
      borderBottomRightRadius: '50px',
      borderTopRightRadius: '50px',
      color: '#000',
    },
    '&:hover': {
      backgroundColor: '#f0f0f0',
      borderBottomRightRadius: '50px',
      borderTopRightRadius: '50px',
    }
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme, active }) => ({
    minWidth: 0,
    justifyContent: 'center',
    color: active ? '#000' : 'inherit'
}));

const StyledListItemText = styled(ListItemText)(({ theme, active }) => ({
    color: active ? '#000' : 'inherit'
}));

const NavList = ({ open, setOpen }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const sidebarLinks = [
        {
            id: 1,
            label: 'Notes',
            icon: <LightbulbOutlined />,
            link: '/'
        },
        {
            id: 2,
            label: 'Reminder',
            icon: <RememberMeOutlined />,
            link: '/reminder'
        },
        {
            id: 3,
            label: 'Archive',
            icon: <ArchiveOutlined />,
            link: '/archive'
        },
        {
            id: 4,
            label: 'Trash',
            icon: <DeleteOutlineOutlined />,
            link: '/trash'
        }
    ];

    const handleDrawer = () => {
        setOpen(true);
    }

    return (
        <List>
            {sidebarLinks.map((list) => {
                const isActive = location.pathname === list.link;
                
                return (
                    <StyledNavItem 
                        key={list.id} 
                        disablePadding 
                        sx={{ display: 'block' }}
                        className={isActive ? 'active' : ''}
                        onClick={() => {
                            navigate(list.link);
                        }}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                            onClick={handleDrawer}
                        >
                            <StyledListItemIcon
                                active={isActive ? 1 : 0}
                                sx={{
                                    mr: open ? 3 : 'auto',
                                }}
                            >
                                {list.icon}
                            </StyledListItemIcon>
                            <StyledListItemText 
                                active={isActive ? 1 : 0} 
                                primary={list.label} 
                                sx={{ opacity: open ? 1 : 0 }} 
                            />
                        </ListItemButton>
                    </StyledNavItem>
                );
            })}
        </List>
    );
};

export default NavList;