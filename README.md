# KB-Primo-VE

A Primo customization package by Royal Danish Library.

Target Primo ve

The following instructions are intended for Unix-like operating systems. 

## Installation
- Clone or download this repository into the proper place in your [Primo Development Environment](https://github.com/ExLibrisGroup/primo-explore-devenv).
- Navigate into the directory where you cloned this repository.
- Install node version v14.19.0
- Run `npm install` to install development dependencies.
- cd /primo-explore-devenv/primo-explore/custom/
- git clone https://github.com/kb-dk/KB-Primo-VE.git 45KBDK_KGL-KGL
- cd 45KBDK_KGL-KGL
- Run `npm install` 
- Run `npm start` to run the package locally.
- Run `npm run pack` to create the final customization package into the package folder.

## Building the package from primo-explore-devenv
Alternative to 'npm run start' from view folder (root of this repository) is to navigate into the root directory (primo-explore-devenv), and run the following command.

     gulp run --view VIEWNAME --ve --browserify

## CSS preprocessing
We utilize [SASS](http://sass-lang.com/) (with the SCSS syntax) for CSS preprocessing. SASS files are located under [css/sass](https://github.com/Det-Kongelige-Bibliotek/KB-Primo-VE/tree/master/css/sass). To start CSS preproccessing, run the following command in view folder (root of this repository). 

     npm run sass

**Note:** Preprocessing is not a requirement for building the package, and would only be needed when the stylesheets are modified. Also, [the resulting CSS file](https://github.com/Det-Kongelige-Bibliotek/KB-Primo-VE) should not be modified directly, as the modifications would be overwritten when CSS preprocessing is performed.

## KB-Primo-VE additional packages 

**Announcement service**: Displays a message on the top of the screen, every time there is a new text (other than ``` &nbsp; ```) in the nui.message.announcement code table, if it hasn't already been dismissed by user. If you are only interested in this functionality, use the following repository:  https://github.com/Det-Kongelige-Bibliotek/KB-Primo-VE-Announcement

**LibChat service**: includes a chat service, provided by libanswers/ springshare, onto the user interface (all pages). If you are only interested in this functionality, use the following repository: https://github.com/Det-Kongelige-Bibliotek/KB-Primo-VE-libChat
          
## License

This software is released under the [MIT License](http://www.opensource.org/licenses/MIT).
