// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![license](https://img.shields.io/badge/license-${data.license}-blue)

  ***
  ## Table of Contents
  - [Description](#description)
  - [Visual Presentation](#visual-presentation)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usuage](#usuage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)

  ***
  ## Description
  ${data.description}

  ***
  ## Technologies Used
  

  ***
  ## Visual Presentation
  ![VisualPresentation](images/readmeVisualPresentation.png)

  ***
  ## Installation
  ${data.installation}

  ***
  ## Usuage
  ${data.usuage}

  ***
  ## Contribution
  ${data.contributions}

  ***
  ## Testing
  ${data.tests}

  ***
  ## Additional Info
  - Github: ${data.github}(https://github.com/${data.github})
  - Email: ${data.email}
`
}

module.exports = generateMarkdown
