document.addEventListener('DOMContentLoaded', function () {
  function renderProfile() {
    const profile = siteConfig.personal

    document.getElementById('profile-avatar').src = profile.avatar
    document.getElementById('profile-name').textContent = profile.name
    document.getElementById('profile-title').textContent = profile.title
    document.getElementById(
      'profile-institution'
    ).textContent = `${profile.department}, ${profile.institution}`
    document.getElementById('profile-bio').textContent = profile.bio

    document.title = `${profile.name} - ${profile.title}`

    const socialLinks = document.getElementById('social-links')
    const iconMap = {
      email: 'fa-envelope',
      github: 'fa-github',
      linkedin: 'fa-linkedin',
      twitter: 'fa-twitter',
      instagram: 'fa-instagram',
      youtube: 'fa-youtube',
      googleScholar: 'fa-graduation-cap',
      orcid: 'fa-id-badge'
    }
    
    const platformNames = {
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      instagram: 'Instagram',
      youtube: 'YouTube',
      googleScholar: 'Scholar',
      orcid: 'ORCID'
    }
    
    Object.entries(profile.social).forEach(([platform, url]) => {
      if (url && url !== '#') {
        const link = document.createElement('a')
        link.href = url
        link.className = 'social-link'
        link.target = url.startsWith('mailto:') ? '' : '_blank'
        
        const icon = document.createElement('i')
        icon.className = `fab ${iconMap[platform] || 'fa-link'}`
        if (platform === 'email') {
          icon.className = `fas fa-envelope`
        }
        
        const span = document.createElement('span')
        span.textContent = platformNames[platform] || platform
        
        link.appendChild(icon)
        link.appendChild(span)
        socialLinks.appendChild(link)
      }
    })
  }

  function renderNavigation() {
    const nav = document.getElementById('top-nav')
    const navList = document.createElement('ul')
    navList.className = 'nav-list'

    siteConfig.navigation.forEach((item) => {
      const navItem = document.createElement('li')
      navItem.className = 'nav-item'

      const navLink = document.createElement('a')
      navLink.href = item.href
      navLink.className = 'nav-link'
      if (item.active) navLink.classList.add('active')
      navLink.textContent = item.name

      navLink.addEventListener('click', function (e) {
        e.preventDefault()
        showSection(item.href.substring(1))

        document.querySelectorAll('.nav-link').forEach((link) => {
          link.classList.remove('active')
        })
        navLink.classList.add('active')
      })

      navItem.appendChild(navLink)
      navList.appendChild(navItem)
    })

    nav.appendChild(navList)
  }

  function renderAbout() {
    document.getElementById('about-content').textContent =
      siteConfig.about.content

    const interestsList = document.getElementById('interests-list')
    siteConfig.about.interests.forEach((interest) => {
      const li = document.createElement('li')
      li.textContent = interest
      interestsList.appendChild(li)
    })

    const educationList = document.getElementById('education-list')
    siteConfig.about.education.forEach((edu) => {
      const eduItem = document.createElement('div')
      eduItem.className = 'education-item'
      eduItem.innerHTML = `
                <span class="education-degree">${edu.degree}</span>
                <span class="education-institution">${edu.institution}</span>
                <span class="education-year">${edu.year}</span>
            `
      educationList.appendChild(eduItem)
    })
  }

  function renderPublications() {
    const publicationsList = document.getElementById('publications-list')

    siteConfig.publications.forEach((pub) => {
      const pubItem = document.createElement('div')
      pubItem.className = 'publication-item'
      pubItem.innerHTML = `
                <div class="publication-title">${pub.title}</div>
                <div class="publication-authors">${pub.authors}</div>
                <div class="publication-venue">
                    ${pub.venue}
                    <span class="publication-year">${pub.year}</span>
                </div>
            `
      publicationsList.appendChild(pubItem)
    })
  }

  function renderProjects() {
    const projectsList = document.getElementById('projects-list')

    siteConfig.projects.forEach((project) => {
      const projectItem = document.createElement('div')
      projectItem.className = 'project-item'

      const tags = project.tags
        .map((tag) => `<span class="tag">${tag}</span>`)
        .join('')

      projectItem.innerHTML = `
                <div class="project-title">${project.title}</div>
                <div class="project-description">${project.description}</div>
                <div class="project-tags">${tags}</div>
                <a href="${project.link}" target="_blank" class="project-link">View Project →</a>
            `
      projectsList.appendChild(projectItem)
    })
  }

  function renderCertifications() {
    const certificationsList = document.getElementById('certifications-list')

    siteConfig.certifications.forEach((cert) => {
      const certItem = document.createElement('div')
      certItem.className = 'certification-item'
      certItem.innerHTML = `
                <div class="certification-title">${cert.title}</div>
                <div class="certification-issuer">${cert.issuer}</div>
                <div class="certification-date">${cert.date}</div>
                <div class="certification-description">${cert.description}</div>
                <a href="${cert.credential}" target="_blank" class="certification-link">View Credential →</a>
            `
      certificationsList.appendChild(certItem)
    })
  }

  function renderExperience() {
    const experienceList = document.getElementById('experience-list')

    siteConfig.experience.forEach((exp) => {
      const expItem = document.createElement('div')
      expItem.className = 'experience-item'
      expItem.innerHTML = `
                <div class="experience-position">${exp.position}</div>
                <div class="experience-company">${exp.company}</div>
                <div class="experience-period">${exp.period} • ${exp.location}</div>
                <div class="experience-description">${exp.description}</div>
            `
      experienceList.appendChild(expItem)
    })
  }

  function renderPortfolio() {
    const portfolioProjects = document.getElementById('portfolio-projects')
    
    // Show top 3 projects in portfolio
    siteConfig.projects.slice(0, 3).forEach((project) => {
      const portfolioItem = document.createElement('div')
      portfolioItem.className = 'portfolio-item'
      
      const iconMap = {
        'Riverpod Intellisense': 'fa-code',
        'SwiftPay Mobile': 'fa-mobile-alt',
        'Portfolio Website': 'fa-globe'
      }
      
      portfolioItem.innerHTML = `
                <div class="portfolio-image">
                    <i class="fas ${iconMap[project.title] || 'fa-project-diagram'}"></i>
                </div>
                <div class="portfolio-content">
                    <div class="portfolio-title">${project.title}</div>
                    <div class="portfolio-description">${project.description}</div>
                </div>
            `
      portfolioProjects.appendChild(portfolioItem)
    })
    
    renderSkills()
  }

  function renderSkills() {
    const skillsGrid = document.getElementById('cv-skills')
    const allSkills = [
      'Flutter',
      'Dart',
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Python',
      'Firebase',
      'MongoDB',
      'PostgreSQL',
      'Git',
      'Docker',
      'AWS',
      'Tailwind CSS',
      'REST API'
    ]

    allSkills.forEach((skill) => {
      const skillItem = document.createElement('div')
      skillItem.className = 'skill-item'
      skillItem.textContent = skill
      skillsGrid.appendChild(skillItem)
    })
  }

  function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach((section) => {
      section.classList.remove('active')
    })

    const targetSection = document.getElementById(sectionId)
    if (targetSection) {
      targetSection.classList.add('active')
    }
  }

  function applyCustomColors() {
    const root = document.documentElement
    const colors = siteConfig.colors

    root.style.setProperty('--reinvent-purple', colors.reInventPurple)
    root.style.setProperty('--reinvent-pink', colors.reInventPink)
    root.style.setProperty('--reinvent-orange', colors.reInventOrange)
    root.style.setProperty('--dark-bg', colors.darkBg)
    root.style.setProperty('--light-bg', colors.lightBg)
    root.style.setProperty('--text-light', colors.textLight)
    root.style.setProperty('--accent', colors.accent)
  }

  applyCustomColors()
  renderProfile()
  renderNavigation()
  renderAbout()
  renderPublications()
  renderProjects()
  renderCertifications()
  renderExperience()
  renderPortfolio()

  if (window.location.hash) {
    const sectionId = window.location.hash.substring(1)
    showSection(sectionId)

    document.querySelectorAll('.nav-link').forEach((link) => {
      link.classList.remove('active')
      if (link.getAttribute('href') === `#${sectionId}`) {
        link.classList.add('active')
      }
    })
  }
})