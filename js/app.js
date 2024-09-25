new Vue({
    el: '#app',
    data: {
      about: {
        bio: 'Hello! I’m Shannon, a marine scientist and second-year Ph.D. student at Rutgers University. I use environmental DNA techniques to monitor biodiversity in coastal ecosystems, with a passion for marine conservation.',
        email: 'Shannon.Dickey@rutgers.edu',
        location: 'New Brunswick, NJ'
      },
      education: [
        { degree: 'Ph.D. in Ecology & Evolution', school: 'Rutgers University', years: '2022-Present' },
        { degree: 'B.S. in Marine and Atmospheric Science', school: 'University of Miami', years: '2018-2022' }
      ],
      experiences: [
        { title: 'Graduate Assistant', company: 'Rutgers Environmental DNA Laboratory', description: 'Full-time assistant working with eDNA techniques for conservation management.' },
        { title: 'Intern', company: 'University of Miami Toadfish Lab', description: 'Research on Gulf toadfish and environmental stressors like climate change.' },
        { title: 'Intern', company: 'Sea Turtle Recovery Center', description: 'Cared for sea turtles and educated the public on conservation.' }
      ],
      publications: [
        { title: 'Developing a Pipeline for Environmental DNA Detection of Cnidarian Communities', year: 2023 },
        { title: 'Potential impacts of Deepwater Horizon oil on Gulf toadfish', year: 2022 }
      ],
      fieldwork: [
        { title: 'Jacques Cousteau National Estuarine Research Reserve - Salt marsh biodiversity study', year: 2023 },
        { title: 'Monitoring invasive species in NJ rivers', year: 2022 }
      ],
      // Blog-related data
      blogPosts: [
        { title: "Welcome to my Blog!", content: "This is my first blog post where I’ll be sharing insights into my research and fieldwork.", date: "September 24, 2024" }
      ],
      newPost: {
        title: '',
        content: ''
      }
    },
    methods: {
      addPost() {
        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-US', {
          month: 'long', day: 'numeric', year: 'numeric'
        });
  
        // Create a new blog post object
        const newBlogPost = {
          title: this.newPost.title,
          content: this.newPost.content,
          date: formattedDate
        };
  
        // Add the new post to the blogPosts array
        this.blogPosts.push(newBlogPost);
  
        // Clear the form inputs
        this.newPost.title = '';
        this.newPost.content = '';
      }
    }
  });
  