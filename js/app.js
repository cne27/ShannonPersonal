new Vue({
    el: '#app',
    data: {
      about: {
        name: 'Shannon Dickey',
        bio: 'Hello! I’m Shannon, a marine scientist and second-year Ph.D. student at Rutgers University. I use environmental DNA techniques to monitor biodiversity in coastal ecosystems, with a passion for marine conservation.',
        email: 'Shannon.Dickey@rutgers.edu',
        location: 'New Brunswick, NJ'
      },
      education: [
        { degree: 'Ph.D. in Ecology & Evolution', school: 'Rutgers University', years: '2022-Present' },
        { degree: 'B.S. in Marine and Atmospheric Science', school: 'University of Miami', years: '2018-2022' }
      ],
      experiences: [
        { title: 'Graduate Assistant', company: 'Rutgers Environmental DNA Laboratory', description: 'Working with eDNA techniques for conservation management.' },
        { title: 'Intern', company: 'University of Miami Toadfish Lab', description: 'Research on Gulf toadfish and environmental stressors.' },
        { title: 'Intern', company: 'Sea Turtle Recovery Center', description: 'Cared for sea turtles and public education on conservation.' }
      ],
      publications: [
        { title: 'Developing a Pipeline for Environmental DNA Detection of Cnidarian Communities', year: 2023 },
        { title: 'Potential impacts of Deepwater Horizon oil on Gulf toadfish', year: 2022 }
      ],
      fieldwork: [
        { title: 'Salt marsh biodiversity study - Jacques Cousteau Research Reserve', year: 2023 },
        { title: 'Monitoring invasive species in NJ rivers', year: 2022 }
      ]
    }
  });
  