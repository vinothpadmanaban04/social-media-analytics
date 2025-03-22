
import { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from "framer-motion";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  className?: string;
  index?: number;
}

const StatCard = ({ 
  title, 
  value, 
  change, 
  icon, 
  className,
  index = 0 
}: StatCardProps) => {
  const [counted, setCounted] = useState(0);
  const numericValue = typeof value === 'number' ? value : 0;
  
  useEffect(() => {
    if (typeof value === 'number') {
      const duration = 1000; // animation duration in ms
      const frameDuration = 1000 / 60; // duration of one frame at 60fps
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;
      
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        setCounted(Math.floor(numericValue * progress));
        
        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
      
      return () => clearInterval(counter);
    }
  }, [value, numericValue]);

  const displayValue = typeof value === 'number' 
    ? counted.toLocaleString() 
    : value;

  // Determine color based on change
  const getChangeColor = () => {
    if (!change) return 'text.secondary';
    return change > 0 ? 'success.main' : 'error.main';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={className}
    >
      <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 2 }}>
        <CardContent sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box>
              <Typography variant="body2" color="text.secondary">{title}</Typography>
              <Typography variant="h5" component="div" sx={{ fontWeight: 600, my: 0.5 }}>
                {displayValue}
              </Typography>
              
              {typeof change !== 'undefined' && (
                <Box sx={{ display: 'flex', alignItems: 'center', color: getChangeColor() }}>
                  {change > 0 ? (
                    <TrendingUpIcon sx={{ fontSize: 16, mr: 0.5 }} />
                  ) : (
                    <TrendingDownIcon sx={{ fontSize: 16, mr: 0.5 }} />
                  )}
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>
                    {Math.abs(change)}%
                  </Typography>
                </Box>
              )}
            </Box>
            
            {icon && (
              <Box sx={{ 
                p: 1, 
                borderRadius: '50%', 
                bgcolor: 'action.hover', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {icon}
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default StatCard;
