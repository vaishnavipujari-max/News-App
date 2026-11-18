
export type NewsItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageDescription: string;
  category: string;
  country: string;
  author: string;
  date: string;
  content: string;
};

const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'Technology Is Changing the World',
    description: 'New technologies are making everyday tasks easier and changing how people live and work.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    imageDescription: 'Modern computer technology and electronic components.',
    category: 'Technology',
    country: 'India',
    author: 'News Desk',
    date: '13 Nov 2026',
    content: `Technology is becoming an important part of everyday life. From smartphones and computers to smart home devices, digital tools are helping people complete tasks more quickly.

Businesses, schools and individuals are using technology to communicate, learn and solve problems.

As innovation continues, digital skills and responsible technology use are becoming increasingly important. Technology is also creating opportunities for new careers and businesses.`,
  },
  {
    id: 2,
    title: 'The Future of Digital Education',
    description: 'Digital classrooms and online platforms are creating new learning opportunities.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    imageDescription: 'A modern classroom environment with students learning together.',
    category: 'Education',
    country: 'USA',
    author: 'Education Desk',
    date: '13 Nov 2026',
    content: `Digital education is changing the way students learn. Online classrooms, recorded lessons and educational applications allow students to access learning materials from different locations.

Teachers can use digital tools to explain difficult topics, share assignments and communicate with students.

However, access to reliable internet and devices remains important for making online learning effective. A combination of classroom teaching and digital resources can support different learning styles.`,
  },
  {
    id: 3,
    title: 'World Leaders Discuss Global Challenges',
    description: 'Leaders are discussing important international issues and possible solutions.',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=80',
    imageDescription: 'International government buildings and political discussions.',
    category: 'World',
    country: 'UK',
    author: 'World Desk',
    date: '13 Nov 2026',
    content: `Countries around the world face shared challenges involving the economy, climate, security and international cooperation.

Discussions between world leaders can help identify common goals and possible solutions.

Cooperation between governments, organisations and communities plays an important role in addressing these issues. Continued dialogue is essential for building understanding and long-term progress.`,
  },
  {
    id: 4,
    title: 'The Importance of Staying Healthy',
    description: 'Healthy food, exercise and good sleep can help support a balanced lifestyle.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
    imageDescription: 'Fresh and nutritious foods representing balanced eating.',
    category: 'Health',
    country: 'India',
    author: 'Health Desk',
    date: '13 Nov 2026',
    content: `A healthy lifestyle is built through everyday choices. Eating a balanced diet, drinking enough water, staying physically active and getting sufficient sleep can support general well-being.

Small changes, such as taking regular walks and including fruits and vegetables in meals, can become useful long-term habits.

Consistency is often more helpful than making many sudden changes. Building a routine gradually can make healthy habits easier to maintain.`,
  },
  {
    id: 5,
    title: 'Football Fans Celebrate an Exciting Match',
    description: 'Sports fans enjoy an exciting game filled with memorable moments.',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80',
    imageDescription: 'A football stadium and playing field.',
    category: 'Sports',
    country: 'India',
    author: 'Sports Desk',
    date: '13 Nov 2026',
    content: `Football brings together players and fans from different communities. Every match gives athletes an opportunity to demonstrate teamwork, discipline and skill.

Training, communication and preparation are important parts of team performance.

Support from fans also makes sporting events exciting and creates a strong sense of community. Sports can encourage young people to stay active and develop teamwork skills.`,
  },
  {
    id: 6,
    title: 'Businesses Explore New Opportunities',
    description: 'Companies are exploring innovative ideas and new ways to reach customers.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
    imageDescription: 'A modern office workspace representing business development.',
    category: 'Business',
    country: 'Canada',
    author: 'Business Desk',
    date: '13 Nov 2026',
    content: `Businesses are exploring new ways to serve customers and respond to changing markets. Digital services, online shopping and improved communication tools are creating opportunities for companies of different sizes.

Planning, customer feedback and innovation can help businesses adapt.

Companies also need to understand changing customer needs and manage resources carefully. New ideas and effective teamwork can help organisations improve their services.`,
  },
  {
    id: 7,
    title: 'Scientists Explore the Wonders of Space',
    description: 'Space research continues to expand our understanding of the universe.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    imageDescription: 'Earth and the surrounding universe from space.',
    category: 'Science',
    country: 'USA',
    author: 'Science Desk',
    date: '13 Nov 2026',
    content: `Space research helps scientists understand planets, stars, galaxies and the origins of the universe.

Telescopes, satellites and space missions provide information that cannot easily be collected from Earth.

Scientists continue to study distant objects and investigate whether other environments could support life. These discoveries also contribute to improvements in technology and scientific knowledge.`,
  },
  {
    id: 8,
    title: 'Movies Bring New Stories to Audiences',
    description: 'Filmmakers are exploring creative stories and new ways to entertain audiences.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    imageDescription: 'A cinema environment with a movie screen and seating.',
    category: 'Entertainment',
    country: 'UK',
    author: 'Entertainment Desk',
    date: '13 Nov 2026',
    content: `The entertainment industry continues to change as audiences discover films and programmes through digital platforms.

Streaming services have made it possible to watch content across different devices and locations.

Filmmakers and creative teams are experimenting with storytelling, visual effects and new formats. These developments are creating more ways for audiences to enjoy entertainment.`,
  },
  {
    id: 9,
    title: 'How Innovation Is Shaping Modern Cities',
    description: 'New ideas in transport, energy and planning are changing urban life.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80',
    imageDescription: 'A modern city skyline with buildings and urban infrastructure.',
    category: 'Technology',
    country: 'Japan',
    author: 'News Desk',
    date: '13 Nov 2026',
    content: `Modern cities are exploring new ways to improve transportation, public services and energy use.

Digital systems can help manage traffic, monitor infrastructure and make some city services more accessible.

Sustainable planning is also important. Green spaces, public transport and energy-efficient buildings can contribute to more comfortable urban environments.`,
  },
  {
    id: 10,
    title: 'Discover the Beauty of Nature',
    description: 'Natural landscapes remind us of the importance of protecting our environment.',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80',
    imageDescription: 'A natural landscape surrounded by mountains, water and greenery.',
    category: 'Science',
    country: 'Australia',
    author: 'Nature Desk',
    date: '13 Nov 2026',
    content: `Nature supports life through forests, rivers, oceans and diverse ecosystems. These environments provide habitats for wildlife and help maintain important natural processes.

Protecting the environment requires responsible use of resources and reducing pollution.

Communities can contribute through recycling, conservation activities and caring for local natural spaces. Protecting nature is important for future generations.`,
  },
  {
    id: 11,
    title: 'Artificial Intelligence Is Transforming Everyday Life',
    description: 'New AI tools are changing how people work, learn and communicate.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    imageDescription: 'Artificial intelligence and digital technology.',
    category: 'Technology',
    country: 'India',
    author: 'News Desk',
    date: '13 Nov 2026',
    content: `Artificial intelligence is becoming part of many everyday tools. AI systems can help people organise information, translate languages, analyse data and complete repetitive tasks.

Businesses and educational institutions are exploring ways to use these tools in their work.

At the same time, questions about privacy, accuracy and responsible use remain important. Human judgement and careful checking are still necessary when using AI-generated information.`,
  },
  {
    id: 12,
    title: 'Global Business Markets See New Developments',
    description: 'Businesses are adapting to changing markets and new economic opportunities.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    imageDescription: 'Business data and financial charts on a computer screen.',
    category: 'Business',
    country: 'Germany',
    author: 'News Desk',
    date: '13 Nov 2026',
    content: `Global business markets are influenced by consumer demand, technology, investment and international developments.

Companies regularly review their plans to respond to changing conditions.

Digital services and international connections allow businesses to reach customers in new markets. Careful financial planning, innovation and understanding customer needs can help organisations prepare for uncertainty.`,
  },
  {
    id: 13,
    title: 'Young Athletes Make Their Mark in Sports',
    description: 'Emerging sports talent is gaining attention through impressive performances.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    imageDescription: 'Athletes participating in a running competition.',
    category: 'Sports',
    country: 'India',
    author: 'Sports Desk',
    date: '13 Nov 2026',
    content: `Young athletes are developing their skills through training, competition and support from coaches.

Local clubs and school sports programmes can provide opportunities for new talent to grow.

Success in sports requires more than physical ability. Discipline, teamwork, practice and a positive attitude are also important. Opportunities to participate can help young people build confidence and experience.`,
  },
  {
    id: 14,
    title: 'New Discoveries in Space Exploration',
    description: 'Scientists continue exploring the universe and uncovering new possibilities.',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
    imageDescription: 'A view of Earth from space.',
    category: 'Science',
    country: 'USA',
    author: 'Science Desk',
    date: '13 Nov 2026',
    content: `Space exploration gives scientists opportunities to study the Moon, Mars and other objects in our solar system.

Spacecraft and robotic missions collect information about environments that are difficult for humans to reach.

Researchers use these discoveries to understand planetary history and prepare for future exploration. International cooperation and continued scientific research remain important to these efforts.`,
  },
  {
    id: 15,
    title: 'Healthy Lifestyle Habits for a Better Future',
    description: 'Small daily habits can support a healthier and more active lifestyle.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    imageDescription: 'Health and well-being represented through healthy lifestyle choices.',
    category: 'Health',
    country: 'Canada',
    author: 'Health Desk',
    date: '13 Nov 2026',
    content: `Healthy habits can support physical and mental well-being over time.

Regular movement, balanced meals, adequate rest and time for relaxation are all useful parts of a healthy routine.

People can start with manageable goals, such as walking regularly or maintaining a consistent sleep schedule. Building habits gradually can make them easier to continue.`,
  },
  {
    id: 16,
    title: 'The Entertainment Industry Embraces New Trends',
    description: 'Digital platforms are changing how audiences discover movies and entertainment.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    imageDescription: 'A movie theatre and the experience of watching films on a large screen.',
    category: 'Entertainment',
    country: 'France',
    author: 'Entertainment Desk',
    date: '13 Nov 2026',
    content: `Entertainment is changing as digital platforms offer audiences more ways to discover films, series and creative content.

Viewers can explore a wide range of programmes using phones, computers and televisions.

This shift gives creators new ways to share their work and connect with audiences. It also means that quality storytelling and originality remain important in a competitive industry.`,
  },
  {
    id: 17,
    title: 'Smart Cities Are Shaping Modern Urban Life',
    description: 'Technology and sustainable planning are helping cities develop new solutions.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80',
    imageDescription: 'A modern urban skyline with buildings and city infrastructure.',
    category: 'Technology',
    country: 'Japan',
    author: 'News Desk',
    date: '13 Nov 2026',
    content: `Smart cities use technology and planning to improve services for residents.

Digital systems can support transport management, public information and the monitoring of important infrastructure.

Successful urban development also depends on sustainability and accessibility. Good planning should consider public spaces, reliable services and the needs of different communities.`,
  },
  {
    id: 18,
    title: 'Education Is Changing Through Digital Learning',
    description: 'Online learning platforms are creating new opportunities for students.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    imageDescription: 'A student learning with books and educational materials.',
    category: 'Education',
    country: 'India',
    author: 'Education Desk',
    date: '13 Nov 2026',
    content: `Digital learning platforms provide students with access to lessons, videos, exercises and other educational resources.

These tools can support learning outside the traditional classroom.

Online education can offer flexibility, but students also need guidance, motivation and opportunities to interact with teachers and classmates. Combining digital resources with personal support can create a more balanced learning experience.`,
  },
];

export default newsData;
