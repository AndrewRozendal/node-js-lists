'use strict';

const about = function(req, res) {
  res.render('about', { 
    title: 'About Rozendal Book Lists',
    aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum elementum sem. Cras nisi urna, scelerisque quis pretium sit amet, dictum vitae quam. Fusce ultrices vel massa a sagittis. Vivamus egestas, ipsum id eleifend consequat, turpis arcu tincidunt sapien, in maximus sem erat eu augue. Sed egestas non lectus ut semper. Fusce nec faucibus massa, et egestas justo. Morbi ullamcorper erat nec egestas ullamcorper.  Integer enim justo, eleifend at fringilla sed, elementum porta lorem. Phasellus a commodo neque. Aliquam ut ante nisl. Proin consectetur lacinia pharetra. Suspendisse pulvinar, lacus ut dapibus aliquet, dolor ante congue sem, pretium porta diam neque id metus. Pellentesque nec turpis metus. Curabitur varius tempus justo a pulvinar. Ut nec tellus pharetra magna molestie vestibulum ac vel neque. Curabitur id interdum risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam sed ex justo. Praesent mauris arcu, porttitor sit amet iaculis et, egestas vestibulum lorem. Nulla varius eleifend metus, eget ultrices ex. Nulla ac viverra enim, ut vehicula tortor. Nunc sit amet aliquet nulla, quis facilisis massa. Nullam tempor euismod feugiat.',
    image: {
      image: '/aboutUs.jpg',
      altText: 'Picture goes here'
    }
  });
};

module.exports = {
  about
};