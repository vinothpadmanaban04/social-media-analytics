
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

interface RecommendationCardProps {
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  className?: string;
}

const RecommendationCard = ({ 
  title, 
  description, 
  priority,
  className 
}: RecommendationCardProps) => {
  const priorityColors = {
    high: {
      bg: '#FEECEB',
      border: '#FADAD9',
      text: '#D32F2F',
      chipBg: '#FADAD9'
    },
    medium: {
      bg: '#FFF8E6',
      border: '#FFF0C2',
      text: '#ED6C02',
      chipBg: '#FFF0C2'
    },
    low: {
      bg: '#E8F5E9',
      border: '#C8E6C9',
      text: '#2E7D32',
      chipBg: '#C8E6C9'
    }
  };
  
  const priorityLabels = {
    high: 'High Priority',
    medium: 'Medium Priority',
    low: 'Low Priority'
  };

  const colors = priorityColors[priority];

  return (
    <Card 
      sx={{ 
        mb: 2,
        bgcolor: colors.bg,
        border: `1px solid ${colors.border}`,
        color: colors.text,
        borderRadius: 2
      }}
      className={className}
    >
      <CardContent sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box sx={{ p: 1, borderRadius: '50%', bgcolor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <LightbulbIcon sx={{ color: '#F59E0B', fontSize: 20 }} />
          </Box>
          
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
              <Typography variant="subtitle1" fontWeight="medium">
                {title}
              </Typography>
              <Chip 
                label={priorityLabels[priority]}
                size="small"
                sx={{ 
                  fontWeight: 'medium',
                  bgcolor: colors.chipBg,
                  color: colors.text,
                  fontSize: '0.7rem'
                }}
              />
            </Box>
            
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              {description}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecommendationCard;
