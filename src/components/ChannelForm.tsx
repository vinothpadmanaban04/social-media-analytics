
import { useState } from 'react';
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  Card, 
  CardContent, 
  FormLabel, 
  InputAdornment,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';

interface ChannelFormProps {
  type: 'instagram' | 'youtube';
  onSubmit: (channelId: string) => void;
}

const ChannelForm = ({ type, onSubmit }: ChannelFormProps) => {
  const [channelId, setChannelId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<{open: boolean, message: string, severity: 'success' | 'error'}>({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!channelId.trim()) {
      setAlert({
        open: true,
        message: `Please enter a valid ${type === 'instagram' ? 'Instagram' : 'YouTube'} channel ID`,
        severity: 'error'
      });
      return;
    }
    
    setIsLoading(true);
    
    // In a real app, you would validate the channel ID here
    setTimeout(() => {
      setIsLoading(false);
      onSubmit(channelId);
      
      setAlert({
        open: true,
        message: `${type === 'instagram' ? 'Instagram' : 'YouTube'} channel found. Loading analytics...`,
        severity: 'success'
      });
    }, 1000);
  };

  const handleCloseAlert = () => {
    setAlert(prev => ({ ...prev, open: false }));
  };

  return (
    <Card sx={{ maxWidth: 600, mx: 'auto', mb: 6, borderRadius: 3, boxShadow: 3 }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          {type === 'instagram' ? (
            <InstagramIcon color="secondary" />
          ) : (
            <YouTubeIcon color="error" />
          )}
          <Typography variant="h5" component="h2">
            {type === 'instagram' ? 'Instagram' : 'YouTube'} Channel Lookup
          </Typography>
        </Box>
        
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 3 }}>
            <FormLabel sx={{ mb: 1, display: 'block' }}>
              Enter {type === 'instagram' ? 'Instagram' : 'YouTube'} Channel ID or Username
            </FormLabel>
            <TextField
              fullWidth
              placeholder={type === 'instagram' ? '@username or ID' : 'Channel ID or Handle'}
              value={channelId}
              onChange={(e) => setChannelId(e.target.value)}
              sx={{ mb: 1 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <Typography variant="caption" color="text.secondary">
              {type === 'instagram'
                ? 'Enter your Instagram handle (e.g., @username) or ID'
                : 'Enter your YouTube channel ID or custom handle'
              }
            </Typography>
          </Box>
          
          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            disabled={isLoading}
            sx={{ py: 1.5 }}
          >
            {isLoading ? (
              <>
                <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
                Processing
              </>
            ) : (
              'Analyze Channel'
            )}
          </Button>
        </form>

        <Snackbar 
          open={alert.open} 
          autoHideDuration={6000} 
          onClose={handleCloseAlert}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleCloseAlert} 
            severity={alert.severity} 
            sx={{ width: '100%' }}
          >
            {alert.message}
          </Alert>
        </Snackbar>
      </CardContent>
    </Card>
  );
};

export default ChannelForm;
