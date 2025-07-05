'use client';

import { motion } from 'framer-motion';
import { BookOpen, PenTool, Award, Users, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const achievements = [
  {
    icon: PenTool,
    title: "2000+ Poems Written",
    description: "Over two thousand verses penned across various themes and styles"
  },
  {
    icon: BookOpen,
    title: "50+ Articles Published",
    description: "In-depth articles on writing, creativity, and personal development"
  },
  {
    icon: Award,
    title: "4 Stage Plays",
    description: "Original theatrical works performed in local theaters"
  },
  {
    icon: Users,
    title: "Writing Workshop Leader",
    description: "Mentoring aspiring writers and poets in creative expression"
  },
  {
    icon: Calendar,
    title: "5 Years of Blogging",
    description: "Consistent personal blogging about life, growth, and reflection"
  },
  {
    icon: MapPin,
    title: "Featured in Local Publications",
    description: "Works published in regional literary magazines and journals"
  }
];

const skills = [
  { name: "Poetry", level: 95 },
  { name: "Creative Writing", level: 90 },
  { name: "Blog Writing", level: 85 },
  { name: "Storytelling", level: 88 },
  { name: "Literary Analysis", level: 82 },
  { name: "Public Speaking", level: 75 }
];

export default function AboutPage() {
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

  return (
    <div className="min-h-screen pt-32 pb-16 bg-chocolaty-dark">
      {/* Hero Section with Background */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-mocha">
                  <img 
                    src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Manav Puri"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-chocolaty-light rounded-full flex items-center justify-center border-4 border-mocha">
                  <PenTool className="w-16 h-16 text-cream" />
                </div>
              </div>
              
              <div>
                <Badge className="mb-4 bg-chocolaty-light text-cream">
                  Writer • Poet • Blogger
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-cream mb-6">
                  Manav Puri
                </h1>
                <p className="text-xl text-beige mb-6 leading-relaxed">
                  Welcome to my creative universe! I'm a passionate writer and poet who believes 
                  in the transformative power of words. Through my writing, I explore the depths 
                  of human experience, the beauty of nature, and the complexities of modern life.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Poetry", "Creative Writing", "Blogging", "Storytelling"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm border-chocolaty text-beige">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* My Story with Background */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-cream mb-8 text-center">
              My Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <div className="relative p-8 bg-chocolaty-medium/80 rounded-lg border border-chocolaty mb-6">
                <p className="text-beige leading-relaxed mb-6">
                  My journey with words began in childhood, when I discovered the magic of storytelling 
                  through the books that lined my grandmother's shelves. What started as a fascination 
                  with how authors could transport readers to different worlds gradually evolved into 
                  my own desire to create those worlds through writing.
                </p>
              </div>
              <div className="relative p-8 bg-chocolaty-medium/80 rounded-lg border border-chocolaty mb-6">
                <p className="text-beige leading-relaxed mb-6">
                  Over the years, I've explored various forms of creative expression - from poetry 
                  that captures fleeting moments of beauty to articles that delve deep into the craft 
                  of writing itself. Each piece I create is an attempt to connect with others who share 
                  a love for the written word and the stories that shape our lives.
                </p>
              </div>
              <div className="relative p-8 bg-chocolaty-medium/80 rounded-lg border border-chocolaty">
                <p className="text-beige leading-relaxed">
                  Today, through ManavInVerses, I continue this journey of exploration and expression, 
                  sharing my thoughts, experiences, and creative works with a community of readers 
                  who appreciate the power of authentic storytelling. Whether through a heartfelt poem, 
                  a personal blog post, or an analytical article, my goal remains the same: to create 
                  meaningful connections through the written word.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 bg-chocolaty-medium">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-cream mb-4">
              Achievements & Milestones
            </h2>
            <p className="text-xl text-beige">
              A journey marked by creative growth and meaningful connections
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 group bg-chocolaty-dark border-chocolaty hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-chocolaty-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-mocha transition-colors">
                      <achievement.icon className="w-8 h-8 text-cream" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-cream">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-beige">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-chocolaty-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-cream mb-12 text-center">
              Skills & Expertise
            </h2>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-cream">{skill.name}</h3>
                    <span className="text-sm text-beige">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-chocolaty-medium rounded-full h-2">
                    <motion.div
                      className="bg-mocha h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}