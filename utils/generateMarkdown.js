const moment = require('moment');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return ''}
  else {
    return `https://img.shields.io/static/v1?label=license&message=${license}&color=green`
  }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') { 
    return '';
  } else if (license === 'MIT') {
    return 'https://en.wikipedia.org/wiki/MIT_License';
  } else if (license === 'Apache') {
    return 'https://www.apache.org/licenses/LICENSE-2.0';
  } else if (license === 'GPL') {
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html#:~:text=The%20GNU%20General%20Public%20License%20is%20a%20free%2C%20copyleft%20license,share%20and%20change%20the%20works.';
  } else if (license === 'BSD-2' || 'BSD-3' || 'BSD-4') {
    return 'https://en.wikipedia.org/wiki/BSD_licenses';
  }
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') { return '' }
  else if (license === 'MIT') {
    return `
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.`
  } else if (license === 'Apache') {
    return `
      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.`
  } else if (license === 'GPL') {
    return `
      This program comes with ABSOLUTELY NO WARRANTY; for details type 'show w'.
      This is free software, and you are welcome to redistribute it
      under certain conditions; type 'show c' for details.

      The hypothetical commands 'show w' and 'show c' should show the appropriate
      parts of the General Public License.  Of course, your program's commands
      might be different; for a GUI interface, you would use an "about box".

      You should also get your employer (if you work as a programmer) or school,
      if any, to sign a "copyright disclaimer" for the program, if necessary.
      For more information on this, and how to apply and follow the GNU GPL, see
      <http://www.gnu.org/licenses/>.

      The GNU General Public License does not permit incorporating your program
      into proprietary programs.  If your program is a subroutine library, you
      may consider it more useful to permit linking proprietary applications with
      the library.  If this is what you want to do, use the GNU Lesser General
      Public License instead of this License.  But first, please read
      <http://www.gnu.org/philosophy/why-not-lgpl.html>.`
  } else if (license === 'BSD-2') {
    return `
      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:
        
      1. Redistributions of source code must retain the above copyright notice, this
      list of conditions and the following disclaimer.
      2. Redistributions in binary form must reproduce the above copyright notice,          this list of conditions and the following disclaimer in the documentation
      and/or other materials provided with the distribution.
        
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
      ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
      WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
      DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR        ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
      (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
      LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
      ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
      (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
      SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        
      The views and conclusions contained in the software and documentation are those
      of the authors and should not be interpreted as representing official policies,
      either expressed or implied, of the FreeBSD Project.`
  } else if (license === 'BSD-3') {
    return `
      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:
      
      * Redistributions of source code must retain the above copyright notice, this
        list of conditions and the following disclaimer.
        
      * Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation
        and/or other materials provided with the distribution.
      
      * Neither the name of the copyright holder nor the names of its
        contributors may be used to endorse or promote products derived from
        this software without specific prior written permission.
      
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
      DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
      FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
      DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
      SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
      CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
      OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
      OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
  } else if (license === 'BSD-4') {
    return `
      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:
      1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.
      2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.
      3. All advertising materials mentioning features or use of this software
        must display the following acknowledgement:
        This product includes software developed by the <organization>.
      4. Neither the name of the <organization> nor the
        names of its contributors may be used to endorse or promote products
        derived from this software without specific prior written permission.
      
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER ''AS IS'' AND ANY
      EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
      WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
      DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
      FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL 
      DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR 
      SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER 
      CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
      OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE 
      USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let dateStamp = moment().format("DD/MM/yyyy, h:mm:ss a");
  let dateStampY = moment().format("yyyy");
  let licenseBadgeURL = renderLicenseBadge(data.license);
  let licenseLink = renderLicenseLink(data.license);
  let licenseText = renderLicenseSection(data.license);
  if (data.license === 'none') {
    return `# ${data.title}
# Date: ${dateStamp}
## Table of Contents
- [Project Description](#project-description)
- [Installation Instruction](#installation-instructions)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [License](#license)
    
## Project Description
- ${data.description}

## Installation Instructions
- ${data.install}

## Usage Information
- ${data.usage}
  
## Contribution Guidelines
- ${data.contribute}
  
## Test Instructions
- ${data.test}
  
---`
  } else {
    return `
# ${data.title}
# ![${data.license} License](${licenseBadgeURL})
# Date: ${dateStamp}
  
## Table of Contents
- [Project Description](#project-description)
- [Installation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [License](#license)
  
## Project Description
- ${data.description}
  
## Installation Instructions
- ${data.install}
  
## Usage Information
- ${data.usage}
  
## Contribution Guidelines
- ${data.contribute}
  
## Test Instructions
- ${data.test}
    
## License
- ${data.license} License
- ${data.title}: ${data.summary}.
- Copyright (c) [${dateStampY}] [${data.name}]. All rights reserved.\n
    
${licenseText}\n
    
***[This is an external link to the ${data.license} license](${licenseLink})***
  
---
`
  }
};

module.exports = generateMarkdown;