import { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../../shared/navbar/cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';

const Order = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const [menu, loading] = useMenu()  //using hooks
    const deserts = menu.filter((item) => item.category === 'dessert');
    const soup = menu.filter((item) => item.category === 'soup');
    const salad = menu.filter((item) => item.category === 'salad');
    const pizza = menu.filter((item) => item.category === 'pizza');
    const offered = menu.filter((item) => item.category === 'offered');

    console.log(tabIndex)

    return (
        <div>
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
                        <TabPanel></TabPanel>
                        <TabPanel></TabPanel>
                        <TabPanel></TabPanel>
                        <TabPanel></TabPanel>
                        <TabPanel></TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Order;