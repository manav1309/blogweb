'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, BookOpen, PenTool, FileText, Quote, Feather, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const latestPosts = [
  {
    id: 1,
    title: "The Art of Digital Storytelling",
    type: "article",
    excerpt: "Exploring how technology has transformed the way we tell and consume stories in the modern era.",
    image: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-01-15",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Morning Reflections",
    type: "blog",
    excerpt: "Personal thoughts on finding peace in the quiet moments of dawn and the lessons they teach us.",
    image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-01-12",
    readTime: "3 min read"
  },
  {
    id: 3,
    title: "Whispers of the Wind",
    type: "poem",
    excerpt: "A gentle poem about nature's voice and the stories it carries across time and space.",
    image: "https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-01-10",
    readTime: "2 min read"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const floatingVariants: Variants = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseVariants: Variants = {
  initial: { scale: 1, opacity: 0.3 },
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-chocolaty-dark">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        
        {/* Floating Elements with Golden Glow */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Icons with Golden Aura */}
          <motion.div
            className="absolute top-20 left-10 text-amber-400/60 floating-icon golden-shimmer"
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            style={{ animationDelay: '0s' }}
          >
            <Feather className="w-12 h-12" />
          </motion.div>
          
          <motion.div
            className="absolute top-32 right-16 text-yellow-400/50 floating-icon golden-glow"
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            style={{ animationDelay: '2s' }}
          >
            <Quote className="w-16 h-16" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-32 left-20 text-amber-300/55 floating-icon golden-shimmer"
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            style={{ animationDelay: '4s' }}
          >
            <BookOpen className="w-14 h-14" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 right-10 text-yellow-300/45 floating-icon golden-glow"
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            style={{ animationDelay: '1s' }}
          >
            <PenTool className="w-10 h-10" />
          </motion.div>
          
          <motion.div
            className="absolute top-1/2 left-8 text-amber-200/40 floating-icon golden-shimmer"
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            style={{ animationDelay: '3s' }}
          >
            <Star className="w-8 h-8" />
          </motion.div>
          
          <motion.div
            className="absolute top-1/3 right-8 text-yellow-400/50 floating-icon golden-glow"
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            style={{ animationDelay: '5s' }}
          >
            <FileText className="w-12 h-12" />
          </motion.div>

          {/* Golden Glowing Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400/30 to-amber-500/30 blur-xl golden-orb"
            variants={pulseVariants}
            initial="initial"
            animate="animate"
            style={{ animationDelay: '0s' }}
          />
          
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-amber-400/25 to-yellow-500/25 blur-xl golden-orb"
            variants={pulseVariants}
            initial="initial"
            animate="animate"
            style={{ animationDelay: '2s' }}
          />
          
          <motion.div
            className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-yellow-300/35 to-amber-400/35 blur-xl golden-orb"
            variants={pulseVariants}
            initial="initial"
            animate="animate"
            style={{ animationDelay: '4s' }}
          />

          {/* Additional Smaller Golden Orbs */}
          <motion.div
            className="absolute top-1/3 left-1/6 w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400/40 to-amber-300/40 blur-lg golden-orb"
            variants={pulseVariants}
            initial="initial"
            animate="animate"
            style={{ animationDelay: '1s' }}
          />
          
          <motion.div
            className="absolute bottom-1/3 right-1/6 w-20 h-20 rounded-full bg-gradient-to-r from-amber-300/35 to-yellow-400/35 blur-lg golden-orb"
            variants={pulseVariants}
            initial="initial"
            animate="animate"
            style={{ animationDelay: '3s' }}
          />

          {/* Golden Shimmering Lines */}
          <motion.div
            className="absolute top-1/4 left-0 w-full h-px golden-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          
          <motion.div
            className="absolute bottom-1/4 left-0 w-full h-px golden-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          />

          {/* Diagonal Golden Lines */}
          <motion.div
            className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent transform rotate-12 origin-top golden-line"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 3, delay: 2 }}
          />
          
          <motion.div
            className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-amber-400/25 to-transparent transform -rotate-12 origin-top golden-line"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 3, delay: 2.5 }}
          />
        </div>
        
        <motion.div
          className="relative z-10 text-center text-cream max-w-6xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Quote Marks with Golden Glow */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <Quote className="w-16 h-16 text-amber-400/70 transform rotate-180 golden-glow" />
              <motion.div
                className="absolute inset-0 w-16 h-16 rounded-full bg-yellow-400/20 blur-lg golden-orb"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-cream via-amber-200 to-yellow-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.3))'
            }}
          >
            ManavInVerses
          </motion.h1>
          
          {/* Decorative Divider with Golden Glow */}
          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent w-32 golden-line"></div>
            <Feather className="mx-4 w-6 h-6 text-yellow-400 golden-shimmer" />
            <div className="h-px bg-gradient-to-r from-amber-400/60 via-yellow-400/60 to-transparent w-32 golden-line"></div>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl mb-12 text-beige font-light leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.2))'
            }}
          >
            Where thoughts become words, and words become worlds
          </motion.p>

          {/* Content Categories with Links and Golden Glow */}
          <motion.div
            className="flex justify-center items-center space-x-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/articles">
              <motion.div
                className="flex items-center space-x-2 text-beige/70 cursor-pointer transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  color: '#d4a574',
                  filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.5))'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-5 h-5" />
                <span className="text-sm font-medium hover:text-amber-400">Articles</span>
              </motion.div>
            </Link>
            
            <div className="w-px h-6 bg-gradient-to-b from-transparent via-amber-400/50 to-transparent"></div>
            
            <Link href="/poems">
              <motion.div
                className="flex items-center space-x-2 text-beige/70 cursor-pointer transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  color: '#d4a574',
                  filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.5))'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <PenTool className="w-5 h-5" />
                <span className="text-sm font-medium hover:text-amber-400">Poetry</span>
              </motion.div>
            </Link>
            
            <div className="w-px h-6 bg-gradient-to-b from-transparent via-amber-400/50 to-transparent"></div>
            
            <Link href="/blogs">
              <motion.div
                className="flex items-center space-x-2 text-beige/70 cursor-pointer transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  color: '#d4a574',
                  filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.5))'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-5 h-5" />
                <span className="text-sm font-medium hover:text-amber-400">Blogs</span>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-chocolaty-light hover:bg-amber-900 text-cream px-12 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-amber-400/30 hover:border-amber-400"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.3))'
              }}
              asChild
            >
              <Link href="/blogs">
                Explore My Writing <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Bottom Quote Mark with Golden Glow */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="relative">
              <Quote className="w-12 h-12 text-amber-400/50 golden-shimmer" />
              <motion.div
                className="absolute inset-0 w-12 h-12 rounded-full bg-yellow-400/15 blur-lg golden-orb"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator with Golden Glow */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-amber-400/60 rounded-full flex justify-center"
            animate={{ 
              borderColor: ['rgba(251, 191, 36, 0.6)', 'rgba(255, 215, 0, 0.8)', 'rgba(251, 191, 36, 0.6)'],
              boxShadow: ['0 0 10px rgba(255, 215, 0, 0.3)', '0 0 20px rgba(255, 215, 0, 0.5)', '0 0 10px rgba(255, 215, 0, 0.3)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-amber-400/80 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.6))'
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-chocolaty-medium">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6">
              Welcome to My Universe
            </h2>
            <p className="text-xl text-beige leading-relaxed">
              ManavInVerses is a creative sanctuary where I share my thoughts, stories, and poems. 
              Here, you'll find a blend of insightful articles, personal blog posts, and heartfelt poetry 
              that explores the depths of human experience and the beauty of our world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Latest Posts Carousel */}
      <section className="py-20 bg-chocolaty-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">
              Latest Posts
            </h2>
            <p className="text-xl text-beige">
              Discover my most recent thoughts, stories, and verses
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {latestPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden group bg-chocolaty-medium border-chocolaty hover:scale-105">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant="secondary" 
                        className={`${
                          post.type === 'article' ? 'bg-blue-900/80 text-blue-200' :
                          post.type === 'blog' ? 'bg-green-900/80 text-green-200' :
                          'bg-purple-900/80 text-purple-200'
                        }`}
                      >
                        {post.type === 'article' && <FileText className="w-3 h-3 mr-1" />}
                        {post.type === 'blog' && <BookOpen className="w-3 h-3 mr-1" />}
                        {post.type === 'poem' && <PenTool className="w-3 h-3 mr-1" />}
                        {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-cream group-hover:text-mocha transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <p className="text-beige mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-beige/70 mb-4">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      className="group-hover:bg-chocolaty-light group-hover:border-mocha border-chocolaty text-beige hover:text-cream transition-all duration-300"
                      asChild
                    >
                      <Link href={`/${post.type}s/${post.id}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Author Bio Section */}
      <section className="py-20 bg-chocolaty-medium">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-mocha">
                  <img 
                    src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Manav Puri"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-chocolaty-light rounded-full flex items-center justify-center border-4 border-mocha">
                  <PenTool className="w-10 h-10 text-cream" />
                </div>
              </div>
              
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6">
                  Meet the Author
                </h2>
                <p className="text-xl text-beige mb-6 leading-relaxed">
                  Hello! I'm Manav Puri, a passionate writer and poet who believes in the power of words 
                  to transform lives and perspectives. Through my articles, blog posts, and poetry, 
                  I explore the complexities of human experience and the beauty that surrounds us.
                </p>
                <p className="text-lg text-beige mb-8 leading-relaxed">
                  When I'm not writing, you'll find me reading, exploring nature, or engaging in 
                  thoughtful conversations about life, art, and everything in between.
                </p>
                <Button 
                  size="lg" 
                  className="bg-chocolaty-dark hover:bg-black text-cream transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/about">
                    Learn More About Me <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}