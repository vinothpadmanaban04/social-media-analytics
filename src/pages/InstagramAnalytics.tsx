
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Users, 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark,
  Calendar, 
  Clock, 
  BarChart,
  TrendingUp as LucideTrendingUp,
  TrendingDown as LucideTrendingDown
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ChannelForm from '@/components/ChannelForm';
import AnalyticsCard from '@/components/AnalyticsCard';
import StatCard from '@/components/StatCard';
import RecommendationCard from '@/components/RecommendationCard';
import LineChart from '@/components/charts/LineChart';

interface InstagramAnalytics {
  username: string;
  followerCount: number;
  followerGrowth: number;
  postsCount: number;
  engagementRate: number;
  averageLikes: number;
  averageComments: number;
  topPosts: {
    imageUrl: string;
    likes: number;
    comments: number;
    engagement: number;
  }[];
  recentPerformance: {
    name: string;
    likes: number;
    comments: number;
    shares: number;
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
  bestTimes: {
    day: string;
    hour: string;
    engagement: number;
  }[];
}

// Mock data
const mockInstagramAnalytics: InstagramAnalytics = {
  username: 'socialmediaexample',
  followerCount: 25430,
  followerGrowth: 3.2,
  postsCount: 156,
  engagementRate: 4.7,
  averageLikes: 1245,
  averageComments: 87,
  topPosts: [
    { imageUrl: 'https://via.placeholder.com/300', likes: 2345, comments: 128, engagement: 6.2 },
    { imageUrl: 'https://via.placeholder.com/300', likes: 2100, comments: 105, engagement: 5.8 },
    { imageUrl: 'https://via.placeholder.com/300', likes: 1980, comments: 95, engagement: 5.3 },
  ],
  recentPerformance: [
    { name: 'Jan 1', likes: 1200, comments: 65, shares: 30 },
    { name: 'Jan 8', likes: 1350, comments: 72, shares: 35 },
    { name: 'Jan 15', likes: 1100, comments: 60, shares: 28 },
    { name: 'Jan 22', likes: 1500, comments: 85, shares: 42 },
    { name: 'Jan 29', likes: 1400, comments: 75, shares: 38 },
    { name: 'Feb 5', likes: 1650, comments: 92, shares: 47 },
    { name: 'Feb 12', likes: 1800, comments: 110, shares: 55 },
  ],
  audienceData: {
    ageGroups: [
      { name: '18-24', value: 35 },
      { name: '25-34', value: 42 },
      { name: '35-44', value: 15 },
      { name: '45+', value: 8 },
    ],
    gender: {
      male: 38,
      female: 60,
      other: 2,
    },
    topLocations: [
      { country: 'United States', percentage: 45 },
      { country: 'United Kingdom', percentage: 15 },
      { country: 'Canada', percentage: 12 },
      { country: 'Australia', percentage: 8 },
      { country: 'Germany', percentage: 5 },
    ],
  },
  bestTimes: [
    { day: 'Monday', hour: '6:00 PM', engagement: 5.2 },
    { day: 'Wednesday', hour: '12:00 PM', engagement: 4.9 },
    { day: 'Friday', hour: '9:00 AM', engagement: 4.8 },
    { day: 'Saturday', hour: '8:00 PM', engagement: 5.5 },
  ],
};

const InstagramAnalytics = () => {
  const [channelData, setChannelData] = useState<InstagramAnalytics | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const handleAnalyze = (channelId: string) => {
    // In a real app, you would fetch data from an API
    console.log('Analyzing Instagram channel:', channelId);
    // Using mock data for demonstration
    setChannelData(mockInstagramAnalytics);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="p-2 rounded-full bg-pink-100 text-pink-500 mb-4">
            <Instagram className="h-6 w-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Instagram Analytics
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Analyze your Instagram channel to gain valuable insights about your audience, content performance, and growth strategies.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <ChannelForm type="instagram" onSubmit={handleAnalyze} />
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
                  <Instagram className="h-12 w-12 text-pink-500" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-2">
                    @{channelData.username}
                  </h2>
                  <p className="text-muted-foreground">
                    {channelData.postsCount} posts • {channelData.followerCount.toLocaleString()} followers
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
                      title="Followers"
                      value={channelData.followerCount}
                      change={channelData.followerGrowth}
                      icon={<Users className="h-5 w-5" />}
                      index={0}
                    />
                    <StatCard
                      title="Engagement Rate"
                      value={`${channelData.engagementRate}%`}
                      change={0.5}
                      icon={<Heart className="h-5 w-5" />}
                      index={1}
                    />
                    <StatCard
                      title="Avg. Likes"
                      value={channelData.averageLikes}
                      change={1.2}
                      icon={<Heart className="h-5 w-5" />}
                      index={2}
                    />
                    <StatCard
                      title="Avg. Comments"
                      value={channelData.averageComments}
                      change={-0.8}
                      icon={<MessageCircle className="h-5 w-5" />}
                      index={3}
                    />
                  </div>

                  <AnalyticsCard
                    title="Recent Performance"
                    icon={<BarChart className="h-5 w-5" />}
                    delay={100}
                  >
                    <LineChart
                      height={300}
                      data={channelData.recentPerformance}
                      lines={[
                        { dataKey: 'likes', name: 'Likes', color: '#ec4899' },
                        { dataKey: 'comments', name: 'Comments', color: '#8b5cf6' },
                        { dataKey: 'shares', name: 'Shares', color: '#3b82f6' },
                      ]}
                    />
                  </AnalyticsCard>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnalyticsCard
                      title="Best Posting Times"
                      icon={<Clock className="h-5 w-5" />}
                      delay={200}
                    >
                      <div className="space-y-4 mt-2">
                        {channelData.bestTimes.map((time, index) => (
                          <div 
                            key={index}
                            className="flex justify-between items-center p-3 rounded-lg bg-background/80"
                          >
                            <div className="flex items-center space-x-3">
                              <Calendar className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">{time.day}</p>
                                <p className="text-sm text-muted-foreground">{time.hour}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-green-600">{time.engagement}%</p>
                              <p className="text-sm text-muted-foreground">Engagement</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AnalyticsCard>

                    <AnalyticsCard
                      title="Quick Recommendations"
                      icon={<Bookmark className="h-5 w-5" />}
                      delay={300}
                    >
                      <div className="space-y-3 mt-2">
                        <RecommendationCard
                          title="Posting Time Optimization"
                          description="Consider posting on Saturdays at 8:00 PM when your engagement is highest."
                          priority="high"
                        />
                        <RecommendationCard
                          title="Content Format"
                          description="Your carousel posts receive 23% more engagement than single images."
                          priority="medium"
                        />
                        <RecommendationCard
                          title="Hashtag Strategy"
                          description="Try using more niche hashtags to reach a more targeted audience."
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
                    title="Engagement Metrics"
                    icon={<Heart className="h-5 w-5" />}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                      <div className="glass rounded-lg p-4 text-center">
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Average Likes</h4>
                        <div className="text-2xl font-bold">{channelData.averageLikes.toLocaleString()}</div>
                        <div className="mt-1 text-xs font-medium text-green-500 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9a1 1 0 01-1-1V6a1 1 0 011-1h2a1 1 0 011 1v1zm-1 4a1 1 0 00-1 1v1a1 1 0 001 1h2a1 1 0 001-1v-1a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                            <path d="M5 5a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V8a3 3 0 00-3-3H5zm-1 9v-1a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1H5a1 1 0 01-1-1zm7 0v-1a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1h-2a1 1 0 01-1-1zm-7-4v-1a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1H5a1 1 0 01-1-1zm7 0v-1a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1h-2a1 1 0 01-1-1z" />
                          </svg>
                          +2.5% from last month
                        </div>
                      </div>
                      <div className="glass rounded-lg p-4 text-center">
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Average Comments</h4>
                        <div className="text-2xl font-bold">{channelData.averageComments}</div>
                        <div className="mt-1 text-xs font-medium text-red-500 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          -0.8% from last month
                        </div>
                      </div>
                      <div className="glass rounded-lg p-4 text-center">
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Engagement Rate</h4>
                        <div className="text-2xl font-bold">{channelData.engagementRate}%</div>
                        <div className="mt-1 text-xs font-medium text-green-500 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                          +0.5% from last month
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-medium text-lg mb-4">Content Performance</h4>
                      <LineChart
                        height={250}
                        data={channelData.recentPerformance}
                        lines={[
                          { dataKey: 'likes', name: 'Likes', color: '#ec4899' },
                          { dataKey: 'comments', name: 'Comments', color: '#8b5cf6' },
                          { dataKey: 'shares', name: 'Shares', color: '#3b82f6' },
                        ]}
                      />
                    </div>
                  </AnalyticsCard>

                  <AnalyticsCard
                    title="Top Performing Posts"
                    icon={<Share2 className="h-5 w-5" />}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      {channelData.topPosts.map((post, index) => (
                        <div key={index} className="glass rounded-lg overflow-hidden">
                          <div 
                            className="h-48 bg-cover bg-center" 
                            style={{ backgroundImage: `url(${post.imageUrl})` }}
                          />
                          <div className="p-4">
                            <div className="grid grid-cols-3 gap-2 text-center mb-2">
                              <div>
                                <p className="text-xs text-muted-foreground">Likes</p>
                                <p className="font-medium">{post.likes}</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground">Comments</p>
                                <p className="font-medium">{post.comments}</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground">Engagement</p>
                                <p className="font-medium">{post.engagement}%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AnalyticsCard>
                </TabsContent>

                <TabsContent value="recommendations" className="space-y-6 animate-fade-in">
                  <AnalyticsCard
                    title="Growth Strategies"
                    icon={<LucideTrendingUp className="h-5 w-5" />}
                  >
                    <div className="space-y-4 mt-4">
                      <RecommendationCard
                        title="Posting Schedule Optimization"
                        description="Based on your audience activity, consider posting at 8:00 PM on Saturdays and 12:00 PM on Wednesdays to maximize engagement."
                        priority="high"
                      />
                      <RecommendationCard
                        title="Content Type Adjustment"
                        description="Your carousel posts receive 23% more engagement than single images. Consider creating more carousel posts featuring multiple aspects of your content."
                        priority="high"
                      />
                      <RecommendationCard
                        title="Hashtag Strategy Refinement"
                        description="Your current hashtag strategy is reaching a broad audience but has low engagement. Try using more niche hashtags related to your specific content to reach a more targeted audience."
                        priority="medium"
                      />
                      <RecommendationCard
                        title="Audience Engagement"
                        description="Your followers are most active on Saturdays and Sundays. Consider hosting Q&A sessions, polls, or interactive stories during these times to boost engagement."
                        priority="medium"
                      />
                      <RecommendationCard
                        title="Caption Length"
                        description="Posts with longer, storytelling captions (100+ words) are performing 15% better than short captions. Consider sharing more detailed stories with your content."
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

export default InstagramAnalytics;
