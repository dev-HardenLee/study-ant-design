import React from 'react';
import {Calendar, CalendarProps, Carousel, Flex} from "antd";
import {Dayjs} from "dayjs";
import styled from "styled-components";
import {Link} from "react-router-dom";

const rootStyle: React.CSSProperties = {
    height: '100vh',
    padding: '10vh',
}

const CarouselWrapper = styled(Carousel)`
    > .slick-dots li button {
        background-color: #000;
    }

    > .slick-dots li.slick-active button {
        background-color: #5E5A5AFF;
    }
`

const CalendarPage = () => {
    const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
        console.log(value.format('YYYY-MM-DD'), mode)
    }

    return (
       <div style={rootStyle}>
           <CarouselWrapper>
               <div>
                   <Calendar onPanelChange={onPanelChange}/>
               </div>

               <div>
                   <Flex justify={"center"} align={"center"} style={{height: '100vh'}}>
                       <Link to={'/calendar-dots'}>
                           <h3>Do you want Dots Calendar?</h3>
                       </Link>
                   </Flex>
               </div>
            </CarouselWrapper>
       </div>
    );
};

export default CalendarPage;