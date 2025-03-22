import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Instagram,
  Youtube,
  Users,
  TrendingUp,
  Activity,
  MousePointer,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-full bg-primary/10 blur-xl" />
              <div className="relative bg-primary/10 p-3 rounded-full">
                <div className="h-14 w-14">
                  <img
                    id="logo"
                    src="/soc-analyzer.svg"
                    alt="Social Analyzer Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-3xl text-balance"
            >
              Unlock the Potential of Your Social Media Presence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl text-muted-foreground max-w-2xl text-balance"
            >
              Comprehensive analytics for Instagram and YouTube to help you
              understand your audience, optimize your content strategy, and grow
              your online presence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4 justify-center"
            >
              <Button
                size="lg"
                className="h-12 px-8 text-base font-medium transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                onClick={() => navigate("/instagram-analytics")}
              >
                Instagram Analytics
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base font-medium transition-all duration-300 hover:bg-secondary"
                onClick={() => navigate("/youtube-analytics")}
              >
                YouTube Analytics
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-foreground mb-4"
            >
              Comprehensive Analytics Suite
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Powerful features to help you understand your audience and
              optimize your content strategy
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Instagram className="h-6 w-6" />}
              title="Instagram Analytics"
              description="Track followers, engagement rates, post performance, and audience demographics."
              delay={0}
            />
            <FeatureCard
              icon={<Youtube className="h-6 w-6" />}
              title="YouTube Analytics"
              description="Monitor views, watch time, subscriber growth, and video performance metrics."
              delay={0.1}
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Audience Insights"
              description="Understand your audience demographics, interests, and behavior patterns."
              delay={0.2}
            />
            <FeatureCard
              icon={<TrendingUp className="h-6 w-6" />}
              title="Growth Trends"
              description="Track your growth over time and identify patterns to optimize your strategy."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-foreground mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Getting started with SocAnalyzer is simple and straightforward
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              icon={<Activity className="h-6 w-6" />}
              step="01"
              title="Enter Your Channel"
              description="Simply enter your Instagram or YouTube channel ID or username."
              delay={0}
            />
            <StepCard
              icon={<BarChart3 className="h-6 w-6" />}
              step="02"
              title="View Analytics"
              description="Get comprehensive analytics about your social media performance."
              delay={0.1}
            />
            <StepCard
              icon={<MousePointer className="h-6 w-6" />}
              step="03"
              title="Take Action"
              description="Use our recommendations to improve your content strategy."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-foreground mb-4"
            >
              Ready to Optimize Your Social Media Strategy?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Start analyzing your Instagram and YouTube channels today to
              unlock valuable insights and grow your online presence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button
                size="lg"
                className="h-12 px-8 text-base font-medium transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                onClick={() => navigate("/instagram-analytics")}
              >
                <Instagram className="mr-2 h-4 w-4" />
                Analyze Instagram
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base font-medium transition-all duration-300 hover:bg-secondary"
                onClick={() => navigate("/youtube-analytics")}
              >
                <Youtube className="mr-2 h-4 w-4" />
                Analyze YouTube
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SocAnalyzer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-xl p-6 flex flex-col items-center text-center card-hover"
    >
      <div className="p-3 bg-primary/10 rounded-full mb-4">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const StepCard = ({
  icon,
  step,
  title,
  description,
  delay = 0,
}: {
  icon: React.ReactNode;
  step: string;
  title: string;
  description: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-xl p-6 flex flex-col items-center text-center card-hover"
    >
      <div className="relative mb-6">
        <div className="absolute -inset-1 rounded-full bg-primary/10 blur-md"></div>
        <div className="relative bg-primary/10 p-3 rounded-full">{icon}</div>
        <div className="absolute -right-2 -top-2 bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium">
          {step}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default Index;
