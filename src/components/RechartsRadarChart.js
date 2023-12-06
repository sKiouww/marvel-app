import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';
import { prepareData } from './chart-utils';

const RechartsRadarChart = ({ data }) => {
    // Transform the data into the format { subject: 'Subject', A: number }
    const transformedData = Object.keys(data[0]).map(key => ({
        subject: key,
        character1: data[0][key],
        character2: data[1][key],
    }));

    return (
        <RadarChart cx={150} cy={125} outerRadius={100} width={300} height={250} data={transformedData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Character 1" dataKey="character1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="Character 2" dataKey="character2" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Tooltip />
        </RadarChart>
    );
}

RechartsRadarChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

export default RechartsRadarChart;