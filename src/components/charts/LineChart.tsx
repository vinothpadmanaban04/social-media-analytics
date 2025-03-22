
import { useMemo } from 'react';
import { 
  Line, 
  LineChart as RechartsLineChart, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

interface DataPoint {
  name: string;
  [key: string]: any;
}

interface LineChartProps {
  data: DataPoint[];
  lines: {
    dataKey: string;
    name: string;
    color?: string;
    strokeWidth?: number;
  }[];
  xAxisDataKey?: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
}

const LineChart = ({
  data,
  lines,
  xAxisDataKey = 'name',
  height = 300,
  showGrid = true,
  showLegend = true,
}: LineChartProps) => {
  const theme = useTheme();
  const chartData = useMemo(() => data, [data]);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Box sx={{ width: '100%', height: height }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
          >
            {showGrid && (
              <CartesianGrid 
                strokeDasharray="3 3" 
                vertical={false} 
                stroke={theme.palette.divider} 
              />
            )}
            
            <XAxis 
              dataKey={xAxisDataKey} 
              axisLine={false}
              tickLine={false}
              tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
              dy={10}
            />
            
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
              width={40}
            />
            
            <Tooltip
              contentStyle={{
                borderRadius: theme.shape.borderRadius,
                boxShadow: theme.shadows[3],
                border: 'none',
                padding: '10px'
              }}
              itemStyle={{ fontSize: '12px' }}
              labelStyle={{ fontSize: '14px', fontWeight: 600, marginBottom: '5px' }}
            />
            
            {showLegend && (
              <Legend 
                verticalAlign="top" 
                height={36}
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: '12px' }}
              />
            )}
            
            {lines.map((line, index) => (
              <Line
                key={index}
                type="monotone"
                dataKey={line.dataKey}
                name={line.name}
                stroke={line.color || [
                  theme.palette.primary.main,
                  theme.palette.secondary.main,
                  theme.palette.error.main,
                  theme.palette.warning.main,
                  theme.palette.info.main,
                ][index % 5]}
                strokeWidth={line.strokeWidth || 2}
                dot={{
                  fill: line.color || [
                    theme.palette.primary.main,
                    theme.palette.secondary.main,
                    theme.palette.error.main,
                    theme.palette.warning.main,
                    theme.palette.info.main,
                  ][index % 5],
                  stroke: theme.palette.background.paper,
                  strokeWidth: 2,
                  r: 4
                }}
                activeDot={{
                  r: 6,
                  strokeWidth: 0,
                  fill: line.color || [
                    theme.palette.primary.main,
                    theme.palette.secondary.main,
                    theme.palette.error.main,
                    theme.palette.warning.main,
                    theme.palette.info.main,
                  ][index % 5]
                }}
                animationDuration={1500}
                animationEasing="ease-out"
              />
            ))}
          </RechartsLineChart>
        </ResponsiveContainer>
      </Box>
    </motion.div>
  );
};

export default LineChart;
