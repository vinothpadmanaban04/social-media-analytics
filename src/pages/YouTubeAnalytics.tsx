
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Youtube, 
  Users, 
  Clock, 
  PlayCircle, 
  ThumbsUp,
  BarChart, 
  TrendingUp,
  MessageCircle
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ChannelForm from '@/components/ChannelForm';
import AnalyticsCard from '@/components/AnalyticsCard';
import StatCard from '@/components/StatCard';
import RecommendationCard from '@/components/RecommendationCard';
import LineChart from '@/components/charts/LineChart';

interface YouTubeAnalytics {
  channelName: string;
  subscriberCount: number;
  subscriberGrowth: number;
  totalViews: number;
  viewsGrowth: number;
  totalVideos: number;
  watchTime: number;
  watchTimeGrowth: number;
  averageViewDuration: string;
  topVideos: {
    thumbnail: string;
    title: string;
    views: number;
    likes: number;
    comments: number;
    retention: number;
  }[];
  recentPerformance: {
    name: string;
    views: number;
    watchTime: number;
    subscribers: number;
  }[];
  audienceData: {
    ageGroups: {
      name: string;
      value: number;
    }[];
    gender: {
      male: number;
      female: number;
      other: number;
    };
    topLocations: {
      country: string;
      percentage: number;
    }[];
  };
  trafficSources: {
    source: string;
    percentage: number;
  }[];
}

// Mock data
const mockYouTubeAnalytics: YouTubeAnalytics = {
  channelName: 'TechInsights',
  subscriberCount: 124500,
  subscriberGrowth: 2.8,
  totalViews: 3580000,
  viewsGrowth: 4.2,
  totalVideos: 87,
  watchTime: 210000,
  watchTimeGrowth: 3.5,
  averageViewDuration: '4:23',
  topVideos: [
    { 
      thumbnail: 'https://via.placeholder.com/300', 
      title: 'Ultimate Tech Setup Guide 2023', 
      views: 145000, 
      likes: 8700, 
      comments: 932, 
      retention: 68 
    },
    { 
      thumbnail: 'https://via.placeholder.com/300', 
      title: '10 Hidden Smartphone Features', 
      views: 122000, 
      likes: 7500, 
      comments: 845, 
      retention: 72 
    },
    { 
      thumbnail: 'https://via.placeholder.com/300', 
      title: 'Budget Gaming PC Build', 
      views: 98000, 
      likes: 6200, 
      comments: 723, 
      retention: 65 
    },
  ],
  recentPerformance: [
    { name: 'Jan 1', views: 15000, watchTime: 9000, subscribers: 120 },
    { name: 'Jan 8', views: 17500, watchTime: 10500, subscribers: 145 },
    { name: 'Jan 15', views: 14800, watchTime: 8900, subscribers: 115 },
    { name: 'Jan 22', views: 19200, watchTime: 11500, subscribers: 168 },
    { name: 'Jan 29', views: 18500, watchTime: 11100, subscribers: 155 },
    { name: 'Feb 5', views: 21000, watchTime: 12600, subscribers: 182 },
    { name: 'Feb 12', views: 23500, watchTime: 14100, subscribers: 205 },
  ],
  audienceData: {
    ageGroups: [
      { name: '18-24', value: 28 },
      { name: '25-34', value: 45 },
      { name: '35-44', value: 18 },
      { name: '45+', value: 9 },
    ],
    gender: {
      male: 68,
      female: 30,
      other: 2,
    },
    topLocations: [
      { country: 'United States', percentage: 42 },
      { country: 'United Kingdom', percentage: 13 },
      { country: 'India', percentage: 10 },
      { country: 'Canada', percentage: 8 },
      { country: 'Australia', percentage: 6 },
    ],
  },
  trafficSources: [
    { source: 'YouTube Search', percentage: 38 },
    { source: 'Suggested Videos', percentage: 26 },
    { source: 'External', percentage: 18 },
    { source: 'Browse Features', percentage: 12 },
    { source: 'Other', percentage: 6 },
  ],
};

