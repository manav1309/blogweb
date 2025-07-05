'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: "The Art of Digital Storytelling",
    excerpt: "Exploring how technology has transformed the way we tell and consume stories in the modern era, and what this means for writers and creators.",
    image: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-01-15",
    readTime: "8 min read",
    author: "Manav Puri",
    authorId: "MP001",
    category: "Digital Media"
  },
  {
    id: 2,
    title: "The Psychology of Creative Writing",
    excerpt: "Understanding the mental processes behind creative expression and how writers can harness psychological insights to improve their craft.",
    image: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-01-10",
    readTime: "12 min read",
    author: "Manav Puri",
    authorId: "MP001",
    category: "Psychology"
  },
  {
    id: 3,
    title: "Literary Devices in Modern Poetry",
    excerpt: "An analysis of how contemporary poets use traditional literary devices in new and innovative ways to create powerful emotional impact.",
    image: "https://images.pexels.com/photos/1550648/pexels-photo-1550648.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-01-06",
    readTime: "10 min read",
    author: "Manav Puri",
    authorId: "MP001",
    category: "Literary Analysis"
  },
  {
    id: 4,
    title: "The Evolution of Personal Narratives",
    excerpt: "How personal storytelling has evolved from oral traditions to digital platforms, and what this means for authentic self-expression.",
    image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-01-03",
    readTime: "9 min read",
    author: "Manav Puri",
    authorId: "MP001",
    category: "Storytelling"
  },
  {
    id: 5,
    title: "Minimalism in Writing",
    excerpt: "The power of saying more with less: exploring minimalist approaches to writing and their impact on reader engagement.",
    image: "https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2023-12-30",
    readTime: "7 min read",
    author: "Manav Puri",
    authorId: "MP001",
    category: "Writing Craft"
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

export default function ArticlesPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 bg-chocolaty-dark">
      {/* Header with Background Image */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&w=1600')"
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
              Articles
            </h1>
            <p className="text-xl text-beige leading-relaxed">
              Deep dives into writing, creativity, and the art of storytelling. 
              These articles explore the craft of writing and the power of words to shape our world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {articles.map((article) => (
              <motion.div
                key={article.id}
                variants={itemVariants}
                className="max-w-4xl mx-auto"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group bg-chocolaty-medium border-chocolaty hover:scale-[1.02]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-4 mb-4">
                          <Badge variant="secondary" className="bg-blue-900/80 text-blue-200">
                            {article.category}
                          </Badge>
                          <div className="flex items-center text-sm text-beige/70 space-x-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(article.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {article.readTime}
                            </div>
                          </div>
                        </div>
                        <CardHeader className="p-0">
                          <CardTitle className="text-2xl font-bold text-cream group-hover:text-mocha transition-colors mb-2">
                            {article.title}
                          </CardTitle>
                          <p className="text-sm text-beige/70 mb-4">
                            By {article.author} | ID: {article.authorId}
                          </p>
                        </CardHeader>
                        <CardContent className="p-0">
                          <p className="text-beige leading-relaxed mb-6">
                            {article.excerpt}
                          </p>
                        </CardContent>
                      </div>
                      <Button
                        variant="outline"
                        className="self-start group-hover:bg-chocolaty-light group-hover:border-mocha border-chocolaty text-beige hover:text-cream transition-all duration-300"
                        asChild
                      >
                        <Link href={`/articles/${article.id}`}>
                          Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
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