
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title}
  ***
  ## Description
  $(data.description)
  ***
  ## Table of Contents
  - [Description](#description)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [License](#license)
  - [Questions](#questions)
  ***
  ## Usage
  ${data.purpose}
  ***
  ## Contributors
  ${data.username}
  ## License
  ${data.license}
  ***
  ## Questions?
  https://github.com/${data.username}
  email: ${data.email}`;

    return `# ${data.title}`;

  }

module.exports = generateMarkdown;