const YouTubeAnalytics = () => {
  const [channelData, setChannelData] = useState<YouTubeAnalytics | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const handleAnalyze = (channelId: string) => {
    // In a real app, you would fetch data from an API
    console.log('Analyzing YouTube channel:', channelId);
    // Using mock data for demonstration
    setChannelData(mockYouTubeAnalytics);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="p-2 rounded-full bg-red-100 text-red-500 mb-4">
            <Youtube className="h-6 w-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            YouTube Analytics
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Analyze your YouTube channel to gain valuable insights about your audience, content performance, and growth strategies.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <ChannelForm type="youtube" onSubmit={handleAnalyze} />
        </div>

        {channelData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="glass rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <Youtube className="h-12 w-12 text-red-500" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-2">
                    {channelData.channelName}
                  </h2>
                  <p className="text-muted-foreground">
                    {channelData.totalVideos} videos • {channelData.subscriberCount.toLocaleString()} subscribers
                  </p>
                </div>
              </div>

              <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-6">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="audience">Audience</TabsTrigger>
                  <TabsTrigger value="content">Content</TabsTrigger>
                  <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard
                      title="Subscribers"
                      value={channelData.subscriberCount}
                      change={channelData.subscriberGrowth}
                      icon={<Users className="h-5 w-5" />}
                      index={0}
                    />
                    <StatCard
                      title="Views"
                      value={channelData.totalViews}
                      change={channelData.viewsGrowth}
                      icon={<PlayCircle className="h-5 w-5" />}
                      index={1}
                    />
                    <StatCard
                      title="Watch Time (hrs)"
                      value={channelData.watchTime}
                      change={channelData.watchTimeGrowth}
                      icon={<Clock className="h-5 w-5" />}
                      index={2}
                    />
                    <StatCard
                      title="Avg. View Duration"
                      value={channelData.averageViewDuration}
                      icon={<Clock className="h-5 w-5" />}
                      index={3}
                    />
                  </div>

                  <AnalyticsCard
                    title="Channel Performance Over Time"
                    icon={<BarChart className="h-5 w-5" />}
                    delay={100}
                  >
                    <LineChart
                      height={300}
                      data={channelData.recentPerformance}
                      lines={[
                        { dataKey: 'views', name: 'Views', color: '#ef4444' },
                        { dataKey: 'watchTime', name: 'Watch Time (min)', color: '#8b5cf6' },
                        { dataKey: 'subscribers', name: 'New Subscribers', color: '#3b82f6' },
                      ]}
                    />
                  </AnalyticsCard>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnalyticsCard
                      title="Traffic Sources"
                      icon={<TrendingUp className="h-5 w-5" />}
                      delay={200}
                    >
                      <div className="space-y-4 mt-4">
                        {channelData.trafficSources.map((source, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">{source.source}</span>
                              <span>{source.percentage}%</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-red-500 rounded-full"
                                style={{ width: `${source.percentage}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </AnalyticsCard>

                    <AnalyticsCard
                      title="Quick Recommendations"
                      icon={<ThumbsUp className="h-5 w-5" />}
                      delay={300}
                    >
                      <div className="space-y-3 mt-2">
                        <RecommendationCard
                          title="Video Length Optimization"
                          description="Videos between 8-12 minutes have 30% higher retention rates."
                          priority="high"
                        />
                        <RecommendationCard
                          title="Thumbnail Design"
                          description="Use high-contrast images and clear text in your thumbnails."
                          priority="medium"
                        />
                        <RecommendationCard
                          title="Upload Schedule"
                          description="Maintain a consistent weekly upload schedule for better algorithms."
                          priority="low"
                        />
                      </div>
                    </AnalyticsCard>
                  </div>
                </TabsContent>

                <TabsContent value="audience" className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnalyticsCard
                      title="Age Distribution"
                      icon={<Users className="h-5 w-5" />}
                    >
                      <div className="space-y-4 mt-4">
                        {channelData.audienceData.ageGroups.map((age, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">{age.name}</span>
                              <span>{age.value}%</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary rounded-full"
                                style={{ width: `${age.value}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </AnalyticsCard>

                    <AnalyticsCard
                      title="Gender Distribution"
                      icon={<Users className="h-5 w-5" />}
                    >
                      <div className="h-60 flex items-center justify-center">
                        <div className="w-full max-w-xs">
                          <div className="flex flex-col space-y-4">
                            <div className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span className="font-medium">Female</span>
                                <span>{channelData.audienceData.gender.female}%</span>
                              </div>
                              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-pink-400 rounded-full"
                                  style={{ width: `${channelData.audienceData.gender.female}%` }}
                                />
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span className="font-medium">Male</span>
                                <span>{channelData.audienceData.gender.male}%</span>
                              </div>
                              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-blue-400 rounded-full"
                                  style={{ width: `${channelData.audienceData.gender.male}%` }}
                                />
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span className="font-medium">Other</span>
                                <span>{channelData.audienceData.gender.other}%</span>
                              </div>
                              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-purple-400 rounded-full"
                                  style={{ width: `${channelData.audienceData.gender.other}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AnalyticsCard>
                  </div>

                  <AnalyticsCard
                    title="Top Locations"
                    icon={<BarChart className="h-5 w-5" />}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
                      {channelData.audienceData.topLocations.map((location, index) => (
                        <div key={index} className="glass rounded-lg p-4 text-center">
                          <h4 className="font-medium mb-2">{location.country}</h4>
                          <div className="text-xl font-bold text-primary">{location.percentage}%</div>
                        </div>
                      ))}
                    </div>
                  </AnalyticsCard>
                </TabsContent>

                <TabsContent value="content" className="space-y-6 animate-fade-in">
                  <AnalyticsCard
                    title="Top Performing Videos"
                    icon={<PlayCircle className="h-5 w-5" />}
                  >
                    <div className="space-y-4 mt-4">
                      {channelData.topVideos.map((video, index) => (
                        <div key={index} className="glass rounded-lg overflow-hidden">
                          <div className="flex flex-col md:flex-row">
                            <div 
                              className="w-full md:w-48 h-32 bg-cover bg-center" 
                              style={{ backgroundImage: `url(${video.thumbnail})` }}
                            />
                            <div className="p-4 flex-1">
                              <h4 className="font-medium mb-2 line-clamp-1">{video.title}</h4>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                                <div>
                                  <p className="text-xs text-muted-foreground">Views</p>
                                  <p className="font-medium">{video.views.toLocaleString()}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground">Likes</p>
                                  <p className="font-medium">{video.likes.toLocaleString()}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground">Comments</p>
                                  <p className="font-medium">{video.comments.toLocaleString()}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground">Retention</p>
                                  <p className="font-medium">{video.retention}%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AnalyticsCard>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnalyticsCard
                      title="Performance Metrics"
                      icon={<BarChart className="h-5 w-5" />}
                    >
                      <div className="space-y-4 mt-4">
                        <div className="glass rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <h4 className="font-medium">Average View Duration</h4>
                            <span className="text-primary font-semibold">{channelData.averageViewDuration}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            This is how long viewers watch your videos on average. Longer view durations can help with YouTube algorithm recommendations.
                          </p>
                        </div>
                        
                        <div className="glass rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <h4 className="font-medium">Click-Through Rate</h4>
                            <span className="text-primary font-semibold">4.8%</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            This is the percentage of people who click on your video after seeing it in their recommendations or search results.
                          </p>
                        </div>
                        
                        <div className="glass rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <h4 className="font-medium">Average Retention Rate</h4>
                            <span className="text-primary font-semibold">52%</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            This is the percentage of your video that viewers watch on average before clicking away.
                          </p>
                        </div>
                      </div>
                    </AnalyticsCard>

                    <AnalyticsCard
                      title="Engagement Insights"
                      icon={<MessageCircle className="h-5 w-5" />}
                    >
                      <div className="space-y-4 mt-4">
                        <div className="glass rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <h4 className="font-medium">Likes per 1000 Views</h4>
                            <span className="text-primary font-semibold">64</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: '64%' }} />
                          </div>
                        </div>
                        
                        <div className="glass rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <h4 className="font-medium">Comments per 1000 Views</h4>
                            <span className="text-primary font-semibold">7.2</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: '36%' }} />
                          </div>
                        </div>
                        
                        <div className="glass rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <h4 className="font-medium">Shares per 1000 Views</h4>
                            <span className="text-primary font-semibold">12.5</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 rounded-full" style={{ width: '50%' }} />
                          </div>
                        </div>
                      </div>
                    </AnalyticsCard>
                  </div>
                </TabsContent>

                <TabsContent value="recommendations" className="space-y-6 animate-fade-in">
                  <AnalyticsCard
                    title="Content Strategy Recommendations"
                    icon={<TrendingUp className="h-5 w-5" />}
                  >
                    <div className="space-y-4 mt-4">
                      <RecommendationCard
                        title="Video Length Optimization"
                        description="Your videos between 8-12 minutes have 30% higher retention rates than shorter or longer videos. Consider focusing on this length for future content."
                        priority="high"
                      />
                      <RecommendationCard
                        title="Thumbnail Design"
                        description="Videos with close-up faces in thumbnails have a 27% higher click-through rate. Use high-contrast images and clear text overlay for better performance."
                        priority="high"
                      />
                      <RecommendationCard
                        title="Upload Schedule"
                        description="Maintain a consistent weekly upload schedule, preferably on Tuesdays and Thursdays when your audience is most active, to improve algorithm performance."
                        priority="medium"
                      />
                      <RecommendationCard
                        title="Title Optimization"
                        description="Titles with 6-9 words and including questions or numbers perform better. Include your main keyword within the first 3 words."
                        priority="medium"
                      />
                      <RecommendationCard
                        title="End Screen Elements"
                        description="Only 15% of viewers interact with your end screen elements. Consider redesigning them to be more prominent and engaging."
                        priority="low"
                      />
                    </div>
                  </AnalyticsCard>

                  <AnalyticsCard
                    title="Audience Growth Strategies"
                    icon={<Users className="h-5 w-5" />}
                  >
                    <div className="space-y-4 mt-4">
                      <RecommendationCard
                        title="Community Engagement"
                        description="Channels that respond to at least 10% of comments see a 15% higher subscriber growth rate. Increase your comment response rate from current 5% to at least 10%."
                        priority="high"
                      />
                      <RecommendationCard
                        title="Cross-Promotion"
                        description="Consider collaborating with channels in your niche that have similar audience demographics but aren't direct competitors."
                        priority="medium"
                      />
                      <RecommendationCard
                        title="Content Localization"
                        description="With 22% of your audience coming from non-English speaking countries, consider adding subtitles in Spanish and Hindi to increase your international reach."
                        priority="medium"
                      />
                      <RecommendationCard
                        title="Community Posts"
                        description="Increase your community post frequency to at least twice weekly. Polls and questions generate 3x more engagement than simple updates."
                        priority="low"
                      />
                    </div>
                  </AnalyticsCard>
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default YouTubeAnalytics;
