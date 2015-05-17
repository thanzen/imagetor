'use strict';

describe('ImagetorApp', function () {
  var React = require('react/addons');
  var ImagetorApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ImagetorApp = require('components/ImagetorApp.js');
    component = React.createElement(ImagetorApp);
  });

  it('should create a new instance of ImagetorApp', function () {
    expect(component).toBeDefined();
  });
});
