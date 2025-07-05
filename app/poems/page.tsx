'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Heart, Eye, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const poems = [
  {
    id: 1,
    title: "Whispers of the Wind",
    content: `In the gentle breeze that carries dreams,
Through valleys deep and mountain streams,
I hear the whispers of the wind,
Stories of where we've been.

Each gust brings memories untold,
Of love that's young and wisdom old,
Dancing through the autumn leaves,
Nature's symphony never grieves.

Listen close, you'll hear it too,
The wind's eternal song for you,
A melody of hope and grace,
Written in time and space.

Through seasons that come and go,
The wind continues its gentle flow,
Carrying secrets from afar,
Beneath each twinkling star.

In its voice, I find my peace,
A moment when all worries cease,
For in the wind's eternal dance,
I discover life's true romance.`,
    theme: "Nature",
    date: "2024-01-10",
    image: "https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 127,
    views: 1432
  },
  {
    id: 2,
    title: "City Lights",
    content: `Neon dreams paint the night,
Electric souls burning bright,
In the maze of concrete towers,
We chase our golden hours.

Strangers pass like shooting stars,
Each carrying their hidden scars,
Yet in this urban symphony,
We find our humanity.

The city never sleeps, they say,
But in its heart, we find our way,
Through shadows cast by buildings tall,
We rise each time we fall.

Windows glow like fireflies,
Stories told through tired eyes,
Each light a life, a dream, a hope,
Teaching us how to cope.

In the rhythm of the street,
Where countless footsteps meet,
I discover who I am,
In this urban diagram.`,
    theme: "Urban Life",
    date: "2024-01-08",
    image: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 89,
    views: 967
  },
  {
    id: 3,
    title: "Ocean's Embrace",
    content: `Where waves meet the endless sky,
And seagulls learn to fly,
The ocean calls with ancient voice,
Offering solace, offering choice.

Salt air fills my weary lungs,
While ocean's lullaby is sung,
Each wave a story, each tide a prayer,
Washing away every care.

In depths unknown lie treasures deep,
Secrets that the waters keep,
Yet on the surface, clear and bright,
Reflects the moon's ethereal light.

The rhythm of the crashing shore,
Speaks of legends and folklore,
Of sailors brave and mermaids fair,
And love beyond compare.

Here where earth meets endless blue,
I find myself, I find what's true,
In ocean's vast and wild embrace,
I discover my rightful place.`,
    theme: "Nature",
    date: "2024-01-05",
    image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 156,
    views: 1789
  },
  {
    id: 4,
    title: "Midnight Reflections",
    content: `In the quiet of the night,
When stars are burning bright,
I find myself in contemplation,
Seeking inner transformation.

The mirror of the darkness shows,
What the daylight never knows,
Truth unveiled in shadow's dance,
Given time and given chance.

Here in midnight's gentle fold,
Stories of the heart are told,
And wisdom whispers soft and low,
Teaching all we need to know.

The silence speaks in volumes clear,
Of hopes and dreams and deepest fear,
Yet in this darkness, I find light,
A beacon burning through the night.

In solitude, I am not alone,
For in this space, my soul has grown,
And in the quiet, I can hear,
The voice that makes everything clear.`,
    theme: "Introspection",
    date: "2024-01-03",
    image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 203,
    views: 2156
  },
  {
    id: 5,
    title: "Spring's Promise",
    content: `Winter's grip begins to fade,
As spring's gentle promise is made,
Buds unfurl their tender leaves,
Hope returns to those who grieve.

Cherry blossoms paint the air,
With beauty beyond compare,
Each petal a whispered prayer,
For new life everywhere.

The earth awakens from its sleep,
And from the soil, new dreams seep,
Reminding us that after night,
Always comes the morning light.

Birds return with songs of joy,
Nature's chorus none can destroy,
In every bloom and every tree,
Lives the promise to be free.

Spring teaches us to start anew,
To see the world with eyes so true,
That even in the darkest hour,
We hold within us nature's power.`,
    theme: "Seasons",
    date: "2024-01-01",
    image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 174,
    views: 1543
  },
  {
    id: 6,
    title: "Digital Dreams",
    content: `In pixels and in code we trust,
As analog turns to digital dust,
Our dreams now live in virtual space,
Where time and distance find no place.

Connection spans the globe tonight,
Through fiber optic streams of light,
Yet sometimes in this digital age,
We lose ourselves on the virtual stage.

But technology, like poetry,
Can set the human spirit free,
When used with wisdom, heart, and care,
We find our souls still flourish there.

In ones and zeros, we encode,
The stories of our life's episode,
Yet beneath the screen's bright glow,
Our human hearts continue to grow.

The future calls with silicon voice,
Offering us a digital choice,
But in the end, what matters most,
Is the love that we can boast.`,
    theme: "Technology",
    date: "2023-12-28",
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 142,
    views: 1267
  }
];

