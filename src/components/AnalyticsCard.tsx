
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

interface AnalyticsCardProps {
  title: string;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

const AnalyticsCard = ({ 
  title, 
  icon, 
  className, 
  children, 
  delay = 0 
}: AnalyticsCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={{ marginBottom: '16px' }}
    >
      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardHeader
          title={
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant="h6">{title}</Typography>
              {icon && <div style={{ color: 'primary.main' }}>{icon}</div>}
            </div>
          }
        />
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AnalyticsCard;
