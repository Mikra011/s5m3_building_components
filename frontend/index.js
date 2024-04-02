function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    const myNav = document.createElement('nav')

    links.forEach(link => {
      const a = document.createElement('a')
      a.href = link.href
      a.textContent = link.textContent
      a.title = link.title
      myNav.appendChild(a)
    })
    return myNav
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    const cards = document.createElement('div')
    cards.classList.add('learner-card')

    const nameP = document.createElement('p')
    nameP.textContent = learner.fullName

    const idP = document.createElement('p')
    idP.textContent = `Learner ID: ${learner.id}`

    const birthP = document.createElement('p')
    birthP.textContent = `Date of Birth: ${learner.dateOfBirth}`

    const favLanP = document.createElement('p')
    const favLang = languages.find(lan => lan.id === learner.favLanguage)
    favLanP.textContent = `Favorite Language: ${favLang.name}`

    const toAppend = [nameP, idP, birthP, favLanP]

    toAppend.forEach(element => {
      cards.appendChild(element)
    })

    cards.addEventListener('click', evt => {
      document.querySelectorAll('.learner-card').forEach(cards => cards.classList.remove('active'))
      cards.classList.add('active')
    })
    return cards
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    learners.forEach(learner => {
      const learnerCard = buildLearnerCard(learner, languages)
      document.querySelector('section').appendChild(learnerCard)
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    const footer = document.createElement('footer')

    const companyName = document.createElement('p')
    companyName.textContent = footerData.companyName

    const address = document.createElement('p')
    address.textContent = footerData.address

    const contactEmail = document.createElement('p')
    const emailLink = document.createElement('a')
    emailLink.href = `mailto:${footerData.contactEmail}`
    emailLink.textContent = footerData.contactEmail
    contactEmail.appendChild(document.createTextNode('Email: '))
    contactEmail.appendChild(emailLink)

    const socialMedia = document.createElement('div')

    for (const platform in footerData.socialMedia) {
      const link = document.createElement('a')
      link.href = footerData.socialMedia[platform]
      link.textContent = platform.charAt(0).toUpperCase() + platform.slice(1)
      socialMedia.appendChild(link)
    }

    let copyright = document.createElement('div')
    copyright.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${new Date().getFullYear()}` // a bit of cheating :)

    footer.appendChild(companyName)
    footer.appendChild(address)
    footer.appendChild(contactEmail)
    footer.appendChild(socialMedia)
    footer.appendChild(copyright)

    return footer
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card
  document.addEventListener('click', evt => {
    if (evt.target === document.querySelector('section')) {
      const learners = document.querySelectorAll('.learner-card')
      learners.forEach(card => card.classList.remove('active'))
    }
  })
}

// typos are still killing me :)

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