const themes = ["All", "Nature", "Urban Life", "Introspection", "Seasons", "Technology"];

export default function PoemsPage() {
  const [selectedPoem, setSelectedPoem] = useState<typeof poems[0] | null>(null);
  const [selectedTheme, setSelectedTheme] = useState("All");

  const filteredPoems = selectedTheme === "All" 
    ? poems 
    : poems.filter(poem => poem.theme === selectedTheme);

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
      {/* Header with Background Image */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1550648/pexels-photo-1550648.jpeg?auto=compress&cs=tinysrgb&w=1600')"
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
              Poetry Collection
            </h1>
            <p className="text-xl text-beige leading-relaxed">
              Verses from the heart, capturing moments, emotions, and the beauty of existence. 
              Each poem is a journey into the depths of human experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Theme Filter */}
      <section className="py-8 bg-chocolaty-medium border-b border-chocolaty">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {themes.map((theme) => (
              <Button
                key={theme}
                variant={theme === selectedTheme ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTheme(theme)}
                className={theme === selectedTheme 
                  ? "bg-chocolaty-light hover:bg-mocha text-cream" 
                  : "hover:bg-chocolaty-light border-chocolaty text-beige hover:text-cream"
                }
              >
                {theme}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Poems Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredPoems.map((poem) => (
              <motion.div
                key={poem.id}
                variants={itemVariants}
                className="group cursor-pointer"
                onClick={() => setSelectedPoem(poem)}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 relative bg-chocolaty-medium border-chocolaty hover:scale-105">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundImage: `url(${poem.image})` }}
                  />
                  
                  <CardContent className="relative z-10 p-8 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-purple-900/80 text-purple-200">
                        {poem.theme}
                      </Badge>
                      <div className="flex items-center text-sm text-beige/70 space-x-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(poem.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-cream mb-6 group-hover:text-mocha transition-colors">
                      {poem.title}
                    </h3>
                    
                    <div className="flex-1 mb-6">
                      <pre className="text-beige leading-relaxed whitespace-pre-wrap font-serif text-lg line-clamp-6">
                        {poem.content.split('\n').slice(0, 4).join('\n')}...
                      </pre>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-chocolaty">
                      <div className="flex items-center space-x-4 text-sm text-beige/70">
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1 text-red-400" />
                          {poem.likes}
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {poem.views}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-mocha hover:text-cream hover:bg-chocolaty-light"
                      >
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="hover:bg-chocolaty-light hover:border-mocha border-chocolaty text-beige hover:text-cream"
            >
              Load More Poems
            </Button>
          </div>
        </div>
      </section>

      {/* Poem Modal */}
      <AnimatePresence>
        {selectedPoem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedPoem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-chocolaty-medium border border-chocolaty rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-chocolaty flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-cream">{selectedPoem.title}</h2>
                  <div className="flex items-center space-x-4 mt-2">
                    <Badge variant="secondary" className="bg-purple-900/80 text-purple-200">
                      {selectedPoem.theme}
                    </Badge>
                    <span className="text-sm text-beige/70">
                      {new Date(selectedPoem.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedPoem(null)}
                  className="text-beige hover:text-cream hover:bg-chocolaty-light"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <pre className="text-beige leading-relaxed whitespace-pre-wrap font-serif text-lg">
                  {selectedPoem.content}
                </pre>
              </div>
              
              <div className="p-6 border-t border-chocolaty flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-beige/70">
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-1 text-red-400" />
                    {selectedPoem.likes}
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {selectedPoem.views}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-chocolaty text-beige hover:text-cream hover:bg-chocolaty-light"
                >
                  Share
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}