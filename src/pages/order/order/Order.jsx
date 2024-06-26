import { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../../shared/navbar/cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../orderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {

    const categories=['salad','pizza','soup','dessert','drinks']
    const {category}=useParams();
    console.log(category);

    const initialIndex= categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
   

    
    const [menu, loading] = useMenu()  //using hooks
    const deserts = menu.filter((item) => item.category === 'dessert');
    const soup = menu.filter((item) => item.category === 'soup');
    const salad = menu.filter((item) => item.category === 'salad');
    const pizza = menu.filter((item) => item.category === 'pizza');
    const drinks = menu.filter((item) => item.category === 'drinks');

    console.log(tabIndex)

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <div>
                <Cover img={orderCover} title="Order Food"></Cover>
                <div className='my-[20px] text-center'>
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            <Tab>Salad</Tab>
                            <Tab>Pizza</Tab>
                            <Tab>Soup</Tab>
                            <Tab>Dessert</Tab>
                            <Tab>Drinks</Tab>
                        </TabList>
                        <TabPanel>
                            <OrderTab items={salad}></OrderTab>
                        </TabPanel>
                        <TabPanel> <OrderTab items={pizza}></OrderTab></TabPanel>
                        <TabPanel>
                            <OrderTab items={soup}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                            <OrderTab items={deserts}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                            <OrderTab items={drinks}></OrderTab>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Order;