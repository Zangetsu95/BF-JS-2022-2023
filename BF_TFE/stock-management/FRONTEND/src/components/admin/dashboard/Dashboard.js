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
// import TabPanel from './TabPanel';
// import ProductList from './ProductList';
// import SupplierList from './SupplierList';
// import StockList from './StockList';

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
                    {/* <TabPanel value={value} index={0}>
                        <ProductList />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <SupplierList />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <StockList />
                    </TabPanel> */}
                </Paper>
            </Container>
        </Box>
    );
}
