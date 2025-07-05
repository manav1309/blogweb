'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "Morning Reflections",
    excerpt: "Personal thoughts on finding peace in the quiet moments of dawn and the lessons they teach us about mindfulness and gratitude.",
    image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-01-12",
    readTime: "3 min read",
    author: "Manav Puri",
    authorId: "MP001",
    category: "Mindfulness"
  },
  {
    id: 2,
    title: "The Journey of Self-Discovery",
    excerpt: "Exploring the winding path of understanding ourselves better through life's challenges and triumphs.",
    image: "https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-01-08",
    readTime: "5 min read",
    author: "Manav Puri",
    authorId: "MP001",
    category: "Personal Growth"
  },
  {
    id: 3,
    title: "Digital Detox: Finding Balance",
    excerpt: "My experience with stepping away from screens and reconnecting with the analog world around us.",
    image: "https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-01-05",
    readTime: "4 min read",
    author: "Manav Puri",
    authorId: "MP001",
    category: "Lifestyle"
  },
  {
    id: 4,
    title: "The Art of Slow Living",
    excerpt: "Why rushing through life makes us miss the beautiful details that make each day special.",
    image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-01-02",
    readTime: "6 min read",
    author: "Manav Puri",
    authorId: "MP001",
    category: "Philosophy"
  },
  {
    id: 5,
    title: "Lessons from Nature",
    excerpt: "What hiking through forests and mountains has taught me about resilience and patience.",
    image: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2023-12-28",
    readTime: "7 min read",
    author: "Manav Puri",
    authorId: "MP001",
    category: "Nature"
  },
  {
    id: 6,
    title: "The Power of Gratitude",
    excerpt: "How a simple daily practice of gratitude transformed my perspective on life's ups and downs.",
    image: "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2023-12-25",
    readTime: "4 min read",
    author: "Manav Puri",
    authorId: "MP001",
    category: "Mindfulness"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 bg-chocolaty-dark">
      {/* Header with Background Image */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-cream mb-6">
              Personal Blogs
            </h1>
            <p className="text-xl text-beige leading-relaxed">
              Here's where I share my thoughts, experiences, and reflections on life's journey. 
              Each post is a window into my world and the lessons I've learned along the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="max-w-4xl mx-auto"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group bg-chocolaty-medium border-chocolaty hover:scale-[1.02]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-4 mb-4">
                          <Badge variant="secondary" className="bg-green-900/80 text-green-200">
                            {post.category}
                          </Badge>
                          <div className="flex items-center text-sm text-beige/70 space-x-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                        </div>
                        <CardHeader className="p-0">
                          <CardTitle className="text-2xl font-bold text-cream group-hover:text-mocha transition-colors mb-2">
                            {post.title}
                          </CardTitle>
                          <p className="text-sm text-beige/70 mb-4">
                            By {post.author} | ID: {post.authorId}
                          </p>
                        </CardHeader>
                        <CardContent className="p-0">
                          <p className="text-beige leading-relaxed mb-6">
                            {post.excerpt}
                          </p>
                        </CardContent>
                      </div>
                      <Button
                        variant="outline"
                        className="self-start group-hover:bg-chocolaty-light group-hover:border-mocha border-chocolaty text-beige hover:text-cream transition-all duration-300"
                        asChild
                      >
                        <Link href={`/blogs/${post.id}`}>
                          Read Full Post <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}