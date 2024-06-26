/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  GolangSidebar: [{type: 'autogenerated', dirName: 'golang'}],
  JavaSidebar: [{type: 'autogenerated', dirName: 'java'}],
  CloudNativeSidebar: [{type: 'autogenerated', dirName: 'cloudnative'}],
  DatabaseSidebar: [{type: 'autogenerated', dirName: 'database'}],
  // DesignPatternsSidebar: [{type: 'autogenerated', dirName: 'designpatterns'}],
  AlgorithmsSidebar: [{type: 'autogenerated', dirName: 'algorithm'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
