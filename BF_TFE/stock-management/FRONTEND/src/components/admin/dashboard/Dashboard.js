import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Paper from '@mui/material/Paper';
import ProductList from "../admin-components/product/product-list.component.jsx";
import SupplierList from "../admin-components/supplier/supplier-list.component.jsx"
import StocksList from '../admin-components/stocks/stock-list.component.jsx';


export default function AdminDashboard() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Admin Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Paper sx={{ p: 2 }}>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        centered
                    >
                        <Tab label="Products" />
                        <Tab label="Suppliers" />
                        <Tab label="Stocks" />
                    </Tabs>
                    {value === 0 && <ProductList />}
                    {value === 1 && <SupplierList />}
                    {value === 2 && <StocksList />}

                </Paper>
            </Container>
        </Box>
    );
}
