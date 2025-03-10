import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import { UilTimes } from '@iconscout/react-unicons'
import Chart from 'react-apexcharts'
const Card = (props) => {

    const [expanded, setExpanded] = useState(false)
    return (
        <motion.div>
            {
                expanded ?
                    <ExpandedCard param={props} setExpanded={() => setExpanded(false)} /> :

                    <CompactCard param={props} setExpanded={() => setExpanded(true)} />
            }
        </motion.div>
    )
}
function CompactCard({ param, setExpanded }) {
    const Png = param.png;
    return (
        <motion.div
            className="card"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
            }}
            onClick={setExpanded}
            // layoutId="expandableCard"
        >
            <div className="radialBar">
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
                <span>{param.title}</span>

            </div>
            <div className="detail">
                <Png />
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    );
};
//ExpandedCard
function ExpandedCard({ param, setExpanded }) {
    const data = {
        series:[
          {
            name:'Review',
            data:[10,50,30,90,40,100],
          }  
        ],

        options: {
            chart: {
                type: 'area',
                height: 'auto',
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },
            fill: {
                colors: ["#fff"],
                type: 'gradient',
            },
            dataLabels: {
                enabled: false,

            },
            stroke: {
                curve: "smooth",
                colors: ["white"],

            },
            tooltip: {
                X: {
                    format: "dd/MM/yy HH:mm",

                },
            },
            grid: {
                show: true,

            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:00:00.000Z",
                    "2018-09-19T02:00:00.000Z",
                    "2018-09-19T03:00:00.000Z",
                    "2018-09-19T04:00:00.000Z",
                    "2018-09-19T05:00:00.000Z",
                    "2018-09-19T06:00:00.000Z",
                ]
            },

        }
    }
    return (
        <motion.div className="ExpandedCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
            }}
            layoutId="expandableCard"
            >

            <div style={{ alignSelf:"flex-end", cursor:"pointer", color:"white" }} >
                <UilTimes onClick={setExpanded} />
                
            </div>
            <span style={{ color:"white", fontWeight:"bold" , textShadow:"0px 0px 15px white"}}>{param.title}</span>
            <div className="chartContainer">
                <Chart series={param.series} type='area' options={data.options} />
            </div>
            <span>Last 24 hours</span>
        </motion.div>


    )

}
export default Card;